import { MapPin, Maximize2, CheckCircle2, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle blueprint grid in background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #0A1B33 1px, transparent 1px), linear-gradient(to bottom, #0A1B33 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="text-rr-gold text-xs uppercase tracking-[0.3em] font-bold">
              Landmark Portfolio
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 font-bold text-rr-navy-deep leading-tight">
            Our Landmark <br className="hidden md:block" />Construction Projects
          </h2>
          <p className="text-rr-navy-deep/70 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide">
            Building structures that stand the test of time - delivering over 5 Million+ Sq. Ft. of constructed excellence across Karnataka.
          </p>
        </div>

        {/* Grid - Asymmetrical feeling with offset transforms on even items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`group bg-white rounded-[2px] overflow-hidden shadow-[0_10px_30px_rgba(10,27,51,0.15)] hover:shadow-[0_20px_50px_rgba(10,27,51,0.25)] transition-all duration-500 flex flex-col ${idx % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-rr-navy-mid/10">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-rr-gold/30 text-5xl">🏗</span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rr-navy-deep/80 via-rr-navy-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {project.images.length > 0 && (
                  <button
                    onClick={() => window.location.href = `/portfolio#${project.id}`}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"
                    aria-label={`View ${project.title} gallery`}
                  >
                    <div className="w-14 h-14 rounded-full bg-rr-gold text-rr-navy-deep flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Search className="w-6 h-6" />
                    </div>
                  </button>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold uppercase bg-white/90 text-rr-navy-deep backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between relative bg-white">
                {/* Decorative gold line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-rr-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase text-rr-gold tracking-[0.2em] block mb-3">
                    {project.type}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold mb-3 text-rr-navy-deep group-hover:text-rr-gold transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-rr-navy-deep/70 text-sm leading-relaxed line-clamp-3 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 flex items-center justify-between text-xs font-semibold text-rr-navy-deep/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rr-gold shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-rr-gold">
                    <Maximize2 className="w-4 h-4 shrink-0" />
                    <span>{project.builtUpArea}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="gold" size="lg" className="font-bold tracking-wide shadow-gold shadow-2xl">
              Explore Complete Landmark Portfolio <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
