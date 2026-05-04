import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected product systems and interfaces."
          description="A concise sample of frontend work across dashboards, component platforms, and customer-facing experiences."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.title}
              delay={index * 0.05}
              className="flex min-h-[25rem] flex-col rounded-lg border border-white/10 bg-[#0d1118] p-6 transition-colors hover:border-emerald-300/35"
            >
              <p className="text-sm font-medium text-amber-200">
                {project.type}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-8 text-zinc-400">
                {project.description}
              </p>
              <p className="mt-6 text-sm font-medium text-emerald-200">
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
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
