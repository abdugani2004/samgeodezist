import { NextResponse } from "next/server";
import type { OrderFormValues } from "@/types";

function validatePayload(payload: Partial<OrderFormValues>) {
  const errors: Partial<Record<keyof OrderFormValues, string>> = {};

  if (!payload.name?.trim()) {
    errors.name = "Ism majburiy.";
  }

  if (!payload.phone?.trim()) {
    errors.phone = "Telefon majburiy.";
  }

  if (!payload.service?.trim()) {
    errors.service = "Xizmat turi majburiy.";
  }

  if (!payload.address?.trim()) {
    errors.address = "Manzil majburiy.";
  }

  return errors;
}

function buildTelegramMessage(payload: OrderFormValues) {
  const note = payload.note?.trim() || "Kiritilmagan";

  return [
    "<b>Yangi buyurtma</b>",
    "",
    `<b>Ism:</b> ${escapeHtml(payload.name)}`,
    `<b>Telefon:</b> ${escapeHtml(payload.phone)}`,
    `<b>Xizmat:</b> ${escapeHtml(payload.service)}`,
    `<b>Manzil:</b> ${escapeHtml(payload.address)}`,
    `<b>Izoh:</b> ${escapeHtml(note)}`,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function sendToTelegram(payload: OrderFormValues) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = getTelegramChatIds();

  if (!botToken || chatIds.length === 0) {
    return {
      ok: false,
      message: "Telegram sozlamalari topilmadi.",
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const message = buildTelegramMessage(payload);
    const results = await Promise.all(
      chatIds.map(async (chatId) => {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          return false;
        }

        const data = (await response.json()) as { ok?: boolean };
        return Boolean(data.ok);
      }),
    );

    if (results.some((result) => !result)) {
      return {
        ok: false,
        message: "Buyurtmani barcha Telegram qabul qiluvchilarga yuborib bo'lmadi.",
      };
    }

    return {
      ok: true,
      message: "So'rov qabul qilindi.",
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error && error.name === "AbortError"
          ? "Telegram serveri juda sekin javob berdi. Qayta urinib ko'ring."
          : "Telegramga ulanib bo'lmadi. Internet yoki bot sozlamalarini tekshiring.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

function getTelegramChatIds() {
  const rawChatIds = process.env.TELEGRAM_CHAT_IDS ?? process.env.TELEGRAM_CHAT_ID ?? "";

  return rawChatIds
    .split(",")
    .map((chatId) => chatId.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<OrderFormValues>;
  const errors = validatePayload(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: "Forma ma'lumotlari to'liq emas.",
        errors,
      },
      { status: 400 },
    );
  }

  const telegramResult = await sendToTelegram(payload as OrderFormValues);

  if (!telegramResult.ok) {
    return NextResponse.json(
      {
        success: false,
        message: telegramResult.message,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: telegramResult.message,
  });
}
