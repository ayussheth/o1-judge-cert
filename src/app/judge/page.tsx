"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  name: string;
  team: string[];
  hackathon: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    name: "AI Content Moderation Engine",
    team: ["Sarah Park", "Omar Elgamal"],
    hackathon: "Devfolio HackStorm 2025",
    description:
      "Multi-modal content moderation system combining vision transformers with LLM-based context analysis. Achieves 97.3% accuracy on hate speech detection while reducing false positives by 40% compared to existing solutions.",
    tags: ["Python", "PyTorch", "FastAPI"],
  },
  {
    name: "Web3 Social Graph",
    team: ["Priya Sharma", "Alex Volkov", "Kim Tanaka", "Jordan Reeves"],
    hackathon: "Devfolio BuildAssembly 2025",
    description:
      "An open social graph protocol that maps on-chain identity relationships across EVM chains. Includes a recommendation engine for community governance participation based on expertise signals and contribution history.",
    tags: ["TypeScript", "GraphQL", "Polygon"],
  },
  {
    name: "Neural Code Review Assistant",
    team: ["David Liu", "Amara Osei"],
    hackathon: "Devfolio CodeSprint 2025",
    description:
      "IDE plugin that performs real-time code review using fine-tuned models trained on 2M+ merged pull requests. Provides security vulnerability detection, performance suggestions, and architectural feedback inline.",
    tags: ["Rust", "WASM", "GPT-4"],
  },
  {
    name: "ClimateFi Carbon Credits",
    team: ["Elena Rossi", "Tariq Hassan", "Jun Wei"],
    hackathon: "Devfolio EcoHack 2025",
    description:
      "Tokenized carbon credit marketplace with satellite-verified reforestation tracking. Uses IoT sensor networks for real-time carbon sequestration measurement and automated credit issuance via smart contracts.",
    tags: ["Solidity", "IoT", "Next.js"],
  },
  {
    name: "DeFi Insurance Protocol",
    team: ["Maya Chen", "Raj Krishnan", "Leo Müller"],
    hackathon: "Devfolio FinanceHack 2025",
    description:
      "A decentralized insurance protocol that uses on-chain risk modeling to provide parametric coverage for smart contract failures. Features automated claims processing via oracle-verified events and a novel bonding curve for premium pricing.",
    tags: ["Solidity", "Chainlink", "React"],
  },
];

const CRITERIA = [
  "Innovation",
  "Technical Execution",
  "Market Viability",
  "Design Quality",
];

interface ProjectScore {
  scores: Record<string, number>;
  comment: string;
}

type Scores = Record<number, ProjectScore>;

export default function JudgePage() {
  const router = useRouter();
  const [judgeName, setJudgeName] = useState("");
  const [scores, setScores] = useState<Scores>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("judge");
    if (stored) {
      const data = JSON.parse(stored);
      setJudgeName(data.name);
    }
  }, []);

  function setScore(projectIdx: number, criterion: string, value: number) {
    setScores((prev) => ({
      ...prev,
      [projectIdx]: {
        ...prev[projectIdx],
        scores: { ...prev[projectIdx]?.scores, [criterion]: value },
      },
    }));
  }

  function setComment(projectIdx: number, value: string) {
    setScores((prev) => ({
      ...prev,
      [projectIdx]: {
        ...prev[projectIdx],
        comment: value,
      },
    }));
  }

  function allScored(): boolean {
    return PROJECTS.every((_, idx) =>
      CRITERIA.every((c) => scores[idx]?.scores?.[c] > 0)
    );
  }

  function handleSubmit() {
    if (!allScored()) return;
    setSubmitting(true);
    sessionStorage.setItem("scores", JSON.stringify(scores));
    setTimeout(() => {
      router.push("/results");
    }, 1200);
  }

  return (
    <>
      <Header />
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-primary)] mb-2">
              Judging Portal
            </p>
            <h1 className="text-3xl font-bold text-[var(--color-navy)] mb-2">
              {judgeName ? `Welcome, ${judgeName}` : "Project Evaluation"}
            </h1>
            <p className="text-gray-500">
              Rate each project across four criteria. All scores are required
              before submission. Your evaluations will be used in your O1 visa
              extraordinary ability assessment.
            </p>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="card">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--color-navy)]">
                      {project.name}
                    </h2>
                    <p className="text-xs text-[var(--color-primary)] font-medium">
                      {project.hackathon}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Team: {project.team.join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {CRITERIA.map((criterion) => (
                    <div key={criterion}>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        {criterion}
                      </label>
                      <select
                        className="input-field text-sm py-2"
                        value={scores[idx]?.scores?.[criterion] || ""}
                        onChange={(e) =>
                          setScore(idx, criterion, parseInt(e.target.value))
                        }
                      >
                        <option value="">--</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  ))}
                </div>

                <textarea
                  className="input-field text-sm resize-none"
                  rows={2}
                  placeholder="Comments (optional)"
                  value={scores[idx]?.comment || ""}
                  onChange={(e) => setComment(idx, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              disabled={!allScored() || submitting}
              className="btn-primary py-3 px-10 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Processing Evaluations..."
                : "Submit All Evaluations"}
            </button>
            {!allScored() && (
              <p className="text-xs text-gray-400 mt-3">
                Please rate all criteria for every project before submitting.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
