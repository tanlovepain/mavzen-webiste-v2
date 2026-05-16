import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Search, Layout, Code2, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Audit",
    icon: <Search size={24} />,
    description: "We map your current customer journey and identify every revenue leak, manual bottleneck and missed automation opportunity.",
    deliverables: ["Full customer journey map", "Revenue leak analysis", "Automation opportunity report", "Competitive benchmarking"],
    duration: "2–3 days",
  },
  {
    number: "02",
    title: "Infrastructure Design",
    icon: <Layout size={24} />,
    description: "We architect a custom AI system stack tailored to your business model, customer behavior and growth targets.",
    deliverables: ["System architecture blueprint", "Integration map", "ROI projections per system", "Implementation roadmap"],
    duration: "3–5 days",
  },
  {
    number: "03",
    title: "Build",
    icon: <Code2 size={24} />,
    description: "Our engineers build, integrate and test every system — WhatsApp bots, CRM pipelines, analytics dashboards and automation flows.",
    deliverables: ["All systems built & integrated", "Full QA testing", "Sandbox testing environment", "Team training sessions"],
    duration: "1–3 weeks",
  },
  {
    number: "04",
    title: "Deploy",
    icon: <Rocket size={24} />,
    description: "We deploy to production, train your team and run live testing to ensure everything performs under real-world conditions.",
    deliverables: ["Production deployment", "Live monitoring setup", "Team onboarding", "30-day warranty period"],
    duration: "2–3 days",
  },
  {
    number: "05",
    title: "Optimise",
    icon: <BarChart2 size={24} />,
    description: "We monitor performance, A/B test sequences, and continuously iterate based on conversion data and customer behavior.",
    deliverables: ["Monthly performance reports", "A/B test iterations", "Conversion optimization", "Ongoing system evolution"],
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] -translate-y-1/2 bg-purple-500/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Precision Engineered.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Systematically Built.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Every engagement follows the same rigorous process — no shortcuts, no generic solutions, no wasted time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex gap-8 md:gap-16 pb-16 pl-8 md:pl-28"
                  data-testid={`step-process-${i}`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-4 top-0 flex flex-col items-center">
                    <div className="h-16 w-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,212,170,0.15)] flex-shrink-0">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-colors group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-5xl font-black text-muted/20 dark:text-white/10 leading-none mb-2 select-none">{step.number}</div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <span className="inline-flex items-center text-xs font-semibold text-primary border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5 whitespace-nowrap h-fit">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Deliverables</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start with a Free Audit</h2>
          <p className="text-xl text-muted-foreground mb-10">We'll map your customer journey, find your biggest opportunities, and show you exactly what we'd build.</p>
          <a href="https://calendly.com/mavzenai/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-md font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] hover:shadow-[0_0_45px_rgba(0,212,170,0.55)]">
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
