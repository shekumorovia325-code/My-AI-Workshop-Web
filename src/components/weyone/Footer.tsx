import { Globe, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { NAV_ITEMS, SITE } from "./site";

export function Footer() {
  return (
    <footer className="gradient-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid size-9 place-items-center rounded-xl gradient-brand">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            Weyone
          </p>
          <p className="mt-4 text-sm text-ink-foreground/75">
            Learn AI. Automate Your Work. Work Smarter.
          </p>
          <p className="mt-4 text-sm text-ink-foreground/75">
            Every Saturday &amp; Sunday
            <br />
            5:00 PM – 7:00 PM&nbsp;
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink-foreground/60">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-accent" aria-hidden="true" />
              {SITE.location} · Online via {SITE.platform}
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 text-accent" aria-hidden="true" />
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-ink-foreground">
                {SITE.whatsappNumber}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-accent" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-ink-foreground">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="mt-0.5 size-4 text-accent" aria-hidden="true" />
              <a href={SITE.website} target="_blank" rel="noopener noreferrer" className="hover:text-ink-foreground">
                www.morovex.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs text-ink-foreground/60">
        © 2026 Weyone. All rights reserved.
      </div>
    </footer>
  );
}