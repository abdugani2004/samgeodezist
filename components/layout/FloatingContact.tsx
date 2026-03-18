"use client";

import Link from "next/link";
import { phoneNumbers, telegramLink } from "@/data/site";
import { PhoneIcon, TelegramIcon } from "@/components/ui/Icons";

export function FloatingContact() {
  const primaryPhone = phoneNumbers[0].replaceAll(" ", "");

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3">
      <Link
        href={telegramLink}
        className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(34,158,217,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(34,158,217,0.34)]"
        target="_blank"
        rel="noreferrer"
      >
        <TelegramIcon />
        Telegram
      </Link>
      <Link
        href={`tel:${primaryPhone}`}
        className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy shadow-[0_18px_38px_rgba(217,164,35,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(217,164,35,0.34)]"
      >
        <PhoneIcon />
        Qo&#39;ng&#39;iroq
      </Link>
    </div>
  );
}
