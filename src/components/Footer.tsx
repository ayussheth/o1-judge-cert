import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Top section */}
      <div className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="8" width="20" height="4" fill="white"/>
                <polygon points="40,4 50,12 30,12" fill="white"/>
                {[14,20,26,32,38,44,50].map((x,i) => (
                  <rect key={i} x={x} y="12" width="4" height="28" fill="white"/>
                ))}
                <rect x="8" y="40" width="64" height="4" fill="white"/>
                <rect x="4" y="44" width="72" height="4" fill="#B22234"/>
                <rect x="30" y="48" width="20" height="24" fill="white" opacity="0.3"/>
                <rect x="4" y="72" width="72" height="4" fill="white"/>
              </svg>
              <div>
                <p className="font-serif font-bold text-sm">Danveer Technologies</p>
                <p className="font-mono-accent text-xs text-blue-300 tracking-widest uppercase">Bangalore, India</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Extraordinary stupidity,<br/>recognized since 2017.
            </p>
          </div>
          <div>
            <p className="font-mono-accent text-xs tracking-widest uppercase text-blue-300 mb-4">Program</p>
            <div className="space-y-2 text-sm text-blue-100">
              <a href="#how-it-works" className="block hover:text-white transition-colors">How It Works</a>
              <a href="#prizes" className="block hover:text-white transition-colors">Prizes</a>
              <a href="#schedule" className="block hover:text-white transition-colors">Schedule</a>
              <a href="#judges" className="block hover:text-white transition-colors">Panel</a>
            </div>
          </div>
          <div>
            <p className="font-mono-accent text-xs tracking-widest uppercase text-blue-300 mb-4">Participate</p>
            <div className="space-y-2 text-sm text-blue-100">
              <Link href="/register" className="block hover:text-white transition-colors">Register as Judge</Link>
              <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
      {/* Red stripe */}
      <div className="h-2 bg-[#B22234]" />
      {/* Bottom bar */}
      <div className="bg-[#001a4d] text-blue-300 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs font-mono-accent tracking-wide">
          <p>© 2026 Danveer Technologies, Inc. · All rights reserved.</p>
          <p>For entertainment only. No actual visas, flights, or asylum claims provided. Expires April 2, 2026.</p>
        </div>
      </div>
    </footer>
  );
}
