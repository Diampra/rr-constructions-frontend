import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="testimonials" className="py-20 bg-muted/30 border-y border-border/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Client Trust & Relationships
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What Clients & Partners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building lasting relationships through transparency, quality, and commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticTestimonials.map((t) => (
            <Card key={t.id} className="border-gold/20 hover:shadow-lg transition-all bg-card">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-gold/40 mb-4" />
                <p className="italic mb-6 text-muted-foreground text-sm leading-relaxed">
                  “{t.content}”
                </p>

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                <div>
                  <p className="font-serif font-bold text-foreground">{t.name}</p>
                  <p className="text-xs font-semibold text-gold">
                    {t.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
