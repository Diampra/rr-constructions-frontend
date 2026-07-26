import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#leadership" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const sectors = [
    { name: "Commercial Buildings", href: "/services" },
    { name: "Residential Projects", href: "/services" },
    { name: "Hospital Buildings", href: "/services" },
    { name: "Educational Institutions", href: "/services" },
    { name: "Industrial Buildings", href: "/services" },
    { name: "Resorts & Hospitality", href: "/services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-rr-navy-deep text-rr-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-rr-gold text-rr-navy-deep rounded-lg flex items-center justify-center font-bold shadow-lg">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-rr-cream">
                  RR INFRA
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-rr-cream/60">
                  Constructions & Development
                </span>
              </div>
            </Link>
            <p className="text-rr-cream/60 text-sm leading-relaxed mb-6">
              40+ years of excellence in commercial, residential, healthcare, educational, industrial, and hospitality infrastructure across Karnataka.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-rr-gold hover:text-rr-navy-deep transition-all duration-300 rounded-lg"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-rr-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-rr-cream/60 text-sm hover:text-rr-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-serif text-lg text-rr-cream mb-6">Our Sectors</h4>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.name}>
                  <Link
                    to={sector.href}
                    className="text-rr-cream/60 text-sm hover:text-rr-gold transition-colors"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-rr-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rr-gold shrink-0 mt-0.5" />
                <span className="text-rr-cream/60 text-sm">
                  #18, 2nd Floor, 3rd Cross,<br />
                  Sanjeevappa Layout,<br />
                  Kolar, Karnataka 563101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rr-gold shrink-0" />
                <a href="tel:+919448085212" className="text-rr-cream/60 text-sm hover:text-rr-gold transition-colors">
                  +91 94480 85212
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rr-gold shrink-0" />
                <a href="mailto:info@rrinfra.co.in" className="text-rr-cream/60 text-sm hover:text-rr-gold transition-colors">
                  info@rrinfra.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-rr-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-rr-cream/60 text-sm">
            © {currentYear} RR Constructions & RR Infra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-rr-cream/60 text-sm hover:text-rr-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-rr-cream/60 text-sm hover:text-rr-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;