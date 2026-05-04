import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Frontend work shaped by product judgment."
          description="I pair strong implementation habits with a close read of user workflows, visual systems, and long-term maintainability."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            "I turn ambiguous product ideas into responsive interfaces that feel composed, fast, and easy to operate.",
            "My work centers on React architecture, design-system execution, accessibility, and performance budgets that hold up after launch.",
            "I enjoy mentoring engineers, tightening review standards, and making UI decisions explicit enough for teams to reuse.",
          ].map((item) => (
            <MotionReveal
              key={item}
              className="rounded-lg border border-white/10 bg-white/4 p-6"
            >
              <p className="text-base leading-8 text-zinc-300">{item}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
