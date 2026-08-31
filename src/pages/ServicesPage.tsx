import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { Building2, Home, Cross, GraduationCap, Factory, Hotel, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesData } from "@/data/services";

const ServicesPage = () => {
  const { t } = useLanguage();
  const [s0, s1, s2, s3, s4] = servicesData;
  const totalStr = "05";

  const [activeImages, setActiveImages] = useState<Record<string, string>>({});
  const articleRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleImageToggle = (serviceId: string, thumbUrl: string, defaultUrl: string) => {
    setActiveImages(prev => ({
      ...prev,
      [serviceId]: prev[serviceId] === thumbUrl ? defaultUrl : thumbUrl
    }));

    setTimeout(() => {
      const el = articleRefs.current[serviceId];
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the top of the article is above the viewport (with some padding for header)
        // or bottom is below, scroll it into view.
        if (rect.top < 80 || rect.bottom > window.innerHeight) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }, 10);
  };

  const renderBadgeAndIcon = (service: any, index: number, total: string) => (
    <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
      <span className="font-mono text-[11px] tracking-widest text-white drop-shadow-md">
        {String(index + 1).padStart(2, "0")}/{total}
      </span>
      <span className="inline-flex items-center gap-1.5 bg-rr-gold text-rr-navy-deep text-xs uppercase font-bold tracking-widest px-3 py-1 shadow-sm">
        {service.badge}
      </span>
    </div>
  );

  const THUMB_ROTATIONS = ["-6deg", "3deg", "-2deg"];

  const renderOverlayGallery = (service: any) => {
    if (!service.projectThumbnails || service.projectThumbnails.length === 0) return null;
    const currentActive = activeImages[service.id] || service.sectorHeroImage;

    return (
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex z-20" role="list">
        {service.projectThumbnails.slice(0, 3).map((thumb: any, i: number) =>
          thumb ? (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                handleImageToggle(service.id, thumb, service.sectorHeroImage);
              }}
              style={{
                rotate: THUMB_ROTATIONS[i % THUMB_ROTATIONS.length],
                marginLeft: i === 0 ? 0 : "-1rem",
              }}
              className="w-16 h-16 md:w-24 md:h-24 p-0 border-none bg-transparent outline-none cursor-pointer group/thumb z-0 hover:z-10 transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 focus-visible:z-10"
            >
              <img
                src={thumb}
                alt=""
                loading="lazy"
                className={`w-full h-full object-cover bg-white shadow-lg border-2 transition-all duration-300 ${currentActive === thumb ? 'border-rr-gold' : 'border-white'}`}
              />
            </button>
          ) : null
        )}
      </div>
    );
  };

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

      <main className="pt-12">
        {/* Hero */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-2.png"
              alt="Construction project"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-rr-gold" />
                <span className="text-rr-gold text-sm uppercase tracking-[0.2em] font-medium">
                  Our Construction Services
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Construction Services &amp; Expertise
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Delivering high-grade commercial, residential, medical, educational, industrial, and hospitality projects across Karnataka with uncompromised quality and structural safety.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="font-semibold">
                  Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Cinematic Journey Section */}
        <section className="bg-rr-cream overflow-hidden">
          <div className="container mx-auto px-6 py-24 space-y-32 md:space-y-48">
            
            {/* 1. Commercial Buildings (Full width landscape) */}
            <article className="group" ref={(el) => (articleRefs.current[s0.id] = el)}>
              <div className="relative w-full aspect-[21/9] md:aspect-[16/9] mb-16 md:mb-20">
                <div className="absolute inset-0 overflow-hidden shadow-xl bg-rr-navy-deep/5">
                  {s0.sectorHeroImage ? (
                    <img 
                      src={activeImages[s0.id] || s0.sectorHeroImage} 
                      alt={s0.title} 
                      onClick={() => handleImageToggle(s0.id, s0.sectorHeroImage, s0.sectorHeroImage)}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${(activeImages[s0.id] && activeImages[s0.id] !== s0.sectorHeroImage) ? 'cursor-pointer' : ''}`} 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"><s0.icon className="w-20 h-20 text-rr-gold/50" /></div>
                  )}
                </div>
                {renderBadgeAndIcon(s0, 0, totalStr)}
                {renderOverlayGallery(s0)}
              </div>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 flex flex-col items-start">
                  <div className="flex items-start gap-4">
                    <s0.icon className="w-10 h-10 text-rr-gold shrink-0 mt-1" />
                    <h3 className="font-serif text-3xl md:text-5xl font-bold text-rr-navy-deep leading-tight">
                      {s0.title}
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-7 space-y-6">
                  <p className="text-rr-navy-deep/80 text-lg leading-relaxed">{s0.description}</p>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-rr-gold/20">
                    {s0.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-rr-navy-deep/80 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-rr-gold shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* 2. Residential Projects (Portrait offset) */}
            <article className="group" ref={(el) => (articleRefs.current[s1.id] = el)}>
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                <div className="md:col-span-5 order-2 md:order-1 flex flex-col md:pr-8 h-full justify-center">
                  <div className="space-y-6">
                    <s1.icon className="w-8 h-8 text-rr-gold mb-4" />
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-rr-navy-deep leading-tight">
                      {s1.title}
                    </h3>
                    <p className="text-rr-navy-deep/80 text-lg leading-relaxed">{s1.description}</p>
                    <div className="space-y-2 pt-4 border-t border-rr-gold/20">
                      {s1.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-rr-navy-deep/80 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-rr-gold shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 mb-12 md:mb-0">
                  <div className="relative w-full md:w-10/12 ml-auto aspect-[3/4]">
                    <div className="absolute inset-0 overflow-hidden shadow-2xl bg-rr-navy-deep/5">
                      {s1.sectorHeroImage ? (
                        <img 
                          src={activeImages[s1.id] || s1.sectorHeroImage} 
                          alt={s1.title} 
                          onClick={() => handleImageToggle(s1.id, s1.sectorHeroImage, s1.sectorHeroImage)}
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${(activeImages[s1.id] && activeImages[s1.id] !== s1.sectorHeroImage) ? 'cursor-pointer' : ''}`} 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center"><s1.icon className="w-16 h-16 text-rr-gold/50" /></div>
                      )}
                    </div>
                    {renderBadgeAndIcon(s1, 1, totalStr)}
                    {renderOverlayGallery(s1)}
                  </div>
                </div>
              </div>
            </article>

            {/* 3. Hospital Buildings (Floating Square) */}
            <article className="group bg-rr-navy-deep/5 -mx-6 px-6 py-16 md:p-16 rounded-xl" ref={(el) => (articleRefs.current[s2.id] = el)}>
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end">
                <div className="relative w-full aspect-square mb-12 md:mb-0">
                  <div className="absolute inset-0 overflow-hidden shadow-xl bg-rr-navy-deep/5">
                    {s2.sectorHeroImage ? (
                      <img 
                        src={activeImages[s2.id] || s2.sectorHeroImage} 
                        alt={s2.title} 
                        onClick={() => handleImageToggle(s2.id, s2.sectorHeroImage, s2.sectorHeroImage)}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${(activeImages[s2.id] && activeImages[s2.id] !== s2.sectorHeroImage) ? 'cursor-pointer' : ''}`} 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"><s2.icon className="w-16 h-16 text-rr-gold/50" /></div>
                    )}
                  </div>
                  {renderBadgeAndIcon(s2, 2, totalStr)}
                  {renderOverlayGallery(s2)}
                </div>
                <div className="flex flex-col pb-4 md:pb-12 h-full justify-end">
                  <div className="space-y-6">
                    <s2.icon className="w-10 h-10 text-rr-gold mb-2" />
                    <h3 className="font-serif text-3xl md:text-5xl font-bold text-rr-navy-deep leading-tight">
                      {s2.title}
                    </h3>
                    <p className="text-rr-navy-deep/80 text-lg leading-relaxed">{s2.description}</p>
                    <div className="space-y-2 pt-4 border-t border-rr-gold/20">
                      {s2.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-rr-navy-deep/80 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-rr-gold shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 4. Educational */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start pt-8">
              {[s3].map((service, i) => {
                const globalIndex = i + 3;
                return (
                  <article key={service.id} className="group" ref={(el) => (articleRefs.current[service.id] = el)}>
                    <div className="relative w-full aspect-[4/3] mb-12 md:mb-16">
                      <div className="absolute inset-0 overflow-hidden shadow-lg bg-rr-navy-deep/5">
                        {service.sectorHeroImage ? (
                          <img 
                            src={activeImages[service.id] || service.sectorHeroImage} 
                            alt={service.title} 
                            onClick={() => handleImageToggle(service.id, service.sectorHeroImage, service.sectorHeroImage)}
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${(activeImages[service.id] && activeImages[service.id] !== service.sectorHeroImage) ? 'cursor-pointer' : ''}`} 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center"><service.icon className="w-16 h-16 text-rr-gold/50" /></div>
                        )}
                      </div>
                      {renderBadgeAndIcon(service, globalIndex, totalStr)}
                      {renderOverlayGallery(service)}
                    </div>
                    <div className="flex flex-col h-full">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-rr-navy-deep pr-4">
                            {service.title}
                          </h3>
                          <service.icon className="w-8 h-8 text-rr-gold shrink-0 mt-1" />
                        </div>
                        <p className="text-rr-navy-deep/80 text-base leading-relaxed">{service.description}</p>
                        <div className="space-y-1.5 pt-3 border-t border-rr-gold/20">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-rr-navy-deep/80 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-rr-gold shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* 5. Resorts & Hospitality (Panoramic Finale) */}
            <article className="group pt-16" ref={(el) => (articleRefs.current[s4.id] = el)}>
              <div className="relative w-full aspect-[21/9] md:aspect-[24/9] mb-16 md:mb-20">
                <div className="absolute inset-0 overflow-hidden shadow-2xl bg-rr-navy-deep/5">
                  {s4.sectorHeroImage ? (
                    <img 
                      src={activeImages[s4.id] || s4.sectorHeroImage} 
                      alt={s4.title} 
                      onClick={() => handleImageToggle(s4.id, s4.sectorHeroImage, s4.sectorHeroImage)}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${(activeImages[s4.id] && activeImages[s4.id] !== s4.sectorHeroImage) ? 'cursor-pointer' : ''}`} 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"><s4.icon className="w-20 h-20 text-rr-gold/50" /></div>
                  )}
                </div>
                {renderBadgeAndIcon(s4, 4, totalStr)}
                {renderOverlayGallery(s4)}
              </div>
              <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
                <s4.icon className="w-12 h-12 text-rr-gold mx-auto mb-2" />
                <h3 className="font-serif text-3xl md:text-5xl font-bold text-rr-navy-deep leading-tight">
                  {s4.title}
                </h3>
                <p className="text-rr-navy-deep/80 text-lg leading-relaxed">{s4.description}</p>
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  {s4.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-rr-navy-deep/80 font-medium bg-rr-navy-deep/5 px-4 py-2 rounded-full border border-rr-gold/20">
                      <CheckCircle2 className="w-4 h-4 text-rr-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-rr-navy-deep text-rr-cream">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="w-12 h-12 rounded-full bg-rr-gold/20 text-rr-gold flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-rr-cream font-bold mb-4">
              Have a Blueprint or Upcoming Project?
            </h2>
            <p className="text-rr-cream/70 mb-8 text-base md:text-lg leading-relaxed">
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
