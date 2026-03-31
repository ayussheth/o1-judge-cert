"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const SPEAKERS = [
  {
    name: "Priya Nair",
    role: "Head of Recognition",
    org: "Danveer Technologies",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=PriyaNair&backgroundColor=b6e3f4",
  },
  {
    name: "David Stern",
    role: "Judging Committee",
    org: "Judgeathon 2026",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=DavidStern&backgroundColor=d1d4f9",
  },
  {
    name: "Keiko Murakami",
    role: "Ability Assessor",
    org: "Danveer Technologies",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=KeikoMurakami&backgroundColor=ffd5dc",
  },
  {
    name: "Arjun Mehta",
    role: "Program Director",
    org: "Danveer Technologies",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=ArjunMehta&backgroundColor=c0aede",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden grid-bg pt-28 pb-32 px-6">
          {/* Background blobs */}
          <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-100 opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-purple-100 opacity-30 blur-3xl" />

          <motion.div
            className="max-w-4xl mx-auto text-center relative z-10"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="hero-badge mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                #OnlyJudges · April 1–2, 2026
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-black leading-none tracking-tight mt-6 mb-6"
            >
              The World&apos;s First<br />
              <span className="gradient-text">Judgeathon.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed"
            >
              No hackers. No teams. No code.<br />
              Just you, a panel of projects, and an O1 letter at the finish line.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-slate-400 mb-10">
              Organised by <strong className="text-slate-700">Danveer Technologies</strong> · Extraordinary Stupidity Recognised Since 2017
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary text-base py-4 px-10">
                Register as Judge →
              </Link>
              <a href="#how-it-works" className="btn-outline text-base">
                How It Works
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 px-6 border-y border-slate-100 bg-slate-50">
          <motion.div
            className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {[
              { val: "2,586", label: "Applications since 2017" },
              { val: "69%", label: "Acceptance Rate" },
              { val: "6–7 days", label: "Processing Time" },
              { val: "$185K", label: "Starting Salary, SF" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <p className="text-4xl font-black gradient-text">{s.val}</p>
                <p className="text-sm text-slate-400 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-24 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="hero-badge mb-4">The Format</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mt-4">
                A hackathon with one twist:
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-slate-500 mt-3">
                You don&apos;t build. You judge.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {[
                {
                  step: "01",
                  emoji: "📋",
                  title: "Register",
                  desc: "Submit your credentials. Our team verifies your background against Danveer extraordinary ability criteria within 48 hours.",
                },
                {
                  step: "02",
                  emoji: "⚡",
                  title: "Hack as a Judge",
                  desc: "Evaluate 5 projects across 4 criteria. Score fast, comment sharp. This is your hack — every point you give is a point you earn.",
                },
                {
                  step: "03",
                  emoji: "🏆",
                  title: "Collect Your Visa",
                  desc: "Complete your evaluations and receive your Danveer approval notice, ICE Airways boarding pass, and certificate.",
                },
              ].map((s) => (
                <motion.div key={s.step} variants={fadeUp} className="card-minimal group relative overflow-hidden">
                  <span className="absolute top-4 right-4 text-5xl font-black text-slate-50 group-hover:text-indigo-50 transition-colors select-none">{s.step}</span>
                  <div className="text-3xl mb-4">{s.emoji}</div>
                  <h3 className="font-bold text-lg text-[var(--color-navy)] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRIZES ── */}
        <section id="prizes" className="py-24 px-6 border-b border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="hero-badge mb-4">Prizes</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mt-4">
                The most ambitious<br />prize pool in history.
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.div variants={fadeUp} className="card border-2 border-yellow-200 bg-gradient-to-b from-yellow-50 to-white">
                <p className="text-4xl mb-4">🥇</p>
                <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-1">1st Place</p>
                <h3 className="text-xl font-black text-[var(--color-navy)] mb-2">O1 Sponsorship</h3>
                <p className="text-sm text-slate-500 mb-3">Extraordinary ability letter + $185K offer letter, SF.</p>
                <p className="text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-lg px-3 py-2">✈️ ICE Airways™ one-way SFO included</p>
              </motion.div>
              <motion.div variants={fadeUp} className="card border-2 border-slate-200">
                <p className="text-4xl mb-4">🥈</p>
                <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">2nd Place</p>
                <h3 className="text-xl font-black text-[var(--color-navy)] mb-2">H-1B Petition</h3>
                <p className="text-sm text-slate-500">Specialty occupation sponsorship + 3 year initial period + employer-of-record setup.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="card border-2 border-orange-200 bg-gradient-to-b from-orange-50 to-white">
                <p className="text-4xl mb-4">🥉</p>
                <p className="text-xs font-bold tracking-widest uppercase text-orange-600 mb-1">3rd Place</p>
                <h3 className="text-xl font-black text-[var(--color-navy)] mb-2">Asylum</h3>
                <p className="text-sm text-slate-500">Immediate protection + work authorisation + pathway to green card. Valid while supplies last.</p>
              </motion.div>
            </motion.div>
            <p className="text-center text-xs text-slate-300 mt-8">* All prizes fictional. Expires April 2, 2026. For entertainment only.</p>
          </div>
        </section>

        {/* ── SPEAKERS ── */}
        <section id="judges" className="py-24 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="hero-badge mb-4">Panel</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mt-4">
                Who&apos;s judging the judges.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 mt-3 text-lg">
                Distinguished experts in the field of extraordinary stupidity.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {SPEAKERS.map((s) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  className="card text-center group cursor-default"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 bg-slate-100 ring-2 ring-slate-100 group-hover:ring-indigo-200 transition-all">
                    <Image
                      src={s.avatar}
                      alt={s.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="font-bold text-sm text-[var(--color-navy)]">{s.name}</p>
                  <p className="text-xs text-[var(--color-primary)] font-medium mt-0.5">{s.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.org}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SCHEDULE ── */}
        <section id="schedule" className="py-24 px-6 border-b border-slate-100 bg-slate-50">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="hero-badge mb-4">Schedule</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-black mt-4">48 hours. One mission.</motion.h2>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {[
                { time: "Apr 1 · 12:00 AM", event: "Judgeathon Opens", note: "Registration goes live", icon: "🚀" },
                { time: "Apr 1 · 9:00 AM",  event: "Project Panel Released", note: "5 projects unlocked for scoring", icon: "📂" },
                { time: "Apr 1 · 6:00 PM",  event: "Midpoint Check", note: "Leaderboard published", icon: "📊" },
                { time: "Apr 2 · 11:59 PM", event: "Judgeathon Closes", note: "All submissions final", icon: "🔒" },
                { time: "Apr 3 · 12:00 AM", event: "Winners Announced", note: "Approval letters dispatched", icon: "🏆" },
              ].map((s, i) => (
                <motion.div key={s.time} variants={fadeUp} className="flex gap-4 items-center card py-4 px-5">
                  <span className="text-xl">{s.icon}</span>
                  <div className="text-xs font-mono text-[var(--color-primary)] w-32 shrink-0">{s.time}</div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-navy)]">{s.event}</p>
                    <p className="text-xs text-slate-400">{s.note}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 px-6 border-b border-slate-100">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.p variants={fadeUp} className="hero-badge mb-4">FAQ</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-black mt-4">
                You have questions.<br />We have answers.
              </motion.h2>
            </motion.div>

            <motion.div
              className="space-y-0"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {[
                {
                  q: "What exactly is a Judgeathon?",
                  a: "A hackathon where there are no hackers — only judges. You compete by evaluating projects. Your scores, speed, and commentary determine your rank.",
                },
                {
                  q: "Do I need to code anything?",
                  a: "Absolutely not. You just need strong opinions and the ability to rate things from 1–10. Extraordinary ability not required — but it helps.",
                },
                {
                  q: "Is the O1 visa real?",
                  a: "The letter is incredibly real-looking. The visa is not. This expires April 2, 2026 for a reason.",
                },
                {
                  q: "Who is Danveer Technologies?",
                  a: "A technology firm with deep expertise in extraordinary ability assessment, institutional recognition, and April programming.",
                },
                {
                  q: "Can I share my results?",
                  a: "You are strongly encouraged to tweet your approval letter. The more people who see it, the more extraordinary you become.",
                },
              ].map((f, i) => (
                <motion.div key={f.q} variants={fadeUp} className="border-b border-slate-100 py-6">
                  <p className="font-bold text-[var(--color-navy)] mb-2">{f.q}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-100 opacity-50 blur-3xl" />
          <motion.div
            className="max-w-2xl mx-auto text-center relative z-10"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black mb-4">
              Ready to judge?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 mb-10 text-lg">
              Applications close April 2. Visa expires same day.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/register" className="btn-primary text-base py-4 px-14">
                Register as Judge →
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
