import { Helmet } from "react-helmet-async";
import { Building2, Home, Cross, GraduationCap, Factory, Hotel, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const servicesData = [
  {
    id: "1",
    title: "Commercial Buildings",
    icon: Building2,
    description: "Construction of modern commercial spaces including office buildings, business parks, and corporate complexes that drive business growth.",
    features: ["Modern Architecture", "Structural Precision", "High Functionality", "Energy Efficient Systems", "Timely Delivery", "Safety Compliant"],
    badge: "Commercial Infrastructure"
  },
  {
    id: "2",
    title: "Residential Projects",
    icon: Home,
    description: "Creating premium residential spaces including apartments, villas, and communities with a focus on quality, comfort, and sustainable living.",
    features: ["Vastu Compliant Layouts", "Premium Structural Materials", "Modern Amenities", "Sustainable Living Space", "Aesthetic Design", "Zero Compromise Quality"],
    badge: "Residential Development"
  },
  {
    id: "3",
    title: "Hospital Buildings",
    icon: Cross,
    description: "Specialized healthcare infrastructure including multi-specialty hospitals, medical colleges, and healthcare facilities built to global standards.",
    features: ["2,20,000+ Sq. Ft. Expertise", "Advanced Medical Layouts", "Strict Sterility Protocols", "Emergency Infrastructure", "Heavy Load Flooring", "ISO Standardized"],
    badge: "Healthcare Infrastructure"
  },
  {
    id: "4",
    title: "Educational Institutions",
    icon: GraduationCap,
    description: "Construction of schools, colleges, universities, and research centers that provide safe, inspiring, and innovative learning environments.",
    features: ["Spacious Classrooms", "Auditorium & Labs", "Sports Infrastructure", "Student Safety Focused", "Acoustic Engineering", "Future Ready Labs"],
    badge: "Educational Infrastructure"
  },
  {
    id: "5",
    title: "Industrial Buildings",
    icon: Factory,
    description: "Design and construction of industrial buildings including manufacturing units, warehouses, and other industrial facilities with high functionality.",
    features: ["Heavy Duty Structures", "Warehouse Logistics Units", "High Bay Storage", "Ventilation Systems", "Fire Retardant Materials", "Scalable Designs"],
    badge: "Industrial Facilities"
  },
  {
    id: "6",
    title: "Resorts & Hospitality",
    icon: Hotel,
    description: "Creating premium resorts, hotels, and hospitality spaces that combine aesthetics, comfort, and functionality for memorable experiences.",
    features: ["Luxury Aesthetic Finish", "Pool & Recreation Grounds", "Eco-friendly Materials", "Guest Comfort Optimized", "Landscape Integration", "Turnkey Construction"],
    badge: "Hospitality Development"
  }
];

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Our Services & Construction Expertise | RR Constructions & RR Infra</title>
        <meta 
          name="description" 
          content="Explore RR Constructions & RR Infra's 6 core service segments: Commercial Buildings, Residential Projects, Hospital Infrastructure, Educational Institutions, Industrial Facilities, and Resort Projects across Karnataka." 
        />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                40+ Years of Quality & Trust
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold text-foreground">
              Our Construction Services & Expertise
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Delivering high-grade commercial, residential, medical, educational, industrial, and hospitality projects across Karnataka with uncompromised quality and structural safety.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-card border border-gold/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-gold/10 text-gold rounded-lg flex items-center justify-center border border-gold/30">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold bg-gold/5 px-3 py-1 rounded-full border border-gold/20">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-8 pt-4 border-t border-border/60">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full border-gold/30 hover:bg-gold hover:text-foreground transition-all">
                        Inquire For Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-bold mb-4">
              Have a Blueprint or Upcoming Project?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-base md:text-lg leading-relaxed">
              We welcome the opportunity to work with you and build a better tomorrow together. Let's discuss your next landmark project.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="font-semibold">
                Get In Touch With Our Leadership
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
