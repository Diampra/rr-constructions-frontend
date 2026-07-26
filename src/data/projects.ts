export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  builtUpArea: string;
  location: string;
  status: string;
  featured?: boolean;
  images: ProjectImage[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "R L Jalappa Hospital & Research Center",
    description: "A state-of-the-art multi-specialty hospital and research center offering world-class healthcare infrastructure with modern amenities and advanced medical facilities.",
    type: "Healthcare Infrastructure",
    builtUpArea: "2,20,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
    featured: true,
    thumbnail: "/design_patterns/AR8.jpg",
    images: [
      { src: "/design_patterns/AR8.jpg", alt: "Hospital exterior architectural render" },
      { src: "/design_patterns/AR27.jpg", alt: "Hospital main entrance" },
      { src: "/design_patterns/AR26.jpg", alt: "Hospital interior lobby" },
      { src: "/design_patterns/AR25.jpg", alt: "Patient ward view" },
    ],
  },
  {
    id: "2",
    title: "AHS Building",
    description: "Modern commercial building constructed to drive business operations with state-of-the-art architectural design and structural integrity.",
    type: "Commercial Building",
    builtUpArea: "75,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
    thumbnail: "/design_patterns/FL11.jpg",
    images: [
      { src: "/design_patterns/FL11.jpg", alt: "AHS Building facade" },
      { src: "/design_patterns/FL12.jpg", alt: "AHS Building entrance" },
      { src: "/design_patterns/FL10.jpg", alt: "AHS Building interior" },
    ],
  },
  {
    id: "3",
    title: "JP Apartment",
    description: "Premium residential building featuring modern apartments engineered for comfort, luxury living, and Vastu-compliant layout.",
    type: "Residential Building",
    builtUpArea: "60,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
    thumbnail: "/design_patterns/dev1.png",
    images: [
      { src: "/design_patterns/dev1.png", alt: "JP Apartment exterior" },
      { src: "/design_patterns/dev2.png", alt: "JP Apartment living area" },
      { src: "/design_patterns/dev3.png", alt: "JP Apartment bedroom" },
    ],
  },
  {
    id: "4",
    title: "Commercial Complex",
    description: "High-grade commercial complex built to accommodate corporate offices, retail outlets, and business hubs with advanced safety systems.",
    type: "Commercial Building",
    builtUpArea: "45,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
    thumbnail: "/design_patterns/GT9.jpg",
    images: [
      { src: "/design_patterns/GT9.jpg", alt: "Commercial Complex exterior" },
      { src: "/design_patterns/GT8.jpg", alt: "Commercial Complex retail" },
      { src: "/design_patterns/GT7.jpg", alt: "Commercial Complex office" },
    ],
  },
  {
    id: "5",
    title: "Resort Project",
    description: "Luxury resort & hospitality development blending aesthetics, guest comfort, and structural durability in a scenic environment.",
    type: "Hospitality Resort",
    builtUpArea: "35,000+ Sq. Ft.",
    location: "Karnataka",
    status: "Completed",
    thumbnail: "/design_patterns/FL5.jpg",
    images: [
      { src: "/design_patterns/FL5.jpg", alt: "Resort main building" },
      { src: "/design_patterns/FL6.jpg", alt: "Resort pool area" },
      { src: "/design_patterns/FL7.jpg", alt: "Resort landscape" },
    ],
  },
  {
    id: "6",
    title: "Educational Building",
    description: "Modern educational institution complex featuring spacious classrooms, laboratories, and student-focused facilities.",
    type: "Educational Institution",
    builtUpArea: "40,000+ Sq. Ft.",
    location: "Karnataka",
    status: "Completed",
    thumbnail: "/design_patterns/AR5.jpg",
    images: [
      { src: "/design_patterns/AR5.jpg", alt: "Educational Building campus" },
      { src: "/design_patterns/AR6.jpg", alt: "Classroom interior" },
      { src: "/design_patterns/AR7.jpg", alt: "Laboratory facility" },
    ],
  },
];

export const projectCategories = [
  "All",
  "Healthcare Infrastructure",
  "Commercial Building",
  "Residential Building",
  "Educational Institution",
  "Hospitality Resort",
];