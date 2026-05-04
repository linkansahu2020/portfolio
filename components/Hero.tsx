import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-white/10"
    >
      <Image
        src="/hero-workspace.png"
        alt="Dark frontend development workspace with abstract interface panels"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080a0f_0%,rgba(8,10,15,0.92)_38%,rgba(8,10,15,0.62)_100%)]" />
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center px-5 py-20 sm:px-8">
        <div className="max-w-3xl">
          <MotionReveal>
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              {profile.role} based in {profile.location}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Calm interfaces for ambitious web products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              {profile.summary}
            </p>
          </MotionReveal>
          <MotionReveal
            delay={0.08}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-full bg-emerald-300 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-200"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact me
            </a>
          </MotionReveal>
          <MotionReveal
            delay={0.16}
            className="mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/15 pl-4 text-left"
              >
                <div className="text-2xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm leading-6 text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
