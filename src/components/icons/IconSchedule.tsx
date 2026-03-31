"use client";

import { motion } from "framer-motion";

export default function IconSchedule({ size = 40, color = "#002868" }: { size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Calendar body */}
      <rect x="6" y="12" width="36" height="30" rx="3" fill={color} fillOpacity={0.1} stroke={color} strokeWidth="2" />
      {/* Top bar */}
      <rect x="6" y="12" width="36" height="10" rx="3" fill={color} />
      {/* Rings */}
      <rect x="15" y="8" width="3" height="8" rx="1.5" fill={color} />
      <rect x="30" y="8" width="3" height="8" rx="1.5" fill={color} />
      {/* Grid dots - animated */}
      {[
        [14, 28], [24, 28], [34, 28],
        [14, 36], [24, 36], [34, 36],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill={color}
          fillOpacity={0.4}
          animate={{ fillOpacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}
      {/* Highlight circle on one date */}
      <motion.circle
        cx="24"
        cy="28"
        r="5"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "24px", originY: "28px" }}
      />
    </motion.svg>
  );
}
