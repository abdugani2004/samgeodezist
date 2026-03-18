"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { companyName, navigation, phoneNumbers } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function PageShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <div className="lg:hidden">
        <Header />
      </div>

      <div className="lg:grid lg:min-h-screen lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden border-r border-slate-200 bg-white/80 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="flex h-full flex-col px-6 py-8">
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(11,58,110,0.22)] transition duration-300 group-hover:scale-105 group-hover:bg-brand-blue">
                SG
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  Geodeziya
                </p>
                <p className="text-base font-bold text-brand-navy transition duration-300 group-hover:text-brand-blue">
                  {companyName}
                </p>
              </div>
            </Link>

            <div className="mt-8">
              <ThemeToggle />
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              <Link
                href="/"
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  pathname === "/"
                    ? "bg-brand-navy text-white"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                }`}
              >
                Bosh sahifa
              </Link>
              {navigation.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-brand-navy text-white"
                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto rounded-[28px] border border-brand-navy/10 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Tezkor aloqa
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Buyurtma va maslahat uchun biz bilan bog&#39;laning.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {phoneNumbers.map((phone) => (
                  <Link
                    key={phone}
                    href={`tel:${phone.replaceAll(" ", "")}`}
                    className="text-sm font-semibold text-brand-navy transition hover:text-brand-blue"
                  >
                    {phone}
                  </Link>
                ))}
              </div>
              <Link href="/aloqa#buyurtma" className="btn-primary mt-5 w-full">
                Buyurtma berish
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
