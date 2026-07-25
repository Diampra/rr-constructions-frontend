import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Building2, MapPin, Maximize2, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  builtUpArea: string;
  location: string;
  status: string;
  featured?: boolean;
}

const staticProjects: Project[] = [
  {
    id: "1",
    title: "R L Jalappa Hospital & Research Center",
    description: "A state-of-the-art multi-specialty hospital and research center offering world-class healthcare infrastructure with modern amenities and advanced medical facilities.",
    type: "Healthcare Infrastructure",
    builtUpArea: "2,20,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
    featured: true,
  },
  {
    id: "2",
    title: "AHS Building",
    description: "Modern commercial building constructed to drive business operations with state-of-the-art architectural design and structural integrity.",
    type: "Commercial Building",
    builtUpArea: "75,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
  },
  {
    id: "3",
    title: "JP Apartment",
    description: "Premium residential building featuring modern apartments engineered for comfort, luxury living, and Vastu-compliant layout.",
    type: "Residential Building",
    builtUpArea: "60,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
  },
  {
    id: "4",
    title: "Commercial Complex",
    description: "High-grade commercial complex built to accommodate corporate offices, retail outlets, and business hubs with advanced safety systems.",
    type: "Commercial Building",
    builtUpArea: "45,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
  },
  {
    id: "5",
    title: "Resort Project",
    description: "Luxury resort & hospitality development blending aesthetics, guest comfort, and structural durability in a scenic environment.",
    type: "Hospitality Resort",
    builtUpArea: "35,000+ Sq. Ft.",
    location: "Karnataka",
    status: "Completed",
  },
  {
    id: "6",
    title: "Educational Building",
    description: "Modern educational institution complex featuring spacious classrooms, laboratories, and student-focused facilities.",
    type: "Educational Institution",
    builtUpArea: "40,000+ Sq. Ft.",
    location: "Karnataka",
    status: "Completed",
  },
];

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Healthcare Infrastructure", "Commercial Building", "Residential Building", "Educational Institution", "Hospitality Resort"];

  const filteredProjects = activeFilter === "All"
    ? staticProjects
    : staticProjects.filter(p => p.type === activeFilter);

  const featuredProject = staticProjects.find(p => p.featured);

  return (
    <>
      <Helmet>
        <title>Landmark Projects Portfolio | RR Constructions & RR Infra</title>
        <meta 
          name="description" 
          content="Explore RR Constructions & RR Infra's landmark projects including R L Jalappa Hospital & Research Center (2,20,000+ Sq. Ft.), AHS Building, JP Apartments, and commercial complexes across Karnataka." 
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
                Our Proven Track Record
              </span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl mb-6 font-bold text-foreground">
              Landmark Construction Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Building structures that stand the test of time — delivering over 5 Million+ Sq. Ft. of high-quality construction across Karnataka.
            </p>
          </div>
        </section>

        {/* Featured Project Showcase */}
        {featuredProject && (
          <section className="py-16 bg-background border-b border-border/60">
            <div className="container mx-auto px-6">
              <div className="bg-card border border-gold/30 rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden">
                <div className="inline-block bg-gold text-foreground text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
                  Flagship Landmark Project
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                      {featuredProject.title}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {featuredProject.description}
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase font-medium">Location</span>
                        <span className="text-sm font-bold text-foreground flex items-center gap-1.5 mt-1">
                          <MapPin className="w-4 h-4 text-gold shrink-0" />
                          {featuredProject.location}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase font-medium">Built-up Area</span>
                        <span className="text-sm font-bold text-foreground flex items-center gap-1.5 mt-1">
                          <Maximize2 className="w-4 h-4 text-gold shrink-0" />
                          {featuredProject.builtUpArea}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase font-medium">Status</span>
                        <span className="text-sm font-bold text-foreground flex items-center gap-1.5 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          {featuredProject.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/40 p-6 rounded-xl border border-gold/20 text-center space-y-4">
                    <Building2 className="w-12 h-12 text-gold mx-auto" />
                    <h4 className="font-serif text-xl font-bold text-foreground">Healthcare Infrastructure</h4>
                    <p className="text-xs text-muted-foreground">World-class hospital facility built to stringent international medical safety & structural standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                    activeFilter === category
                      ? "bg-gold text-foreground shadow-sm"
                      : "bg-secondary text-foreground/80 hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card border border-gold/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase text-gold tracking-wider">
                        {project.type}
                      </span>
                      <span className="text-[11px] font-semibold bg-gold/10 text-gold px-2.5 py-0.5 rounded-full border border-gold/20">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-foreground">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gold">
                      <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.builtUpArea}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote & CTA */}
        <section className="py-20 bg-foreground text-primary-foreground text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <blockquote className="italic font-serif text-xl md:text-2xl text-gold mb-8 leading-relaxed">
              "Every project we build reflects our commitment to quality, innovation and lasting relationships with our clients."
            </blockquote>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Discuss Your Next Project
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PortfolioPage;
