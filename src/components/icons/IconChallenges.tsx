"use client";

import { motion } from "framer-motion";

export default function IconChallenges({ size = 40, color = "#002868" }: { size?: number; color?: string }) {
  const stars = [
    { cx: 24, cy: 16, delay: 0 },
    { cx: 14, cy: 26, delay: 0.3 },
    { cx: 34, cy: 26, delay: 0.6 },
  ];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars.map((star, i) => (
        <motion.g key={i}>
          {/* 4-point sparkle */}
          <motion.path
            d={`M${star.cx} ${star.cy - 6} L${star.cx + 1.5} ${star.cy - 1.5} L${star.cx + 6} ${star.cy} L${star.cx + 1.5} ${star.cy + 1.5} L${star.cx} ${star.cy + 6} L${star.cx - 1.5} ${star.cy + 1.5} L${star.cx - 6} ${star.cy} L${star.cx - 1.5} ${star.cy - 1.5} Z`}
            fill={color}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            style={{ originX: `${star.cx}px`, originY: `${star.cy}px` }}
          />
        </motion.g>
      ))}
      {/* Small dots */}
      {[
        { cx: 10, cy: 16, d: 0.2 },
        { cx: 38, cy: 16, d: 0.5 },
        { cx: 24, cy: 36, d: 0.8 },
      ].map((dot, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r="2"
          fill={color}
          animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.d,
          }}
        />
      ))}
    </motion.svg>
  );
}
