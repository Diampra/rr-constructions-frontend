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
    thumbnail: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp",
    images: [
      { src: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp", alt: "Hospital exterior architectural render" },
      { src: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp", alt: "Hospital main entrance" },
      { src: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp", alt: "Hospital interior lobby" },
      { src: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp", alt: "Patient ward view" },
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
    thumbnail: "/images/AHS-Building.webp",
    images: [
      { src: "/images/AHS-Building.webp", alt: "AHS Building facade" },
      { src: "/images/AHS-Building.webp", alt: "AHS Building entrance" },
      { src: "/images/AHS-Building.webp", alt: "AHS Building interior" },
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
    thumbnail: "/images/JP-Apartment.webp",
    images: [
      { src: "/images/JP-Apartment.webp", alt: "JP Apartment exterior" },
      { src: "/images/JP-Apartment.webp", alt: "JP Apartment living area" },
      { src: "/images/JP-Apartment.webp", alt: "JP Apartment bedroom" },
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
    thumbnail: "/images/Commercial-Complex.webp",
    images: [
      { src: "/images/Commercial-Complex.webp", alt: "Commercial Complex exterior" },
      { src: "/images/Commercial-Complex.webp", alt: "Commercial Complex retail" },
      { src: "/images/Commercial-Complex.webp", alt: "Commercial Complex office" },
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
    thumbnail: "/images/Resort-Project.webp",
    images: [
      { src: "/images/Resort-Project.webp", alt: "Resort main building" },
      { src: "/images/Resort-Project.webp", alt: "Resort pool area" },
      { src: "/images/Resort-Project.webp", alt: "Resort landscape" },
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
    thumbnail: "/images/Educational-Building.webp",
    images: [
      { src: "/images/Educational-Building.webp", alt: "Educational Building campus" },
      { src: "/images/Educational-Building.webp", alt: "Classroom interior" },
      { src: "/images/Educational-Building.webp", alt: "Laboratory facility" },
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