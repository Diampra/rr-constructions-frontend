import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { servicesData } from "@/data/services";

/**
 * Services
 *
 * Design notes:
 * - Signature element: hairline "blueprint" corner brackets on each card,
 *   echoing architectural drawing registration marks.
 * - Sector index ("01 / 06") is meaningful, not decorative - the copy
 *   promises "6 core sectors," so the count is real data.
 * - Project thumbnails are staged as a fanned photo stack that BRIDGES
 *   the hero image and the content body - half embedded in the image,
 *   half resting on the card. This does three UX jobs at once:
 *     1. Reads as physical proof-of-work (site photos, pinned like a
 *        job-board), which suits a 40-year construction brand better
 *        than a flat hover-grid.
 *     2. The overlap is the visual link between "what the sector looks
 *        like" (hero) and "what we've built" (thumbnails) - proximity
 *        does the explaining instead of a label.
 *     3. Staying visible by default (no hover-gate) means it also works
 *        on touch, where hover states never fire.
 *   Fixed rotation + cream keylines keep it legible over any photo;
 *   hover straightens and lifts each print for a closer look.
 */

const total = servicesData.length;

// Slight, fixed fan - deliberate, not random, so it reads as designed
// rather than jittery.
const THUMB_ROTATIONS = ["-6deg", "3deg", "-2deg"];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const Icon = service.icon;
  const thumbs = service.projectThumbnails.slice(0, 3);
  const [activeImage, setActiveImage] = useState(service.sectorHeroImage);

  return (
    <article
      className="group relative flex flex-col transition-transform duration-300"
    >
      {/* Exposed Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-rr-navy-deep/5 mb-6">
        {activeImage ? (
          <img
            src={activeImage}
            alt={`${service.title} sector`}
            onClick={() => setActiveImage(service.sectorHeroImage)}
            className={`w-full h-full object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.03] ${activeImage !== service.sectorHeroImage ? 'cursor-pointer' : ''}`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="w-16 h-16 text-rr-gold/50" aria-hidden="true" />
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <span className="font-mono text-[11px] tracking-widest text-white drop-shadow-md">
            {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center gap-1.5 bg-rr-gold text-rr-navy-deep text-xs uppercase font-bold tracking-widest px-3 py-1 shadow-sm">
            {service.badge}
          </span>
        </div>

        {/* Fanned Photo Stack (anchored to bottom right of image) */}
        {thumbs.length > 0 && (
          <div
            className="absolute bottom-4 right-4 flex"
            role="list"
            aria-label={`Recent ${service.title} projects`}
          >
            {thumbs.map((thumb: string, i: number) =>
              thumb ? (
                <button
                  key={i}
                  role="listitem"
                  onClick={() => setActiveImage(activeImage === thumb ? service.sectorHeroImage : thumb)}
                  style={{
                    rotate: THUMB_ROTATIONS[i % THUMB_ROTATIONS.length],
                    marginLeft: i === 0 ? 0 : "-1rem",
                  }}
                  className="w-12 h-12 p-0 border-none bg-transparent outline-none cursor-pointer group/thumb z-0 hover:z-10 transition-all duration-300 hover:!rotate-0 hover:-translate-y-1 focus-visible:z-10 focus-visible:!rotate-0 focus-visible:-translate-y-1"
                >
                  <img
                    src={thumb}
                    alt={`${service.title} project ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover bg-white border-2 border-white shadow-md"
                  />
                </button>
              ) : null
            )}
          </div>
        )}
      </div>

      {/* Content (No box, directly on background) */}
      <div className="flex flex-col flex-1 pl-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-2xl font-bold text-rr-navy-deep pr-4">
            {service.title}
          </h3>
          <Icon className="w-6 h-6 text-rr-gold shrink-0 mt-1" aria-hidden="true" />
        </div>

        <p className="text-rr-navy-deep/70 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <Link
          to="/services"
          className="mt-auto inline-flex items-center gap-1.5 text-rr-gold hover:text-rr-gold-bright
                     text-xs font-semibold uppercase tracking-wider w-fit
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rr-gold"
        >
          View sector specs
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-rr-cream relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* Left Column: Sticky Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-rr-gold" />
                <span className="font-mono text-rr-gold text-xs uppercase tracking-[0.3em] font-medium">
                  Core Capabilities
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 font-bold text-rr-navy-deep leading-tight">
                Our Services &amp;<br />Construction Expertise
              </h2>
              <p className="text-rr-navy-deep/70 text-base md:text-lg leading-relaxed mb-8">
                Over 25+ years of rich experience delivering high-grade projects across{" "}
                {total} core sectors in Karnataka. We build the future with uncompromised quality.
              </p>
              <Button asChild className="bg-rr-navy-deep hover:bg-rr-gold text-rr-cream hover:text-rr-navy-deep font-bold tracking-wide rounded-none px-6 py-6 h-auto transition-colors w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rr-gold focus-visible:ring-offset-2">
                <Link to="/services">
                  View All Capabilities
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Scrolling Cards Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

