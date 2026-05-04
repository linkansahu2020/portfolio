export const profile = {
  name: "Linkan Sahu",
  role: "Senior Frontend Developer",
  location: "India",
  email: "hello@linkansahu.dev",
  summary:
    "I build polished, reliable web products with React, Next.js, TypeScript, and design systems that scale across teams.",
};

export const navItems = [
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
] as const;

export const stats = [
  { value: "7+", label: "Years building product UI" },
  { value: "35%", label: "Typical interaction latency cuts" },
  { value: "12", label: "Design systems shipped" },
];

export const projects = [
  {
    title: "Atlas Ops Console",
    type: "SaaS Dashboard",
    description:
      "Led a modular operations dashboard with real-time tables, command workflows, and accessible data visualization patterns.",
    impact: "Reduced repetitive support actions by 42%.",
    stack: ["Next.js", "TypeScript", "Tailwind", "TanStack Query"],
  },
  {
    title: "Nova Design Platform",
    type: "Design System",
    description:
      "Built a token-driven component library with documentation, motion guidance, and production-ready usage recipes.",
    impact: "Cut feature delivery time across three product teams.",
    stack: ["React", "Storybook", "CSS Variables", "Framer Motion"],
  },
  {
    title: "Signal Commerce",
    type: "Commerce Experience",
    description:
      "Reworked browse, checkout, and account surfaces with performance budgets and resilient progressive enhancement.",
    impact: "Improved Core Web Vitals and checkout completion.",
    stack: ["Next.js", "React", "Node", "Analytics"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Architecture",
    skills: ["Design Systems", "State Modeling", "Accessibility", "Performance", "Testing"],
  },
  {
    title: "Product",
    skills: ["UX Systems", "Prototyping", "Mentoring", "Discovery", "Delivery"],
  },
];

export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Independent / Product Teams",
    period: "2022 - Present",
    description:
      "Own frontend architecture, UI quality, and delivery for complex SaaS and commerce products.",
  },
  {
    role: "Frontend Engineer",
    company: "Growth-stage Web Platforms",
    period: "2019 - 2022",
    description:
      "Built reusable component systems, shipped customer-facing workflows, and improved performance across critical routes.",
  },
  {
    role: "UI Developer",
    company: "Digital Product Studio",
    period: "2017 - 2019",
    description:
      "Translated product strategy and visual design into responsive, accessible web interfaces.",
  },
];
