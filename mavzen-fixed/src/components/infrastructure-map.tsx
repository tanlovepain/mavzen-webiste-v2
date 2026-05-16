import { motion } from "framer-motion";

const FLOW_NODES = [
  { id: "traffic",    x: 70,  y: 240, label: "Traffic",       icon: "⬤",  color: "#00d4aa" },
  { id: "capture",   x: 210, y: 240, label: "Lead Capture",   icon: "⬤",  color: "#00d4aa" },
  { id: "qualify",   x: 370, y: 140, label: "AI Qualify",     icon: "⬤",  color: "#7c3aed" },
  { id: "crm",       x: 370, y: 340, label: "CRM",            icon: "⬤",  color: "#7c3aed" },
  { id: "whatsapp",  x: 520, y: 80,  label: "WhatsApp",       icon: "⬤",  color: "#00d4aa" },
  { id: "booking",   x: 520, y: 240, label: "Booking",        icon: "⬤",  color: "#00d4aa" },
  { id: "checkout",  x: 520, y: 400, label: "Checkout",       icon: "⬤",  color: "#00d4aa" },
  { id: "retention", x: 670, y: 140, label: "Retention",      icon: "⬤",  color: "#3b82f6" },
  { id: "support",   x: 670, y: 320, label: "Support",        icon: "⬤",  color: "#3b82f6" },
  { id: "analytics", x: 810, y: 200, label: "Analytics",      icon: "⬤",  color: "#f59e0b" },
  { id: "revenue",   x: 810, y: 360, label: "Revenue",        icon: "⬤",  color: "#10b981" },
];

interface PathDef {
  id: string;
  d: string;
  from: string;
  to: string;
  dur: string;
  begin: string;
}

const PATHS: PathDef[] = [
  { id: "p0",  d: "M70,240 L210,240",             from: "traffic",   to: "capture",   dur: "1.5s", begin: "0s"    },
  { id: "p1",  d: "M210,240 L370,140",             from: "capture",   to: "qualify",   dur: "1.8s", begin: "0.2s"  },
  { id: "p2",  d: "M210,240 L370,340",             from: "capture",   to: "crm",       dur: "1.8s", begin: "0.4s"  },
  { id: "p3",  d: "M370,140 L520,80",              from: "qualify",   to: "whatsapp",  dur: "1.6s", begin: "0.3s"  },
  { id: "p4",  d: "M370,140 L520,240",             from: "qualify",   to: "booking",   dur: "1.6s", begin: "0.5s"  },
  { id: "p5",  d: "M370,340 L520,240",             from: "crm",       to: "booking",   dur: "1.6s", begin: "0.6s"  },
  { id: "p6",  d: "M370,340 L520,400",             from: "crm",       to: "checkout",  dur: "1.6s", begin: "0.7s"  },
  { id: "p7",  d: "M520,80 L670,140",              from: "whatsapp",  to: "retention", dur: "1.5s", begin: "0.5s"  },
  { id: "p8",  d: "M520,240 L670,140",             from: "booking",   to: "retention", dur: "1.5s", begin: "0.6s"  },
  { id: "p9",  d: "M520,240 L670,320",             from: "booking",   to: "support",   dur: "1.5s", begin: "0.7s"  },
  { id: "p10", d: "M520,400 L670,320",             from: "checkout",  to: "support",   dur: "1.5s", begin: "0.8s"  },
  { id: "p11", d: "M670,140 L810,200",             from: "retention", to: "analytics", dur: "1.4s", begin: "0.8s"  },
  { id: "p12", d: "M670,320 L810,200",             from: "support",   to: "analytics", dur: "1.4s", begin: "0.9s"  },
  { id: "p13", d: "M670,320 L810,360",             from: "support",   to: "revenue",   dur: "1.4s", begin: "1.0s"  },
  { id: "p14", d: "M670,140 L810,360",             from: "retention", to: "revenue",   dur: "1.6s", begin: "0.9s"  },
];

const NODE_LABELS: Record<string, { tag: string; tagColor: string }> = {
  traffic:   { tag: "INPUT",     tagColor: "#00d4aa" },
  capture:   { tag: "CAPTURE",   tagColor: "#00d4aa" },
  qualify:   { tag: "AI",        tagColor: "#7c3aed" },
  crm:       { tag: "SYNC",      tagColor: "#7c3aed" },
  whatsapp:  { tag: "ENGAGE",    tagColor: "#00d4aa" },
  booking:   { tag: "CONVERT",   tagColor: "#00d4aa" },
  checkout:  { tag: "CHECKOUT",  tagColor: "#00d4aa" },
  retention: { tag: "RETAIN",    tagColor: "#3b82f6" },
  support:   { tag: "SUPPORT",   tagColor: "#3b82f6" },
  analytics: { tag: "MEASURE",   tagColor: "#f59e0b" },
  revenue:   { tag: "REVENUE",   tagColor: "#10b981" },
};

