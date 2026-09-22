import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { WhatsAppIcon } from "./WhatsAppButton";

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-xl shadow-black/5">
      {/* Top Utility Bar (Above Navbar) */}
      <div className="bg-rr-navy-deep text-rr-cream/90 border-b border-white/10 py-2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] font-medium text-rr-cream/70 tracking-wider uppercase">
            <span>25+ Years of Construction Excellence</span>
            <span className="text-white/20">|</span>
            <a 
              href="mailto:contact@rrinfra.co.in" 
              className="flex items-center gap-1.5 text-rr-cream/75 hover:text-rr-gold transition-colors lowercase font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-rr-gold" />
              <span>contact@rrinfra.co.in</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="tel:+919845078828" 
              className="flex items-center gap-1.5 text-xs font-bold font-mono transition-colors text-rr-cream/90 hover:text-rr-gold"
            >
              <Phone className="w-3.5 h-3.5 text-rr-gold shrink-0" />
              <span>+91 98450 78828</span>
            </a>

            <a 
              href="https://wa.me/919945865862?text=Hello%20RR%20Constructions,%20I%20would%20like%20to%20inquire%20about%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp +91 99458 65862"
              className="flex items-center gap-1.5 text-xs font-bold font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>+91 99458 65862</span>
            </a>

            <div className="flex items-center gap-3 border-l pl-4 border-white/15 text-rr-cream/60">
              <a href="#" aria-label="Facebook" className="hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rr-gold rounded-sm"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rr-gold rounded-sm"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rr-gold rounded-sm"><Linkedin className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-rr-cream/95 backdrop-blur-md text-rr-navy-deep border-b border-rr-navy-deep/10 py-3 md:py-2.5">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/logo.webp" 
              alt="RR Infra Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
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
                      : "text-rr-navy-deep/70 hover:text-rr-navy-deep"
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

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-rr-gold hover:bg-rr-gold-bright text-rr-navy-deep text-[11px] font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-[2px] shadow-[0_4px_14px_rgba(201,154,70,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(201,154,70,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rr-gold">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Inquire</span>
                <span className="text-base leading-none">↘</span>
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-rr-navy-deep hover:text-rr-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-rr-cream/95 backdrop-blur-xl border-b border-rr-navy-deep/10 px-6 py-8 flex flex-col gap-6 shadow-2xl animate-fade-down">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.15em] text-rr-navy-deep/80 hover:text-rr-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-rr-navy-deep/10 flex flex-col gap-3">
            <a href="tel:+919845078828" className="flex items-center gap-2 text-sm font-mono font-bold text-rr-navy-deep hover:text-rr-gold transition-colors">
              <Phone className="w-4 h-4 text-rr-gold" />
              <span>Call: +91 98450 78828</span>
            </a>
            <a 
              href="https://wa.me/919945865862?text=Hello%20RR%20Constructions,%20I%20would%20like%20to%20inquire%20about%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: +91 99458 65862</span>
            </a>
            <Button asChild className="w-full mt-2 bg-rr-gold text-rr-navy-deep text-xs font-bold uppercase tracking-widest py-6 rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rr-gold">
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
