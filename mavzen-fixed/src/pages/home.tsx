import React from "react";
import { PageTransition } from "@/components/page-transition";
import { InfrastructureMap } from "@/components/infrastructure-map";
import { HeroBackground } from "@/components/hero-background";
import { Link } from "wouter";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Repeat,
  Settings,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import {
  SiOpenai,
  SiShopify,
  SiWhatsapp,
  SiStripe,
  SiMeta,
  SiHubspot,
  SiN8N,
} from "react-icons/si";

const FLOATING_CARDS = [
  {
    label: "Leads Qualified",
    value: "2,847",
    sub: "+12% this week",
    color: "text-primary",
    delay: 0.9,
    top: "12%",
    right: "4%",
  },
  {
    label: "AI Response Time",
    value: "1.2s",
    sub: "avg across systems",
    color: "text-purple-400",
    delay: 1.1,
    top: "38%",
    right: "2%",
  },
  {
    label: "Workflows Running",
    value: "42",
    sub: "across 18 clients",
    color: "text-blue-400",
    delay: 1.3,
    top: "62%",
    right: "6%",
  },
  {
    label: "Conversion Growth",
    value: "340%",
    sub: "avg client uplift",
    color: "text-emerald-400",
    delay: 1.5,
    top: "82%",
    right: "3%",
  },
];

function FloatCard({
  label,
  value,
  sub,
  color,
  delay,
  top,
  right,
}: (typeof FLOATING_CARDS)[0]) {
  return (
    <motion.div
      className="hidden xl:block absolute z-20 bg-card/70 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[160px]"
      style={{ top, right }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        x: { duration: 0.6, delay },
        y: {
          duration: 4 + parseFloat(top) * 0.03,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </div>
      <div className={`text-xl font-black ${color}`}>{value}</div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>
      <div
        className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")}`}
      >
        <motion.div
          className={`absolute inset-0 rounded-full ${color.replace("text-", "bg-")}`}
          animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: delay }}
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
        <HeroBackground />

        {/* Subtle vignette fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10 w-full">
          <div className="relative max-w-[700px]">
            {/* Floating cards anchored to hero */}
            {FLOATING_CARDS.map((card) => (
              <FloatCard key={card.label} {...card} />
            ))}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Eyebrow badge */}
              <motion.div variants={itemVariants} className="mb-7">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 px-3.5 py-1.5 rounded-full bg-primary/5 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  AI Operating System for Modern Brands
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="max-w-6xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] md:leading-[1] mb-10 text-foreground"
              >
                AI Infrastructure For
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-purple-400">
                  Modern D2C Brands
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[540px] leading-relaxed"
              >
                We engineer intelligent conversion, retention, and operational
                systems that run your entire customer journey — 24 hours a day,
                without headcount.
              </motion.p>

              {/* Trust proof points */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-muted-foreground"
              >
                {[
                  "500+ brands deployed",
                  "340% avg conversion lift",
                  "Live in 2–4 weeks",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                    {t}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="https://calendly.com/mavzenai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-[0_0_25px_rgba(0,212,170,0.35)] hover:shadow-[0_0_40px_rgba(0,212,170,0.55)] hover:scale-[1.02]"
                >
                  Book a Strategy Call
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </a>
                <Link
                  href="/systems"
                  className="inline-flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-foreground px-8 py-4 rounded-lg font-semibold text-base transition-all backdrop-blur-sm"
                >
                  Explore Systems
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-10 border-y border-border/50 bg-card/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 flex items-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 whitespace-nowrap mr-10">
            Powered by
          </p>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/40 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/40 to-transparent z-10" />
            <motion.div
              className="flex items-center gap-14 whitespace-nowrap"
              animate={{ x: [0, -1100] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
            >
              {[1, 2].map((i) => (
                <React.Fragment key={i}>
                  {[
                    { icon: <SiOpenai size={22} />, name: "OpenAI" },
                    { icon: <SiShopify size={22} />, name: "Shopify" },
                    { icon: <SiWhatsapp size={22} />, name: "WhatsApp" },
                    { icon: <SiStripe size={22} />, name: "Stripe" },
                    { icon: <SiMeta size={22} />, name: "Meta" },
                    { icon: <SiHubspot size={22} />, name: "HubSpot" },
                    { icon: <SiN8N size={22} />, name: "n8n" },
                  ].map(({ icon, name }) => (
                    <div
                      key={name + i}
                      className="flex items-center gap-2.5 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                    >
                      {icon}
                      <span className="text-sm font-semibold">{name}</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE HIGHLIGHTS ── */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One infrastructure. Three outcomes.
            </h2>
            <p className="text-muted-foreground">
              Every Mavzen system operates on the same core architecture — built
              for conversion, retention, and scale.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot size={22} />,
                title: "AI Conversion Systems",
                body: "Turns traffic into qualified leads automatically with intelligent chat agents, dynamic forms, and instant follow-up sequences.",
              },
              {
                icon: <Repeat size={22} />,
                title: "Retention Infrastructure",
                body: "Keeps customers engaged with intelligent follow-up, automated SMS sequences, loyalty flows, and re-engagement campaigns.",
              },
              {
                icon: <Settings size={22} />,
                title: "Operational Automation",
                body: "Eliminates manual work with backend AI workflows that connect your CRM, accounting, communications, and support stack.",
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/40 transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.06)]"
              >
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feat.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE SECTION (two-column) ── */}
      <section className="py-24 lg:py-36 bg-card/20 border-y border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-5 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
                System Architecture
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Your Entire Revenue
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  System. Connected.
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                Every touchpoint in your customer journey — from first click to
                lifetime value — runs through a single, intelligent operating
                layer. No gaps. No manual handoffs. No dropped leads.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Automated touchpoints", value: "12+" },
                  { label: "Response latency", value: "<2s" },
                  { label: "Integration depth", value: "Full-stack" },
                  { label: "Uptime guarantee", value: "24/7" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background/60 rounded-xl border border-border/60 px-4 py-4"
                  >
                    <div className="text-2xl font-black text-foreground mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/systems"
                className="group inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors text-sm"
              >
                View all systems
                <ArrowRight
                  className="ml-1.5 group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </Link>
            </motion.div>

            {/* Right — visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <InfrastructureMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { label: "Clients served", value: "500+" },
              { label: "Avg conversion lift", value: "340%" },
              { label: "Revenue generated", value: "$12M+" },
              { label: "AI system uptime", value: "24/7" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Ready to build your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                AI infrastructure?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Stop losing revenue to manual processes and slow response times.
              Get a system that works while you sleep.
            </p>
            <a
              href="https://calendly.com/mavzenai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-5 rounded-lg font-bold text-lg transition-all shadow-[0_0_40px_rgba(0,212,170,0.4)] hover:shadow-[0_0_60px_rgba(0,212,170,0.6)] hover:scale-[1.02]"
            >
              Book a Strategy Call
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