export function InfrastructureMap() {
  return (
    <div className="relative w-full rounded-2xl border border-border/40 bg-[#0a0a12]/80 overflow-hidden" style={{ minHeight: 480 }}>
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.07) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[200px] bg-purple-600/5 rounded-full blur-[60px] pointer-events-none" />

      <svg
        viewBox="0 0 900 480"
        className="relative z-10 w-full h-full"
        style={{ minHeight: 380 }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for each path */}
          <linearGradient id="flow-teal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00d4aa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="flow-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
          </linearGradient>
          <filter id="node-glow-sm">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="node-glow-lg">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Define paths for animateMotion */}
          {PATHS.map((p) => (
            <path key={p.id} id={p.id} d={p.d} />
          ))}
        </defs>

        {/* Connection paths */}
        {PATHS.map((p, i) => (
          <g key={`path-${i}`}>
            {/* Static dim line */}
            <use href={`#${p.id}`} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            {/* Animated glowing line */}
            <motion.path
              d={p.d}
              fill="none"
              stroke={i % 3 === 0 ? "#00d4aa" : i % 3 === 1 ? "#7c3aed" : "#3b82f6"}
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, strokeDashoffset: [0, -240] }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.06 },
                strokeDashoffset: { duration: 4 + (i % 3), repeat: Infinity, ease: "linear", delay: i * 0.1 },
              }}
            />
            {/* Moving data particle */}
            <circle r="3.5" fill={i % 3 === 0 ? "#00d4aa" : i % 3 === 1 ? "#a78bfa" : "#60a5fa"} filter="url(#node-glow-sm)" opacity="0.9">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.begin}>
                <mpath href={`#${p.id}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* Nodes */}
        {FLOW_NODES.map((node, i) => {
          const meta = NODE_LABELS[node.id];
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            >
              {/* Outer pulse ring — scale instead of r */}
              <motion.circle
                cx={node.x} cy={node.y} r={14}
                fill="none" stroke={node.color} strokeWidth="0.8"
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: "easeOut" }}
              />
              {/* Mid ring */}
              <circle cx={node.x} cy={node.y} r={14} fill="none" stroke={node.color} strokeWidth="0.6" opacity={0.3} />
              {/* Node body */}
              <circle cx={node.x} cy={node.y} r={10} fill="#0a0a18" stroke={node.color} strokeWidth="1.5" filter="url(#node-glow-sm)" />
              {/* Inner dot */}
              <motion.circle
                cx={node.x} cy={node.y} r={4}
                fill={node.color}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + 28}
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9.5"
                fontWeight="600"
                fontFamily="Inter, system-ui, sans-serif"
                letterSpacing="0.2"
              >
                {node.label}
              </text>

              {/* Tag pill */}
              <g>
                <rect
                  x={node.x - 20} y={node.y - 26}
                  width={40} height={12}
                  rx={6}
                  fill={meta.tagColor}
                  fillOpacity={0.15}
                  stroke={meta.tagColor}
                  strokeWidth="0.6"
                  strokeOpacity={0.5}
                />
                <text
                  x={node.x} y={node.y - 17}
                  textAnchor="middle"
                  fill={meta.tagColor}
                  fontSize="6.5"
                  fontWeight="700"
                  fontFamily="Inter, system-ui, sans-serif"
                  letterSpacing="0.8"
                >
                  {meta.tag}
                </text>
              </g>
            </motion.g>
          );
        })}

        {/* Metric overlay badges */}
        {/* Top-left: active workflows */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <rect x="20" y="20" width="130" height="36" rx="8" fill="#0f0f1e" stroke="rgba(0,212,170,0.25)" strokeWidth="1" />
          <circle cx="38" cy="38" r="4" fill="#00d4aa">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="50" y="34" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="Inter, sans-serif">WORKFLOWS</text>
          <text x="50" y="46" fill="#00d4aa" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">42 Active</text>
        </motion.g>

        {/* Bottom-right: revenue synced */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <rect x="750" y="430" width="130" height="36" rx="8" fill="#0f0f1e" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
          <circle cx="768" cy="448" r="4" fill="#10b981">
            <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <text x="780" y="444" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="Inter, sans-serif">REVENUE SYNC</text>
          <text x="780" y="456" fill="#10b981" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">Live Tracking</text>
        </motion.g>
      </svg>
    </div>
  );
}
