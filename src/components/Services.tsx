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
 * - Sector index ("01 / 06") is meaningful, not decorative — the copy
 *   promises "6 core sectors," so the count is real data.
 * - Project thumbnails are staged as a fanned photo stack that BRIDGES
 *   the hero image and the content body — half embedded in the image,
 *   half resting on the card. This does three UX jobs at once:
 *     1. Reads as physical proof-of-work (site photos, pinned like a
 *        job-board), which suits a 40-year construction brand better
 *        than a flat hover-grid.
 *     2. The overlap is the visual link between "what the sector looks
 *        like" (hero) and "what we've built" (thumbnails) — proximity
 *        does the explaining instead of a label.
 *     3. Staying visible by default (no hover-gate) means it also works
 *        on touch, where hover states never fire.
 *   Fixed rotation + cream keylines keep it legible over any photo;
 *   hover straightens and lifts each print for a closer look.
 */

const total = servicesData.length;

// Slight, fixed fan — deliberate, not random, so it reads as designed
// rather than jittery.
const THUMB_ROTATIONS = ["-6deg", "3deg", "-2deg"];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-rr-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="font-mono text-rr-gold text-xs uppercase tracking-[0.3em] font-medium">
              Core Capabilities
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 font-bold text-rr-navy-deep">
            Our Services &amp; Construction Expertise
          </h2>
          <p className="text-rr-navy-deep/70 max-w-2xl mx-auto text-base md:text-lg">
            Over 40+ years of rich experience delivering high-grade projects across{" "}
            {total} core sectors in Karnataka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const thumbs = service.projectThumbnails.slice(0, 3);

            return (
              <article
                key={service.id}
                className="group relative flex flex-col bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Blueprint corner brackets — the signature detail */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2
                             border-rr-gold opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
                             transition-opacity duration-300 z-20"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2
                             border-rr-gold opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
                             transition-opacity duration-300 z-20"
                />

                {/* Sector image */}
                <div className="relative aspect-[4/3] overflow-hidden border border-rr-gold/20">
                  {service.sectorHeroImage ? (
                    <img
                      src={service.sectorHeroImage}
                      alt={`${service.title} sector`}
                      className="w-full h-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-rr-navy-deep/5 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-rr-gold/50" aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  {/* Index + sector badge, docked at the top so the bottom stays clear for the photo stack */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-white/80">
                      {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-rr-gold text-rr-navy-deep text-xs uppercase font-bold tracking-widest px-3 py-1">
                      {service.badge}
                    </span>
                  </div>

                  <span
                    className="absolute bottom-3 right-3 w-9 h-9 shrink-0 bg-rr-cream text-rr-navy-deep rounded-full
                               flex items-center justify-center border border-rr-gold/40"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                </div>

                {/* Photo stack — bridges image and content, half overlapping each */}
                {thumbs.length > 0 && (
                  <div
                    className="relative z-10 flex pl-6 -mt-9"
                    role="list"
                    aria-label={`Recent ${service.title} projects`}
                  >
                    {thumbs.map((thumb, i) =>
                      thumb ? (
                        <img
                          key={i}
                          role="listitem"
                          src={thumb}
                          alt={`${service.title} project ${i + 1}`}
                          loading="lazy"
                          style={{
                            rotate: THUMB_ROTATIONS[i % THUMB_ROTATIONS.length],
                            marginLeft: i === 0 ? 0 : "-1.25rem",
                          }}
                          className="w-16 h-16 object-cover bg-rr-cream border-[3px] border-rr-cream shadow-md
                                     transition-transform duration-300 motion-reduce:transition-none
                                     hover:!rotate-0 hover:z-10 hover:-translate-y-1 hover:shadow-lg"
                        />
                      ) : (
                        <div
                          key={i}
                          role="listitem"
                          style={{
                            rotate: THUMB_ROTATIONS[i % THUMB_ROTATIONS.length],
                            marginLeft: i === 0 ? 0 : "-1.25rem",
                          }}
                          className="w-16 h-16 bg-rr-navy-deep/5 border-[3px] border-rr-cream shadow-md
                                     flex items-center justify-center"
                        >
                          <Icon className="w-5 h-5 text-rr-gold/50" aria-hidden="true" />
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Content */}
                <div className={`p-6 flex flex-col flex-1 ${thumbs.length > 0 ? "pt-4" : ""}`}>
                  <h3 className="font-serif text-xl font-bold mb-2 text-rr-navy-deep">
                    {service.title}
                  </h3>

                  <p className="text-rr-navy-deep/70 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Measurement-line divider, a quiet nod to technical drawings */}
                  <div className="flex items-center gap-1 my-5" aria-hidden="true">
                    <span className="w-1.5 h-1.5 bg-rr-gold" />
                    <span className="flex-1 h-px bg-rr-gold/30" />
                    <span className="w-1.5 h-1.5 bg-rr-gold" />
                  </div>

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
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;