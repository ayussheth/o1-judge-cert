export default function Logo({ width = 32, height = 32, dark = false }: { width?: number; height?: number; dark?: boolean }) {
  const color = dark ? "#f5c400" : "#0a0a0a";
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer diamond */}
      <path
        d="M32 4L58 32L32 60L6 32L32 4Z"
        fill={color}
        opacity="0.85"
      />
      {/* Inner diamond offset */}
      <path
        d="M32 14L48 32L32 50L16 32L32 14Z"
        fill={dark ? "#0a0a0a" : "white"}
        opacity="0.3"
      />
      {/* Gavel line — horizontal strike */}
      <rect x="12" y="29" width="40" height="6" rx="3" fill={color} opacity="0.9" />
      {/* Gavel head — small block on right */}
      <rect x="44" y="24" width="8" height="16" rx="2" fill={color} opacity="0.7" />
    </svg>
  );
}
