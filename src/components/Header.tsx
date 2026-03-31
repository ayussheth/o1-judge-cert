import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-[#f5c400] border-b-2 border-black px-6 py-2 text-center">
        <p className="text-xs font-black uppercase tracking-widest font-mono-accent">
          🚨 Judgeathon 2026 is LIVE — April 1–2 only ·{" "}
          <Link href="/register" className="underline underline-offset-2 hover:no-underline">
            Register now →
          </Link>
        </p>
      </div>
      {/* Main header */}
      <header className="bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo width={32} height={32} />
            <span className="font-black text-lg tracking-tight uppercase">Danveer</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest font-mono-accent">
            <a href="#how-it-works" className="hover:text-[#f5c400] transition-colors hover:underline underline-offset-4">How It Works</a>
            <a href="#prizes" className="hover:text-[#f5c400] transition-colors hover:underline underline-offset-4">Prizes</a>
            <a href="#judges" className="hover:text-[#f5c400] transition-colors hover:underline underline-offset-4">Panel</a>
            <a href="#schedule" className="hover:text-[#f5c400] transition-colors hover:underline underline-offset-4">Schedule</a>
            <a href="#faq" className="hover:text-[#f5c400] transition-colors hover:underline underline-offset-4">FAQ</a>
          </nav>
          <Link href="/register" className="btn-primary text-xs py-2.5 px-5">
            Register →
          </Link>
        </div>
      </header>
    </div>
  );
}
