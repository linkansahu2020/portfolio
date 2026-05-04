import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-[#0b0e14] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Senior execution across product teams."
          description="A track record of building interfaces that support repeated daily use, not only first impressions."
        />
        <div className="space-y-4">
          {experience.map((item, index) => (
            <MotionReveal
              key={`${item.role}-${item.company}`}
              delay={index * 0.05}
              className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[14rem_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-rose-200">
                  {item.period}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{item.company}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-3 text-base leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
