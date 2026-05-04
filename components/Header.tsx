import { navItems, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="font-semibold text-white">
          {profile.name}
        </a>
        <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-emerald-300/30 px-4 py-2 text-sm font-medium text-emerald-100 transition-colors hover:border-emerald-200 hover:bg-emerald-300/10"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
