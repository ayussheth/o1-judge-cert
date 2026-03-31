import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-sm">D</span>
          </div>
          <span className="font-bold text-[var(--color-navy)] tracking-tight">Danveer</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-500 font-medium">
          <a href="#how-it-works" className="hover:text-[var(--color-primary)] transition-colors">How It Works</a>
          <a href="#prizes" className="hover:text-[var(--color-primary)] transition-colors">Prizes</a>
          <a href="#judges" className="hover:text-[var(--color-primary)] transition-colors">Panel</a>
          <a href="#schedule" className="hover:text-[var(--color-primary)] transition-colors">Schedule</a>
          <a href="#faq" className="hover:text-[var(--color-primary)] transition-colors">FAQ</a>
        </nav>
        <Link href="/register" className="btn-primary text-sm py-2.5 px-5">
          Register →
        </Link>
      </div>
    </header>
  );
}
