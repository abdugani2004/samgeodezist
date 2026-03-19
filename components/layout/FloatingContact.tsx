"use client";

import Link from "next/link";
import { phoneNumbers, telegramLink } from "@/data/site";
import { PhoneIcon, TelegramIcon } from "@/components/ui/Icons";

export function FloatingContact() {
  const primaryPhone = phoneNumbers[0].replaceAll(" ", "");

  return (
    <div className="fixed bottom-3 right-3 z-[60] flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      <Link
        href={telegramLink}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_18px_38px_rgba(34,158,217,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(34,158,217,0.34)] sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
      >
        <TelegramIcon />
        <span className="hidden sm:inline">Telegram</span>
      </Link>
      <Link
        href={`tel:${primaryPhone}`}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy shadow-[0_18px_38px_rgba(217,164,35,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(217,164,35,0.34)] sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
        aria-label="Qo'ng'iroq"
      >
        <PhoneIcon />
        <span className="hidden sm:inline">Qo&#39;ng&#39;iroq</span>
      </Link>
    </div>
  );
}
