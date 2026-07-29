import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rr-navy-deep/95 backdrop-blur-md text-rr-cream border-b border-white/10 shadow-xl shadow-black/20 py-3 transition-all duration-500">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-rr-gold to-rr-gold-bright text-rr-navy-deep rounded-[2px] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(201,154,70,0.3)] transition-transform duration-500 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M3 21h18" />
              <path d="M5 21V7l8-4 8 4v14" />
              <path d="M9 21v-6h6v6" />
            </svg>
          </div>
          <div className="leading-none flex flex-col justify-center">
            <span className="font-sans text-base md:text-lg font-black tracking-[0.1em] uppercase block text-rr-cream group-hover:text-rr-gold transition-colors duration-300">
              RR INFRA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-medium block mt-1 text-rr-cream/60">
              constructions & development
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-[11px] font-bold uppercase tracking-[0.15em] py-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded-sm ${
                  isActive
                    ? "text-rr-gold"
                    : "text-white/70 hover:text-rr-cream"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-rr-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+919448085212" className="flex items-center gap-2 text-xs font-bold font-mono transition-colors text-white/80 hover:text-rr-gold">
            <Phone className="w-3.5 h-3.5 text-rr-gold shrink-0" />
            <span>+91 94480 85212</span>
          </a>

          <div className="flex items-center gap-3 border-x px-4 py-1 border-white/10 text-white/40">
            <a href="#" aria-label="Facebook" className="hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded-sm"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded-sm"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded-sm"><Linkedin className="w-4 h-4" /></a>
          </div>

          <Button asChild className="bg-rr-gold hover:bg-rr-gold-bright text-rr-navy-deep text-[11px] font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-[2px] shadow-[0_4px_14px_rgba(201,154,70,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(201,154,70,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rr-gold">
            <Link to="/contact" className="flex items-center gap-2">
              <span>Inquire</span>
              <span className="text-base leading-none">↘</span>
            </Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-rr-cream hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-rr-navy-deep/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl animate-fade-down">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.15em] text-white/80 hover:text-rr-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <a href="tel:+919448085212" className="flex items-center gap-2 text-sm font-mono font-bold text-rr-gold">
              <Phone className="w-4 h-4" />
              <span>+91 94480 85212</span>
            </a>
            <Button asChild className="w-full bg-rr-gold text-rr-navy-deep text-xs font-bold uppercase tracking-widest py-6 rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rr-gold">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Inquire Project ↘
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
