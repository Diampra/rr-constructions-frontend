import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube, Facebook, Instagram, Linkedin, Building2, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#leadership" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F3EE] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200/80 dark:border-zinc-800 shadow-sm py-2.5 transition-all">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-zinc-900 dark:bg-amber-500 text-white dark:text-zinc-950 rounded-lg flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <span className="font-sans text-base md:text-lg font-black tracking-wider uppercase block text-zinc-900 dark:text-white">
              RR INFRA
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-medium text-zinc-500 dark:text-zinc-400 block -mt-0.5">
              constructions & development
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:text-amber-600 dark:hover:text-amber-400 ${
                  isActive ? "text-amber-600 dark:text-amber-400" : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Phone, Social Icons, Theme & CTA Button */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+919448085212" className="flex items-center gap-1.5 text-xs font-bold font-mono text-zinc-800 dark:text-zinc-200 hover:text-amber-600 transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>+91 94480 85212</span>
          </a>

          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 border-x border-zinc-300 dark:border-zinc-800 px-3 py-1">
            <a href="#" className="hover:text-amber-600 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-amber-600 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-amber-600 transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>

          <ThemeToggle />

          <Link to="/contact">
            <Button className="bg-[#FF5522] hover:bg-[#E04411] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition-transform hover:scale-[1.02] flex items-center gap-1.5">
              <span>Inquire Project</span>
              <span className="text-sm">↘</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-1.5 text-zinc-800 dark:text-zinc-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F3EE] dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 hover:text-amber-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">+91 94480 85212</span>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-[#FF5522] text-white text-xs font-bold uppercase px-4 py-2">
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
