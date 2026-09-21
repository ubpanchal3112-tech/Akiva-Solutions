import { cn } from "@/lib/utils";

export function AkivaLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <img
      src="/akiva_solutions_logo_from_pdf.png"
      alt="Akiva Solutions"
      className={cn(
        "w-auto object-contain",
        compact ? "h-10" : "h-10",
        className,
      )}
    />
  );
}