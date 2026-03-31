"use client";

import { CertificateData, formatDate } from "@/utils/certificateGenerator";

interface Props {
  data: CertificateData;
}

export default function CertificatePreview({ data }: Props) {
  return (
    <div
      id="certificate"
      className="w-[794px] h-[1123px] bg-[#fffef8] relative overflow-hidden"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {/* Gold border */}
      <div className="absolute inset-3 border-2 border-[#c9a84c]" />
      <div className="absolute inset-5 border border-[#c9a84c]/40" />

      {/* Corner ornaments */}
      {[
        "top-6 left-6",
        "top-6 right-6 rotate-90",
        "bottom-6 left-6 -rotate-90",
        "bottom-6 right-6 rotate-180",
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M0 0 L40 0 L40 8 L8 8 L8 40 L0 40 Z"
              fill="#c9a84c"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center px-16 pt-16 pb-12">
        {/* Seal/Badge */}
        <div className="relative mb-6">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            className="drop-shadow-sm"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#c9a84c"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#c9a84c"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Star pattern */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="40"
                y1="12"
                x2="40"
                y2="18"
                stroke="#c9a84c"
                strokeWidth="1.5"
                transform={`rotate(${angle} 40 40)`}
              />
            ))}
            <text
              x="40"
              y="37"
              textAnchor="middle"
              fill="#c9a84c"
              fontSize="8"
              fontFamily="Georgia, serif"
              fontWeight="bold"
            >
              OFFICIAL
            </text>
            <text
              x="40"
              y="48"
              textAnchor="middle"
              fill="#c9a84c"
              fontSize="7"
              fontFamily="Georgia, serif"
            >
              JUDGE
            </text>
          </svg>
        </div>

        {/* Header */}
        <h1
          className="text-[#1a1a2e] text-3xl tracking-[0.15em] font-bold mb-1"
          style={{ fontFamily: "Georgia, serif" }}
        >
          CERTIFICATE
        </h1>
        <p className="text-[#666] text-sm tracking-[0.3em] uppercase mb-8">
          Of Judging Appointment
        </p>

        {/* Divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mb-8" />

        {/* Body text */}
        <p className="text-[#555] text-base mb-4 text-center">
          This is to certify that
        </p>

        {/* Judge Name */}
        <h2
          className="text-[#1a1a2e] text-4xl font-bold mb-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          {data.name || "Judge Name"}
        </h2>

        {/* Underline */}
        <div className="w-64 h-px bg-[#c9a84c]/50 mb-8" />

        {/* Certificate body */}
        <div className="text-center text-[#444] text-base leading-relaxed max-w-lg space-y-4">
          <p>
            was duly appointed and served as an{" "}
            <strong className="text-[#1a1a2e]">Official Judge</strong> for
          </p>

          <p className="text-2xl font-bold text-[#1a1a2e]">
            {data.hackathon || "Hackathon Name"}
          </p>

          <p>
            held on{" "}
            <strong className="text-[#1a1a2e]">
              {formatDate(data.date) || "Event Date"}
            </strong>
            {data.country && (
              <>
                {" "}
                in <strong className="text-[#1a1a2e]">{data.country}</strong>
              </>
            )}
          </p>

          {data.category && (
            <p>
              in the category of{" "}
              <strong className="text-[#1a1a2e]">{data.category}</strong>
            </p>
          )}

          {data.description && (
            <p className="text-sm text-[#666] italic mt-4 px-8">
              &ldquo;{data.description}&rdquo;
            </p>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mb-8" />

        {/* Footer */}
        <div className="w-full flex justify-between items-end px-8">
          <div className="text-center">
            <div className="w-40 h-px bg-[#999] mb-2" />
            <p className="text-[#666] text-xs">Hackathon Organizer</p>
          </div>

          <div className="text-center">
            <p className="text-[#999] text-[10px] tracking-wider">
              CERT-{data.date?.replace(/-/g, "")}-
              {data.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase() || "XX"}
            </p>
            <p className="text-[#bbb] text-[9px] mt-1">
              Issued {formatDate(new Date().toISOString().split("T")[0])}
            </p>
          </div>

          <div className="text-center">
            <div className="w-40 h-px bg-[#999] mb-2" />
            <p className="text-[#666] text-xs">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
