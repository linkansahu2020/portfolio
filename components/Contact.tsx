import { MotionReveal } from "@/components/MotionReveal";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <MotionReveal className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
          Let&apos;s build a frontend that feels considered.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          Available for senior frontend roles, design-system work, and product
          interface consulting.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-200"
          >
            {profile.email}
          </a>
          <a
            href="https://github.com/linkansahu2020"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </MotionReveal>
    </section>
  );
}
