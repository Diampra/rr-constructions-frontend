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
    <header className="fixed top-0 left-0 right-0 z-50 bg-rr-navy-deep text-rr-cream border-b border-rr-cream/10 shadow-lg py-2.5">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-rr-gold text-rr-navy-deep rounded-lg flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M3 21h18" />
              <path d="M5 21V7l8-4 8 4v14" />
              <path d="M9 21v-6h6v6" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-sans text-base md:text-lg font-black tracking-wider uppercase block text-rr-cream">
              RR INFRA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-medium block -mt-0.5 text-rr-cream/60">
              constructions & development
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-rr-gold-bright"
                    : "text-rr-cream/80 hover:text-rr-gold-bright"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+919448085212" className="flex items-center gap-1.5 text-xs font-bold font-mono transition-colors text-rr-cream hover:text-rr-gold-bright">
            <Phone className="w-3.5 h-3.5 text-rr-gold shrink-0" />
            <span>+91 94480 85212</span>
          </a>

          <div className="flex items-center gap-2 border-x px-3 py-1 border-rr-cream/15 text-rr-cream/60">
            <a href="#" className="hover:text-rr-gold-bright transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-rr-gold-bright transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-rr-gold-bright transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>

          <ThemeToggle />

          <Link to="/contact">
            <Button className="bg-rr-gold hover:bg-rr-gold-bright text-rr-navy-deep text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition-all hover:scale-[1.02] flex items-center gap-1.5">
              <span>Inquire Project</span>
              <span className="text-sm">↘</span>
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-1.5 text-rr-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-rr-navy-deep border-b border-rr-cream/10 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-rr-cream hover:text-rr-gold-bright"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-rr-cream/10 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-rr-cream/60">+91 94480 85212</span>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-rr-gold text-rr-navy-deep text-xs font-bold uppercase px-4 py-2">
                Inquire Project ↘
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;