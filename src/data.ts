export const profile = {
  name: "Lio Mikael Ybañez",
  role: "BSIT Student",
  phone: "+639512458499",
  email: "liomikaeldoral@gmail.com",
  location: "Kidapawan City, Philippines",
  status: "Active Student",
  heroImage: `${import.meta.env.BASE_URL}assets/owel.png`,
  cvUrl: `${import.meta.env.BASE_URL}assets/cv.pdf`,
  socials: [
    { label: "GitHub", href: "https://github.com/lmybanez-web", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lio-mikael-d-yba%C3%B1ez-847a88427/", icon: "linkedin" },
    { label: "Facebook", href: "https://facebook.com/lio.doral", icon: "facebook" },
    { label: "Email", href: "mailto:liomikaeldoral@gmail.com", icon: "email" },
  ],
};

export const about = {
  heading: "Hi there, I'm Lio Mikael Ybañez",
  tagline: "BSIT Student",
  bio: "I'm a 3rd year BSIT student focused on networking and infrastructure. Between coursework, Packet Tracer labs, and serving as a PSITS officer, I've been building a hands-on foundation in routing, switching, and network troubleshooting — and I'm currently shaping my capstone project around a real networking problem.",
  facts: [
    { label: "Year Level", value: "3rd Year, BSIT" },
    { label: "School", value: "Notre Dame of Kidapawan College" },
    { label: "Phone", value: "+639512458499" },
    { label: "Email", value: "liomikaeldoral@gmail.com" },
    { label: "Org Role", value: "PSITS Officer" },
    { label: "Availability", value: "Active Student" },
  ],
};

export const services = [
  { title: "Network Simulation", description: "Building and testing LAN/WAN topologies in Cisco Packet Tracer and GNS3." },
  { title: "Subnetting & IP Planning", description: "Designing IPv4/IPv6 addressing schemes for classroom and lab networks." },
  { title: "Structured Cabling", description: "Terminating and testing Cat5e/Cat6 runs, patch panels, and punch-downs." },
  { title: "Troubleshooting & Diagnostics", description: "Using ping, traceroute, and Wireshark to isolate connectivity issues." },
  { title: "SQL Querying", description: "Writing joins, subqueries, and aggregate functions to pull and shape data efficiently." },
  { title: "Technical Documentation", description: "Writing clear network diagrams, lab reports, and project documentation." },
];

export const skills = [
  { label: "Routing & Switching", value: 75 },
  { label: "Subnetting / IP Addressing", value: 80 },
  { label: "Packet Tracer / GNS3", value: 80 },
  { label: "SQL Querying", value: 60 },
  { label: "Network Troubleshooting", value: 70 },
  { label: "Structured Cabling", value: 70 },
];

export const experience = [
  {
    role: "PSITS Officer",
    period: "2024 — Present",
    place: "Philippine Society of IT Students (PSITS) — Notre Dame of Kidapawan College",
    description: "Help organize tech events and workshops, coordinate with fellow officers, and support member onboarding and IT-related activities.",
  },
  {
    role: "Networking Labs & Coursework",
    period: "2025 — Present",
    place: "BSIT Program, Notre Dame of Kidapawan College",
    description: "Hands-on lab work in routing, switching, subnetting, and structured cabling as part of the networking track.",
  },
];

export const education = [
  {
    role: "BS in Information Technology",
    period: "2024 — Present (3rd Year)",
    place: "Notre Dame of Kidapawan College",
    description: "Coursework covering network fundamentals, routing & switching, systems administration, and information security.",
  },
  {
    role: "Cisco Networking Academy — CCNA (In Progress)",
    period: "2025 — Present",
    place: "Cisco Networking Academy",
    description: "Working through CCNA modules covering routing, switching, and enterprise networking fundamentals.",
  },
];

export const certifications = [
  { title: "Networking Basics", category: "Packet Tracer", href: 'https://www.credly.com/badges/fb5e55f9-5dbe-4b7f-b4f8-c551bf79c49d', image: `${import.meta.env.BASE_URL}assets/portfolio1.png` },
  { title: "Subnetting Exercise Set", category: "IP Addressing", href: '#', image: `${import.meta.env.BASE_URL}assets/subnetting.jpg` },
  { title: "Structured Cabling Lab", category: "Cabling", href: '#', image: `${import.meta.env.BASE_URL}assets/cabling1.jpg` },
];

export const contact = {
  heading: "Just say hello",
  description:
    "Interested in an OJT placement, a group project, or just want to talk networking? Feel free to reach out.",
  email: "liomikaeldoral@gmail.com",
  phone: "+639512458499",
  address: "Kidapawan City, Philippines",
};

export const nav = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "skills", label: "Skills" },
  { key: "resume", label: "Resume" },
  { key: "certifications", label: "Certifications" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];
export const projects = [
    { title: "Cisco Packet Tracer Labs", category: "Networking Labs", href: 'https://drive.google.com/drive/folders/1-5nxNNTo-bOIJtVpvrMioZRTgV0VHjVo?usp=sharing', image: `${import.meta.env.BASE_URL}assets/packettracer.jpg` },
    { title: "Home Wireless Network - 3 Access Points", category: "Wireless Networking", href: '#', image: `${import.meta.env.BASE_URL}assets/accesspoint.png` },
];