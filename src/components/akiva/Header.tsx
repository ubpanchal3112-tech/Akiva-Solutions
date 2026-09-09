import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AkivaLogo } from "./Logo";
import { CTAButton, CONTACT_URL } from "./ui";

const NAV = [
  { label: "Solutions", href: "#solutions" },
  { label: "Mortgage Brokers", href: "#mortgage" },
  { label: "Industries", href: "#industries" },
  { label: "How It Works", href: "#process" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-forest/10 bg-ivory/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <a
          href="#top"
          className="text-forest transition-opacity hover:opacity-80"
          aria-label="Akiva Solutions home"
        >
          <AkivaLogo compact />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-forest/75 transition-colors hover:text-evergreen after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-evergreen after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href={CONTACT_URL}>Let's Talk</CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-forest/20 text-forest lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-forest/10 bg-ivory lg:hidden">
          <nav
            aria-label="Mobile"
            className="container-editorial flex flex-col py-4"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest/8 py-4 text-lg font-semibold text-forest transition-colors hover:text-evergreen"
              >
                {item.label}
              </a>
            ))}
            <CTAButton
              href={CONTACT_URL}
              className="mt-6 w-full"
            >
              Let's Talk
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
