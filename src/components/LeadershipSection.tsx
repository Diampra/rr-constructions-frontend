import { Award, Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LeadershipSection = () => {
  const partners = [
    {
      name: "Mr. V. Rajashekhar",
      role: "Partner",
      qualification: "B.E. Civil Engineering",
      experience: "40+ Years of Industry Experience",
      specialization: "Project Planning, Construction Management & Quality Control",
      bio: "With strong technical expertise and strategic vision, Mr. V. Rajashekhar has been instrumental in shaping the growth and reputation of RR Constructions & RR Infra, leading numerous landmark projects across Karnataka.",
    },
    {
      name: "Mr. T. M. Raghu",
      role: "Partner",
      qualification: "B.E. Civil Engineering",
      experience: "40+ Years of Industry Experience",
      specialization: "Infrastructure Development & Project Execution",
      bio: "Specializing in large-scale infrastructure development, Mr. T. M. Raghu's commitment to operational excellence, timely execution, and client satisfaction continues to drive the company's sustainable success.",
    },
  ];

  const coreValues = [
    { title: "Integrity", desc: "Honest and transparent practices in every business transaction." },
    { title: "Quality", desc: "Uncompromising quality standards across all materials and structural execution." },
    { title: "Timely Delivery", desc: "Committed to strict deadlines with efficient planning and management." },
    { title: "Safety First", desc: "Prioritizing the safety of our workforce, partners, and site environments." },
    { title: "Teamwork", desc: "Collaborative synergy between engineers, architects, and skilled personnel." },
    { title: "Client Satisfaction", desc: "Focused on building long-term trust and exceeding client expectations." },
  ];

  return (
    <section id="leadership" className="py-24 bg-rr-navy-deep relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rr-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="font-mono text-rr-gold text-xs uppercase tracking-[0.3em] font-bold">
              Leadership & Values
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-rr-cream font-bold mb-6 leading-tight">
            Our Leadership,<br/>Our Strength
          </h2>
          <p className="text-rr-cream/70 text-base md:text-lg leading-relaxed">
            Driven by experience. Guided by values. Committed to delivering excellence in every foundation we build.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {partners.map((partner, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1 transition-all duration-500 rounded-[2px] overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rr-gold to-rr-gold-bright transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-[2px] bg-gradient-to-br from-rr-gold to-rr-gold-bright text-rr-navy-deep flex items-center justify-center font-serif text-3xl font-bold shadow-gold group-hover:scale-110 transition-transform duration-500">
                    {partner.name.split(" ")[2]?.[0] || "R"}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-rr-cream mb-1">{partner.name}</h3>
                    <span className="font-mono text-xs font-bold text-rr-gold uppercase tracking-[0.15em]">{partner.role} <span className="text-white/30 mx-2">•</span> {partner.qualification}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 py-5 border-y border-white/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-3 text-sm text-rr-cream font-bold">
                    <Award className="w-4 h-4 text-rr-gold shrink-0" />
                    <span>{partner.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-rr-cream/70 font-medium">
                    <Briefcase className="w-4 h-4 text-rr-gold shrink-0" />
                    <span>{partner.specialization}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-rr-cream/80 leading-relaxed font-serif italic">
                  "{partner.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-12 bg-rr-cream text-rr-navy-deep rounded-[2px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Blueprint texture inside values block */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #0A1B33 1px, transparent 1px), linear-gradient(to bottom, #0A1B33 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          <h3 className="relative z-10 font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-rr-navy-deep">Our Pillars of Excellence</span>
          </h3>
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {coreValues.map((value, idx) => (
              <div key={idx} className="group flex gap-4 items-start relative">
                <div className="absolute -inset-4 bg-rr-navy-deep/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <CheckCircle2 className="w-6 h-6 text-rr-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-sans font-bold text-rr-navy-deep text-lg mb-2 tracking-wide">{value.title}</h4>
                  <p className="text-sm text-rr-navy-deep/70 leading-relaxed font-light">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-16 pt-8 border-t border-rr-navy-deep/10 text-center">
            <blockquote className="font-serif italic text-rr-navy-deep/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              "Strong leadership, a passionate team of 100+ skilled professionals, and an unwavering commitment to quality are the foundation of every successful project we deliver."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
