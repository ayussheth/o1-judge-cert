"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import IconRegister from "@/components/icons/IconRegister";
import IconJudge from "@/components/icons/IconJudge";
import IconCertificate from "@/components/icons/IconCertificate";
import IconPrizes from "@/components/icons/IconPrizes";
import IconSchedule from "@/components/icons/IconSchedule";
import IconArrow from "@/components/icons/IconArrow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const SPEAKERS = [
  { name: "Priya Nair", role: "Head of Recognition", org: "Danveer Technologies", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=PriyaNair&backgroundColor=b6e3f4" },
  { name: "David Stern", role: "Judging Committee", org: "Judgeathon 2026", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=DavidStern&backgroundColor=d1d4f9" },
  { name: "Keiko Murakami", role: "Ability Assessor", org: "Danveer Technologies", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=KeikoMurakami&backgroundColor=ffd5dc" },
  { name: "Arjun Mehta", role: "Program Director", org: "Danveer Technologies", avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=ArjunMehta&backgroundColor=c0aede" },
];

const heroWords = ["The", "World's", "First"];

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* HERO — whitehouse.gov style with word-by-word animation */}
        <section className="bg-white border-b border-gray-200 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-[#B22234]" />
                <span className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#B22234] font-semibold">Official Program · April 1–2, 2026</span>
                <div className="h-px flex-1 bg-[#B22234]" />
              </motion.div>

              <h1 className="font-serif text-5xl md:text-7xl font-black text-[#002868] leading-tight mb-6 text-center">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                  className="text-[#B22234] inline-block"
                >
                  Judgeathon.
                </motion.span>
              </h1>

              <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-3 leading-relaxed">
                No hackers. No teams. No code.<br/>
                Just you, a panel of projects, and an O1 letter waiting at the finish line.
              </motion.p>

              <motion.p variants={fadeUp} className="text-center font-mono-accent text-xs tracking-widest uppercase text-gray-400 mb-10">
                Organised by Danveer Technologies · Extraordinary Stupidity Recognized Since 2017
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="btn-primary text-sm py-4 px-10 inline-flex items-center gap-2 justify-center">
                  Apply as Judge
                  <IconArrow size={18} color="white" />
                </Link>
                <a href="#how-it-works" className="btn-outline text-sm py-4 px-10">
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* RED DIVIDER */}
        <div className="h-2 bg-[#B22234]" />
        <div className="h-1 bg-[#002868]" />

        {/* STATS */}
        <section className="bg-[#002868] text-white py-14 px-6">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {[
              { val: "2,586", label: "Applications Since 2017" },
              { val: "69%", label: "Acceptance Rate" },
              { val: "6–7 Days", label: "Processing Time" },
              { val: "$185K", label: "Starting Salary, SF" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <p className="font-serif text-4xl font-black text-[#f5c400]">{s.val}</p>
                <p className="text-xs text-blue-200 font-mono-accent tracking-widest uppercase mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="h-1 bg-[#B22234]" />

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-20 px-6 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div className="mb-14 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#B22234] mb-3">The Format</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868]">A hackathon with one twist:</motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-gray-500 mt-3">You don&apos;t build. You judge.</motion.p>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { step: "01", title: "Register", desc: "Submit credentials. Our team verifies your background within 48 hours.", Icon: IconRegister },
                { step: "02", title: "Hack as a Judge", desc: "Evaluate 5 absurd challenges. Score fast. This is your hack.", Icon: IconJudge },
                { step: "03", title: "Collect Your Visa", desc: "Complete evaluations and receive your approval letter + ICE Airways boarding pass.", Icon: IconCertificate },
              ].map((s) => (
                <motion.div key={s.step} variants={fadeUp} className="card">
                  <div className="flex items-start gap-4">
                    <s.Icon size={36} color="#002868" />
                    <div>
                      <p className="font-mono-accent text-xs text-[#B22234] mb-1">STEP {s.step}</p>
                      <h3 className="font-serif text-lg font-bold text-[#002868] mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRIZES */}
        <section id="prizes" className="py-20 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div className="mb-14 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#B22234] mb-3">Official Prizes</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868]">The most ambitious prize pool in hackathon history.</motion.h2>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { rank: "1st Place", title: "O1 Visa Sponsorship", desc: "Extraordinary ability letter + $185K offer, San Francisco. ICE Airways™ one-way flight included.", accent: "border-t-[#f5c400]", iconColor: "#f5c400" },
                { rank: "2nd Place", title: "H-1B Petition", desc: "Specialty occupation sponsorship + 3-year initial period + employer-of-record setup.", accent: "border-t-[#002868]", iconColor: "#002868" },
                { rank: "3rd Place", title: "Asylum", desc: "Immediate protection + work authorisation + pathway to green card. Valid while supplies last.", accent: "border-t-[#B22234]", iconColor: "#B22234" },
              ].map((p) => (
                <motion.div key={p.rank} variants={fadeUp} className={`card ${p.accent}`}>
                  <div className="mb-3">
                    <IconPrizes size={36} color={p.iconColor} />
                  </div>
                  <p className="font-mono-accent text-xs tracking-widest uppercase text-gray-400 mb-1">{p.rank}</p>
                  <h3 className="font-serif text-xl font-bold text-[#002868] mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-center text-xs text-gray-300 font-mono-accent mt-8">* All prizes fictional. Expires April 2, 2026. For entertainment only.</p>
          </div>
        </section>

        {/* PANEL */}
        <section id="judges" className="py-20 px-6 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div className="mb-14 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#B22234] mb-3">Distinguished Panel</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868]">Who&apos;s judging the judges.</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 mt-3">Experts in the field of extraordinary stupidity.</motion.p>
            </motion.div>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {SPEAKERS.map((s) => (
                <motion.div key={s.name} variants={fadeUp} className="card text-center">
                  <div className="w-20 h-20 overflow-hidden mx-auto mb-4 border-2 border-gray-100">
                    <Image src={s.avatar} alt={s.name} width={80} height={80} className="w-full h-full object-cover" unoptimized />
                  </div>
                  <p className="font-serif font-bold text-sm text-[#002868]">{s.name}</p>
                  <p className="font-mono-accent text-xs text-[#B22234] mt-0.5">{s.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.org}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="py-20 px-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-3xl mx-auto">
            <motion.div className="mb-14 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#B22234] mb-3">Official Schedule</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868]">48 hours. One mission.</motion.h2>
            </motion.div>
            <motion.div className="space-y-0 border border-gray-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { time: "Apr 1 · 12:00 AM", event: "Judgeathon Opens", note: "Registration goes live" },
                { time: "Apr 1 · 9:00 AM", event: "Challenge Panel Released", note: "5 absurd challenges unlocked" },
                { time: "Apr 1 · 6:00 PM", event: "Midpoint Check", note: "Leaderboard published" },
                { time: "Apr 2 · 11:59 PM", event: "Judgeathon Closes", note: "All submissions final" },
                { time: "Apr 3 · 12:00 AM", event: "Winners Announced", note: "Approval letters dispatched" },
              ].map((s, i) => (
                <motion.div key={s.time} variants={fadeUp} className={`flex gap-4 items-center px-6 py-5 bg-white ${i !== 4 ? 'border-b border-gray-100' : ''}`}>
                  <div className="w-8">
                    <IconSchedule size={24} color="#002868" />
                  </div>
                  <div className="font-mono-accent text-xs text-[#B22234] w-36 shrink-0 uppercase tracking-wide">{s.time}</div>
                  <div>
                    <p className="font-serif font-bold text-sm text-[#002868]">{s.event}</p>
                    <p className="text-xs text-gray-400">{s.note}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-6 bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto">
            <motion.div className="mb-14 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="font-mono-accent text-xs tracking-[0.2em] uppercase text-[#B22234] mb-3">FAQ</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl font-black text-[#002868]">Frequently Asked Questions.</motion.h2>
            </motion.div>
            <motion.div className="space-y-0 border border-gray-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              {[
                { q: "What exactly is a Judgeathon?", a: "A hackathon where there are no hackers — only judges. You compete by completing absurd challenges. Your score, speed, and commentary determine your rank." },
                { q: "Do I need to code anything?", a: "Absolutely not. You just need strong opinions and the ability to rate clouds by intelligence. Extraordinary ability not required — but it helps." },
                { q: "Is the O1 visa real?", a: "The letter is incredibly real-looking. The visa is not. This expires April 2, 2026 for a reason." },
                { q: "Who is Danveer Technologies?", a: "A distinguished technology firm with deep expertise in extraordinary ability assessment, institutional recognition, and April programming." },
                { q: "Can I share my results?", a: "You are strongly encouraged to tweet your approval letter. The more people who see it, the more extraordinary you become." },
              ].map((f, i) => (
                <motion.div key={f.q} variants={fadeUp} className={`px-6 py-6 bg-white ${i !== 4 ? 'border-b border-gray-100' : ''}`}>
                  <p className="font-serif font-bold text-[#002868] mb-2">{f.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#002868] text-white text-center">
          <motion.div className="max-w-2xl mx-auto" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center mb-8">
              <div className="h-px w-16 bg-[#B22234]" />
              <span className="font-mono-accent text-xs tracking-widest text-blue-300 uppercase">Official Call to Action</span>
              <div className="h-px w-16 bg-[#B22234]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl font-black mb-4">Ready to judge?</motion.h2>
            <motion.p variants={fadeUp} className="text-blue-200 mb-10 text-lg">Applications close April 2. Visa expires same day.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/register" className="inline-flex items-center gap-2 bg-[#B22234] text-white font-bold uppercase tracking-widest text-sm py-4 px-14 rounded-full hover:bg-[#8b1a27] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20">
                Apply as Judge
                <IconArrow size={18} color="white" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
