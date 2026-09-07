import { useState } from "react";
import { 
  Cpu, 
  MonitorDot, 
  HardHat, 
  ShieldCheck, 
  Recycle, 
  Users, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Truck,
  Tractor,
  Hammer,
  Building2,
  Gauge
} from "lucide-react";

interface FleetItem {
  name: string;
  category: string;
  image: string;
  tag: string;
}

interface TechnologyItem {
  id: string;
  number: string;
  category: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
}

const FLEET_ITEMS: FleetItem[] = [
  { 
    name: "Excavators", 
    category: "Earthmoving", 
    image: "/images/equipment/excavator.jpg",
    tag: "High Tonnage"
  },
  { 
    name: "Transit Mixers", 
    category: "Concrete Logistics", 
    image: "/images/equipment/transit_mixer.jpg",
    tag: "Ready-Mix Fleet"
  },
  { 
    name: "Backhoe Loaders", 
    category: "Multi-Utility", 
    image: "/images/equipment/backhoe_loader.jpg",
    tag: "Site Prep & Trenching"
  },
  { 
    name: "Road Rollers", 
    category: "Compaction", 
    image: "/images/equipment/road_roller.jpg",
    tag: "Precision Subgrade"
  },
  { 
    name: "Tower Cranes", 
    category: "Heavy Lifting", 
    image: "/images/equipment/tower_crane.jpg",
    tag: "High-Rise Reach"
  },
  { 
    name: "Dump Trucks", 
    category: "Material Haulage", 
    image: "/images/equipment/dump_truck.jpg",
    tag: "Heavy Payload"
  },
];

const TECH_SYSTEMS: TechnologyItem[] = [
  {
    id: "tech",
    number: "01",
    category: "ENGINEERING & EXECUTION",
    name: "Advanced Construction Technology",
    icon: Cpu,
    description: "Deployment of state-of-the-art structural methodologies, precision laser surveying, and mechanized building practices to ensure millimeter-accurate structural integrity.",
    highlights: ["Laser-Guided Surveying", "Pre-Engineered Structures", "Mechanized Formwork Systems"]
  },
  {
    id: "software",
    number: "02",
    category: "DIGITAL PROTOCOLS",
    name: "Project Management Software",
    icon: MonitorDot,
    description: "Cloud-integrated ERP platforms for live site milestones, critical path tracking, automated resource allocation, and completely transparent client reporting.",
    highlights: ["Live ERP Milestone Tracking", "Critical Path Optimization", "Real-Time Material Auditing"]
  },
  {
    id: "safety",
    number: "03",
    category: "SAFETY PROTOCOLS",
    name: "Safety Management Systems",
    icon: HardHat,
    description: "An uncompromising zero-harm culture backed by strict daily tool-box meetings, automated hazard identification, safety stewards, and full OSHA/IS compliance.",
    highlights: ["Zero-Harm Culture", "Daily Safety Tool-Box Audits", "Certified PPE & Fall Arrest Gear"]
  },
  {
    id: "quality",
    number: "04",
    category: "ASSURANCE & COMPLIANCE",
    name: "Quality Control Processes",
    icon: ShieldCheck,
    description: "Rigorous multi-tier QA/QC testing regimens, including on-site compressive cube testing, ultrasonic concrete vetting, and accredited third-party validation.",
    highlights: ["On-Site Cube Testing", "Third-Party Structural Audits", "Mill-Certified Raw Materials"]
  },
  {
    id: "sustainable",
    number: "05",
    category: "ECO-EFFICIENCY",
    name: "Sustainable Construction Practices",
    icon: Recycle,
    description: "Resource-efficient construction methodologies adhering to IGBC and LEED standards, with active dust-suppression, rainwater harvesting, and waste segregation.",
    highlights: ["IGBC / LEED Ready Workflows", "100% On-Site Debris Segregation", "Water & Energy Optimization"]
  },
  {
    id: "workforce",
    number: "06",
    category: "HUMAN CAPITAL",
    name: "Skilled & Trained Workforce",
    icon: Users,
    description: "A seasoned brigade of licensed structural engineers, site supervisors, and regularly upskilled master craftspeople with four decades of construction mastery.",
    highlights: ["Licensed Structural Engineers", "Routine Safety & Skill Training", "Dedicated Site Superintendents"]
  }
];

interface InfrastructureSectionProps {
  showFleet?: boolean;
  showTech?: boolean;
  className?: string;
}

