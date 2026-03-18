"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { companyName, navigation } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const resolveHref = (href: string) => (href.startsWith("#") && !isHomePage ? `/${href}` : href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(11,58,110,0.22)] transition duration-300 group-hover:scale-105 group-hover:bg-brand-blue sm:h-12 sm:w-12">
              SG
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Geodeziya
              </p>
              <p className="truncate text-sm font-bold text-brand-navy transition duration-300 group-hover:text-brand-blue sm:text-lg">
                {companyName}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                className="relative text-sm font-medium text-slate-700 transition duration-300 hover:text-brand-blue after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <span className="rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">
              Samarqand
            </span>
            <Link
              href="/aloqa#buyurtma"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy transition duration-300 hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white hover:shadow-[0_16px_36px_rgba(11,58,110,0.28)]"
            >
              Buyurtma berish
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 p-2 text-brand-navy transition hover:border-brand-gold hover:bg-brand-sand/60 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen ? (
          <div className="pb-5 lg:hidden">
            <div className="panel space-y-4 p-4">
              <div className="flex items-center justify-between gap-3">
                <ThemeToggle />
                <Link
                  href="/aloqa#buyurtma"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy transition duration-300 hover:bg-brand-navy hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Buyurtma
                </Link>
              </div>
              <div className="-mx-1 overflow-x-auto pb-1">
                <div className="flex min-w-max gap-2 px-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={resolveHref(item.href)}
                      className="inline-flex rounded-full border border-brand-navy/10 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:border-brand-gold hover:bg-slate-50 hover:text-brand-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
