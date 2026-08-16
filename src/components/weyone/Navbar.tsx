import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, scrollToRegister } from "./site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#home"
          className={cn(
            "flex items-center gap-2 font-display text-lg font-bold tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-ink-foreground",
          )}
        >
          <span className="grid size-9 place-items-center rounded-xl gradient-brand text-primary-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          Weyone
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    : "text-ink-foreground/80 hover:bg-ink-foreground/10 hover:text-ink-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="hero" className="hidden sm:inline-flex" onClick={scrollToRegister}>
            Register Free
          </Button>
          <button
            type="button"
            className={cn(
              "grid size-10 place-items-center rounded-lg border lg:hidden",
              scrolled ? "border-border text-foreground" : "border-ink-foreground/25 text-ink-foreground",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                variant="hero"
                size="xl"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  scrollToRegister();
                }}
              >
                Register Free
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}