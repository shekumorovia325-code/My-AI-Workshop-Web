import { Code2, GraduationCap } from "lucide-react";
import heroAsset from "@/assets/sheku-morovia.png.asset.json";
import { Reveal } from "./Reveal";

export function Instructor() {
  return (
    <section id="instructor" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <img
            src={heroAsset.url}
            alt="Portrait of Sheku Morovia"
            width={616}
            height={716}
            loading="lazy"
            className="h-auto w-full object-contain"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Meet your instructor
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Sheku Morovia</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            &ldquo;I am an Electrical and Electronics Engineering student at Fourah Bay College,
            University of Sierra Leone, and I am a website and web application developer.&rdquo;
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            In Weyone, Sheku focuses on teaching practical AI usage — working with ChatGPT, AI tools
            for business, creating content with AI, and AI automation, following the workshop
            curriculum.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <GraduationCap className="size-5 text-primary" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">Education</p>
              <p className="mt-1 space-y-1 text-sm text-muted-foreground">
                1. Engineering student, Fourah Bay College, University of Sierra Leone<br />
                2. A Legacy Responsive Web Design Certification
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <Code2 className="size-5 text-primary" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">Skills</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}