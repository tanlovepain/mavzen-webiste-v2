import { PageTransition } from "@/components/page-transition";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    category: "D2C Fashion Brand",
    title: "600% increase in WhatsApp conversion rate",
    description: "A fast-growing D2C fashion brand was losing thousands of sales monthly to cart abandonment and slow DM response times. We deployed a full convert infrastructure in 3 weeks.",
    metrics: [
      { value: "600%", label: "Conversion rate lift", icon: <TrendingUp size={16} /> },
      { value: "70%", label: "Faster response time", icon: <Clock size={16} /> },
      { value: "$180k", label: "Added monthly revenue", icon: <DollarSign size={16} /> },
    ],
    systems: ["WhatsApp Interaction Agent", "Cart Abandonment Recovery Agent", "Instagram & Facebook DM Bot"],
    timeline: [
      { week: "Week 1", action: "Full customer journey audit and system design" },
      { week: "Week 2", action: "WhatsApp bot deployment and CRM integration" },
      { week: "Week 3", action: "Cart recovery sequences activated and tested" },
      { week: "Week 4", action: "Live optimization — conversion rate hit 600% lift" },
    ],
    beforeAfter: {
      before: ["4-6 hour DM response time", "35% cart abandonment rate", "Manual customer support team", "No follow-up sequences"],
      after: ["1.2 second AI response time", "8% cart abandonment rate", "Full 24/7 AI coverage", "Automated 5-step recovery sequence"],
    }
  },
  {
    id: 2,
    category: "Medical Clinic",
    title: "300% increase in online bookings",
    description: "A multi-location medical clinic was losing 70% of online enquiries because no one responded fast enough. We built a full booking and qualification system in 2 weeks.",
    metrics: [
      { value: "300%", label: "Increase in bookings", icon: <TrendingUp size={16} /> },
      { value: "90%", label: "Auto-qualified leads", icon: <Clock size={16} /> },
      { value: "$45k", label: "Added monthly revenue", icon: <DollarSign size={16} /> },
    ],
    systems: ["WhatsApp Interaction Agent", "In-App AI Support Agent", "Real-Time Review Alert"],
    timeline: [
      { week: "Week 1", action: "Patient journey mapping and inquiry audit" },
      { week: "Week 2", action: "WhatsApp booking bot and qualification flow live" },
      { week: "Week 3", action: "Review alert system and Google reputation management" },
      { week: "Week 4", action: "Full optimization — 300% booking lift confirmed" },
    ],
    beforeAfter: {
      before: ["No after-hours coverage", "3-day inquiry response average", "Manual booking management", "No review monitoring"],
      after: ["24/7 instant AI responses", "Instant automated qualification", "Fully automated booking flow", "Real-time review alerts and responses"],
    }
  },
  {
    id: 3,
    category: "Home Services — HVAC",
    title: "240% increase in repeat customers",
    description: "An HVAC company with strong first-time service quality had almost zero repeat business because they had no follow-up system. We built a retention and review infrastructure.",
    metrics: [
      { value: "240%", label: "Repeat customer rate", icon: <TrendingUp size={16} /> },
      { value: "4.8★", label: "Average star rating", icon: <Clock size={16} /> },
      { value: "80%", label: "Reduction in admin time", icon: <DollarSign size={16} /> },
    ],
    systems: ["CRM + Outbound Follow Up Agent", "Real-Time Review Alert", "Bookkeeping Agent"],
    timeline: [
      { week: "Week 1", action: "Service journey audit and CRM setup" },
      { week: "Week 2", action: "Post-service follow-up sequences deployed" },
      { week: "Week 3", action: "Review automation live — star rating climbs" },
      { week: "Week 4", action: "240% repeat customer increase confirmed" },
    ],
    beforeAfter: {
      before: ["No follow-up after service", "3.2 star Google rating", "Manual invoicing process", "Zero repeat booking system"],
      after: ["Automated 30/60/90 day sequences", "4.8 star Google rating", "Instant auto-invoicing via Stripe", "Full retention infrastructure"],
    }
  },
];

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              Results
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Precision Intelligence<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">in Action.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Real businesses. Real systems. Real results. Every case study below is built on infrastructure we engineered and deployed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
              data-testid={`card-case-study-${study.id}`}
            >
              {/* Header */}
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{study.category}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl">{study.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="bg-background rounded-xl p-4 border border-border/50">
                      <div className="flex items-center gap-1.5 text-primary mb-2">{metric.icon} <span className="text-xs text-muted-foreground">{metric.label}</span></div>
                      <div className="text-2xl md:text-3xl font-black text-foreground">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Systems used */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.systems.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">{s}</span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  data-testid={`button-show-details-${study.id}`}
                >
                  {expandedId === study.id ? "Hide Details" : "Show Details"}
                  <motion.div animate={{ rotate: expandedId === study.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedId === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Timeline */}
                      <div>
                        <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-muted-foreground">Implementation Timeline</h4>
                        <div className="space-y-4">
                          {study.timeline.map((item, ti) => (
                            <div key={item.week} className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs text-primary font-bold flex-shrink-0">
                                  {ti + 1}
                                </div>
                                {ti < study.timeline.length - 1 && <div className="flex-grow w-px bg-border mt-1" />}
                              </div>
                              <div className="pb-4">
                                <div className="text-xs font-semibold text-primary mb-1">{item.week}</div>
                                <div className="text-sm text-muted-foreground">{item.action}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Before/After */}
                      <div>
                        <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-muted-foreground">Before vs After</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-background rounded-xl p-4 border border-border/50">
                            <div className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Before</div>
                            <ul className="space-y-2">
                              {study.beforeAfter.before.map((b) => (
                                <li key={b} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <span className="text-destructive mt-0.5">—</span> {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                            <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">After</div>
                            <ul className="space-y-2">
                              {study.beforeAfter.after.map((a) => (
                                <li key={a} className="text-xs text-foreground flex items-start gap-2">
                                  <span className="text-primary mt-0.5">✓</span> {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Results Are Next.</h2>
          <p className="text-xl text-muted-foreground mb-10">Let's audit your business and identify exactly where AI infrastructure will drive the most growth.</p>
          <a href="https://calendly.com/mavzenai/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-md font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] hover:shadow-[0_0_45px_rgba(0,212,170,0.55)]">
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
