import { cn } from "@/lib/utils";

/**
 * Akiva mark: an abstract "A" formed by two intersecting strokes —
 * two teams converging into one, rising forward.
 */
export function AkivaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("size-9", className)}
    >
      <path
        d="M6 34 L20 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M34 34 L20 6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.42"
      />
      <path
        d="M12.5 24.5 C17 21.5 23 21.5 27.5 24.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.72"
      />
    </svg>
  );
}

export function AkivaLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <AkivaMark className={compact ? "size-7" : "size-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold tracking-[-0.02em]",
            compact ? "text-base" : "text-lg",
          )}
        >
          AKIVA
        </span>
        <span className="eyebrow mt-1 opacity-70">Solutions</span>
      </span>
    </span>
  );
}