const InfrastructureSection = ({
  showFleet = true,
  showTech = true,
  className = ""
}: InfrastructureSectionProps) => {
  const [activeTechId, setActiveTechId] = useState<string | null>(null);

  return (
    <section className={`py-24 bg-background relative overflow-hidden border-t border-border/60 ${className}`}>
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rr-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rr-navy-deep/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-rr-gold" />
            <span className="text-rr-gold text-xs font-mono uppercase tracking-[0.25em] font-bold">
              Infrastructure & Execution
            </span>
            <div className="w-12 h-px bg-rr-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-rr-navy-deep mb-5 tracking-tight">
            Our Equipment & Technology
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Powered by modern machinery and fortified with cutting-edge digital systems, we have the capacity and engineering rigor to deliver landmark projects with unmatched safety and speed.
          </p>
        </div>

        {/* SECTION 1: EQUIPMENT FLEET */}
        {showFleet && (
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-border/60 gap-4">
              <div>
                <div className="flex items-center gap-2 text-rr-gold text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                  <Gauge className="w-4 h-4" /> Heavy Machinery & Fleet
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-rr-navy-deep">
                  Modern Equipment Fleet
                </h3>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm max-w-md">
                Fully owned and maintained machinery ready for immediate mobilization across commercial, industrial, and high-rise developments.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {FLEET_ITEMS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-rr-gold/60 transition-all duration-500 group flex flex-col hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rr-navy-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Category pill */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-rr-navy-deep/90 text-rr-cream backdrop-blur-sm shadow-sm border border-white/10">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="bg-rr-navy-deep p-3.5 flex-1 flex flex-col justify-between border-t border-rr-gold/20">
                    <div>
                      <h4 className="text-white text-xs md:text-sm font-bold tracking-wide uppercase group-hover:text-rr-gold transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-rr-cream/60 text-[11px] mt-0.5 font-medium line-clamp-1">
                        {item.tag}
                      </p>
                    </div>
                    
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-rr-gold font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        Active Ready
                      </span>
                      <span className="text-white/40 group-hover:text-rr-gold transition-colors">0{idx + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: TECHNOLOGY & SYSTEMS */}
        {showTech && (
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border/60 gap-4">
              <div>
                <div className="flex items-center gap-2 text-rr-gold text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" /> Rigorous Standards & Systems
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-rr-navy-deep">
                  Our Technology & Systems
                </h3>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm max-w-md">
                Institutionalized best practices that eliminate operational bottlenecks, ensure worker safety, and preserve structural longevity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {TECH_SYSTEMS.map((tech) => {
                const IconComponent = tech.icon;
                const isHovered = activeTechId === tech.id;

                return (
                  <div
                    key={tech.id}
                    onMouseEnter={() => setActiveTechId(tech.id)}
                    onMouseLeave={() => setActiveTechId(null)}
                    className="relative group bg-card/80 backdrop-blur-sm border border-border/80 hover:border-rr-gold/60 rounded-2xl p-7 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Hover gold shimmer top border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rr-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Background number watermark */}
                    <span className="absolute -bottom-4 -right-2 font-serif text-7xl font-bold text-rr-navy-deep/[0.03] group-hover:text-rr-gold/[0.08] transition-colors duration-500 pointer-events-none select-none">
                      {tech.number}
                    </span>

                    <div>
                      {/* Top bar: Category & Number */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[11px] font-mono font-bold tracking-widest text-rr-gold uppercase px-2.5 py-1 rounded-full bg-rr-gold/10 border border-rr-gold/20">
                          {tech.category}
                        </span>
                        <span className="font-mono text-xs font-bold text-muted-foreground/60 group-hover:text-rr-gold transition-colors duration-300">
                          {tech.number} / 06
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-rr-navy-deep text-rr-gold flex items-center justify-center shrink-0 shadow-md group-hover:bg-gradient-to-br group-hover:from-rr-navy-deep group-hover:to-rr-navy-light group-hover:scale-105 transition-all duration-300 border border-rr-gold/30">
                          <IconComponent className="w-7 h-7 text-rr-gold group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg md:text-xl font-bold text-rr-navy-deep group-hover:text-rr-gold-dark transition-colors duration-300 leading-snug">
                            {tech.name}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {tech.description}
                      </p>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="space-y-2">
                        {tech.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rr-gold shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default InfrastructureSection;
