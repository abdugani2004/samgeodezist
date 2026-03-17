import { ReactNode } from "react";

type IconWrapperProps = {
  children: ReactNode;
};

function IconWrapper({ children }: IconWrapperProps) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
      {children}
    </span>
  );
}

export function MapIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="M9 5 3 7.5v11L9 16m0-11 6 3m-6-3v11m6-8 6-2.5v11L15 19m0-11v11" />
      </svg>
    </IconWrapper>
  );
}

export function TargetIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3m10-10h-3M5 12H2" />
      </svg>
    </IconWrapper>
  );
}

export function LayersIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="m12 3 9 4.5L12 12 3 7.5 12 3Z" />
        <path d="m3 12 9 4.5 9-4.5" />
        <path d="m3 16.5 9 4.5 9-4.5" />
      </svg>
    </IconWrapper>
  );
}

export function MountainIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="m3 19 6.5-9 3.5 5 3-4 5 8H3Z" />
        <path d="M10 10 12 7l2 3" />
      </svg>
    </IconWrapper>
  );
}

export function DraftIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
        <path d="M4 20h16" />
        <path d="M7 16 17 6l2 2-10 10H7v-2Z" />
        <path d="M14 6h-4l-6 6v4h4l6-6V6Z" opacity=".35" />
      </svg>
    </IconWrapper>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M21.3 4.4c.8-.3 1.5.4 1.2 1.2l-3.2 15a1 1 0 0 1-1.5.6l-5-3.4-2.6 2.5a1 1 0 0 1-1.7-.6l.3-4.3L18.8 7 6.4 14.3l-4.7-1.5a1 1 0 0 1-.1-1.9L21.3 4.4Z" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}
