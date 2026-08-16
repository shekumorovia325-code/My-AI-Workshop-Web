import { CalendarDays, Clock, MapPin, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/sheku-morovia.png.asset.json";
import { scrollToRegister, SITE } from "./site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-ink pt-28 pb-20 text-ink-foreground sm:pt-32 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 size-80 rounded-full bg-accent/25 blur-3xl animate-float-slow" />
        <div
          className="absolute right-0 top-40 size-96 rounded-full bg-primary/40 blur-3xl animate-float-slow"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(oklch(1_0_0/0.5)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0/0.5)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="size-2 rounded-full bg-accent" />
            Free Weekly AI Workshop
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Learn AI. Automate Your Work.{" "}
            <span className="bg-gradient-to-r from-accent to-ink-foreground bg-clip-text text-transparent">
              Work Smarter.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
            Join Weyone, a free weekly two-day AI workshop where you learn practical ways to use
            ChatGPT, AI tools, AI-powered content creation, and automation to transform the way you
            work.
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-4 py-3 backdrop-blur">
              <CalendarDays className="size-5 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-foreground/60">Schedule</dt>
                <dd className="text-sm font-semibold">Every Saturday &amp; Sunday</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-4 py-3 backdrop-blur">
              <Clock className="size-5 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-foreground/60">Time</dt>
                <dd className="text-sm font-semibold">{SITE.hours}&nbsp;</dd>
              </div>
            </div>
          </dl>

          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-foreground/75">
            <span className="inline-flex items-center gap-2">
              <Monitor className="size-4 text-accent" aria-hidden="true" /> Online (Zoom)
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" /> Physical attendance available
            </span>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" onClick={scrollToRegister}>
              Register Free <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button variant="onDark" size="xl" asChild>
              <a href="#about">Explore Workshop</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-pop">
          <div className="absolute inset-x-6 bottom-0 top-10 rounded-[2rem] gradient-brand opacity-30 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-ink-foreground/15 bg-ink-foreground/5 backdrop-blur">
            <img
              src={heroAsset.url}
              alt="Sheku Morovia, instructor of the Weyone AI workshop"
              width={616}
              height={716}
              className="mx-auto h-auto w-full max-w-md object-contain"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-ink-foreground/15 bg-ink/70 px-4 py-3 backdrop-blur">
              <p className="font-display text-sm font-semibold">Sheku Morovia</p>
              <p className="text-xs text-ink-foreground/70">Workshop Instructor · Weyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}