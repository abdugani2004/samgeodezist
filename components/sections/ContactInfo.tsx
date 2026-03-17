import Link from "next/link";
import { contactChannels, telegramLink } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PhoneIcon, TelegramIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactInfo() {
  return (
    <section id="aloqa" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div>
            <SectionHeading
              eyebrow="Aloqa"
              title="Biz bilan qulay usulda bog'laning"
              description="Telefon, email yoki Telegram orqali murojaat qiling. Buyurtma va maslahatlar bo'yicha tezkor javob beramiz."
            />
          </div>

          <div className="panel surface-highlight rounded-[28px] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="rounded-[24px] border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-white sm:p-5"
                >
                  <p className="text-sm text-slate-500">{channel.label}</p>
                  {channel.href ? (
                    <Link
                      href={channel.href}
                      className="mt-2 block text-base font-semibold text-brand-navy transition hover:text-brand-blue sm:text-lg"
                    >
                      {channel.value}
                    </Link>
                  ) : (
                    <p className="mt-2 text-base font-semibold text-brand-navy sm:text-lg">{channel.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <Link
                href="tel:+998979191183"
                className="btn-primary"
              >
                <PhoneIcon />
                Qo&#39;ng&#39;iroq qilish
              </Link>
              <Link
                href={telegramLink}
                className="btn-secondary"
              >
                <TelegramIcon />
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
