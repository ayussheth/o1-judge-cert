"use client";

import { motion } from "framer-motion";

export default function IconCertificate({ size = 40, color = "#002868" }: { size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Seal outer ring */}
      <motion.circle
        cx="24"
        cy="22"
        r="14"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity={0.1}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Inner ring */}
      <motion.circle
        cx="24"
        cy="22"
        r="9"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        animate={{ scale: [1, 0.95, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Star in center */}
      <motion.path
        d="M24 14 L26 19.5 L32 19.5 L27 23 L29 28.5 L24 25 L19 28.5 L21 23 L16 19.5 L22 19.5 Z"
        fill={color}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "22px" }}
      />
      {/* Ribbon tails */}
      <motion.path
        d="M18 34 L20 38 L22 34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M26 34 L28 38 L30 34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
    </motion.svg>
  );
}
