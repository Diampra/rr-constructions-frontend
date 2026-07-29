import { Star, Quote } from "lucide-react";

const staticTestimonials = [
  {
    id: "1",
    name: "R L Jalappa Hospital Management",
    role: "Kolar, Karnataka",
    content: "RR Constructions & RR Infra delivered our 2,20,000+ Sq. Ft. multi-specialty hospital with exceptional structural precision, high safety standards, and strict on-time execution.",
    rating: 5,
  },
  {
    id: "2",
    name: "Commercial Complex Client",
    role: "Kolar, Karnataka",
    content: "Their technical expertise, ethical business practices, and dedication to safety made them our most trusted infrastructure partner across multiple commercial developments.",
    rating: 5,
  },
  {
    id: "3",
    name: "Residential Society Association",
    role: "Karnataka",
    content: "Over 40 years of civil engineering experience truly shows in their execution. Exceptional structural quality and transparent project management from start to finish.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-rr-cream relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #0A1B33 1px, transparent 1px), linear-gradient(to bottom, #0A1B33 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="font-mono text-rr-gold text-xs uppercase tracking-[0.3em] font-bold">
              Client Trust & Relationships
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-rr-navy-deep leading-tight">
            What Clients & Partners Say
          </h2>
          <p className="text-lg text-rr-navy-deep/70 max-w-2xl mx-auto leading-relaxed font-light">
            Building lasting relationships through transparency, quality, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticTestimonials.map((t) => (
            <div key={t.id} className="group bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(10,27,51,0.15)] hover:shadow-[0_20px_50px_rgba(10,27,51,0.25)] transition-all duration-500 rounded-[2px] relative">
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rr-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Quote className="h-10 w-10 text-rr-gold/30 mb-6 group-hover:text-rr-gold transition-colors duration-500" />
              <p className="font-serif italic mb-8 text-rr-navy-deep/90 text-base md:text-lg leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-rr-gold text-rr-gold"
                  />
                ))}
              </div>

              <div className="border-t border-rr-navy-deep/5 pt-5 mt-auto">
                <p className="font-sans font-bold text-rr-navy-deep tracking-wide">{t.name}</p>
                <p className="text-[11px] font-mono font-bold text-rr-gold uppercase tracking-[0.1em] mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
