import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export const CONTACT_URL = "#contact";
export const SOLUTIONS_URL = "#solutions";

export function CTAButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        variant === "solid" &&
          "bg-evergreen text-warm-white shadow-soft hover:-translate-y-0.5 hover:bg-evergreen-deep hover:shadow-lift",
        variant === "outline" &&
          "border border-forest/30 text-forest hover:-translate-y-0.5 hover:bg-forest hover:text-warm-white",
        variant === "light" &&
          "bg-warm-white text-forest shadow-soft hover:-translate-y-0.5 hover:bg-sand",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "eyebrow",
          tone === "dark" ? "text-evergreen" : "text-gold",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.08] font-extrabold sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-forest" : "text-warm-white",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-sand/80",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
  surface = "ivory",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: "ivory" | "sand" | "forest" | "white";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-28",
        surface === "ivory" && "bg-ivory",
        surface === "sand" && "bg-sand",
        surface === "white" && "bg-warm-white",
        surface === "forest" && "bg-forest",
        className,
      )}
    >
      <div className="container-editorial">{children}</div>
    </section>
  );
}

export function FlowStrip({
  steps,
  tone = "dark",
}: {
  steps: string[];
  tone?: "dark" | "light";
}) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          <span
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-300 sm:text-sm",
              tone === "dark"
                ? "border-forest/12 bg-warm-white text-forest hover:border-evergreen/40"
                : "border-sage/25 bg-warm-white/8 text-warm-white hover:border-sage/50",
            )}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={cn(
                "text-sm",
                tone === "dark" ? "text-evergreen" : "text-gold",
              )}
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-forest/10 bg-warm-white px-4 py-2 text-sm text-forest/85 transition-colors duration-300 hover:border-evergreen/35 hover:bg-sand/50">
      {children}
    </span>
  );
}
