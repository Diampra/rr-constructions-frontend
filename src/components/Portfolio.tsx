import { MapPin, Maximize2, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const featuredProjectsData = [
  {
    id: "1",
    title: "R L Jalappa Hospital & Research Center",
    category: "Healthcare Infrastructure",
    location: "Kolar, Karnataka",
    area: "2,20,000+ Sq. Ft.",
    description: "State-of-the-art multi-specialty hospital and medical research facility offering world-class infrastructure.",
    badge: "Flagship Landmark"
  },
  {
    id: "2",
    title: "AHS Building",
    category: "Commercial Building",
    location: "Kolar, Karnataka",
    area: "75,000+ Sq. Ft.",
    description: "Modern commercial building constructed for business operations and corporate workspace.",
    badge: "Commercial"
  },
  {
    id: "3",
    title: "JP Apartment",
    category: "Residential Building",
    location: "Kolar, Karnataka",
    area: "60,000+ Sq. Ft.",
    description: "Premium residential building featuring modern apartments engineered for comfort and sustainable living.",
    badge: "Residential"
  },
  {
    id: "4",
    title: "Commercial Complex",
    category: "Commercial Complex",
    location: "Kolar, Karnataka",
    area: "45,000+ Sq. Ft.",
    description: "High-grade commercial complex built to accommodate office units and retail centers.",
    badge: "Commercial"
  },
  {
    id: "5",
    title: "Resort Project",
    category: "Hospitality & Resort",
    location: "Karnataka",
    area: "35,000+ Sq. Ft.",
    description: "Luxury resort development combining scenic aesthetics, structural durability, and guest comfort.",
    badge: "Hospitality"
  },
  {
    id: "6",
    title: "Educational Building",
    category: "Educational Institution",
    location: "Karnataka",
    area: "40,000+ Sq. Ft.",
    description: "Educational institution complex featuring spacious classrooms, laboratories, and student facilities.",
    badge: "Educational"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Landmark Portfolio
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 font-bold text-foreground">
            Our Landmark Construction Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Building structures that stand the test of time — delivering over 5 Million+ Sq. Ft. of constructed excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjectsData.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-gold/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase text-gold tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-gold/10 text-gold px-2.5 py-1 rounded-full border border-gold/20">
                    {project.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-foreground">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gold">
                  <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="gold" size="lg" className="font-semibold">
              Explore Complete Landmark Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
