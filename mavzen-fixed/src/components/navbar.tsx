import React, { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
const logoPath = "/logo.png";
import { useTheme } from "./theme-provider";

const CALENDLY = "https://calendly.com/mavzenai/30min";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Systems", path: "/systems" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Process", path: "/process" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 relative group">
          <div className="relative overflow-hidden rounded-lg flex items-center justify-center h-12 w-12">
            <img src={logoPath} alt="Mavzen AI Logo" className="h-12 w-12 object-contain" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            Mavzen <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="relative group">
              <span className={`text-sm font-medium transition-colors hover:text-primary ${location === link.path ? "text-primary" : "text-muted-foreground"}`}>
                {link.name}
              </span>
              {location === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-md font-medium text-sm transition-all shadow-[0_0_15px_rgba(0,212,170,0.3)] hover:shadow-[0_0_25px_rgba(0,212,170,0.5)]"
          >
            Book Strategy Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50 relative">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-foreground"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pb-6 h-screen"
            >
              <div className="flex flex-col gap-6 text-2xl font-semibold mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${location === link.path ? "text-primary" : "text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center bg-primary text-primary-foreground py-4 rounded-lg font-medium shadow-[0_0_20px_rgba(0,212,170,0.3)]"
                >
                  Book Strategy Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
