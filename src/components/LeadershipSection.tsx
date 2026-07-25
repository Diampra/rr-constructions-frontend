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
    <section id="leadership" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">
              Leadership & Values
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-semibold mb-6">
            Our Leadership, Our Strength
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Driven by experience. Guided by values. Committed to delivering excellence.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {partners.map((partner, index) => (
            <Card key={index} className="border-gold/20 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif text-2xl font-bold border border-gold/30">
                    {partner.name.split(" ")[2]?.[0] || "R"}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{partner.name}</h3>
                    <span className="text-sm font-semibold text-gold uppercase tracking-wider">{partner.role} • {partner.qualification}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 border-y border-border/60 py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <Award className="w-4 h-4 text-gold shrink-0" />
                    <span>{partner.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-gold shrink-0" />
                    <span>{partner.specialization}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-12 bg-card border border-gold/20 rounded-xl p-8 md:p-12 shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-center text-foreground mb-10">
            Our Pillars of Excellence
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-muted/20 border border-border/50 hover:border-gold/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">{value.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-border/60 text-center">
            <blockquote className="italic text-muted-foreground text-sm max-w-2xl mx-auto">
              "Strong leadership, a passionate team of 100+ skilled professionals, and an unwavering commitment to quality are the foundation of every successful project we deliver."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
