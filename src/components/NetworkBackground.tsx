import { motion } from 'framer-motion';

const nodes = [
  [4, 8],
  [15, 38],
  [7, 72],
  [28, 18],
  [42, 50],
  [58, 27],
  [71, 63],
  [86, 18],
  [95, 47],
  [88, 82],
  [52, 86],
  [26, 83],
];

const lines = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 2],
  [4, 10],
  [5, 8],
];

export function NetworkBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-radial-glow">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <motion.svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.48, 0.74, 0.48] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="networkLine" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#A78BFA" stopOpacity="0.75" />
            <stop offset="1" stopColor="#22D3EE" stopOpacity="0.32" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines.map(([from, to]) => {
          const [x1, y1] = nodes[from];
          const [x2, y2] = nodes[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#networkLine)"
              strokeWidth="0.16"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0.1 }}
              animate={{ pathLength: 1, opacity: [0.16, 0.55, 0.16] }}
              transition={{ duration: 5 + from * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          );
        })}
        {nodes.map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="0.36"
            fill="#F8FAFC"
            filter="url(#nodeGlow)"
            animate={{ opacity: [0.35, 1, 0.35], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 3.2, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,13,25,.54)_62%,rgba(8,13,25,.92)_100%)]" />
    </div>
  );
}
