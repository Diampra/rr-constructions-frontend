import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Building2, MapPin, Maximize2, CheckCircle2, Search, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lightbox } from "@/components/ui/lightbox";
import { projects, projectCategories } from "@/data/projects";

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<Array<{ src: string; alt: string }>>([]);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.type === activeFilter);

  const featuredProject = projects.find(p => p.featured);

  const openLightbox = (images: Array<{ src: string; alt: string }>, index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/rr-hero-2-desktop.png"
              alt="Construction project"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-sm uppercase tracking-[0.2em] font-medium">
                  Our Proven Track Record
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Landmark Construction Projects
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Building structures that stand the test of time - delivering over 5 Million+ Sq. Ft. of high-quality construction across Karnataka.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="font-semibold">
                  Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Project Showcase */}
        {featuredProject && (
          <section className="py-16 bg-background border-b border-border/60">
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden">
                <div className="inline-block bg-rr-gold text-rr-navy-deep text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
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
                    {featuredProject.images.length > 0 && (
                      <button
                        onClick={() => openLightbox(featuredProject.images, 0)}
                        className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-xs uppercase tracking-wider mt-4"
                      >
                        <Search className="w-4 h-4" />
                        View Project Gallery
                      </button>
                    )}
                  </div>
                  <div className="bg-rr-navy-deep/5 p-6 rounded-xl border border-rr-gold/20 text-center space-y-4">
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
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                    activeFilter === category
                      ? "bg-rr-gold text-rr-navy-deep shadow-md"
                      : "bg-rr-navy-deep text-rr-cream border border-rr-cream/20 hover:bg-rr-gold hover:text-rr-navy-deep"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                        <Building2 className="w-12 h-12 text-gold/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.images.length > 0 && (
                      <button
                        onClick={() => openLightbox(project.images, 0)}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 text-foreground hover:bg-white flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                        aria-label={`View ${project.title} gallery`}
                      >
                        <Search className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase text-gold tracking-wider">
                          {project.type}
                        </span>
                        <span className="text-[11px] font-semibold bg-gold/10 text-gold px-2.5 py-0.5 rounded-full border border-gold/20">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold mb-2 text-foreground line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-3">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quote & CTA */}
        <section className="py-20 bg-rr-navy-deep text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <blockquote className="italic font-serif text-xl md:text-2xl text-rr-gold mb-8 leading-relaxed">
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

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />

      <Footer />
    </>
  );
};

export default PortfolioPage;