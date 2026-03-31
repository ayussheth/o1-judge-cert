"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import IconCertificate from "@/components/icons/IconCertificate";
import IconPrizes from "@/components/icons/IconPrizes";
import IconArrow from "@/components/icons/IconArrow";

const EXPERTISE_OPTIONS = [
  "AI/ML",
  "Web3/Blockchain",
  "Full-Stack",
  "Design",
  "Product",
  "Growth",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function RegisterPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const expertise = data.get("expertise") as string;

    // Store in sessionStorage for the judging flow
    sessionStorage.setItem(
      "judge",
      JSON.stringify({ name, email, expertise })
    );

    setTimeout(() => {
      router.push("/judge");
    }, 800);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left panel — navy theme */}
      <motion.div
        className="md:w-[45%] bg-[#002868] text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subtle gradient glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#B22234]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Logo width={40} height={40} dark />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight font-serif"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="block">Prove your</motion.span>
            <motion.span variants={fadeUp} className="block">extraordinary</motion.span>
            <motion.span variants={fadeUp} className="block text-[#B22234]">stupidity.</motion.span>
          </motion.h1>

          <motion.p
            className="text-blue-200 text-sm leading-relaxed mb-10 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Complete your application to join the Judgeathon 2026. Every judge who completes their evaluation receives:
          </motion.p>

          <motion.ul
            className="space-y-4 text-sm"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.li variants={fadeUp} className="flex items-start gap-3">
              <div className="mt-0.5">
                <IconPrizes size={28} color="#f5c400" />
              </div>
              <div>
                <p className="font-semibold text-white">O1 Extraordinary Ability Letter</p>
                <p className="text-blue-300 text-xs">Issued by Danveer Technologies</p>
              </div>
            </motion.li>
            <motion.li variants={fadeUp} className="flex items-start gap-3">
              <div className="mt-0.5">
                <IconArrow size={28} color="#f5c400" />
              </div>
              <div>
                <p className="font-semibold text-white">ICE Airways™ One-Way Flight</p>
                <p className="text-blue-300 text-xs">Seat O1-A · SFO · Class: Extraordinary</p>
              </div>
            </motion.li>
            <motion.li variants={fadeUp} className="flex items-start gap-3">
              <div className="mt-0.5">
                <IconCertificate size={28} color="#f5c400" />
              </div>
              <div>
                <p className="font-semibold text-white">$185K Offer Letter</p>
                <p className="text-blue-300 text-xs">San Francisco · Danveer Technologies HQ</p>
              </div>
            </motion.li>
          </motion.ul>
        </div>

        <motion.p
          className="text-[10px] text-blue-400 mt-10 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          All prizes fictional. Expires April 2, 2026.
        </motion.p>
      </motion.div>

      {/* Right panel — form */}
      <motion.div
        className="md:w-[55%] bg-white p-10 md:p-16 flex items-center justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="w-full max-w-md">
          <motion.h2
            className="text-2xl font-bold text-[#002868] mb-1 font-serif"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Judge Application
          </motion.h2>
          <motion.p
            className="text-gray-400 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            All fields marked with * are required.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* Floating label inputs */}
            <motion.div variants={fadeUp} className="relative">
              <input
                name="name"
                type="text"
                required
                placeholder=" "
                className="input-field peer w-full pt-6 pb-3 text-sm"
              />
              <label className="absolute left-4 top-2 text-xs font-semibold text-[#B22234] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                Full Name *
              </label>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <input
                name="email"
                type="email"
                required
                placeholder=" "
                className="input-field peer w-full pt-6 pb-3 text-sm"
              />
              <label className="absolute left-4 top-2 text-xs font-semibold text-[#B22234] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                Email Address *
              </label>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <input
                name="linkedin"
                type="url"
                placeholder=" "
                className="input-field peer w-full pt-6 pb-3 text-sm"
              />
              <label className="absolute left-4 top-2 text-xs font-semibold text-[#B22234] peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                LinkedIn Profile
              </label>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">
                Area of Expertise *
              </label>
              <select name="expertise" required className="input-field">
                <option value="">Select your area</option>
                {EXPERTISE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <input
                name="experience"
                type="number"
                required
                min={1}
                max={50}
                placeholder=" "
                className="input-field peer pt-5 pb-2"
              />
              <label className="absolute left-4 top-1 text-[10px] font-medium text-[#B22234] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-normal transition-all pointer-events-none">
                Years of Experience *
              </label>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">
                Why do you want to judge?
              </label>
              <textarea
                name="motivation"
                rows={3}
                className="input-field resize-none"
                placeholder="Tell us about your motivation..."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 accent-[#B22234]"
              />
              <label className="text-xs text-gray-500 leading-relaxed">
                I consent to visa sponsorship consideration and acknowledge that
                my judging performance will be evaluated as part of the O1 visa
                extraordinary ability assessment. *
              </label>
            </motion.div>

            <motion.div variants={fadeUp}>
              <motion.button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full py-3.5 disabled:opacity-60 inline-flex items-center justify-center gap-2"
                whileHover={{ y: -1, boxShadow: "0 4px 16px rgba(178,34,52,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {submitting ? "Submitting Application..." : "Submit Application"}
                {!submitting && <IconArrow size={16} color="white" />}
              </motion.button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[10px] text-gray-400 text-center">
              By submitting, you agree to Danveer&apos;s Terms of Service and
              Privacy Policy. This is a fictional judging program for entertainment purposes only.
            </motion.p>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
