import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/Icons";

type BackLinkProps = {
  href: string;
  label?: string;
};

export function BackLink({ href, label = "Orqaga qaytish" }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition duration-300 hover:border-brand-gold hover:text-brand-blue"
    >
      <ArrowLeftIcon />
      {label}
    </Link>
  );
}
