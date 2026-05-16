import { PageTransition } from "@/components/page-transition";
import { SystemCard } from "@/components/system-card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Search, FileText, MessageSquare, Image, Target, Globe, Magnet,
  MessageCircle, ShoppingCart, Package, Receipt, Instagram,
  HeadphonesIcon, Shield, Star,
  Users, Gift, TrendingUp,
  BookOpen, Palette, Mic, BarChart2, ArrowRight
} from "lucide-react";

const sections = [
  {
    id: "attract",
    label: "01",
    title: "Attract Systems",
    subtitle: "Intelligent lead generation infrastructure",
    systems: [
      { icon: <Search size={20} />, name: "Influencer Outreach Bot", description: "Automatically finds and contacts relevant influencers with personalised pitches — no manual research or outreach needed.", tags: ["Auto-discovery", "Personalised DMs", "Engagement scoring", "Pipeline tracking"] },
      { icon: <FileText size={20} />, name: "SEO Blog Generator", description: "Researches trending topics and auto-publishes SEO-optimised blog content — consistent organic traffic without a content team.", tags: ["Keyword research", "Auto-publish", "Trend analysis", "Brand voice"] },
      { icon: <MessageSquare size={20} />, name: "Social Media Automation Agent", description: "Instantly replies to every DM and comment across Instagram and Facebook — no lead or customer question goes unanswered.", tags: ["Auto-reply", "Lead capture", "24/7 coverage", "Multi-platform"] },
      { icon: <Image size={20} />, name: "UGC Collector & Organiser", description: "Automatically collects customer photos, videos and reviews from social media and organises them ready for ad creative use.", tags: ["Auto-collection", "Content library", "Rights management", "Ad-ready assets"] },
      { icon: <Target size={20} />, name: "AI Ad Orchestration", description: "Multi-platform ad management with AI-powered optimisation, audience targeting and dynamic creative generation.", tags: ["Smart bidding", "Audience AI", "Creative testing", "Cross-platform sync"] },
      { icon: <Globe size={20} />, name: "Landing Page Engine", description: "Dynamic landing pages that adapt in real-time to visitor behaviour, source and intent signals.", tags: ["Dynamic content", "A/B testing", "Intent signals", "Conversion tracking"] },
      { icon: <Magnet size={20} />, name: "Lead Magnet Automation", description: "Automated lead capture systems with personalised value delivery and instant qualification.", tags: ["Auto-delivery", "Smart forms", "Progressive profiling", "Instant scoring"] },
    ]
  },
  {
    id: "convert",
    label: "02",
    title: "Convert Systems",
    subtitle: "Turn interest into revenue automatically",
    systems: [
      { icon: <MessageCircle size={20} />, name: "WhatsApp Interaction Agent", description: "Replies to every WhatsApp enquiry instantly with product info, pricing and booking guidance — works 24/7 without human involvement.", tags: ["Instant response", "Lead qualification", "Booking flow", "24/7 availability"] },
      { icon: <ShoppingCart size={20} />, name: "Cart Abandonment Recovery Agent", description: "Detects abandoned carts and sends a timed WhatsApp and email sequence to bring customers back and complete their purchase.", tags: ["Multi-step sequence", "Discount triggers", "Revenue recovery", "Real-time detection"] },
      { icon: <Package size={20} />, name: "Product Launch & Inventory Drop Bot", description: "Notifies your entire customer and lead list the moment a product launches or restocks — driving an immediate sales spike.", tags: ["Instant broadcast", "Segment targeting", "Restock alerts", "Launch automation"] },
      { icon: <Receipt size={20} />, name: "GST Invoice Generator", description: "Automatically generates and sends a GST-compliant invoice the moment an order is placed — zero manual work required.", tags: ["Auto-generation", "GST compliant", "Instant delivery", "Order sync"] },
      { icon: <Instagram size={20} />, name: "Instagram & Facebook DM Bot", description: "Captures leads from social DMs, qualifies them automatically and guides them toward purchase without any human involvement.", tags: ["DM automation", "Lead capture", "Qualification flow", "ManyChat powered"] },
    ]
  },
  {
    id: "support",
    label: "03",
    title: "Support & Experience Systems",
    subtitle: "Intelligent support that scales with your brand",
    systems: [
      { icon: <HeadphonesIcon size={20} />, name: "In-App AI Support Agent", description: "A live chat assistant inside your website or app powered by your brand's entire knowledge base — answers any question accurately and instantly.", tags: ["RAG powered", "Brand knowledge", "Streaming UI", "Always accurate"] },
      { icon: <Shield size={20} />, name: "WhatsApp Support Bot", description: "Handles all customer service queries on WhatsApp automatically — order status, returns, complaints — without a support team.", tags: ["24/7 support", "Order tracking", "Returns handling", "Instant resolution"] },
      { icon: <Star size={20} />, name: "Real-Time Review Alert", description: "Sends an instant notification the moment a new Google or social review comes in — with sentiment analysis and a suggested response.", tags: ["Instant alerts", "Sentiment analysis", "Auto-response", "Multi-platform"] },
    ]
  },
  {
    id: "retain",
    label: "04",
    title: "Retain Systems",
    subtitle: "Keep customers coming back automatically",
    systems: [
      { icon: <Users size={20} />, name: "CRM + Outbound Follow Up Agent", description: "Tracks every lead and customer in one place and sends automatic follow-ups based on where they are in their journey — no lead ever goes cold.", tags: ["Journey tracking", "Auto follow-up", "Pipeline management", "Conversion optimisation"] },
      { icon: <Gift size={20} />, name: "Loyalty & Rewards Engine", description: "Automatically manages points, rewards and personalised offers for repeat customers — increasing lifetime value without manual effort.", tags: ["Points system", "Personalised offers", "Retention flows", "Lifetime value"] },
      { icon: <TrendingUp size={20} />, name: "Sales Automation Agent", description: "Automates outbound DMs, follow-ups and engagement sequences on social media — sales happen without a dedicated sales team.", tags: ["Outbound automation", "DM sequences", "Engagement flows", "Social selling"] },
    ]
  },
  {
    id: "management",
    label: "05",
    title: "Management & Admin Systems",
    subtitle: "Operate at scale without adding headcount",
    systems: [
      { icon: <BookOpen size={20} />, name: "Bookkeeping Agent", description: "Connects to Stripe and automatically reconciles payments, generates financial reports and flags discrepancies — replacing manual bookkeeping.", tags: ["Stripe integration", "Auto-reconciliation", "Financial reports", "Anomaly detection"] },
      { icon: <Palette size={20} />, name: "Ad Creative Engine", description: "Auto-generates image and copy variations for ads using AI — so your brand always has fresh, tested creatives without a designer.", tags: ["DALL-E powered", "Copy generation", "Creative variations", "Brand consistent"] },
      { icon: <Mic size={20} />, name: "CEO Assistant Voice Agent", description: "A voice-activated AI that executes tasks, pulls reports and sends messages by voice command — saving hours of admin every day.", tags: ["Voice activated", "Task execution", "Report generation", "Vapi powered"] },
      { icon: <BarChart2 size={20} />, name: "Website Performance Reporting Agent", description: "Monitors traffic, conversions and performance daily and sends an automated summary directly to Slack or WhatsApp every morning.", tags: ["Daily reports", "Conversion tracking", "Slack/WhatsApp delivery", "Trend alerts"] },
    ]
  }
];

export default function Systems() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              Full System Suite
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Precision Infrastructure for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Every Stage</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Every system in our suite is purpose-built for a specific stage of your customer journey — from first touchpoint to lifetime loyalty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 lg:py-28 ${si % 2 === 1 ? "bg-card/30 border-y border-border/50" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl font-black text-muted/30 dark:text-white/10 select-none">{section.label}</span>
                <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground text-lg">{section.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {section.systems.map((system, i) => (
                <SystemCard
                  key={system.name}
                  icon={system.icon}
                  name={system.name}
                  description={system.description}
                  tags={system.tags}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Deploy Your Stack?</h2>
          <p className="text-xl text-muted-foreground mb-10">We'll audit your business and build the exact systems you need — no generic solutions.</p>
          <a href="https://calendly.com/mavzenai/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-md font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,212,170,0.4)] hover:shadow-[0_0_45px_rgba(0,212,170,0.55)]">
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
