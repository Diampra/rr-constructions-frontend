import { Building2, Home, Cross, GraduationCap, Factory, Hotel } from "lucide-react";

export interface ServiceSector {
  id: string;
  title: string;
  icon: typeof Building2;
  description: string;
  features: string[];
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
    features: ["Modern Architecture", "Structural Precision", "High Functionality", "Energy Efficient Systems", "Timely Delivery", "Safety Compliant"],
    badge: "Commercial Infrastructure",
    sectorHeroImage: "/images/Commercial-Complex.webp",
    projectThumbnails: ["/images/Commercial-Complex.png"],
  },
  {
    id: "2",
    title: "Residential Projects",
    icon: Home,
    description: "Creating premium residential spaces including apartments, villas, and communities with a focus on quality, comfort, and sustainable living.",
    features: ["Vastu Compliant Layouts", "Premium Structural Materials", "Modern Amenities", "Sustainable Living Space", "Aesthetic Design", "Zero Compromise Quality"],
    badge: "Residential Development",
    sectorHeroImage: "/images/J-P-Enclave/image-1.png",
    projectThumbnails: ["/images/J-P-Enclave/image-2.png", "/images/J-P-Enclave/image-3.png", "/images/J-P-Enclave/image-4.png"],
  },
  {
    id: "3",
    title: "Hospital Buildings",
    icon: Cross,
    description: "Specialized healthcare infrastructure including multi-specialty hospitals, medical colleges, and healthcare facilities built to global standards.",
    features: ["2,20,000+ Sq. Ft. Expertise", "Advanced Medical Layouts", "Strict Sterility Protocols", "Emergency Infrastructure", "Heavy Load Flooring", "ISO Standardized"],
    badge: "Healthcare Infrastructure",
    sectorHeroImage: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp",
    projectThumbnails: ["/images/AHS-Building/image-1.png", "/images/AHS-Building/image-2.png"],
  },
  {
    id: "4",
    title: "Educational Institutions",
    icon: GraduationCap,
    description: "Construction of schools, colleges, universities, and research centers that provide safe, inspiring, and innovative learning environments.",
    features: ["Spacious Classrooms", "Auditorium & Labs", "Sports Infrastructure", "Student Safety Focused", "Acoustic Engineering", "Future Ready Labs"],
    badge: "Educational Infrastructure",
    sectorHeroImage: "/images/University-Building/image-1.png",
    projectThumbnails: ["/images/University-Building/image-2.png", "/images/University-Building/image-3.png", "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-1.png"],
  },
  // {
  //   id: "5",
  //   title: "Industrial Buildings",
  //   icon: Factory,
  //   description: "Design and construction of industrial buildings including manufacturing units, warehouses, and other industrial facilities with high functionality.",
  //   features: ["Heavy Duty Structures", "Warehouse Logistics Units", "High Bay Storage", "Ventilation Systems", "Fire Retardant Materials", "Scalable Designs"],
  //   badge: "Industrial Facilities",
  //   sectorHeroImage: "/images/rr-hero-3.png",
  //   projectThumbnails: ["/images/rr-hero-1-desktop.png", "/images/rr-hero-1.png"],
  // },
  {
    id: "6",
    title: "Resorts & Hospitality",
    icon: Hotel,
    description: "Creating premium resorts, hotels, and hospitality spaces that combine aesthetics, comfort, and functionality for memorable experiences.",
    features: ["Luxury Aesthetic Finish", "Pool & Recreation Grounds", "Eco-friendly Materials", "Guest Comfort Optimized", "Landscape Integration", "Turnkey Construction"],
    badge: "Hospitality Development",
    sectorHeroImage: "/images/mudigere-Resort-Project/image-1.png",
    projectThumbnails: ["/images/mudigere-Resort-Project/image-2.png", "/images/mudigere-Resort-Project/image-3.png", "/images/mudigere-Resort-Project/image-4.png"],
  }
];