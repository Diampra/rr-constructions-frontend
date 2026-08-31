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
      { src: "/images/R-L-Jalappa-Hospital-&-Research-Center.webp", alt: "Hospital exterior architectural render" }
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
    thumbnail: "/images/AHS-Building/image-1.png",
    images: [
      { src: "/images/AHS-Building/image-1.png", alt: "AHS Building facade" },
      { src: "/images/AHS-Building/image-2.png", alt: "AHS Building entrance" }
    ],
  },
  {
    id: "3",
    title: "JP Apartment",
    description: "Residential project in mysore",
    type: "Residential Building",
    builtUpArea: "60,000+ Sq. Ft.",
    location: "Mysore, Karnataka",
    status: "Completed",
    thumbnail: "/images/J-P-Enclave/image-1.png",
    images: [
      { src: "/images/J-P-Enclave/image-1.png", alt: "JP Apartment exterior" },
      { src: "/images/J-P-Enclave/image-2.png", alt: "JP Apartment living area" },
      { src: "/images/J-P-Enclave/image-3.png", alt: "JP Apartment bedroom" },
      { src: "/images/J-P-Enclave/image-4.png", alt: "JP Apartment facilities" }
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
      { src: "/images/Commercial-Complex.png", alt: "Commercial Complex interior" }
    ],
  },
  {
    id: "5",
    title: "Mudigere Resort Project",
    description: "Luxury resort & hospitality development blending aesthetics, guest comfort, and structural durability in a scenic environment.",
    type: "Hospitality Resort",
    builtUpArea: "35,000+ Sq. Ft.",
    location: "Mudigere, Karnataka",
    status: "Completed",
    thumbnail: "/images/mudigere-Resort-Project/image-1.png",
    images: [
      { src: "/images/mudigere-Resort-Project/image-1.png", alt: "Resort main building" },
      { src: "/images/mudigere-Resort-Project/image-2.png", alt: "Resort pool area" },
      { src: "/images/mudigere-Resort-Project/image-3.png", alt: "Resort landscape" },
      { src: "/images/mudigere-Resort-Project/image-4.png", alt: "Resort rooms" },
      { src: "/images/mudigere-Resort-Project/image-5.png", alt: "Resort facilities" }
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
    thumbnail: "/images/University-Building/image-1.png",
    images: [
      { src: "/images/University-Building/image-1.png", alt: "Educational Building campus" },
      { src: "/images/University-Building/image-2.png", alt: "Classroom interior" },
      { src: "/images/University-Building/image-3.png", alt: "Laboratory facility" },
      { src: "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-1.png", alt: "Boys Hostel Block" },
      { src: "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-2.png", alt: "Hostel interior" }
    ],
  },
  {
    id: "7",
    title: "International school at DODDABALLAPURA",
    description: "Upcoming educational institution project.",
    type: "Upcoming Project",
    builtUpArea: "TBA",
    location: "Doddaballapura, Karnataka",
    status: "Upcoming",
    thumbnail: "/images/under-construction/image-1.jpeg",
    images: [
      { src: "/images/under-construction/image-1.jpeg", alt: "Under construction 1" },
      { src: "/images/under-construction/image-2.jpeg", alt: "Under construction 2" },
      { src: "/images/under-construction/image-3.jpeg", alt: "Under construction 3" },
      { src: "/images/under-construction/image-4.jpeg", alt: "Under construction 4" }
    ],
  }
];

export const projectCategories = [
  "All",
  "Healthcare Infrastructure",
  "Commercial Building",
  "Residential Building",
  "Educational Institution",
  "Hospitality Resort",
  "Upcoming Project",
];