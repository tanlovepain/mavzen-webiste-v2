import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Thermometer, Wrench, Briefcase, Users, Home, Building2, ArrowRight, Check, Zap } from "lucide-react";

const CALENDLY = "https://calendly.com/mavzenai/30min";

const D2C_SYSTEMS = [
  "WhatsApp Commerce & Abandoned Cart Recovery",
  "AI Lead Qualification & Instant Response Agent",
  "CRM Orchestration & Lifecycle Automation",
  "Post-Purchase Retention & Loyalty Flows",
  "Dynamic Upsell & Re-engagement Sequences",
  "Customer Support AI — 24/7, Zero Headcount",
  "Real-Time Revenue Analytics Dashboard",
  "AI-Powered Review & Reputation Management",
];

const D2C_METRICS = [
  { value: "340%", label: "Avg conversion lift" },
  { value: "68%", label: "Cart recovery rate" },
  { value: "4.2x", label: "Customer LTV increase" },
  { value: "24/7", label: "AI system uptime" },
];

const secondaryIndustries = [
  {
    icon: <Heart size={24} />,
    name: "Clinics",
    problem: "Missing bookings from slow inquiry response and no automated patient follow-up.",
    systems: ["AI Booking Agent", "WhatsApp Support Bot", "Review Alert System"],
    metric: "300%",
    metricLabel: "increase in bookings",
    color: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: <Briefcase size={24} />,
    name: "Agencies",
    problem: "Spending hours on client reporting, outreach, and campaign management.",
    systems: ["AI Ad Orchestration", "SEO Blog Generator", "Performance Reporting Agent"],
    metric: "5x",
    metricLabel: "faster client reporting",
    color: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: <Users size={24} />,
    name: "Coaches",
    problem: "Losing leads who inquire but never book, and wasting time on manual enrollment.",
    systems: ["Lead Magnet Automation", "WhatsApp Interaction Agent", "Loyalty & Rewards Engine"],
    metric: "420%",
    metricLabel: "lead conversion increase",
    color: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: <Home size={24} />,
    name: "Real Estate",
    problem: "Leads go cold within hours — no system to instantly qualify and follow up.",
    systems: ["WhatsApp Interaction Agent", "CRM + Follow Up Agent", "In-App AI Support Agent"],
    metric: "290%",
    metricLabel: "faster lead response",
    color: "from-sky-500/10 to-blue-500/10",
    border: "border-sky-500/20",
  },
  {
    icon: <Thermometer size={24} />,
    name: "HVAC",
    problem: "Losing repeat business because there's no system to follow up after service calls.",
    systems: ["CRM + Follow Up Agent", "Review Alert System", "Sales Automation Agent"],
    metric: "240%",
    metricLabel: "increase in repeat customers",
    color: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: <Wrench size={24} />,
    name: "Plumbing & Trades",
    problem: "Manual dispatching, missed inquiries, and zero automation for reviews and follow-up.",
    systems: ["Social Media Automation Agent", "WhatsApp Interaction Agent", "Bookkeeping Agent"],
    metric: "180%",
    metricLabel: "reduction in admin time",
    color: "from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: <Building2 size={24} />,
    name: "Service Businesses",
    problem: "Operating without any automation — relying entirely on manual calls and spreadsheets.",
    systems: ["WhatsApp Support Bot", "Bookkeeping Agent", "CEO Assistant Voice Agent"],
    metric: "70%",
    metricLabel: "reduction in operational costs",
    color: "from-primary/10 to-purple-500/10",
    border: "border-primary/20",
  },
];

export default function Industries() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              AI Infrastructure Engineered<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">For Growth-Focused Brands</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Primarily built for modern D2C commerce — and deployed across service businesses, clinics, and agencies who demand the same level of intelligent infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED D2C SECTION ── */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              <Zap size={11} />
              Featured Expertise
            </span>
          </motion.div>

          {/* D2C hero card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-card rounded-3xl border border-primary/30 overflow-hidden mb-6 shadow-[0_0_60px_rgba(0,212,170,0.06)]"
          >
            {/* Animated glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-[300px] h-[200px] bg-purple-600/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left content */}
              <div className="p-10 lg:p-14 lg:border-r border-border/40">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,212,170,0.2)]">
                    <ShoppingBag size={32} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Primary Vertical</div>
                    <h2 className="text-3xl font-black">D2C Brands</h2>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                  Modern D2C brands run on conversion, retention, and speed. We build the AI infrastructure layer that orchestrates your entire customer journey — from ad click to repeat purchase — without manual intervention, without missed revenue, without dropping leads.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {D2C_METRICS.map((m) => (
                    <div key={m.label} className="bg-background/60 rounded-xl border border-border/60 px-4 py-3">
                      <div className="text-2xl font-black text-primary">{m.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_25px_rgba(0,212,170,0.35)] hover:shadow-[0_0_40px_rgba(0,212,170,0.55)] hover:scale-[1.02]"
                >
                  Build My D2C System
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>

              {/* Right systems list */}
              <div className="p-10 lg:p-14">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Full System Suite</h3>
                <div className="space-y-3">
                  {D2C_SYSTEMS.map((system, i) => (
                    <motion.div
                      key={system}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                        <Check size={11} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80 leading-relaxed">{system}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECONDARY INDUSTRIES ── */}
      <section className="py-20 lg:py-28 border-t border-border/50 bg-card/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Infrastructure Deployed Across Multiple Sectors</h2>
            <p className="text-muted-foreground max-w-xl">The same intelligent systems architecture — adapted for the operational realities of service businesses, clinics, and agencies.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryIndustries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative bg-card rounded-2xl p-7 border ${industry.border} hover:border-opacity-60 transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-11 w-11 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                      {industry.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-foreground">{industry.metric}</div>
                      <div className="text-[10px] text-muted-foreground">{industry.metricLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{industry.problem}</p>
                  <div className="space-y-1.5">
                    {industry.systems.map((system) => (
                      <div key={system} className="flex items-center gap-2 text-xs text-foreground/70">
                        <Check size={11} className="text-primary flex-shrink-0" />
                        <span>{system}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Industry. Our Infrastructure.</h2>
          <p className="text-xl text-muted-foreground mb-10">Tell us about your business and we'll map the exact system stack that drives your growth.</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-md font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] hover:shadow-[0_0_45px_rgba(0,212,170,0.55)]"
          >
            Get a Custom Audit <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
