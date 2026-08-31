import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Building2, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import LeadershipSection from "@/components/LeadershipSection";

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "5M+", label: "Sq. Ft. Constructed" },
  { value: "100+", label: "Skilled Professionals" },
];

const milestones = [
  { year: "1980s", title: "Foundation", desc: "Established with a vision to deliver quality civil engineering and construction services in Karnataka." },
  { year: "1990s", title: "Expansion", desc: "Expanded into commercial and industrial infrastructure, completing landmark projects across the region." },
  { year: "2000s", title: "Diversification", desc: "Entered healthcare, education, and hospitality sectors, becoming a full-spectrum infrastructure partner." },
  { year: "Present", title: "Legacy", desc: "500+ projects, 5M+ sq. ft., and a trusted name in commercial, residential, hospital, and institutional construction." },
];

const capabilities = [
  {
    title: "Commercial Buildings",
    desc: "Office towers, business parks, and corporate complexes engineered for modern enterprises with high functionality and energy-efficient systems.",
    image: "/images/Commercial-Complex.webp",
  },
  {
    title: "Residential Projects",
    desc: "Luxury apartments, private villas, and gated communities built for comfort, durability, and sustainable living.",
    image: "/images/JP-Apartment.webp",
  },
  {
    title: "Hospital Buildings",
    desc: "Multi-specialty hospitals and medical colleges built to global clinical standards, including the 2,20,000+ sq. ft. R L Jalappa Hospital.",
    image: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp",
  },
  {
    title: "Educational Institutions",
    desc: "Schools, colleges, universities, and research centers with safe, future-ready campus facilities and specialized laboratories.",
    image: "/images/Educational-Building.webp",
  },
  {
    title: "Industrial Buildings",
    desc: "Manufacturing units, warehouses, and logistics hubs built with high-load precision and heavy-duty structural integrity.",
    image: "/images/AHS-Building.webp",
  },
  {
    title: "Resorts & Hospitality",
    desc: "Luxury resorts and hospitality spaces combining scenic aesthetics with premium guest comfort and landscape integration.",
    image: "/images/Resort-Project.webp",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | RR Constructions & RR Infra</title>
        <meta
          name="description"
          content="RR Constructions & RR Infra - 40+ years of excellence in commercial, residential, hospital, educational, industrial, and hospitality infrastructure across Karnataka."
        />
      </Helmet>

      <Header />

      <main className="pt-12">
        {/* Hero */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/rr-hero-1.png"
              alt="Construction site"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-rr-gold" />
                <span className="text-rr-gold text-sm uppercase tracking-[0.2em] font-medium">
                  About RR Constructions
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                Building Excellence Through Experience
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                For over 40 years, RR Constructions & RR Infra has been a trusted name in infrastructure development across Karnataka - delivering landmark projects in commercial, residential, healthcare, education, industrial, and hospitality sectors.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="font-semibold">
                  Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background border-y border-border/60">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-rr-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story / Milestones */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-rr-gold" />
                <span className="text-rr-gold text-sm uppercase tracking-[0.2em] font-medium">
                  Our Journey
                </span>
                <div className="w-12 h-px bg-rr-gold" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                40+ Years of Building Trust
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                From a small civil engineering firm to a full-spectrum infrastructure company - our growth mirrors the trust our clients have placed in us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="bg-card border border-rr-gold/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-rr-gold font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    {m.year}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <LeadershipSection />

        {/* Capabilities Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-rr-gold" />
                <span className="text-rr-gold text-sm uppercase tracking-[0.2em] font-medium">
                  What We Build
                </span>
                <div className="w-12 h-px bg-rr-gold" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Six Sectors, One Standard of Excellence
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                We bring the same rigor, quality, and accountability to every sector we serve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap) => (
                <article
                  key={cap.title}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white">
                        {cap.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-px bg-rr-gold" />
                  <span className="text-rr-gold text-sm uppercase tracking-[0.2em] font-medium">
                    Why RR Constructions
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                  engineered for performance, built for permanence
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  With 40+ years of rich experience, we don't just construct buildings - we deliver infrastructure that stands the test of time. Every project reflects our commitment to quality, safety, and timely execution.
                </p>
                <div className="space-y-4">
                  {[
                    "40+ years of rich industry experience",
                    "500+ completed projects across 6 sectors",
                    "5M+ sq. ft. of constructed excellence",
                    "100+ skilled civil engineers and supervisors",
                    "ISO-standardized processes and safety protocols",
                    "End-to-end design-to-delivery capability",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rr-gold shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/portfolio">
                    <Button variant="gold" size="lg" className="font-semibold">
                      View Our Projects <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/rr-hero-2-desktop.png"
                    alt="RR Constructions project"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bg-white -bottom-6 -left-6 bg-card border border-rr-gold/30 rounded-xl p-6 shadow-lg max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-rr-gold" />
                    <span className="font-serif text-lg font-bold text-foreground">Trusted Since 1980s</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Four decades of delivering landmark infrastructure across Karnataka with uncompromised quality and client trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-rr-navy-deep text-center relative overflow-hidden">
          {/* Background blueprint elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          
          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl text-rr-cream font-bold mb-4">
              Ready to Build Your Next Landmark?
            </h2>
            <p className="text-rr-cream/60 text-base md:text-lg leading-relaxed mb-8">
              Whether it's a commercial tower, hospital campus, or residential community - our team is ready to deliver. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="font-semibold">
                  Start Your Project
                </Button>
              </Link>
              <a href="tel:+919845078828">
                <Button variant="outline" size="lg" className="border-rr-cream/20 text-rr-cream hover:bg-rr-cream/10 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call +91 98450 78828
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;