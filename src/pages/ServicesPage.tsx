import { Helmet } from "react-helmet-async";
import { Building2, Home, Cross, GraduationCap, Factory, Hotel, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesData } from "@/data/services";

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
        <section className="relative py-24 bg-rr-navy-deep overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/design_patterns/GT20.jpg"
              alt="Construction project"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rr-navy-deep via-rr-navy-deep/90 to-rr-navy-deep/60" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-rr-gold" />
                <span className="text-rr-gold text-sm uppercase tracking-[0.2em] font-medium">
                  Our Construction Services
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-rr-cream mb-6">
                Construction Services & Expertise
              </h1>
              <p className="text-rr-cream/70 text-lg md:text-xl leading-relaxed mb-8">
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

        {/* Services with Sector Hero Images */}
        <section className="py-24 bg-rr-cream">
          <div className="container mx-auto px-6">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  className={`relative py-16 ${isEven ? "bg-rr-cream" : "bg-rr-navy-deep/5"}`}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Sector Hero Image */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      {service.sectorHeroImage ? (
                        <img
                          src={service.sectorHeroImage}
                          alt={`${service.title} sector expertise`}
                          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-rr-navy-deep/5 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-rr-gold/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="inline-block bg-rr-gold text-rr-navy-deep text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-3">
                          {service.badge}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-rr-gold/10 text-rr-gold rounded-lg flex items-center justify-center border border-rr-gold/30">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-rr-gold bg-rr-gold/5 px-3 py-1 rounded-full border border-rr-gold/20">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-rr-navy-deep">
                        {service.title}
                      </h3>

                      <p className="text-rr-navy-deep/70 text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>

                      {/* Project Thumbnails */}
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-rr-gold/20">
                        {service.projectThumbnails.map((thumb, i) => (
                          <div
                            key={i}
                            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                          >
                            {thumb ? (
                              <img
                                src={thumb}
                                alt={`${service.title} project ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full bg-rr-navy-deep/5 flex items-center justify-center">
                                <Icon className="w-8 h-8 text-rr-gold/50" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-xs font-medium px-2 py-1 bg-black/50 rounded">View Project</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-rr-gold/20">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-rr-navy-deep/80 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-rr-gold shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact" className="w-full mt-4">
                        <Button variant="outline" className="w-full border-rr-gold/30 hover:bg-rr-gold hover:text-rr-navy-deep transition-all">
                          Inquire For Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
