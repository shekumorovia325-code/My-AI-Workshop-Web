import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/weyone/Navbar";
import { Hero } from "@/components/weyone/Hero";
import {
  About,
  Attendance,
  Audience,
  Certificate,
  Curriculum,
  FAQ,
  Schedule,
  WhyJoin,
} from "@/components/weyone/Sections";
import { Instructor } from "@/components/weyone/Instructor";
import { RegistrationForm } from "@/components/weyone/RegistrationForm";
import { Reveal } from "@/components/weyone/Reveal";
import { Footer } from "@/components/weyone/Footer";
import { WhatsAppButton } from "@/components/weyone/WhatsAppButton";

const title = "Weyone | Free Weekly AI Workshop";
const description =
  "Join Weyone, a free weekly two-day AI workshop by Sheku Morovia. Learn ChatGPT, AI tools for business, AI content creation, and AI automation every Saturday and Sunday.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          name: "Weyone — Free Weekly AI Workshop",
          description,
          eventSchedule: {
            "@type": "Schedule",
            byDay: ["https://schema.org/Saturday", "https://schema.org/Sunday"],
            startTime: "10:00",
            endTime: "16:00",
            repeatFrequency: "P1W",
          },
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          location: [
            { "@type": "Place", name: "Mount Auorel FBC Campus" },
            { "@type": "VirtualLocation", name: "Zoom" },
          ],
          isAccessibleForFree: true,
          performer: { "@type": "Person", name: "Sheku Morovia" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Audience />
        <Curriculum />
        <WhyJoin />
        <Schedule />
        <Attendance />

        <section id="register" className="bg-background py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Registration
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Register Free for Weyone</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Reserve your place for the next weekly AI workshop. Registration is completely free.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Every Saturday & Sunday, 5:00 PM – 7:00 PM</li>
                <li>• Attend online on Zoom or physically at Mount Auorel FBC Campus</li>
                <li>• Register once and join the weekly workshop</li>
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <RegistrationForm />
            </Reveal>
          </div>
        </section>

        <Certificate />
        <Instructor />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
