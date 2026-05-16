import React from "react";
import { Link } from "wouter";
const logoPath = "/logo.png";
import { SiX, SiInstagram } from "react-icons/si";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

const SOCIAL = [
  {
    href: "https://x.com/Tann7229",
    icon: <SiX size={18} />,
    label: "Twitter / X",
  },
  {
    href: "https://www.instagram.com/mavzen.ai",
    icon: <SiInstagram size={18} />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/tanishq-girhare-1a18a6284",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="relative overflow-hidden rounded-lg flex items-center justify-center h-12 w-12">
                <img src={logoPath} alt="Mavzen AI Logo" className="h-12 w-12 object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                Mavzen <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              AI Infrastructure For Modern D2C Brands. We engineer intelligent conversion, retention, and operational systems that run your entire customer journey.
            </p>
            <div className="flex gap-4">
              {SOCIAL.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Systems & Solutions</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/systems" className="hover:text-primary transition-colors">Attract Systems</Link></li>
              <li><Link href="/systems" className="hover:text-primary transition-colors">Convert Systems</Link></li>
              <li><Link href="/systems" className="hover:text-primary transition-colors">Support Systems</Link></li>
              <li><Link href="/systems" className="hover:text-primary transition-colors">Retain Systems</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industry Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mavzen AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
