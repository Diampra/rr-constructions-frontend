import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, HardHat, Compass, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const transformationMilestones = [
  {
    title: "Ground Breaking & Foundation Engineering",
    description: "Rigorous soil testing, deep excavation, structural pile foundation, and concrete reinforcement tailored for heavy-load edifices.",
    icon: Compass,
    highlights: ["Soil Load Analysis", "Reinforced Concrete Core", "Vastu Compliant Orientations"]
  },
  {
    title: "Structural Framework & ISO Execution",
    description: "Column casting, beam framing, and slab engineering built to withstand seismic and structural stresses.",
    icon: HardHat,
    highlights: ["ISO 9001 Grade Steel", "Seismic Safety Testing", "Precision Formwork"]
  },
  {
    title: "MEP & Specialized Infrastructure Integration",
    description: "Installing mechanical, electrical, plumbing, fire protection, and medical gas pipeline networks.",
    icon: Shield,
    highlights: ["Medical Grade Pipelines", "Centralized HVAC Systems", "Fire Retardant Cabling"]
  },
  {
    title: "Finishing & Operational Handover",
    description: "High-grade exterior cladding, interior partitions, acoustic treatments, and final structural audit.",
    icon: Award,
    highlights: ["Architectural Cladding", "Safety Audit Certification", "Turnkey Handover"]
  }
];

const TransformationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Excellence & Construction Milestones | RR Constructions & RR Infra</title>
        <meta
          name="description"
          content="Witness how RR Constructions & RR Infra transforms raw land into landmark medical, commercial, and residential infrastructure."
        />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-secondary text-center">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                Engineering Lifecycle
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold text-foreground">
              Landmark Construction Lifecycle
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              From raw topography to world-class multi-specialty hospitals and commercial landmarks.
            </p>
          </div>
        </section>

        {/* Milestones Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {transformationMilestones.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-card border border-gold/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gold/10 text-gold rounded-lg flex items-center justify-center font-bold border border-gold/30">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-gold uppercase tracking-wider">Phase 0{index + 1}</span>
                        <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-border/60">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-primary-foreground text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-serif text-3xl font-bold mb-4 text-gold">Ready to Plan Your Next Project?</h2>
            <p className="text-primary-foreground/70 mb-8 text-sm md:text-base">
              Consult with Partners Mr. V. Rajashekhar and Mr. T. M. Raghu for structural planning and execution.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">Contact Us Today</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TransformationsPage;
