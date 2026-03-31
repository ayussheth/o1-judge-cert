"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IconCertificate from "@/components/icons/IconCertificate";
import IconPrizes from "@/components/icons/IconPrizes";
import IconArrow from "@/components/icons/IconArrow";
import IconChallenges from "@/components/icons/IconChallenges";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

// Confetti-like floating elements
function ConfettiElements() {
  const elements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    size: 4 + Math.random() * 8,
    color: ["#B22234", "#f5c400", "#002868", "#ffffff"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full"
          style={{
            left: `${el.x}%`,
            width: el.size,
            height: el.size,
            backgroundColor: el.color,
            opacity: 0.3,
          }}
          animate={{
            y: [-20, 600],
            rotate: [0, 360],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function ResultsPage() {
  const [judgeName, setJudgeName] = useState("Applicant");
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("judge");
    if (stored) {
      const data = JSON.parse(stored);
      setJudgeName(data.name || "Applicant");
    }
  }, []);

  const caseNumber = `DT-26-${Math.floor(100 + Math.random() * 900)}-${Math.floor(10000 + Math.random() * 90000)}`;
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function shareTwitter() {
    const text = encodeURIComponent(
      `Just got approved for the O1 Visa by Danveer Technologies 🚀 My extraordinary ability has been recognized. Expires April 2. See for yourself: https://o1-judge-cert-work.vercel.app #Judgeathon #OnlyJudges #ExtraordinaryAbility`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  }

  function shareLinkedIn() {
    const text = encodeURIComponent(
      `Honored to share that I've been recognized for extraordinary ability through the Danveer Judgeathon 2026. My contributions as a judge have been formally acknowledged. #Judgeathon #OnlyJudges`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://o1-judge-cert-work.vercel.app")}&summary=${text}`,
      "_blank"
    );
  }

  async function downloadPDF(type: "approval" | "flight" | "certificate") {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    if (type === "approval") {
      doc.setFont("times", "bold");
      doc.setFontSize(14);
      doc.text("DANVEER TECHNOLOGIES, INC.", 105, 25, { align: "center" });
      doc.setFont("times", "normal");
      doc.setFontSize(10);
      doc.text("Extraordinary Ability Recognition Program", 105, 32, { align: "center" });
      doc.line(20, 36, 190, 36);
      doc.line(20, 37, 190, 37);

      doc.setFontSize(12);
      doc.setFont("times", "bold");
      doc.text("JUDGEATHON 2026 — APPROVAL NOTICE", 105, 48, { align: "center" });
      doc.text("Certificate of Extraordinary Ability", 105, 56, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(10);
      const y = 70;
      doc.text(`Reference Number: ${caseNumber}`, 20, y);
      doc.text(`Notice Date: ${formattedDate}`, 20, y + 8);
      doc.text(`Recipient: ${judgeName}`, 20, y + 16);
      doc.text("Classification: Extraordinary Stupidity (Self-Assessed)", 20, y + 24);
      doc.text("Expiry Date: April 2, 2026", 20, y + 32);
      doc.text("Issued by: Danveer Technologies, Inc.", 20, y + 40);

      const textY = y + 56;
      doc.text("Dear " + judgeName + ",", 20, textY);
      const body = `This notice confirms that Danveer Technologies, Inc. has reviewed your judging contributions and hereby recognizes your extraordinary ability in the field of technology evaluation.

Your participation in the Danveer Judgeathon 2026 has been assessed and found to demonstrate exceptional merit in:

  - Evaluation of innovative technology projects
  - Contribution of expert scoring and feedback
  - Demonstration of field expertise and analytical ability

In recognition of this achievement, you are entitled to:
  - One (1) O1 Extraordinary Ability Recommendation Letter
  - One (1) ICE Airways One-Way Flight to San Francisco (Seat O1-A)
  - One (1) Certificate of Extraordinary Ability

This notice is valid until April 2, 2026.

Sincerely,
Program Director
Danveer Technologies, Inc.`;

      const lines = doc.splitTextToSize(body, 170);
      doc.text(lines, 20, textY + 10);

      doc.setFontSize(6);
      doc.text(
        "This is a fictional document issued for entertainment purposes only. Danveer Technologies is not a government agency. No actual visa or legal status is granted.",
        105, 285, { align: "center" }
      );

      doc.save("Danveer_Approval_Notice.pdf");

    } else if (type === "flight") {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("ICE Airways™", 105, 30, { align: "center" });
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Imaginary Carrier for Extraordinary individuals", 105, 37, { align: "center" });
      doc.line(20, 42, 190, 42);

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("BOARDING PASS", 105, 55, { align: "center" });

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const by = 70;
      doc.text(`Passenger: ${judgeName.toUpperCase()}`, 20, by);
      doc.text("From: Your Current Location", 20, by + 10);
      doc.text("To: San Francisco International (SFO)", 20, by + 20);
      doc.text("Date: April 2, 2026", 20, by + 30);
      doc.text("Flight: ICE-0402", 20, by + 40);
      doc.text("Class: Extraordinary", 20, by + 50);
      doc.text("Seat: O1-A", 20, by + 60);
      doc.text(`Confirmation: ${caseNumber}`, 20, by + 70);
      doc.text("Sponsored by: Danveer Technologies, Inc.", 20, by + 80);

      doc.setFontSize(6);
      doc.text(
        "ICE Airways™ is a fictional airline. No actual flight is provided. This voucher is for entertainment purposes only. Valid April 2, 2026.",
        105, 285, { align: "center" }
      );

      doc.save("ICE_Airways_Flight_Voucher.pdf");

    } else {
      doc.setFont("times", "bold");
      doc.setFontSize(20);
      doc.text("CERTIFICATE OF EXTRAORDINARY ABILITY", 105, 40, { align: "center" });

      doc.setFont("times", "italic");
      doc.setFontSize(12);
      doc.text("Danveer Judgeathon 2026 · #OnlyJudges", 105, 52, { align: "center" });

      doc.line(40, 58, 170, 58);

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text("This certifies that", 105, 75, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(18);
      doc.text(judgeName, 105, 90, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      const certBody = `has demonstrated extraordinary ability in the evaluation of technology projects through participation in the Danveer Judgeathon 2026. Their expert assessments have contributed to the advancement of innovation in the global technology ecosystem.

Classification: Extraordinary Stupidity (Self-Assessed)
Date of Recognition: ${formattedDate}
Reference: ${caseNumber}`;

      const certLines = doc.splitTextToSize(certBody, 130);
      doc.text(certLines, 105, 105, { align: "center" });

      doc.setFont("times", "italic");
      doc.setFontSize(10);
      doc.text("_______________________", 60, 180);
      doc.text("Program Director", 60, 188);
      doc.text("Danveer Technologies", 60, 195);

      doc.text("_______________________", 140, 180);
      doc.text("Head of Judging", 140, 188);
      doc.text("Judgeathon Committee", 140, 195);

      doc.setFontSize(6);
      doc.text(
        "This certificate is issued for entertainment purposes only. Expires April 2, 2026. Not a legal document.",
        105, 285, { align: "center" }
      );

      doc.save("Judge_Certificate.pdf");
    }
  }

  return (
    <>
      <Header />

      {/* HERO SECTION — dark navy with confetti */}
      <section className="relative overflow-hidden bg-[#002868] py-24 px-6">
        <ConfettiElements />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <IconCertificate size={64} color="#f5c400" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 font-serif"
          >
            Congratulations, {judgeName}!
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-blue-200 mb-8">
            Your extraordinary stupidity has been officially recognized
          </motion.p>

          {/* Animated APPROVED badge — pulsing */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-2.5"
            animate={{ boxShadow: ["0 0 0 0 rgba(52,211,153,0)", "0 0 0 8px rgba(52,211,153,0.1)", "0 0 0 0 rgba(52,211,153,0)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">
              Approved
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Red divider */}
      <div className="h-2 bg-[#B22234]" />

      {/* APPROVAL LETTER — premium cream */}
      <section className="py-16 px-6 bg-gray-50">
        <motion.div
          ref={letterRef}
          className="max-w-3xl mx-auto bg-[#faf8f3] shadow-xl shadow-black/5 p-10 md:p-14 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Letterhead */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Logo width={36} height={36} />
              <div>
                <p className="font-serif text-lg font-bold text-[#002868]">
                  Danveer Technologies, Inc.
                </p>
                <p className="text-xs text-gray-400">
                  Extraordinary Ability Recognition Program
                </p>
              </div>
            </div>

            {/* Gold wax seal */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-lg" />
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border-2 border-yellow-300/50" />
              <div className="relative z-10 text-center">
                <svg className="w-5 h-5 mx-auto mb-0.5 text-yellow-900/80" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[8px] font-black uppercase tracking-wider text-yellow-900/70 leading-none">
                  Danveer
                </span>
              </div>
            </div>
          </div>

          {/* Document title */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-2xl font-bold text-[#002868] tracking-wide">
              JUDGEATHON 2026
            </h1>
            <h2 className="font-serif text-xl text-[#002868] mt-1">
              APPROVAL NOTICE
            </h2>
          </div>

          {/* Case details */}
          <div className="grid grid-cols-2 gap-4 text-sm mb-10 bg-white/60 p-5 border border-amber-100/50">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono-accent">Reference</p>
              <p className="font-mono font-semibold text-[#002868]">{caseNumber}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono-accent">Notice Date</p>
              <p className="font-semibold text-[#002868]">{formattedDate}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono-accent">Recipient</p>
              <p className="font-semibold text-[#002868]">{judgeName}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono-accent">Classification</p>
              <p className="font-semibold text-[#002868]">Extraordinary Stupidity (Self-Assessed)</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono-accent">Issued By</p>
              <p className="font-semibold text-[#002868]">Danveer Technologies, Inc.</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono-accent">Valid Until</p>
              <p className="font-semibold text-[#002868]">April 2, 2026</p>
            </div>
          </div>

          {/* Letter body */}
          <div className="text-sm text-gray-700 space-y-4 leading-relaxed font-serif">
            <p>Dear {judgeName},</p>
            <p>
              Danveer Technologies, Inc. hereby confirms that your contributions as a judge in the
              Judgeathon 2026 have been reviewed and recognized as demonstrating extraordinary
              ability in technology evaluation.
            </p>
            <p>Your recognition entitles you to the following:</p>
            <ul className="list-none space-y-2 pl-2">
              <li className="flex items-center gap-2"><IconPrizes size={18} color="#f5c400" /> <strong>O1 Extraordinary Ability Letter</strong> — issued by Danveer Technologies</li>
              <li className="flex items-center gap-2"><IconArrow size={18} color="#002868" /> <strong>ICE Airways™ Flight Voucher</strong> — one-way to San Francisco (Seat O1-A, Class: Extraordinary)</li>
              <li className="flex items-center gap-2"><IconCertificate size={18} color="#002868" /> <strong>Certificate of Extraordinary Ability</strong> — suitable for framing</li>
              <li className="flex items-center gap-2"><IconPrizes size={18} color="#B22234" /> <strong>$185,000 offer letter</strong> — allocated for your sponsored position, SF</li>
            </ul>
            <p>
              Please retain this notice. Your ICE Airways™ boarding pass has been prepared and
              awaits your download below.
            </p>
          </div>

          {/* Signatures */}
          <div className="mt-12 flex justify-between items-end">
            <div className="text-sm">
              <p className="text-gray-400 italic font-serif">Sincerely,</p>
              <div className="mt-8">
                <p className="font-serif text-lg italic text-[#002868] mb-1">A. Mehta</p>
                <div className="border-t border-amber-300 pt-1 w-48">
                  <p className="font-semibold text-[#002868] text-sm">Program Director</p>
                  <p className="text-xs text-gray-400">Danveer Technologies, Inc.</p>
                </div>
              </div>
            </div>
            {/* Seal */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 shadow-md" />
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 border border-yellow-300/50" />
              <span className="relative z-10 text-[7px] font-black text-yellow-900/70 uppercase tracking-wider">
                Approved
              </span>
            </div>
          </div>

          {/* Fine print */}
          <div className="mt-10 pt-4 border-t border-amber-100/50">
            <p className="text-[7px] text-gray-400 leading-relaxed">
              This document is issued by Danveer Technologies, Inc. for entertainment purposes only as part of Judgeathon 2026. It does not constitute a legal visa, immigration document, flight ticket, employment offer, or government communication of any kind. No affiliation with any government agency. Valid until April 2, 2026. ICE Airways™ is a fictional airline brand. Danveer Technologies is a fictional company. Share responsibly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PERKS BANNER — navy theme */}
      <section className="bg-[#002868] py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#f5c400] mb-6 text-center font-mono-accent">
            Your Perks Package
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { title: "ICE Airways™ Flight", desc: "One-way · SFO · Seat O1-A", Icon: IconArrow },
              { title: "O1 Letter", desc: "Extraordinary ability recognized", Icon: IconPrizes },
              { title: "$185K Offer", desc: "San Francisco · Danveer HQ", Icon: IconCertificate },
            ].map((perk) => (
              <motion.div
                key={perk.title}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 p-5 text-center"
              >
                <div className="flex justify-center mb-3">
                  <perk.Icon size={36} color="#f5c400" />
                </div>
                <p className="font-semibold text-white text-sm">{perk.title}</p>
                <p className="text-blue-300 text-xs mt-1">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="h-1 bg-[#B22234]" />

      {/* DOWNLOAD BUTTONS */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          <motion.button
            onClick={() => downloadPDF("approval")}
            className="btn-primary py-4 text-sm"
            whileHover={{ y: -2, boxShadow: "0 4px 16px rgba(178,34,52,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Download Approval Letter
          </motion.button>
          <motion.button
            onClick={() => downloadPDF("flight")}
            className="bg-white border-2 border-[#002868] py-4 text-center hover:bg-[#002868] hover:text-white cursor-pointer font-semibold text-sm text-[#002868] transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            ICE Airways Boarding Pass
          </motion.button>
          <motion.button
            onClick={() => downloadPDF("certificate")}
            className="bg-white border-2 border-[#002868] py-4 text-center hover:bg-[#002868] hover:text-white cursor-pointer font-semibold text-sm text-[#002868] transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ability Certificate
          </motion.button>
        </div>
      </section>

      {/* TWEET CTA — navy bg with red button */}
      <section className="bg-[#002868] py-20 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <IconChallenges size={48} color="#f5c400" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-3 font-serif">
            The world deserves to know.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-blue-200 text-sm mb-10 max-w-md mx-auto">
            Screenshot the letter, download the boarding pass, and share it. Your extraordinary stupidity must not go unnoticed.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={shareTwitter}
              className="inline-flex items-center justify-center gap-2 bg-[#B22234] hover:bg-[#8b1a27] text-white font-bold py-4 px-10 rounded-full transition-colors text-sm"
              whileHover={{ y: -2, boxShadow: "0 4px 16px rgba(178,34,52,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Tweet My Approval
            </motion.button>
            <motion.button
              onClick={shareLinkedIn}
              className="bg-white/10 border border-white/20 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-colors text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Share on LinkedIn
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-2 bg-[#B22234]" />

      <Footer />
    </>
  );
}
