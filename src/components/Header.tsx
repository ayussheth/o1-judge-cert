import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-[#002868] px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-[11px] text-blue-200 font-mono-accent tracking-[0.15em] uppercase font-medium">
            An Official Program of Danveer Technologies, Inc.
          </p>
          <p className="text-[11px] text-blue-200 font-mono-accent tracking-[0.15em] uppercase font-medium hidden md:block">
            April 1–2, 2026
          </p>
        </div>
      </div>

      {/* Main header — minimal premium */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            {/* Minimal seal/icon */}
            <svg width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#002868]">
              <rect x="30" y="8" width="20" height="4" fill="currentColor"/>
              <polygon points="40,4 50,12 30,12" fill="currentColor"/>
              <rect x="14" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="20" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="26" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="32" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="38" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="44" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="50" y="12" width="4" height="28" fill="currentColor"/>
              <rect x="8" y="40" width="64" height="3" fill="currentColor"/>
              <rect x="4" y="44" width="72" height="3" fill="#B22234"/>
              <rect x="4" y="72" width="72" height="4" fill="currentColor"/>
            </svg>
            <div>
              <p className="font-serif text-[13px] font-black tracking-tight uppercase text-[#002868] leading-none">Danveer</p>
              <p className="font-mono-accent text-[9px] tracking-[0.1em] text-gray-400 uppercase">Bangalore, India</p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10 text-xs font-semibold uppercase tracking-widest text-gray-600 font-mono-accent mx-auto">
            <a href="#how-it-works" className="hover:text-[#002868] transition-colors">Program</a>
            <a href="#prizes" className="hover:text-[#002868] transition-colors">Prizes</a>
            <a href="#judges" className="hover:text-[#002868] transition-colors">Panel</a>
            <a href="#schedule" className="hover:text-[#002868] transition-colors">Schedule</a>
            <a href="#faq" className="hover:text-[#002868] transition-colors">FAQ</a>
          </nav>

          {/* CTA */}
          <Link href="/register" className="btn-primary text-xs py-2.5 px-6 rounded-full ml-auto lg:ml-0">
            Apply
          </Link>
        </div>
      </header>
    </div>
  );
}
