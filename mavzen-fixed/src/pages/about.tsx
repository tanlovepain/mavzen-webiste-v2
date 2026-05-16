import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, TrendingUp, Brain } from "lucide-react";

const CALENDLY = "https://calendly.com/mavzenai/30min";

const team = [
  {
    name: "Tanishq",
    role: "Founder & Infrastructure Lead",
    description: "Identified the gap between what AI can do and what modern brands actually have running. Built Mavzen to bridge it — deploying production-grade AI infrastructure that orchestrates entire customer journeys, from first click to lifetime retention, without human bottlenecks.",
    accent: "text-primary",
    border: "border-primary/30",
    bg: "bg-primary/10",
  },
  {
    name: "Ryan",
    role: "AI Systems Architect",
    description: "Designs the intelligent systems that sit at the core of every Mavzen deployment. From multi-agent qualification flows to CRM orchestration and WhatsApp pipelines, Ryan builds the AI architectures that convert at scale — reliably, continuously, without failure.",
    accent: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
  },
  {
    name: "Aaron",
    role: "Operations Specialist",
    description: "Runs the operational layer that keeps every client system running at peak performance. Manages onboarding, system monitoring, client success, and the continuous optimisation loops that ensure every automation stack improves over time.",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
  },
];

const values = [
  { icon: <Zap size={20} />, title: "Speed", description: "We deploy in weeks, not months. Every engagement moves at the pace of a startup." },
  { icon: <Target size={20} />, title: "Precision", description: "No generic solutions. Every system is architected for your exact business model and customer behavior." },
  { icon: <TrendingUp size={20} />, title: "Scale", description: "We build infrastructure that handles 10x your current volume without adding headcount." },
  { icon: <Brain size={20} />, title: "Intelligence", description: "Every system learns and improves. Our AI gets smarter the longer it runs." },
];

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] -translate-y-1/2 bg-primary/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              About Mavzen AI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Architecting the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Intelligent Enterprise.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                We're not an AI agency. We're infrastructure engineers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The gap between what AI can do and what most D2C brands actually have running is enormous. We exist to close it — not with demos, chatbots, or half-built automations, but with production-grade AI systems that run your customer journey end-to-end, 24 hours a day, without human involvement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've built AI infrastructure for 500+ brands across D2C, clinics, home services and agencies. Every system we deploy is purpose-built for your specific business model, tested under real conditions, and optimized continuously based on live conversion data. We don't hand over a tool — we hand over an operating system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Brands served" },
                  { value: "$12M+", label: "Revenue generated" },
                  { value: "340%", label: "Avg conversion lift" },
                  { value: "24/7", label: "AI system uptime" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background rounded-xl p-5 border border-border/50">
                    <div className="text-3xl font-black text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold">The Team</h2>
            <p className="text-muted-foreground mt-3">Engineers and operators who've built AI systems at scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-card rounded-2xl border ${member.border} overflow-hidden hover:border-opacity-60 transition-colors`}
              >
                <div className="p-8">
                  <div className={`h-14 w-14 rounded-xl ${member.bg} border ${member.border} flex items-center justify-center text-xl font-bold ${member.accent} mb-5`}>
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className={`text-sm ${member.accent} font-semibold mb-4`}>{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Build with the best.</h2>
          <p className="text-xl text-muted-foreground mb-10">Let's talk about your business and show you exactly what we'd build.</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-md font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] hover:shadow-[0_0_45px_rgba(0,212,170,0.55)]"
          >
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
