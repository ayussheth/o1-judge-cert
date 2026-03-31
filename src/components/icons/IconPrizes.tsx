"use client";

import { motion } from "framer-motion";

export default function IconPrizes({ size = 40, color = "#002868" }: { size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trophy cup */}
      <motion.path
        d="M16 10 H32 L30 28 H18 Z"
        fill={color}
        fillOpacity={0.15}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Left handle */}
      <motion.path
        d="M16 14 C8 14 8 22 16 22"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right handle */}
      <motion.path
        d="M32 14 C40 14 40 22 32 22"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Stem */}
      <rect x="22" y="28" width="4" height="6" fill={color} />
      {/* Base */}
      <rect x="16" y="34" width="16" height="4" rx="1" fill={color} />
      {/* Star */}
      <motion.path
        d="M24 15 L25.5 18 L29 18.5 L26.5 21 L27 24.5 L24 23 L21 24.5 L21.5 21 L19 18.5 L22.5 18 Z"
        fill={color}
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "24px", originY: "20px" }}
      />
      {/* Shine lines */}
      <motion.g
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="10" y1="6" x2="12" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="4" x2="24" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="6" x2="36" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}
