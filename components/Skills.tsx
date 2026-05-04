import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit for durable product interfaces."
          description="Focused on the places where implementation detail, visual craft, and team velocity meet."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionReveal
              key={group.title}
              delay={index * 0.05}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
