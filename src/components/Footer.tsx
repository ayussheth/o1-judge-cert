import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <Logo width={28} height={28} dark />
              <span className="font-black text-base uppercase tracking-tight text-white">Danveer</span>
            </div>
            <p className="text-sm text-zinc-400 font-mono-accent leading-relaxed">
              Extraordinary stupidity,<br />recognized since 2017.
            </p>
          </div>
          <div className="flex gap-16 text-xs font-bold uppercase tracking-widest font-mono-accent">
            <div className="space-y-3">
              <p className="text-zinc-500">Program</p>
              <a href="#how-it-works" className="block text-zinc-300 hover:text-[#f5c400] transition-colors">How It Works</a>
              <a href="#prizes" className="block text-zinc-300 hover:text-[#f5c400] transition-colors">Prizes</a>
              <a href="#schedule" className="block text-zinc-300 hover:text-[#f5c400] transition-colors">Schedule</a>
            </div>
            <div className="space-y-3">
              <p className="text-zinc-500">Info</p>
              <a href="#judges" className="block text-zinc-300 hover:text-[#f5c400] transition-colors">Panel</a>
              <a href="#faq" className="block text-zinc-300 hover:text-[#f5c400] transition-colors">FAQ</a>
              <Link href="/register" className="block text-zinc-300 hover:text-[#f5c400] transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-zinc-600 font-mono-accent">
          <p>© 2026 Danveer Technologies, Inc.</p>
          <p>For entertainment only. No actual visas, flights, or asylum claims provided. Expires April 2, 2026.</p>
        </div>
      </div>
    </footer>
  );
}
