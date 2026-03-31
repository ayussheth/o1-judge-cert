"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResultsPage() {
  const [judgeName, setJudgeName] = useState("Applicant");
  const [judgeEmail, setJudgeEmail] = useState("");
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("judge");
    if (stored) {
      const data = JSON.parse(stored);
      setJudgeName(data.name || "Applicant");
      setJudgeEmail(data.email || "");
    }
  }, []);

  const caseNumber = `SRC-26-${Math.floor(100 + Math.random() * 900)}-${Math.floor(10000 + Math.random() * 90000)}`;
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function shareTwitter() {
    const text = encodeURIComponent(
      `Just got approved for the O1 Visa by @danveertec 🚀 Danveer Technologies recognized my extraordinary ability in tech. Expires April 2. Check it out: https://o1-judge-cert.vercel.app #O1Visa #DanveerTech #FakeButFunny`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  }

  function shareLinkedIn() {
    const text = encodeURIComponent(
      `Excited to share that I've been approved for the O1 Visa Judge Sponsorship Program through Devfolio. My contributions as a hackathon judge have been recognized as demonstrating extraordinary ability in my field.`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://devfolio.co")}&summary=${text}`,
      "_blank"
    );
  }

  async function downloadPDF(type: "approval" | "flight" | "certificate") {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();

    if (type === "approval") {
      doc.setFont("times", "bold");
      doc.setFontSize(14);
      doc.text("U.S. Citizenship and Immigration Services", 105, 25, {
        align: "center",
      });
      doc.setFont("times", "normal");
      doc.setFontSize(10);
      doc.text("Department of Homeland Security", 105, 32, {
        align: "center",
      });
      doc.line(20, 36, 190, 36);
      doc.line(20, 37, 190, 37);

      doc.setFontSize(12);
      doc.setFont("times", "bold");
      doc.text("I-140 IMMIGRANT PETITION FOR ALIEN WORKERS", 105, 48, {
        align: "center",
      });
      doc.text("APPROVAL NOTICE", 105, 56, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(10);
      const y = 70;
      doc.text(`Receipt Number: ${caseNumber}`, 20, y);
      doc.text(`Notice Date: ${formattedDate}`, 20, y + 8);
      doc.text(`Beneficiary: ${judgeName}`, 20, y + 16);
      doc.text(
        "Classification: O-1A Extraordinary Ability (Self-Assessed)",
        20,
        y + 24
      );
      doc.text("Expiry Date: April 2, 2026", 20, y + 32);
      doc.text("Petitioner: Danveer Technologies, Inc.", 20, y + 40);

      doc.setFontSize(10);
      const textY = y + 56;
      doc.text("Dear " + judgeName + ",", 20, textY);
      const body = `This notice confirms the approval of the above-referenced petition filed on your behalf by Devfolio Technologies, Inc. for classification as an alien of extraordinary ability in the field of technology evaluation and institutional assessment.

Your contributions as a judge in the Devfolio Hackathon Evaluation Program have been reviewed and determined to meet the evidentiary criteria for extraordinary ability under 8 CFR 204.5(h)(3).

This approval is valid for travel commencing April 1, 2026.

Sincerely,
Immigration Services Officer
USCIS Texas Service Center`;

      const lines = doc.splitTextToSize(body, 170);
      doc.text(lines, 20, textY + 10);

      doc.setFontSize(6);
      doc.text(
        "Valid for April 2nd, 2026 travel only. ICE Airways™ One-Way Ticket to San Francisco included.",
        105,
        285,
        { align: "center" }
      );

      doc.save("I-140_Approval_Notice.pdf");
    } else if (type === "flight") {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("ICE Airways", 105, 30, { align: "center" });
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Immigration & Customs Enforcement Travel Division", 105, 37, {
        align: "center",
      });
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

      doc.setFontSize(6);
      doc.text(
        "This voucher is non-transferable and valid exclusively on April 2nd, 2026. No actual flight is included.",
        105,
        285,
        { align: "center" }
      );

      doc.save("ICE_Airways_Flight_Voucher.pdf");
    } else if (type === "certificate") {
      doc.setFont("times", "bold");
      doc.setFontSize(20);
      doc.text("CERTIFICATE OF EXTRAORDINARY ABILITY", 105, 40, {
        align: "center",
      });

      doc.setFont("times", "italic");
      doc.setFontSize(12);
      doc.text("Danveer O1 Visa Judge Sponsorship Program", 105, 52, {
        align: "center",
      });

      doc.line(40, 58, 170, 58);

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text("This certifies that", 105, 75, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(18);
      doc.text(judgeName, 105, 90, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      const certBody = `has demonstrated extraordinary ability in the evaluation of technology projects through participation in the Danveer Judging Program. Their expert assessments have contributed to the advancement of innovation in the global technology ecosystem.

Visa Category: Extraordinary Ability (Self-Assessed)
Date of Recognition: ${formattedDate}
Case Reference: ${caseNumber}`;

      const certLines = doc.splitTextToSize(certBody, 130);
      doc.text(certLines, 105, 105, { align: "center" });

      doc.setFont("times", "italic");
      doc.setFontSize(10);
      doc.text("_______________________", 60, 180);
      doc.text("Program Director", 60, 188);
      doc.text("Danveer Technologies", 60, 195);

      doc.text("_______________________", 140, 180);
      doc.text("Immigration Liaison", 140, 188);
      doc.text("USCIS Partnership Office", 140, 195);

      doc.setFontSize(6);
      doc.text(
        "This certificate is ceremonial and does not constitute legal immigration documentation. Valid April 2nd, 2026 only.",
        105,
        285,
        { align: "center" }
      );
    } else {
      doc.setFont("times", "bold");
      doc.setFontSize(20);
      doc.text("CERTIFICATE OF EXTRAORDINARY ABILITY", 105, 40, {
        align: "center",
      });

      doc.setFont("times", "italic");
      doc.setFontSize(12);
      doc.text("Danveer O1 Visa Judge Sponsorship Program", 105, 52, {
        align: "center",
      });

      doc.line(40, 58, 170, 58);

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      doc.text("This certifies that", 105, 75, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(18);
      doc.text(judgeName, 105, 90, { align: "center" });

      doc.setFont("times", "normal");
      doc.setFontSize(11);
      const certBody = `has demonstrated extraordinary ability in the evaluation of technology projects through participation in the Devfolio Hackathon Judging Program. Their expert assessments have contributed to the advancement of innovation in the global technology ecosystem.

Visa Category: Extraordinary Ability (Self-Assessed)
Date of Recognition: ${formattedDate}
Case Reference: ${caseNumber}`;

      const certLines = doc.splitTextToSize(certBody, 130);
      doc.text(certLines, 105, 105, { align: "center" });

      doc.setFont("times", "italic");
      doc.setFontSize(10);
      doc.text("_______________________", 60, 180);
      doc.text("Program Director", 60, 188);
      doc.text("Devfolio Technologies", 60, 195);

      doc.text("_______________________", 140, 180);
      doc.text("Immigration Liaison", 140, 188);
      doc.text("USCIS Partnership Office", 140, 195);

      doc.setFontSize(6);
      doc.text(
        "This certificate is ceremonial and does not constitute legal immigration documentation. Valid April 1st only.",
        105,
        285,
        { align: "center" }
      );

      doc.save("Judge_Certificate.pdf");
    }
  }

  return (
    <>
      <Header />
      <main className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Success banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-green-800 font-medium text-sm">
              Evaluation Complete. Your sponsorship application has been
              processed.
            </p>
          </div>

          {/* USCIS-style letter */}
          <div
            ref={letterRef}
            className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-8"
          >
            {/* Letterhead */}
            <div className="uscis-header mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-400">
                    United States Citizenship and Immigration Services
                  </p>
                  <p className="text-xs text-gray-400">
                    Department of Homeland Security
                  </p>
                </div>
                <div className="certificate-seal">
                  <span>DHS USCIS</span>
                </div>
              </div>
            </div>

            {/* Document title */}
            <div className="text-center mb-8">
              <h1 className="text-xl font-bold text-[var(--color-navy)] tracking-wide">
                I-140 LABOR CERTIFICATION
              </h1>
              <h2 className="text-lg font-semibold text-[var(--color-navy)]">
                APPROVAL NOTICE
              </h2>
            </div>

            {/* Case details */}
            <div className="grid grid-cols-2 gap-4 text-sm mb-8 bg-gray-50 p-4 rounded">
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Receipt Number
                </p>
                <p className="font-mono font-medium text-[var(--color-navy)]">
                  {caseNumber}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Notice Date</p>
                <p className="font-medium text-[var(--color-navy)]">
                  {formattedDate}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Beneficiary</p>
                <p className="font-medium text-[var(--color-navy)]">
                  {judgeName}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Classification
                </p>
                <p className="font-medium text-[var(--color-navy)]">
                  O-1A Extraordinary Ability
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Petitioner</p>
                <p className="font-medium text-[var(--color-navy)]">
                  Danveer Technologies, Inc.
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Expiry Date
                </p>
                <p className="font-medium text-[var(--color-navy)]">
                  April 2, 2026
                </p>
              </div>
            </div>

            {/* Letter body */}
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p>Dear {judgeName},</p>
              <p>
                This notice confirms the approval of the above-referenced
                petition filed on your behalf by Danveer Technologies, Inc. for
                classification as an alien of extraordinary ability in the field
                of technology evaluation and institutional assessment.
              </p>
              <p>
                Your contributions as a judge in the Danveer Project
                Evaluation Program have been reviewed and determined to meet the
                evidentiary criteria for extraordinary ability under 8 CFR
                204.5(h)(3), specifically:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Participation as a judge of the work of others in the field
                </li>
                <li>
                  Original contributions of major significance to the field
                </li>
                <li>
                  Evidence of a high salary or remuneration relative to others
                </li>
              </ul>
              <p>
                Your extraordinary ability has been recognized. A compensation
                package of $185,000 per annum has been allocated for the
                sponsored position based in San Francisco, California.
              </p>
              <p>
                Please retain this notice for your records. Consular processing
                instructions will follow under separate cover.
              </p>
            </div>

            {/* Signatures */}
            <div className="mt-10 flex justify-between items-end">
              <div className="text-sm">
                <p className="text-gray-400 italic">Sincerely,</p>
                <div className="mt-6 border-t border-gray-300 pt-1 w-48">
                  <p className="font-medium text-[var(--color-navy)]">
                    Immigration Services Officer
                  </p>
                  <p className="text-xs text-gray-400">
                    USCIS Texas Service Center
                  </p>
                </div>
              </div>
              <div className="certificate-seal">
                <span>APPROVED</span>
              </div>
            </div>

            {/* Fine print Easter eggs */}
            <div className="mt-10 pt-4 border-t border-gray-100">
              <p className="text-[6px] text-gray-300 leading-relaxed">
                Visa Category: Extraordinary Ability (Self-Assessed). This
                approval includes one (1) complimentary ICE Airways&trade;
                one-way ticket to San Francisco, CA. Travel class: Extraordinary.
                Seat assignment: O1-A. Valid for April 2nd, 2026 only. This
                notice does not constitute a legally binding immigration
                document and is issued in partnership with the Danveer April
                Program Initiative. Beneficiary assumes all responsibility for
                sharing on social media. Case processing powered by
                danveer.co. Not affiliated with any actual government agency.
              </p>
            </div>
          </div>

          {/* Download buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => downloadPDF("approval")}
              className="btn-primary py-3"
            >
              Download I-140 Approval
            </button>
            <button
              onClick={() => downloadPDF("flight")}
              className="card text-center hover:border-[var(--color-primary)] cursor-pointer font-medium text-sm text-[var(--color-navy)]"
            >
              Download Flight Voucher
            </button>
            <button
              onClick={() => downloadPDF("certificate")}
              className="card text-center hover:border-[var(--color-primary)] cursor-pointer font-medium text-sm text-[var(--color-navy)]"
            >
              Download Judge Certificate
            </button>
          </div>

          {/* Share - Tweet Highlighted */}
          <div className="text-center bg-blue-50 rounded-lg p-8 border border-blue-200">
            <p className="text-sm text-[var(--color-navy)] font-semibold mb-4">
              🚀 Share Your Approval Letter on Twitter
            </p>
            <p className="text-xs text-gray-600 mb-6">
              Screenshot the letter above and share it with your followers. Link to the prank automatically included.
            </p>
            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={shareTwitter}
                className="btn-primary px-8 py-3 w-full sm:w-auto"
              >
                Tweet Your Approval Letter
              </button>
              <button
                onClick={shareLinkedIn}
                className="card px-6 py-3 text-sm font-medium text-[var(--color-navy)] hover:border-[var(--color-primary)] cursor-pointer w-full sm:w-auto"
              >
                Share on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
