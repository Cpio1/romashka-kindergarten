import { DaisyIcon } from "./Daisy";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full bg-lavender px-3 py-1 text-[13px] font-semibold text-violet-deep">
        <DaisyIcon className="h-3.5 w-3.5 daisy-spin" />
        {eyebrow}
      </span>
      <h2
        className={`mt-3 flex items-center gap-2.5 font-display text-[1.7rem] font-extrabold tracking-tight text-ink sm:text-[2rem] ${
          centered ? "justify-center" : ""
        }`}
      >
        {title}
        <DaisyIcon className="h-6 w-6 shrink-0 daisy-sway sm:h-7 sm:w-7" />
      </h2>
    </Reveal>
  );
}
