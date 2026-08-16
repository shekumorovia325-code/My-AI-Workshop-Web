import {
  Bot,
  Briefcase,
  CalendarCheck,
  Code2,
  Gauge,
  GraduationCap,
  Lightbulb,
  MapPin,
  Monitor,
  PenLine,
  Rocket,
  Repeat,
  Sparkles,
  Store,
  Users,
  Wallet,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { Countdown } from "./Countdown";
import { SITE, scrollToRegister } from "./site";

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-accent" : "text-primary"}`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-ink-foreground/75" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Card({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon: typeof Bot;
  title: string;
  children: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="grid size-11 place-items-center rounded-xl gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-105">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Introduction"
          title="What is Weyone?"
          description="Weyone is a weekly two-day AI workshop created to help people understand and practically use Artificial Intelligence in their everyday work. The workshop focuses on real-world AI tools, productivity, content creation, business applications, and automation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card icon={CalendarCheck} title="Every Saturday & Sunday">
            Participants can attend the workshop every Saturday and Sunday, from 5:00 PM to 7:00 PM
            SLE.
          </Card>
          <Card icon={Wallet} title="Registration is free" delay={80}>
            Registration for Weyone is free, and attending the workshop is free. Register once and
            join the weekly sessions.
          </Card>
          <Card icon={Lightbulb} title="Beginners and beyond" delay={160}>
            The workshop is suitable for complete beginners as well as people who already have
            experience with AI.
          </Card>
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  const items = [
    { icon: GraduationCap, title: "Students", text: "Use AI to support studying, research, writing, and organising your coursework." },
    { icon: Briefcase, title: "Professionals", text: "Apply AI tools to daily tasks, reporting, and communication to work more efficiently." },
    { icon: Rocket, title: "Entrepreneurs", text: "Explore how AI can support idea development, planning, and everyday execution." },
    { icon: Store, title: "Business Owners", text: "See how AI tools can assist with content, customer communication, and repetitive work." },
    { icon: Users, title: "Teachers & Educators", text: "Discover practical AI uses for lesson preparation, materials, and explanations." },
    { icon: Code2, title: "Developers & Creators", text: "Use AI assistants and automation to speed up building, writing, and creative workflows." },
  ];
  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who can join"
          title="Who Is This Workshop For?"
          description="Everyone is welcome. Weyone is designed for anyone who wants to learn how to use Artificial Intelligence to improve their work and productivity."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item.title} icon={item.icon} title={item.title} delay={i * 60}>
              {item.text}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Curriculum() {
  const topics = [
    {
      icon: Bot,
      title: "ChatGPT",
      text: "Practical ways to use ChatGPT for everyday tasks, research, writing, brainstorming, productivity, and problem solving.",
    },
    {
      icon: Briefcase,
      title: "AI Tools for Business",
      text: "How AI tools can support business activities, improve productivity, assist with content, and streamline repetitive work.",
    },
    {
      icon: PenLine,
      title: "Creating Content with AI",
      text: "Practical AI-assisted content creation, including ideas for written content and other creative workflows.",
    },
    {
      icon: Repeat,
      title: "AI Automation",
      text: "How AI can be used to automate repetitive tasks and create more efficient workflows.",
    },
  ];
  return (
    <section id="learn" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Curriculum"
          title="What You'll Learn"
          description="Four core learning areas, taught with a focus on practical, hands-on application."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {topics.map((topic, i) => (
            <Reveal
              key={topic.title}
              delay={i * 70}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                <topic.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button variant="hero" size="xl" onClick={scrollToRegister}>
            Start Learning AI
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyJoin() {
  const items = [
    { icon: Sparkles, title: "Learn Practical AI", text: "Focus on practical application rather than theory alone." },
    { icon: Repeat, title: "Automate Repetitive Work", text: "Learn how AI can help streamline repetitive tasks." },
    { icon: Gauge, title: "Improve Productivity", text: "Use AI tools to work more efficiently." },
    { icon: PenLine, title: "Create Better Content", text: "Explore practical AI-assisted content workflows." },
    { icon: CalendarCheck, title: "Learn Every Week", text: "The workshop runs every Saturday and Sunday from 5:00 PM to 7:00 PM SLE." },
    { icon: Wallet, title: "Join for Free", text: "Registration and workshop attendance are free." },
  ];
  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why attend" title="Why Join Weyone?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item.title} icon={item.icon} title={item.title} delay={i * 60}>
              {item.text}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Schedule() {
  return (
    <section id="schedule" className="gradient-ink py-20 text-ink-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Weekly AI Workshop"
          title="Workshop Schedule"
          description="Register once and join the weekly workshop. Free registration. Free workshop attendance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {["Saturday", "Sunday"].map((day) => (
              <div
                key={day}
                className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur"
              >
                <p className="font-display text-2xl font-bold">{day}</p>
                <p className="mt-2 text-sm text-ink-foreground/75">5:00 PM – 7:00 PM SLE</p>
              </div>
            ))}
            <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-ink-foreground/60">Online</p>
              <p className="mt-1 font-semibold">Zoom</p>
            </div>
            <div className="rounded-3xl border border-ink-foreground/15 bg-ink-foreground/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-ink-foreground/60">Physical</p>
              <p className="mt-1 font-semibold">Mount Auorel FBC Campus</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Countdown />
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <Button variant="hero" size="xl" onClick={scrollToRegister}>
            Join Weyone
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Attendance() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Attendance"
          title="Online + Physical Attendance"
          description="Choose the option that suits you best when you register."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card icon={Monitor} title="Online — Zoom">
            Attend remotely using Zoom from anywhere. Joining details are shared with registered
            participants.
          </Card>
          <Card icon={MapPin} title="Physical — Mount Auorel FBC Campus" delay={80}>
            Participants who prefer in-person learning can attend the workshop at Mount Auorel FBC
            Campus.
          </Card>
        </div>
      </div>
    </section>
  );
}

export function Certificate() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <span className="grid size-12 place-items-center rounded-xl gradient-brand text-primary-foreground">
            <Award className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-3xl font-bold">Certificate of Participation</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Participants who complete the workshop can obtain a certificate. The certificate is
            available as a paid certificate option.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Workshop registration", "FREE"],
              ["Workshop attendance", "FREE"],
              ["Certificate", "PAID"],
            ].map(([label, value]) => (
              <li key={label} className="rounded-2xl border border-border bg-background px-4 py-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="mt-1 font-display text-lg font-bold text-primary">{value}</p>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="xl" className="mt-8" asChild>
            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer">
              Learn About the Certificate
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    ["Is Weyone free?", "Yes. Registration and workshop attendance are free."],
    ["When does the workshop take place?", "Every Saturday and Sunday from 5:00 PM to 7:00 PM SLE."],
    ["Can beginners attend?", "Yes. The workshop is designed for everyone, including people who are new to AI."],
    ["Can I attend online?", "Yes. Online participation is available through Zoom."],
    ["Can I attend physically?", "Yes. Physical attendance is available at Mount Auorel FBC Campus."],
    ["What will I learn?", "You will learn about ChatGPT, AI tools for business, creating content with AI, and AI automation."],
    ["Is the certificate free?", "No. The workshop itself is free, but the certificate is available as a paid option."],
    ["How do I register?", "Complete the registration form on the Weyone website."],
  ];
  return (
    <section id="faq" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}