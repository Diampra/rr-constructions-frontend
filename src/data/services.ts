import { 
  Building2, Home, Cross, GraduationCap, Factory, Hotel,
  Palette, Ruler, Settings, Zap, Clock, ShieldCheck,
  Compass, Layers, Sparkles, Leaf, Award, Maximize, Activity,
  Shield, HeartPulse, FileCheck, Library, Microscope, Trophy,
  UserCheck, Volume2, Monitor, Gem, Waves, Smile, Map, Key, Archive, Box
} from "lucide-react";

export interface ServiceFeature {
  text: string;
  icon: any;
}

export interface ServiceSector {
  id: string;
  title: string;
  icon: any;
  description: string;
  features: ServiceFeature[];
  badge: string;
  sectorHeroImage: string;
  projectThumbnails: string[];
}

export const servicesData: ServiceSector[] = [
  {
    id: "1",
    title: "Commercial Buildings",
    icon: Building2,
    description: "Construction of modern commercial spaces including office buildings, business parks, and corporate complexes that drive business growth.",
    features: [
      { text: "Modern Architecture", icon: Palette },
      { text: "Structural Precision", icon: Ruler },
      { text: "High Functionality", icon: Settings },
      { text: "Energy Efficient Systems", icon: Zap },
      { text: "Timely Delivery", icon: Clock },
      { text: "Safety Compliant", icon: ShieldCheck }
    ],
    badge: "Commercial Infrastructure",
    sectorHeroImage: "/images/Commercial-Complex.webp",
    projectThumbnails: [
      "/images/Commercial-Complex.webp",
      "/images/J-P-GROUP-BANGALORE/JP CORP - Sadashivanagar.webp",
      "/images/J-P-GROUP-BANGALORE/JP Square - SADASHIVANAGAR.webp"
    ],
  },
  {
    id: "2",
    title: "Residential Projects",
    icon: Home,
    description: "Creating premium residential spaces including apartments, villas, and communities with a focus on quality, comfort, and sustainable living.",
    features: [
      { text: "Vastu Compliant Layouts", icon: Compass },
      { text: "Premium Structural Materials", icon: Layers },
      { text: "Modern Amenities", icon: Sparkles },
      { text: "Sustainable Living Space", icon: Leaf },
      { text: "Aesthetic Design", icon: Palette },
      { text: "Zero Compromise Quality", icon: Award }
    ],
    badge: "Residential Building",
    sectorHeroImage: "/images/J-P-Enclave/image-1.webp",
    projectThumbnails: ["/images/J-P-Enclave/image-2.webp", "/images/J-P-Enclave/image-3.webp", "/images/J-P-Enclave/image-4.webp"],
  },
  {
    id: "3",
    title: "Hospital Buildings",
    icon: Cross,
    description: "Specialized healthcare infrastructure including multi-specialty hospitals, medical colleges, and healthcare facilities built to global standards.",
    features: [
      { text: "2,20,000+ Sq. Ft. Expertise", icon: Maximize },
      { text: "Advanced Medical Layouts", icon: Activity },
      { text: "Strict Sterility Protocols", icon: Shield },
      { text: "Emergency Infrastructure", icon: HeartPulse },
      { text: "Heavy Load Flooring", icon: Layers },
      { text: "ISO Standardized", icon: FileCheck }
    ],
    badge: "Healthcare Infrastructure",
    sectorHeroImage: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp",
    projectThumbnails: [],
  },
  {
    id: "4",
    title: "Educational Institutions",
    icon: GraduationCap,
    description: "Construction of schools, colleges, universities, and research centers that provide safe, inspiring, and innovative learning environments.",
    features: [
      { text: "Spacious Classrooms", icon: Library },
      { text: "Auditorium & Labs", icon: Microscope },
      { text: "Sports Infrastructure", icon: Trophy },
      { text: "Student Safety Focused", icon: UserCheck },
      { text: "Acoustic Engineering", icon: Volume2 },
      { text: "Future Ready Labs", icon: Monitor }
    ],
    badge: "Educational Infrastructure",
    sectorHeroImage: "/images/University-Building/image-1.webp",
    projectThumbnails: ["/images/University-Building/image-2.webp", "/images/University-Building/image-3.webp", "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-1.webp"],
  },
  // {
  //   id: "5",
  //   title: "Industrial Buildings",
  //   icon: Factory,
  //   description: "Design and construction of industrial buildings including manufacturing units, warehouses, and other industrial facilities with high functionality.",
  //   features: [
  //     { text: "Heavy Duty Structures", icon: Layers },
  //     { text: "Warehouse Logistics Units", icon: Box },
  //     { text: "High Bay Storage", icon: Archive },
  //     { text: "Ventilation Systems", icon: Zap },
  //     { text: "Fire Retardant Materials", icon: Shield },
  //     { text: "Scalable Designs", icon: Maximize }
  //   ],
  //   badge: "Industrial Facilities",
  //   sectorHeroImage: "/images/rr-hero-3.png",
  //   projectThumbnails: ["/images/rr-hero-1-desktop.png", "/images/rr-hero-1.png"],
  // },
  {
    id: "6",
    title: "Resorts & Hospitality",
    icon: Hotel,
    description: "Creating premium resorts, hotels, and hospitality spaces that combine aesthetics, comfort, and functionality for memorable experiences.",
    features: [
      { text: "Luxury Aesthetic Finish", icon: Gem },
      { text: "Pool & Recreation Grounds", icon: Waves },
      { text: "Eco-friendly Materials", icon: Leaf },
      { text: "Guest Comfort Optimized", icon: Smile },
      { text: "Landscape Integration", icon: Map },
      { text: "Turnkey Construction", icon: Key }
    ],
    badge: "Hospitality Development",
    sectorHeroImage: "/images/J-P-GROUP-BANGALORE/Fortune Select JP Cosmos - Bangalore.webp",
    projectThumbnails: [
      "/images/J-P-GROUP-BANGALORE/Fortune Select JP Cosmos - Bangalore.webp",
      "/images/J-P-GROUP-BANGALORE/Fortune Park JP Celestial - Bangalore.webp",
      "/images/J-P-GROUP-BANGALORE/MySpace Silverstar.webp",
      "/images/mudigere-Resort-Project/image-1.webp",
      "/images/mudigere-Resort-Project/image-2.webp"
    ],
  }
];