import { motion } from "framer-motion";

const NODES = [
  { id: 0,  x: 62,   y: 110 },
  { id: 1,  x: 190,  y: 60  },
  { id: 2,  x: 160,  y: 310 },
  { id: 3,  x: 310,  y: 140 },
  { id: 4,  x: 420,  y: 60  },
  { id: 5,  x: 400,  y: 260 },
  { id: 6,  x: 340,  y: 450 },
  { id: 7,  x: 580,  y: 100 },
  { id: 8,  x: 640,  y: 280 },
  { id: 9,  x: 560,  y: 440 },
  { id: 10, x: 780,  y: 50  },
  { id: 11, x: 820,  y: 200 },
  { id: 12, x: 760,  y: 370 },
  { id: 13, x: 840,  y: 530 },
  { id: 14, x: 960,  y: 120 },
  { id: 15, x: 1020, y: 300 },
  { id: 16, x: 960,  y: 460 },
  { id: 17, x: 1140, y: 80  },
  { id: 18, x: 1180, y: 260 },
  { id: 19, x: 1120, y: 430 },
  { id: 20, x: 1300, y: 160 },
  { id: 21, x: 1340, y: 380 },
  { id: 22, x: 1420, y: 240 },
];

const EDGES = [
  [0,1],[1,3],[3,4],[4,7],[7,10],[10,17],[17,20],[20,22],
  [1,2],[2,5],[5,8],[8,11],[11,14],[14,18],[18,21],
  [3,5],[4,5],[5,6],[6,9],[9,12],[12,15],[15,18],[18,22],
  [7,8],[8,9],[10,11],[11,12],[12,13],[14,15],[15,16],[16,19],
  [17,18],[19,21],[20,21],[21,22],
  [0,2],[2,6],[6,13],[13,16],[16,19],
];

const PARTICLES = EDGES.slice(0, 20).map((edge, i) => ({
  edge,
  delay: i * 0.55,
  duration: 3.5 + (i % 5) * 0.7,
}));

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Ambient glow orbs */}
      <div className="absolute top-[15%] right-[20%] w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[35%] w-[500px] h-[300px] bg-purple-600/8 rounded-full blur-[100px]" />
      <div className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-blue-500/6 rounded-full blur-[90px]" />

      <svg
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="hero-edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0" />
            <stop offset="40%" stopColor="#00d4aa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </radialGradient>
          <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {EDGES.map(([from, to], i) => (
          <motion.line
            key={`edge-${i}`}
            x1={NODES[from].x}
            y1={NODES[from].y}
            x2={NODES[to].x}
            y2={NODES[to].y}
            stroke="url(#hero-edge-grad)"
            strokeWidth={0.8}
            strokeDasharray="4 8"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0.6],
              strokeDashoffset: [0, -120],
            }}
            transition={{
              opacity: { duration: 0.4, delay: i * 0.04 },
              strokeDashoffset: { duration: 5, repeat: Infinity, ease: "linear", delay: i * 0.08 },
            }}
          />
        ))}

        {/* Moving particles */}
        {PARTICLES.map(({ edge: [from, to], delay, duration }, i) => {
          const nx1 = NODES[from].x, ny1 = NODES[from].y;
          const nx2 = NODES[to].x, ny2 = NODES[to].y;
          return (
            <motion.circle
              key={`particle-${i}`}
              r={2}
              fill="#00d4aa"
              filter="url(#hero-glow)"
              initial={{ cx: nx1, cy: ny1, opacity: 0 }}
              animate={{
                cx: [nx1, nx2, nx1],
                cy: [ny1, ny2, ny1],
                opacity: [0, 0.9, 0.9, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear",
                times: [0, 0.45, 0.5, 1],
              }}
            />
          );
        })}

        {/* Glowing nodes */}
        {NODES.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Pulse ring — use scale instead of r animation */}
            <motion.circle
              cx={node.x} cy={node.y} r={10}
              fill="none"
              stroke="#00d4aa"
              strokeWidth={0.6}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.4, 0, 0.4], scale: [1, 2.2, 1] }}
              transition={{ duration: 3 + (i % 4) * 0.8, repeat: Infinity, delay: i * 0.18, ease: "easeOut" }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r={3}
              fill="#0d0d14"
              stroke="#00d4aa"
              strokeWidth={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r={1.2}
              fill="#00d4aa"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
