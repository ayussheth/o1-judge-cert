"use client";

import { motion } from "framer-motion";

export default function IconJudge({ size = 40, color = "#002868" }: { size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gavel head */}
      <motion.rect
        x="8"
        y="10"
        width="20"
        height="8"
        rx="2"
        fill={color}
        animate={{ rotate: [0, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "28px", originY: "14px" }}
      />
      {/* Handle */}
      <motion.rect
        x="16"
        y="18"
        width="4"
        height="18"
        rx="2"
        fill={color}
        animate={{ rotate: [0, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "18px", originY: "14px" }}
      />
      {/* Strike block */}
      <rect x="26" y="34" width="16" height="6" rx="1" fill={color} opacity={0.3} />
      {/* Impact lines */}
      <motion.g
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="30" y1="30" x2="32" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="30" x2="38" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="33" y1="29" x2="35" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}
