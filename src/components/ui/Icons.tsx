type IconProps = { className?: string };

function Stroke({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const GroupsIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M15.8 14.2c2.4-.4 4.2 1.1 4.7 4.3" />
  </Stroke>
);

export const AgeIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="7" r="3.5" />
    <path d="M6 20c0-3.6 2.7-6 6-6s6 2.4 6 6" />
    <path d="M10.5 6.8h.01M13.5 6.8h.01" />
  </Stroke>
);

export const LanguageIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 5h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-3.5 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M15 9h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H13a2 2 0 0 1-2-2" />
  </Stroke>
);

export const MealIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 3v7a2 2 0 0 0 2 2v9M11 3v7a2 2 0 0 1-2 2M9 3v5" />
    <path d="M17 21V3c-2 1.2-3 3.6-3 6.5V13h3" />
  </Stroke>
);

export const ClockIcon = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Stroke>
);

export const PinIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Stroke>
);

export const PhoneIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 7.7 7.7l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
  </Stroke>
);

export const InstagramIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Stroke>
);

export const DocumentIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Stroke>
);

export const ArrowIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Stroke>
);

export const ChevronIcon = ({ className, dir = "right" }: IconProps & { dir?: "left" | "right" | "down" }) => (
  <Stroke className={`${className ?? ""} ${dir === "left" ? "rotate-180" : dir === "down" ? "rotate-90" : ""}`}>
    <path d="m9 6 6 6-6 6" />
  </Stroke>
);

export const CloseIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Stroke>
);

export const MenuIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Stroke>
);

export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.07.9.9-2.99-.2-.31a8.2 8.2 0 1 1 6.87 3.73Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.52 10.86 10.86 0 0 0 4.16 3.67c1.55.67 2.16.73 2.93.61.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.17-.47-.29Z" />
  </svg>
);
