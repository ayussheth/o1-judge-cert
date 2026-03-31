"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "Innovation",
  "Technical Excellence",
  "User Experience",
  "Best Design",
  "Social Impact",
  "Best Use of AI",
  "Best Overall",
  "Other",
];

interface FormData {
  fullName: string;
  email: string;
  hackathonName: string;
  hackathonDate: string;
  country: string;
  category: string;
  description: string;
}

const STORAGE_KEY = "o1-judge-form";

export default function RegistrationForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    hackathonName: "",
    hackathonDate: "",
    country: "",
    category: CATEGORIES[0],
    description: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setForm(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // ignore
    }
  }, [form]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.hackathonName.trim())
      newErrors.hackathonName = "Hackathon name is required";
    if (!form.hackathonDate) newErrors.hackathonDate = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const params = new URLSearchParams({
      name: form.fullName,
      email: form.email,
      hackathon: form.hackathonName,
      date: form.hackathonDate,
      country: form.country,
      category: form.category,
      description: form.description,
    });

    router.push(`/certificate?${params.toString()}`);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 bg-white/5 border ${
      errors[field] ? "border-red-500/50" : "border-white/10"
    } rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all duration-200 font-[family-name:var(--font-inter)]`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          placeholder="John Doe"
          className={inputClass("fullName")}
        />
        {errors.fullName && (
          <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="john@example.com"
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Hackathon Name */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Hackathon Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={form.hackathonName}
          onChange={(e) => update("hackathonName", e.target.value)}
          placeholder="EthGlobal NYC 2024"
          className={inputClass("hackathonName")}
        />
        {errors.hackathonName && (
          <p className="text-red-400 text-xs mt-1">{errors.hackathonName}</p>
        )}
      </div>

      {/* Hackathon Date */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Hackathon Date <span className="text-red-400">*</span>
        </label>
        <input
          type="date"
          value={form.hackathonDate}
          onChange={(e) => update("hackathonDate", e.target.value)}
          className={inputClass("hackathonDate")}
        />
        {errors.hackathonDate && (
          <p className="text-red-400 text-xs mt-1">{errors.hackathonDate}</p>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Country
        </label>
        <input
          type="text"
          value={form.country}
          onChange={(e) => update("country", e.target.value)}
          placeholder="United States"
          className={inputClass("country")}
        />
      </div>

      {/* Judging Category */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Judging Category
        </label>
        <select
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className={`${inputClass("category")} appearance-none cursor-pointer`}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat} className="bg-[#1a1a2e]">
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-white/70 mb-2">
          Brief Description of Your Judging Role
        </label>
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="Evaluated 50+ projects across innovation, technical merit, and user experience categories..."
          rows={3}
          className={`${inputClass("description")} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5 font-[family-name:var(--font-space-grotesk)]"
      >
        Generate Certificate
      </button>
    </form>
  );
}
