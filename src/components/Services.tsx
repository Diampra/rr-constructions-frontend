import { Building2, Home, Cross, GraduationCap, Factory, Hotel, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const staticServices = [
  {
    id: "1",
    title: "Commercial Buildings",
    icon: Building2,
    description: "Construction of modern commercial spaces including office buildings, business parks, and corporate complexes.",
  },
  {
    id: "2",
    title: "Residential Projects",
    icon: Home,
    description: "Creating premium residential spaces including apartments, villas, and communities focused on comfort & quality.",
  },
  {
    id: "3",
    title: "Hospital Buildings",
    icon: Cross,
    description: "Specialized healthcare infrastructure including multi-specialty hospitals and medical colleges built to global standards.",
  },
  {
    id: "4",
    title: "Educational Institutions",
    icon: GraduationCap,
    description: "Construction of schools, colleges, universities, and research centers providing safe learning environments.",
  },
  {
    id: "5",
    title: "Industrial Buildings",
    icon: Factory,
    description: "Design and construction of industrial manufacturing units, warehouses, and high-load infrastructure.",
  },
  {
    id: "6",
    title: "Resorts & Hospitality",
    icon: Hotel,
    description: "Creating premium resorts, hotels, and guest spaces combining architectural aesthetics and durability.",
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
              Core Capabilities
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 font-bold text-foreground">
            Our Services & Construction Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Over 40+ years of rich experience delivering high-grade projects across 6 core sectors in Karnataka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative bg-card border border-gold/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6 border border-gold/30">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link to="/services">
                  <Button variant="ghost" className="p-0 h-auto text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-wider">
                    Learn More Sector Specs <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
