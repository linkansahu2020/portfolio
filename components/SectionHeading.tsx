import { MotionReveal } from "@/components/MotionReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <MotionReveal className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </MotionReveal>
  );
}
