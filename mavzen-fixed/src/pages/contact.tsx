import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-2";

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-transparent to-purple-500/3" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/4 rounded-full blur-[160px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary mb-6 border border-primary/30 px-3 py-1.5 rounded-full bg-primary/5">
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Initialize Connection.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We review your project and reach out within 2 hours to schedule your free 30-minute strategy session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">What happens next</h2>
                <div className="space-y-6">
                  {[
                    { step: "01", text: "We receive your submission and review your business details." },
                    { step: "02", text: "Our team reaches out within 2 hours to introduce ourselves." },
                    { step: "03", text: "We schedule your free 30-minute strategy session." },
                    { step: "04", text: "You get a custom AI infrastructure proposal — at no cost." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="h-7 w-7 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</div>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5 pt-4 border-t border-border">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Email</div>
                    <div className="text-sm font-medium">hello@mavzen.ai</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Location</div>
                    <div className="text-sm font-medium">Remote-first, Global delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wider">Response time</div>
                    <div className="text-sm font-medium">Within 2 hours</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl shadow-black/10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Message Received</h3>
                    <p className="text-muted-foreground">We'll be in touch within 2 hours to schedule your strategy session.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className={inputClass}
                          value={formData.name}
                          onChange={handleChange}
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className={inputClass}
                          value={formData.email}
                          onChange={handleChange}
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="businessType">Business Type</label>
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          className={inputClass}
                          value={formData.businessType}
                          onChange={handleChange}
                          data-testid="select-business-type"
                        >
                          <option value="" disabled>Select your industry</option>
                          <option value="d2c">D2C Brand</option>
                          <option value="clinic">Clinic</option>
                          <option value="hvac">HVAC / Plumbing</option>
                          <option value="agency">Agency</option>
                          <option value="coaching">Coaching</option>
                          <option value="realestate">Real Estate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="budget">Monthly Budget</label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          className={inputClass}
                          value={formData.budget}
                          onChange={handleChange}
                          data-testid="select-budget"
                        >
                          <option value="" disabled>Select budget range</option>
                          <option value="under2k">Under $2k/mo</option>
                          <option value="2k5k">$2k – $5k/mo</option>
                          <option value="5k10k">$5k – $10k/mo</option>
                          <option value="10kplus">$10k+/mo</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="message">Tell us about your business</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="What's your biggest growth challenge right now? What have you tried? What would success look like?"
                        className={inputClass + " resize-none"}
                        value={formData.message}
                        onChange={handleChange}
                        data-testid="textarea-message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-base transition-all shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
                      data-testid="button-submit-contact"
                    >
                      <Send size={18} />
                      Book Strategy Call
                    </button>

                    <p className="text-xs text-center text-muted-foreground">No commitment required. Your first strategy call is completely free.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
