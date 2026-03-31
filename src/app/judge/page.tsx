"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const CHALLENGES = [
  {
    id: 1,
    type: "rank",
    emoji: "☁️",
    instruction: "CAPTCHA CHALLENGE 1 OF 5",
    question: "Rank these clouds by intelligence.",
    subtext: "This helps us verify you are not a cloud.",
    options: [
      { id: "a", label: "Cloud A", description: "Cumulus. Confident. Has a newsletter.", img: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=300&h=200&fit=crop" },
      { id: "b", label: "Cloud B", description: "Stratus. Overthinks everything. Probably a PM.", img: "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=300&h=200&fit=crop" },
      { id: "c", label: "Cloud C", description: "Cumulonimbus. Unhinged. O1 eligible.", img: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=300&h=200&fit=crop" },
    ],
    answerType: "rank",
    correctHint: "The stormiest cloud always gets the visa.",
  },
  {
    id: 2,
    type: "choice",
    emoji: "🐦",
    instruction: "CAPTCHA CHALLENGE 2 OF 5",
    question: "Which of these pigeons demonstrates extraordinary ability?",
    subtext: "Select all that apply. There is only one correct answer. Or maybe none. We don't know either.",
    options: [
      { id: "a", label: "Kevin", description: "Has been to 14 countries. Mostly airports.", img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=300&h=200&fit=crop&q=80" },
      { id: "b", label: "Priya", description: "Delivered mail pre-internet. Awaiting O1 since 1987.", img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=200&fit=crop" },
      { id: "c", label: "Chad", description: "Thought leader. Published 3 Medium posts.", img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=300&h=200&fit=crop" },
    ],
    answerType: "single",
    correctHint: "Priya has more extraordinary ability in her left wing than you have in your entire LinkedIn.",
  },
  {
    id: 3,
    type: "rating",
    emoji: "🤝",
    instruction: "CAPTCHA CHALLENGE 3 OF 5",
    question: "Rate this handshake energy. Be honest.",
    subtext: "Your O1 application will be partially evaluated based on the accuracy of this rating.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=350&fit=crop",
    criteria: ["Grip Confidence", "Eye Contact (implied)", "Hustle Aura", "Would VC fund these hands?"],
    answerType: "multi-rating",
  },
  {
    id: 4,
    type: "choice",
    emoji: "🤖",
    instruction: "CAPTCHA CHALLENGE 4 OF 5",
    question: "How many of these LinkedIn bios were written by ChatGPT?",
    subtext: "Hint: All of them were written by humans. Or were they.",
    options: [
      { id: "a", label: "0", description: "Pure human delusion" },
      { id: "b", label: "2", description: "The optimistic answer" },
      { id: "c", label: "All of them", description: "The correct answer" },
      { id: "d", label: "What is LinkedIn", description: "Extraordinary ability detected" },
    ],
    bios: [
      "🚀 Passionate builder | Disrupting disruption | Ex-Google, Ex-Meta, Ex-sanity | Building the future one pivot at a time",
      "Results-driven thought leader leveraging synergistic frameworks to unlock exponential value creation in the B2B SaaS space.",
      "I help founders find their why so they can build their what and monetize their how. DMs open. No pitches please (send pitches).",
    ],
    answerType: "single",
    correctHint: "The answer is always all of them.",
  },
  {
    id: 5,
    type: "choice",
    emoji: "💼",
    instruction: "CAPTCHA CHALLENGE 5 OF 5",
    question: "Which of these men is most likely to receive an O1 visa?",
    subtext: "Judge based on vibes alone. Do not think. Trust the process.",
    options: [
      { id: "a", label: "Rajesh", description: "17 YOE. 3 patents. Publishes research. Volunteers.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
      { id: "b", label: "Brad", description: "Started a podcast. 1,200 LinkedIn followers. Has opinions.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
      { id: "c", label: "Vikram", description: "Extraordinary ability in being ordinary. Self-assessed.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" },
    ],
    answerType: "single",
    correctHint: "Trick question. Brad got it.",
  },
];

const ACCENT_COLORS = [
  "border-l-indigo-400",
  "border-l-violet-400",
  "border-l-pink-400",
  "border-l-emerald-400",
  "border-l-amber-400",
];

export default function JudgePage() {
  const router = useRouter();
  const [judgeName, setJudgeName] = useState("Judge");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Record<string, number | string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("judge");
    if (stored) {
      const data = JSON.parse(stored);
      setJudgeName(data.name || "Judge");
    }
  }, []);

  const challenge = CHALLENGES[current];
  const totalAnswered = Object.keys(answers).length;

  function setRating(challengeId: number, criterion: string, val: number) {
    setAnswers(prev => ({
      ...prev,
      [challengeId]: { ...prev[challengeId], [criterion]: val },
    }));
  }

  function setSingleAnswer(challengeId: number, val: string) {
    setAnswers(prev => ({ ...prev, [challengeId]: { answer: val } }));
  }

  function setRankAnswer(challengeId: number, val: string) {
    setAnswers(prev => ({ ...prev, [challengeId]: { answer: val } }));
  }

  function isChallengeAnswered(idx: number): boolean {
    const c = CHALLENGES[idx];
    const ans = answers[c.id];
    if (!ans) return false;
    if (c.answerType === "multi-rating") {
      return c.criteria ? c.criteria.every(cr => (ans[cr] as number) > 0) : false;
    }
    return !!ans.answer;
  }

  function handleNext() {
    setRevealed(false);
    if (current < CHALLENGES.length - 1) {
      setCurrent(current + 1);
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    setSubmitting(true);
    sessionStorage.setItem("scores", JSON.stringify(answers));
    setTimeout(() => router.push("/results"), 1200);
  }

  const currentAnswered = isChallengeAnswered(current);

  return (
    <>
      <Header />

      {/* Sticky progress bar */}
      <div className="sticky top-[104px] z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">
            Judging as <span className="text-indigo-600 font-bold">{judgeName}</span>
          </p>
          <div className="flex items-center gap-2">
            {CHALLENGES.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i < current ? "bg-indigo-500" :
                  i === current ? "bg-indigo-400 ring-2 ring-indigo-200" :
                  "bg-slate-200"
                }`}
              />
            ))}
            <span className="text-xs text-slate-400 ml-2">{current + 1} / {CHALLENGES.length}</span>
          </div>
        </div>
        <div className="h-1 bg-slate-100">
          <div
            className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"
            style={{ width: `${((current + (currentAnswered ? 1 : 0)) / CHALLENGES.length) * 100}%` }}
          />
        </div>
      </div>

      <main className="py-12 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`bg-white rounded-2xl border-l-4 ${ACCENT_COLORS[current]} shadow-sm overflow-hidden mb-6`}>
                {/* Challenge header */}
                <div className="bg-slate-900 px-8 py-6 text-white">
                  <p className="text-xs font-bold tracking-widest text-indigo-400 mb-2">{challenge.instruction}</p>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{challenge.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-black leading-tight mb-1">{challenge.question}</h2>
                      <p className="text-slate-400 text-sm">{challenge.subtext}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">

                  {/* Image challenges (clouds, pigeons, handshake) */}
                  {challenge.type === "rank" && (
                    <div className="space-y-4">
                      <p className="text-sm text-slate-500 mb-4">Select the most intelligent cloud:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {challenge.options?.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setRankAnswer(challenge.id, opt.id)}
                            className={`rounded-xl overflow-hidden border-2 transition-all text-left ${
                              answers[challenge.id]?.answer === opt.id
                                ? "border-indigo-500 ring-2 ring-indigo-100"
                                : "border-slate-100 hover:border-indigo-200"
                            }`}
                          >
                            <img src={opt.img} alt={opt.label} className="w-full h-36 object-cover" />
                            <div className="p-3">
                              <p className="font-bold text-sm text-slate-900">{opt.label}</p>
                              <p className="text-xs text-slate-400 mt-0.5">{opt.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* LinkedIn bios challenge */}
                  {challenge.id === 4 && (
                    <div className="mb-6 space-y-3">
                      {challenge.bios?.map((bio, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <p className="text-xs font-mono text-slate-600 leading-relaxed">&ldquo;{bio}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Person profile challenge */}
                  {challenge.id === 5 && challenge.options && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {challenge.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSingleAnswer(challenge.id, opt.id)}
                          className={`rounded-xl overflow-hidden border-2 transition-all text-center ${
                            answers[challenge.id]?.answer === opt.id
                              ? "border-indigo-500 ring-2 ring-indigo-100"
                              : "border-slate-100 hover:border-indigo-200"
                          }`}
                        >
                          {opt.img && <img src={opt.img} alt={opt.label} className="w-full h-40 object-cover object-top" />}
                          <div className="p-3">
                            <p className="font-bold text-sm text-slate-900">{opt.label}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{opt.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Pigeon challenge */}
                  {challenge.id === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {challenge.options?.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSingleAnswer(challenge.id, opt.id)}
                          className={`rounded-xl overflow-hidden border-2 transition-all text-left ${
                            answers[challenge.id]?.answer === opt.id
                              ? "border-indigo-500 ring-2 ring-indigo-100"
                              : "border-slate-100 hover:border-indigo-200"
                          }`}
                        >
                          <img src={opt.img} alt={opt.label} className="w-full h-36 object-cover" />
                          <div className="p-3">
                            <p className="font-bold text-sm text-slate-900">{opt.label}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{opt.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Handshake rating challenge */}
                  {challenge.type === "rating" && challenge.img && (
                    <div>
                      <img src={challenge.img} alt="handshake" className="w-full h-52 object-cover rounded-xl mb-6" />
                      <div className="space-y-5">
                        {challenge.criteria?.map((criterion) => (
                          <div key={criterion}>
                            <div className="flex justify-between mb-2">
                              <label className="text-sm font-semibold text-slate-700">{criterion}</label>
                              <span className="text-sm font-bold text-indigo-600">
                                {answers[challenge.id]?.[criterion] ? `${answers[challenge.id][criterion]}/10` : "—"}
                              </span>
                            </div>
                            <div className="flex gap-1.5 flex-wrap">
                              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                                <button
                                  key={n}
                                  onClick={() => setRating(challenge.id, criterion, n)}
                                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                                    answers[challenge.id]?.[criterion] === n
                                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                      : "bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-700"
                                  }`}
                                >
                                  {n}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Text-only multiple choice (LinkedIn bios) */}
                  {challenge.id === 4 && challenge.options && (
                    <div className="grid grid-cols-2 gap-3">
                      {challenge.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSingleAnswer(challenge.id, opt.id)}
                          className={`rounded-xl p-4 border-2 transition-all text-left ${
                            answers[challenge.id]?.answer === opt.id
                              ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100"
                              : "border-slate-100 hover:border-indigo-200 bg-white"
                          }`}
                        >
                          <p className="font-bold text-slate-900">{opt.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{opt.description}</p>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Reveal hint */}
                  {currentAnswered && challenge.correctHint && !revealed && (
                    <motion.button
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 text-xs text-indigo-500 underline underline-offset-2 cursor-pointer"
                      onClick={() => setRevealed(true)}
                    >
                      Why is this the right answer?
                    </motion.button>
                  )}

                  {revealed && challenge.correctHint && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4"
                    >
                      <p className="text-sm text-amber-800 font-medium">💡 {challenge.correctHint}</p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Next / Submit button */}
              <div className="flex justify-between items-center">
                <p className="text-xs text-slate-400">
                  {totalAnswered} of {CHALLENGES.length} challenges completed
                </p>
                <button
                  onClick={handleNext}
                  disabled={!currentAnswered || submitting}
                  className="btn-primary py-3 px-10 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting
                    ? "Processing your stupidity..."
                    : current < CHALLENGES.length - 1
                    ? "Next Challenge →"
                    : "Submit & Claim O1 →"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
