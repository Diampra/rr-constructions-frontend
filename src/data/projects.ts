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
  document?: string;
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
    description: "Modern institutional and educational hostel campus building featuring multi-story residential facilities, state-of-the-art architectural design, and structural integrity.",
    type: "Institutional & Hostel",
    builtUpArea: "1,75,000+ Sq. Ft.",
    location: "Kolar, Karnataka",
    status: "Completed",
    thumbnail: "/images/AHS-Building/ahs-hostel-block.jpg",
    images: [
      { src: "/images/AHS-Building/ahs-hostel-block.jpg", alt: "AHS Hostel Building" },
      { src: "/images/AHS-Building/image-1.webp", alt: "AHS Building facade" },
      { src: "/images/AHS-Building/image-2.webp", alt: "AHS Building entrance" }
    ],
  },
  {
    id: "3",
    title: "J P Enclave",
    description: "Residential project in mysore",
    type: "Residential Building",
    builtUpArea: "60,000+ Sq. Ft.",
    location: "Mysore, Karnataka",
    status: "Completed",
    thumbnail: "/images/J-P-Enclave/image-1.webp",
    images: [
      { src: "/images/J-P-Enclave/image-1.webp", alt: "J P Enclave exterior" },
      { src: "/images/J-P-Enclave/image-2.webp", alt: "J P Enclave living area" },
      { src: "/images/J-P-Enclave/image-3.webp", alt: "J P Enclave bedroom" },
      { src: "/images/J-P-Enclave/image-4.webp", alt: "J P Enclave facilities" }
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
      { src: "/images/Commercial-Complex.webp", alt: "Commercial Complex interior" }
    ],
  },
  {
    id: "5",
    title: "J P Resorts",
    description: "Luxury resort & hospitality development blending aesthetics, guest comfort, and structural durability in a scenic environment.",
    type: "Hospitality Resort",
    builtUpArea: "35,000+ Sq. Ft.",
    location: "Madikeri,Coorg, Karnataka",
    status: "Completed",
    thumbnail: "/images/mudigere-Resort-Project/image-1.webp",
    images: [
      { src: "/images/mudigere-Resort-Project/image-1.webp", alt: "Resort main building" },
      { src: "/images/mudigere-Resort-Project/image-2.webp", alt: "Resort pool area" },
      { src: "/images/mudigere-Resort-Project/image-3.webp", alt: "Resort landscape" },
      { src: "/images/mudigere-Resort-Project/image-4.webp", alt: "Resort rooms" },
      { src: "/images/mudigere-Resort-Project/image-5.webp", alt: "Resort facilities" },
      { src: "/images/mudigere-Resort-Project/image-6.webp", alt: "Resort Top View" }
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
    thumbnail: "/images/University-Building/image-1.webp",
    images: [
      { src: "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-1.jpg", alt: "Boys Hostel Tower Block" },
      { src: "/images/University-Building/image-1.webp", alt: "Educational Building campus" },
      { src: "/images/University-Building/image-2.webp", alt: "Classroom interior" },
      { src: "/images/University-Building/image-3.webp", alt: "Laboratory facility" },
      { src: "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-1.webp", alt: "Boys Hostel Block" },
      { src: "/images/APJ-Abdul-kalam-Block-UG-Boys-Hostel/image-2.webp", alt: "Hostel interior" }
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
    thumbnail: "/images/under-construction/image-1.webp",
    images: [
      { src: "/images/under-construction/image-1.webp", alt: "Under construction 1" },
      { src: "/images/under-construction/image-2.webp", alt: "Under construction 2" },
      { src: "/images/under-construction/image-3.webp", alt: "Under construction 3" },
      { src: "/images/under-construction/image-4.webp", alt: "Under construction 4" }
    ],
  },
  {
    id: "8",
    title: "Sparsh Hospital",
    description: "Upcoming healthcare facility project with advanced infrastructure and design.",
    type: "Upcoming Project",
    builtUpArea: "TBA",
    location: "Karnataka",
    status: "Upcoming",
    thumbnail: "/sparsh.jpeg",
    document: "/sparsh-hospital-project-pdf-signed.pdf",
    images: [
      { src: "/sparsh.jpeg", alt: "Sparsh Hospital concept" }
    ],
  },
  {
    id: "9",
    title: "Malleshwaram Enclave",
    description: "A modern, upscale residential enclave in the heart of Malleshwaram, featuring thoughtfully designed premium living spaces that offer a perfect blend of comfort, elegance, and urban convenience.",
    type: "Residential Building",
    builtUpArea: "TBA",
    location: "Malleshwaram, Bangalore",
    status: "Completed",
    thumbnail: "/images/Malleshwaram-enclave/Malleshwaram-enclave.webp",
    images: [
      { src: "/images/Malleshwaram-enclave/Malleshwaram-enclave.webp", alt: "Malleshwaram Enclave exterior" }
    ],
  },
  {
    id: "10",
    title: "Kalyanamantapa",
    description: "An elegantly designed residential project situated in C.B. Pura, distinguished by its excellent modern amenities, robust infrastructure, and focus on delivering an exceptional quality of life for its residents.",
    type: "Residential Building",
    builtUpArea: "TBA",
    location: "C B Pura, Bangalore",
    status: "Completed",
    thumbnail: "/images/kalyanamantapa/kalyanamantapa-C-B-Pura.webp",
    images: [
      { src: "/images/kalyanamantapa/kalyanamantapa-C-B-Pura.webp", alt: "Kalyanamantapa exterior" }
    ],
  },
  {
    id: "11",
    title: "Ideal Enclave",
    description: "A premium residential enclave located in the serene surroundings of R.R. Nagar, built with state-of-the-art architectural precision to provide luxurious, spacious, and highly comfortable homes.",
    type: "Residential Building",
    builtUpArea: "TBA",
    location: "R R Nagar, Bangalore",
    status: "Completed",
    thumbnail: "/images/Ideal-Enclave/Ideal-Enclave-R-R-nagar.webp",
    images: [
      { src: "/images/Ideal-Enclave/Ideal-Enclave-R-R-nagar.webp", alt: "Ideal Enclave exterior" }
    ],
  },
  {
    id: "12",
    title: "Fortune Select JP Cosmos",
    description: "A prestigious 4-star luxury business and leisure hotel development in Bangalore featuring upscale hospitality suites, grand banquet facilities, swimming pool, and premium structural finishes.",
    type: "Hospitality Resort",
    builtUpArea: "1,10,000+ Sq. Ft.",
    location: "Cunningham Road, Bangalore",
    status: "Completed",
    thumbnail: "/images/J-P-GROUP-BANGALORE/Fortune Select JP Cosmos - Bangalore.webp",
    images: [
      { src: "/images/J-P-GROUP-BANGALORE/Fortune Select JP Cosmos - Bangalore.webp", alt: "Fortune Select JP Cosmos Bangalore exterior" }
    ],
  },
  {
    id: "13",
    title: "Fortune Park JP Celestial",
    description: "An iconic contemporary hotel situated near Race Course Road in Central Bangalore, built with modern architectural glazing, world-class guest amenities, and structural durability.",
    type: "Hospitality Resort",
    builtUpArea: "2,90,000+ Sq. Ft.",
    location: "Race Course Road, Bangalore",
    status: "Completed",
    thumbnail: "/images/J-P-GROUP-BANGALORE/Fortune Park JP Celestial - Bangalore.webp",
    images: [
      { src: "/images/J-P-GROUP-BANGALORE/Fortune Park JP Celestial - Bangalore.webp", alt: "Fortune Park JP Celestial Bangalore facade" }
    ],
  },
  {
    id: "14",
    title: "JP Corp",
    description: "A landmark commercial corporate headquarters and showroom facility in prime Sadashivanagar, Bangalore, featuring high-performance curtain glass facades and state-of-the-art office spaces.",
    type: "Commercial Building",
    builtUpArea: "50,000+ Sq. Ft.",
    location: "Sadashivanagar, Bangalore",
    status: "Completed",
    thumbnail: "/images/J-P-GROUP-BANGALORE/JP CORP - Sadashivanagar.webp",
    images: [
      { src: "/images/J-P-GROUP-BANGALORE/JP CORP - Sadashivanagar.webp", alt: "JP Corp Commercial Building Sadashivanagar" }
    ],
  },
  {
    id: "15",
    title: "JP Square",
    description: "A premier multi-level commercial and retail complex in Sadashivanagar, Bangalore, designed with distinctive curved architectural facades, retail spaces, and corporate office units.",
    type: "Commercial Building",
    builtUpArea: "45,000+ Sq. Ft.",
    location: "Sadashivanagar, Bangalore",
    status: "Completed",
    thumbnail: "/images/J-P-GROUP-BANGALORE/JP Square - SADASHIVANAGAR.webp",
    images: [
      { src: "/images/J-P-GROUP-BANGALORE/JP Square - SADASHIVANAGAR.webp", alt: "JP Square Sadashivanagar Bangalore" }
    ],
  },
  {
    id: "16",
    title: "MySpace Silverstar",
    description: "A contemporary multi-storey hospitality and commercial property in Bangalore, constructed to deliver refined architectural aesthetics, modern guest amenities, and long-lasting structural quality.",
    type: "Hospitality Resort",
    builtUpArea: "40,000+ Sq. Ft.",
    location: "Bangalore, Karnataka",
    status: "Completed",
    thumbnail: "/images/J-P-GROUP-BANGALORE/MySpace Silverstar.webp",
    images: [
      { src: "/images/J-P-GROUP-BANGALORE/MySpace Silverstar.webp", alt: "MySpace Silverstar Bangalore" }
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