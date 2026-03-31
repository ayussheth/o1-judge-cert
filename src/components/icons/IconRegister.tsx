"use client";

import { motion } from "framer-motion";

export default function IconRegister({ size = 40, color = "#002868" }: { size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clipboard body */}
      <rect x="10" y="8" width="28" height="34" rx="3" fill={color} opacity={0.15} />
      <rect x="10" y="8" width="28" height="34" rx="3" stroke={color} strokeWidth="2" fill="none" />
      {/* Clipboard clip */}
      <rect x="18" y="4" width="12" height="8" rx="2" fill={color} />
      {/* Lines animating in */}
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="16"
          y={20 + i * 7}
          width={i === 2 ? 10 : 16}
          height="3"
          rx="1.5"
          fill={color}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.6 }}
          transition={{
            duration: 0.4,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeOut",
          }}
          style={{ originX: "0" }}
        />
      ))}
      {/* Checkmark */}
      <motion.path
        d="M30 22 L33 25 L38 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={{ pathLength: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatDelay: 2, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
