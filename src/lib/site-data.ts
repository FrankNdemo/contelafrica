import heroHome from "@/assets/hero-home.jpg";
import commercial from "@/assets/project-commercial.jpg";
import infrastructure from "@/assets/project-infrastructure.jpg";
import residential from "@/assets/project-residential.jpg";
import healthcare from "@/assets/project-healthcare.jpg";
import industrial from "@/assets/project-industrial.jpg";
import engineer from "@/assets/about-engineer.jpg";
import concrete from "@/assets/texture-concrete.jpg";
import kcaaRoadImage from "@/assets/project-kcaa-road.png";
import nockRepairsImage from "@/assets/project-nock-repairs.png";
import electricalImage from "@/assets/project-electrical.png";
import regionalRoadImage from "@/assets/project-regional-road.png";
import interiorServiceIcon from "@/assets/about-service-interior-design.png";
import renovationsServiceIcon from "@/assets/about-service-renovations.png";
import constructionServiceIcon from "@/assets/about-service-construction.png";
import landscapingServiceIcon from "@/assets/about-service-landscaping.png";
import electricalServiceIcon from "@/assets/about-service-electrical-design.png";

export const IMG = {
  heroHome,
  commercial,
  infrastructure,
  residential,
  healthcare,
  industrial,
  engineer,
  concrete,
};

export type Stat = { label: string; value: string; suffix?: string };

export const STATS: Stat[] = [
  { label: "Projects Delivered", value: "420", suffix: "+" },
  { label: "Years of Engineering", value: "13", suffix: "+" },
  { label: "Engineers & Specialists", value: "1,250", suffix: "+" },
  { label: "Countries Across Africa", value: "14" },
  { label: "Lost-Time Incident Rate", value: "0.18" },
  { label: "Client Satisfaction", value: "98", suffix: "%" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  category: string;
  icon?: string;
  features?: Array<{ title: string; detail: string }>;
};

const LEGACY_SERVICES: Service[] = [
  {
    slug: "general-construction",
    title: "General Construction",
    short: "End-to-end build delivery.",
    description:
      "Turnkey vertical and horizontal construction across commercial, institutional and mixed-use developments.",
    image: commercial,
    category: "Build",
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    short: "Earth, water and structure.",
    description:
      "Geotechnical investigation, structural design, drainage, earthworks and reinforced concrete systems.",
    image: infrastructure,
    category: "Engineering",
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    short: "Workplaces of consequence.",
    description:
      "Office towers, headquarters, retail destinations and hospitality engineered for institutional clients.",
    image: commercial,
    category: "Build",
  },
  {
    slug: "residential-construction",
    title: "Residential Construction",
    short: "Homes for a new generation.",
    description:
      "From bespoke villas to high-density residential, designed for climate, durability and quiet luxury.",
    image: residential,
    category: "Build",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    short: "Backbone of the continent.",
    description:
      "Bridges, ports, rail interfaces, water and energy infrastructure for governments and concessions.",
    image: infrastructure,
    category: "Infrastructure",
  },
  {
    slug: "road-works",
    title: "Road Works",
    short: "Highways and urban arterials.",
    description:
      "Asphalt and concrete pavements, interchanges, signage and intelligent transport corridors.",
    image: infrastructure,
    category: "Infrastructure",
  },
  {
    slug: "project-management",
    title: "Project Management",
    short: "Owner-side delivery.",
    description:
      "Programme management, cost control, risk and stakeholder coordination for capital projects.",
    image: engineer,
    category: "Advisory",
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    short: "Form, climate, culture.",
    description:
      "Concept, schematic and technical design in-house, integrated with engineering from day one.",
    image: residential,
    category: "Design",
  },
  {
    slug: "renovations",
    title: "Renovations",
    short: "Renewal of working assets.",
    description: "Heritage-sensitive and performance-led refurbishment of operational buildings.",
    image: commercial,
    category: "Build",
  },
  {
    slug: "interior-fitouts",
    title: "Interior Fit-outs",
    short: "Workplaces that perform.",
    description:
      "Cat-A and Cat-B fit-outs for corporate, hospitality, retail and embassy environments.",
    image: commercial,
    category: "Build",
  },
  {
    slug: "engineering-consultancy",
    title: "Engineering Consultancy",
    short: "Technical advisory.",
    description: "Independent technical due diligence, lender's engineer and feasibility services.",
    image: engineer,
    category: "Advisory",
  },
  {
    slug: "design-and-build",
    title: "Design & Build",
    short: "Single point of accountability.",
    description:
      "Integrated design and construction with guaranteed time, cost and quality outcomes.",
    image: commercial,
    category: "Build",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    short: "Whole-of-life care.",
    description: "Hard and soft FM, planned preventive maintenance and 24/7 emergency response.",
    image: industrial,
    category: "Operate",
  },
  {
    slug: "water-projects",
    title: "Water Projects",
    short: "Treatment, storage, conveyance.",
    description:
      "Potable water, wastewater treatment, reservoirs and irrigation across rural and urban contexts.",
    image: infrastructure,
    category: "Infrastructure",
  },
  {
    slug: "energy-projects",
    title: "Energy Projects",
    short: "Power that doesn't stop.",
    description: "Substations, distribution, solar farms and BESS — EPC and balance of plant.",
    image: industrial,
    category: "Infrastructure",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "interior-fitouts",
    title: "Interior Design & Fit-Outs",
    short: "Contemporary workplaces shaped around people, performance and identity.",
    description:
      "We design and deliver contemporary interior environments that improve functionality, reflect brand identity, and create inspiring spaces for people to work, meet, and interact.",
    image:
      "https://images.pexels.com/photos/6322364/pexels-photo-6322364.jpeg?auto=compress&cs=tinysrgb&w=1800",
    icon: interiorServiceIcon,
    category: "Interior Design",
    features: [
      {
        title: "Space Planning & Workplace Strategy",
        detail:
          "We organize circulation, work zones and shared areas to improve workflow and use every square metre efficiently.",
      },
      {
        title: "Office Partitioning Systems",
        detail:
          "Drywall, glass and timber partitions create flexible, private and visually connected working environments.",
      },
      {
        title: "Reception & Executive Suites",
        detail:
          "Client-facing spaces receive refined layouts, durable finishes and detailing aligned with the organization's identity.",
      },
      {
        title: "Acoustic Ceiling Concepts",
        detail:
          "Dropped ceilings and feature installations coordinate sound control, lighting and building services.",
      },
      {
        title: "Lighting & Ambience Optimization",
        detail:
          "Efficient lighting schemes balance task visibility, comfort, energy use and architectural atmosphere.",
      },
      {
        title: "Custom Millwork & Cabinetry",
        detail:
          "Purpose-built desks, storage and fitted furniture are detailed around the room and daily operational needs.",
      },
      {
        title: "Premium Painting & Wall Finishes",
        detail:
          "Commercial-grade coatings, textures and wall treatments provide a polished finish built for frequent use.",
      },
      {
        title: "Flooring Selection & Installation",
        detail:
          "We specify and install carpeting, luxury vinyl and polished surfaces suited to traffic, acoustics and maintenance.",
      },
      {
        title: "Acoustic Treatments",
        detail:
          "Sound-absorbing wall and ceiling elements improve speech privacy and reduce disruptive reverberation.",
      },
      {
        title: "Turnkey Delivery",
        detail:
          "One coordinated team manages concept, procurement, installation, quality checks and final handover.",
      },
    ],
  },
  {
    slug: "renovations",
    title: "Renovations & Facility Upgrades",
    short: "Planned renewal that improves safety, performance and long-term value.",
    description:
      "We revitalize aging structures, commercial assets, and occupied facilities through carefully planned renovation programs that enhance performance, safety, and long-term value.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=88",
    icon: renovationsServiceIcon,
    category: "Renovations",
    features: [
      {
        title: "Structural Rehabilitation",
        detail:
          "Damaged concrete and structural elements are repaired and reinforced to restore safe load performance.",
      },
      {
        title: "Floor & Surface Restorations",
        detail:
          "Industrial floors are levelled, repaired and refinished for durability, safety and easier maintenance.",
      },
      {
        title: "Roofing & Waterproofing Systems",
        detail:
          "Leak sources are resolved through membrane systems, drainage corrections and targeted roof repairs.",
      },
      {
        title: "Suspended Ceiling Installation",
        detail:
          "Ceiling grids and panels are replaced or realigned while coordinating lighting and service access.",
      },
      {
        title: "Masonry Reconstruction",
        detail:
          "Brickwork, partitions and structural walls are carefully altered or rebuilt to suit the upgraded layout.",
      },
      {
        title: "Protective Coatings & Repainting",
        detail:
          "Weather-resistant commercial coatings protect exterior surfaces and renew the building's appearance.",
      },
      {
        title: "Facade Modernization",
        detail:
          "External materials, openings and architectural details are upgraded to improve performance and asset value.",
      },
      {
        title: "Facility Reconfiguration",
        detail:
          "Existing rooms and circulation are adapted for new teams, equipment or operational requirements.",
      },
      {
        title: "Warehouse Rehabilitation",
        detail:
          "Floor loading areas, drainage and structural shells are repaired for dependable industrial use.",
      },
      {
        title: "NCA Compliance Upgrades",
        detail:
          "Required building elements are retrofitted and documented to align facilities with current NCA requirements.",
      },
    ],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering & Construction",
    short: "End-to-end structural works delivered to national codes.",
    description:
      "We execute end-to-end structural works, specialized masonry, and high-security boundary installations strictly aligned with national codes.",
    image:
      "https://images.pexels.com/photos/10202856/pexels-photo-10202856.jpeg?auto=compress&cs=tinysrgb&w=1800",
    icon: constructionServiceIcon,
    category: "Construction",
    features: [
      {
        title: "Structural Concrete Works",
        detail:
          "Reinforced foundations, slabs, beams and frames are executed to approved structural designs and quality controls.",
      },
      {
        title: "Earthworks & Site Preparation",
        detail:
          "Surveying, excavation, grading and compaction establish stable platforms for safe, durable construction.",
      },
      {
        title: "Drainage & Utility Infrastructure",
        detail:
          "Storm-water systems, culverts and underground service routes are coordinated before surface works begin.",
      },
      {
        title: "Specialized Masonry",
        detail:
          "Load-bearing and architectural masonry is delivered with precise setting-out, reinforcement and finish control.",
      },
      {
        title: "Boundary & Security Installations",
        detail:
          "Perimeter walls, gates and high-security barriers are designed around site risk and operational access.",
      },
      {
        title: "Code & Quality Compliance",
        detail:
          "Inspections, material testing and project records support compliance with Kenyan standards and approved specifications.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Engineering Consultancy & Project Management",
    short: "Decisive technical leadership from briefing through handover.",
    description:
      "Providing professional owner-side representation, deep technical advisory, procurement strategy, budgeting, and rigid project site supervision.",
    image:
      "https://images.pexels.com/photos/37198880/pexels-photo-37198880.jpeg?auto=compress&cs=tinysrgb&w=1800",
    icon: constructionServiceIcon,
    category: "Consultancy",
    features: [
      {
        title: "Feasibility & Technical Advisory",
        detail:
          "Early technical studies clarify delivery options, constraints, approvals and project viability before capital is committed.",
      },
      {
        title: "Cost Planning & Budget Control",
        detail:
          "Budgets, cash-flow forecasts and change controls keep decisions aligned with the approved business case.",
      },
      {
        title: "Procurement Strategy",
        detail:
          "Tender packaging, contractor evaluation and negotiation are structured around value, capability and delivery risk.",
      },
      {
        title: "Programme Management",
        detail:
          "Integrated schedules connect design, approvals, procurement and construction milestones into one accountable plan.",
      },
      {
        title: "Site Supervision",
        detail:
          "Resident oversight tracks workmanship, safety, progress and conformance with drawings and specifications.",
      },
      {
        title: "Handover & Close-Out",
        detail:
          "Testing, snag resolution, as-built records and operating documentation are coordinated through final acceptance.",
      },
    ],
  },
  {
    slug: "landscape-architecture",
    title: "Landscape Architecture & Grounds Management",
    short: "Premium landscapes engineered for lasting performance.",
    description:
      "Delivery of premium hardscape paving, commercial turf installations, estate landscaping, stonework walkways, long-term grounds upkeep, and high-efficiency automated irrigation systems.",
    image:
      "https://images.pexels.com/photos/34189396/pexels-photo-34189396.jpeg?auto=compress&cs=tinysrgb&w=1800",
    icon: landscapingServiceIcon,
    category: "Landscaping",
    features: [
      {
        title: "Landscape Planning & Planting Design",
        detail:
          "Climate-responsive planting palettes combine shade, seasonal interest and resilient species suited to the site.",
      },
      {
        title: "Commercial Turf Installation",
        detail:
          "Ground preparation, grading and turf establishment create robust lawns for campuses, estates and public spaces.",
      },
      {
        title: "Hardscape & Stonework",
        detail:
          "Paving, kerbs, terraces and stone walkways are detailed for safe movement, drainage and lasting appearance.",
      },
      {
        title: "Automated Irrigation",
        detail:
          "Efficient zoned systems, controls and drip lines target water where it is needed and reduce routine waste.",
      },
      {
        title: "Grounds Maintenance",
        detail:
          "Scheduled mowing, pruning, feeding and plant-health care preserve a consistently professional environment.",
      },
      {
        title: "Drainage & Erosion Control",
        detail:
          "Levels, swales and planted stabilization measures protect landscapes through Kenya's wet and dry seasons.",
      },
    ],
  },
  {
    slug: "structured-cabling",
    title: "Telecommunications & Structured Cabling",
    short: "Reliable communication infrastructure for modern facilities.",
    description:
      "Sourcing and deployment of fiber optic lines, structured data cabling containment, commercial communication grids, and specialized technical routing surveys.",
    image:
      "https://www.icolo.io/wp-content/uploads/2023/03/Engineer-on-site-at-iColo-MPM1-scaled.jpg",
    icon: electricalServiceIcon,
    category: "Telecommunications",
    features: [
      {
        title: "Fiber-Optic Backbone",
        detail:
          "Single-mode and multimode fiber routes provide high-capacity links between buildings, floors and equipment rooms.",
      },
      {
        title: "Structured Data Cabling",
        detail:
          "Standards-based copper cabling, outlets and patching support dependable voice, data and building systems.",
      },
      {
        title: "Cable Containment",
        detail:
          "Trays, baskets, trunking and riser routes keep services protected, accessible and ready for future expansion.",
      },
      {
        title: "Server & Communication Rooms",
        detail:
          "Rack layouts, patch panels, power coordination and labeling create maintainable technical spaces.",
      },
      {
        title: "Testing & Certification",
        detail:
          "Installed links are tested, documented and certified against the performance category specified for the project.",
      },
      {
        title: "Routing Surveys & Documentation",
        detail:
          "Site surveys, cable schedules and as-built records reduce installation risk and simplify future maintenance.",
      },
    ],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    short: "High-capacity power systems designed for dependable operation.",
    description:
      "Design and installation of high-capacity power distribution layouts, industrial backup generators, UPS systems, main switchboard panels, and low-voltage wiring.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1800&q=88",
    icon: electricalServiceIcon,
    category: "Electrical Design",
    features: [
      {
        title: "Power Distribution Design",
        detail:
          "Load studies and coordinated distribution layouts size incoming supplies, feeders and final circuits for reliable operation.",
      },
      {
        title: "Main Switchboards & Panels",
        detail:
          "Protection, metering and distribution assemblies are specified and installed for safe access and maintainability.",
      },
      {
        title: "Backup Generators",
        detail:
          "Generator sizing, changeover controls, fuel systems and acoustic treatment protect essential operations during outages.",
      },
      {
        title: "UPS & Critical Power",
        detail:
          "Uninterruptible power systems bridge sensitive equipment through supply interruptions and generator transitions.",
      },
      {
        title: "Low-Voltage Installation",
        detail:
          "Containment, cabling, accessories and earthing are installed and tested to approved drawings and standards.",
      },
      {
        title: "Testing & Commissioning",
        detail:
          "Protection checks, insulation tests and functional commissioning confirm safe performance before handover.",
      },
    ],
  },
  {
    slug: "road-works",
    title: "Road & Transport Infrastructure",
    short: "Durable access, drainage and circulation infrastructure.",
    description:
      "Civil delivery of regional access roads, heavy storm drainage systems, culverts, parking lot foundations, and complex site traffic circulation improvements.",
    image:
      "https://images.pexels.com/photos/6018652/pexels-photo-6018652.jpeg?auto=compress&cs=tinysrgb&w=1800",
    icon: landscapingServiceIcon,
    category: "Infrastructure",
    features: [
      {
        title: "Access Roads & Pavements",
        detail:
          "Subgrade improvement, pavement layers and durable wearing surfaces are designed around traffic and ground conditions.",
      },
      {
        title: "Storm-Water Drainage",
        detail:
          "Channels, culverts and outfalls control runoff and protect roads, buildings and neighboring properties.",
      },
      {
        title: "Parking & Circulation",
        detail:
          "Parking foundations, kerbs, markings and vehicle routes improve safe, legible movement across busy sites.",
      },
      {
        title: "Earthworks & Compaction",
        detail:
          "Cut-and-fill operations are surveyed, moisture-controlled and tested to achieve stable formation levels.",
      },
      {
        title: "Pedestrian Infrastructure",
        detail:
          "Walkways, crossings and accessibility details connect people safely through transport and commercial environments.",
      },
      {
        title: "Road Furniture & Safety",
        detail:
          "Signage, markings, barriers and traffic-calming elements are coordinated for clear and compliant road use.",
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  sector: string;
  country: string;
  city: string;
  year: number | string;
  client: string;
  clientUrl?: string;
  budget: string;
  timeline: string;
  procurement?: string;
  keyDelivery?: string;
  scope: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  gallery: string[];
  size?: "wide" | "tall" | "square";
};

export const PROJECTS: Project[] = [
  {
    slug: "kcaa-ans-access-road-upgrading",
    title: "Access Road Infrastructure Upgrading",
    sector: "Construction",
    country: "Kenya",
    city: "Mlolongo",
    year: 2021,
    client: "Kenya Civil Aviation Authority (KCAA)",
    clientUrl: "https://www.kcaa.or.ke/",
    budget: "KSh 11,801,800",
    timeline: "Completed",
    scope:
      "Civil works, pavement reconstruction, drainage engineering, walkways and structural accessibility at the Air Navigation Services headquarters.",
    procurement: "Open Tender",
    keyDelivery:
      "Completed public access-road rehabilitation and drainage works at KCAA's ANS headquarters.",
    image: kcaaRoadImage,
    overview:
      "Contell Africa Limited delivered the upgrading of the access road at KCAA's Air Navigation Services headquarters in Mlolongo under a publicly reported KSh 11,801,800 contract award.",
    challenge:
      "The works required excavation through black-cotton soil, coordinated drainage and walkway construction, and preparation of durable pavement layers to the authority's specified engineering standards.",
    solution:
      "The delivery scope covered site clearance, excavation, compacted granular material, prepared subbase, hard-packed crushed-stone roadbase, concrete paving, precast kerbs and channels, and reinforced-concrete pipe culverts.",
    technologies: [
      "AASHTO T180 compaction",
      "CBR-specified road layers",
      "Concrete paving blocks",
      "Precast kerbs and culverts",
    ],
    gallery: [kcaaRoadImage, regionalRoadImage, infrastructure],
    size: "wide",
  },
  {
    slug: "kcaa-coastal-estate-renovations",
    title: "Coastal Residential & Estate Structural Renovations",
    sector: "Renovations",
    country: "Kenya",
    city: "Bamburi & Nyali, Mombasa",
    year: "Completed",
    client: "Kenya Civil Aviation Authority (KCAA)",
    clientUrl: "https://www.kcaa.or.ke/",
    budget: "Confidential",
    timeline: "Completed",
    procurement: "Joint venture delivery",
    keyDelivery:
      "Modernized coastal residences with renewed civil, plumbing and boundary infrastructure.",
    scope:
      "Joint-venture structural civil restorations, plumbing-system overhauls, boundary brick-layout updates and residential-building modernization across Bamburi and Nyali estates.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
    overview:
      "A coastal residential-renovation programme for KCAA estates in Bamburi and Nyali, delivered through joint-venture execution across structural, plumbing and property-boundary workstreams.",
    challenge:
      "Coastal residential assets required coordinated repair across building structures, aging plumbing services and external boundary elements while retaining usable estate layouts.",
    solution:
      "The delivery combined targeted civil restoration, plumbing replacement and repair, revised brick boundary layouts and modern architectural treatments suited to the existing residences.",
    technologies: [
      "Structural restoration",
      "Plumbing overhaul",
      "Boundary masonry",
      "Residential modernization",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
    ],
    size: "square",
  },
  {
    slug: "nock-kisumu-lake-civil-repairs",
    title: "Facility Civil Repair Works - Kisumu Lake",
    sector: "Renovations",
    country: "Kenya",
    city: "Kisumu",
    year: "Completed",
    client: "National Oil Corporation of Kenya (NOCK)",
    clientUrl: "https://nationaloil.co.ke/",
    budget: "Confidential",
    timeline: "Completed",
    procurement: "Request for Quotation (RFQ) Framework",
    keyDelivery:
      "Rehabilitated service-station civil infrastructure and stabilized high-use ground surfaces.",
    scope:
      "Facility civil structural repairs, concrete ground stabilization and service-station infrastructure rehabilitation at Kisumu Lake Service Station.",
    image: nockRepairsImage,
    overview:
      "A completed civil-repair package for the National Oil Corporation of Kenya focused on restoring structural condition and operational ground infrastructure at the Kisumu Lake Service Station.",
    challenge:
      "High-use service-station surfaces and civil elements required targeted repair and stabilization while protecting the functionality of the facility.",
    solution:
      "The works combined structural civil repairs, concrete ground stabilization and rehabilitation of supporting service-station infrastructure under an RFQ procurement framework.",
    technologies: [
      "Concrete stabilization",
      "Civil structural repair",
      "Forecourt rehabilitation",
      "Facility infrastructure",
    ],
    gallery: [
      nockRepairsImage,
      "https://nationaloil.co.ke/website_11ab3dee/wp-content/uploads/2018/12/WEB-NOC-PRODUCTS-4-1400x500.jpg",
    ],
    size: "tall",
  },
  {
    slug: "turnkey-commercial-landscaping",
    title: "Turnkey Commercial Landscaping & Ground Management",
    sector: "Landscaping",
    country: "Kenya",
    city: "Multiple sites",
    year: "Completed",
    client: "Private corporate clients & commercial enclaves",
    budget: "Confidential",
    timeline: "Completed",
    keyDelivery:
      "Long-term landscape quality aligned with commercial property boundaries and circulation.",
    scope:
      "Comprehensive site landscape architecture, commercial hardscape paving, stone walkway styling and turf layout engineering.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=90",
    overview:
      "Turnkey landscaping and ground-management works delivered for private corporate clients and commercial enclaves across Kenya.",
    challenge:
      "Large commercial grounds required a coherent relationship between planting, property boundaries, pedestrian movement and durable hardscape elements.",
    solution:
      "Contell Africa integrated site landscape architecture, engineered turf layouts, stone walkways and commercial hardscape paving into coordinated external environments.",
    technologies: [
      "Landscape architecture",
      "Hardscape paving",
      "Turf engineering",
      "Stone walkways",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=85",
    ],
    size: "square",
  },
  {
    slug: "commercial-automated-irrigation",
    title: "Commercial Automated Irrigation Networks",
    sector: "Irrigation Systems",
    country: "Kenya",
    city: "Multiple sites",
    year: "Completed",
    client: "Agricultural enterprises & high-end corporate grounds",
    budget: "Confidential",
    timeline: "Completed",
    keyDelivery: "Smart irrigation zones configured to reduce facility water waste.",
    scope:
      "Surveying, piping layout, flow-control configuration and deployment of commercial-grade automated watering networks.",
    image:
      "https://images.pexels.com/photos/3351909/pexels-photo-3351909.jpeg?auto=compress&cs=tinysrgb&w=1800",
    overview:
      "Commercial automated irrigation systems delivered for agricultural enterprises and high-end corporate grounds requiring reliable, resource-aware watering control.",
    challenge:
      "Wide landscaped areas required balanced coverage, reliable pressure and zoning that could respond to different planting and operational needs.",
    solution:
      "The project teams surveyed each site, coordinated pipe routes and flow controls, and commissioned automated watering zones designed to limit unnecessary resource use.",
    technologies: [
      "Flow-control systems",
      "Automated watering",
      "Irrigation zoning",
      "Piping networks",
    ],
    gallery: [
      "https://images.pexels.com/photos/3351909/pexels-photo-3351909.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1600&q=85",
    ],
    size: "wide",
  },
  {
    slug: "commercial-interior-fitouts-partitioning",
    title: "Commercial Interior Fit-Outs & Corporate Partitioning",
    sector: "Interior Design",
    country: "Kenya",
    city: "Urban commercial sites",
    year: "Completed",
    client: "Urban administrative & retail entities",
    budget: "Confidential",
    timeline: "Completed",
    keyDelivery:
      "Reorganized commercial interiors into acoustically controlled, well-lit professional environments.",
    scope:
      "Internal spatial reorganization, structural acoustic partitioning, lighting upgrades and modern professional architectural surface treatments.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=90",
    overview:
      "Commercial interior fit-outs completed for urban administrative and retail entities requiring modern spatial organization and professional finishes.",
    challenge:
      "Existing interiors needed improved zoning, acoustic separation and lighting while maintaining efficient movement through active commercial floorplates.",
    solution:
      "The fit-out works integrated revised spatial planning, acoustic partitions, upgraded lighting and coordinated architectural surface treatments into a cohesive professional environment.",
    technologies: [
      "Acoustic partitioning",
      "Lighting upgrades",
      "Space planning",
      "Architectural finishes",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    ],
    size: "wide",
  },
  {
    slug: "multi-site-corporate-landscaping-upkeep",
    title: "Multi-Site Corporate Landscaping & Upkeep",
    sector: "Landscaping",
    country: "Kenya",
    city: "Multiple sites",
    year: "Completed",
    client: "Private commercial enclaves & business parks",
    budget: "Confidential",
    timeline: "Ongoing portfolio delivery",
    keyDelivery: "Coordinated long-term upkeep across multi-acre commercial properties.",
    scope:
      "Multi-acre turf layout engineering, hardscape paving, stone walkway styling and ongoing structural gatehouse property management.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=90",
    overview:
      "A multi-site landscape and upkeep portfolio supporting the appearance, circulation and structural external assets of commercial enclaves and business parks.",
    challenge:
      "Different sites required a consistent property standard while accommodating varied turf, hardscape, access and gatehouse conditions.",
    solution:
      "Contell Africa coordinated repeatable maintenance plans with turf engineering, paving, stone walkway care and structural gatehouse management.",
    technologies: [
      "Portfolio maintenance",
      "Turf management",
      "Hardscape upkeep",
      "Gatehouse asset care",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    ],
    size: "tall",
  },
  {
    slug: "institutional-electrical-reticulation",
    title: "Institutional Electrical Reticulation & Low-Voltage Wiring",
    sector: "Electrical Design",
    country: "Kenya",
    city: "Regional facilities",
    year: "Completed",
    client: "Regional administrative & commercial facilities",
    budget: "Confidential",
    timeline: "Completed",
    keyDelivery: "Optimized high-capacity electrical and structured-cabling distribution.",
    scope:
      "High-capacity structured cabling, containment routing, indoor electrical-panel wiring and network optimization.",
    image: electricalImage,
    overview:
      "Institutional electrical-reticulation and low-voltage installations completed across regional administrative and commercial facilities.",
    challenge:
      "The facilities required safe containment and clear distribution routes for electrical and data services within operational interiors.",
    solution:
      "The works combined structured-cabling layouts, containment routing, indoor panel wiring and network optimization into maintainable institutional systems.",
    technologies: [
      "Electrical reticulation",
      "Structured cabling",
      "Panel wiring",
      "Containment systems",
    ],
    gallery: [
      electricalImage,
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1600&q=85",
    ],
    size: "square",
  },
  {
    slug: "regional-civil-road-upgrades",
    title: "Regional Civil Works & Auxiliary Road Upgrades",
    sector: "Construction",
    country: "Kenya",
    city: "Regional road networks",
    year: "Completed",
    client: "Local infrastructure networks",
    clientUrl: "https://kerra.go.ke/",
    budget: "Framework works",
    timeline: "Framework delivery",
    procurement: "KeRRA framework prequalification",
    keyDelivery: "Stabilized access routes, drainage assets and perimeter structures.",
    scope:
      "Road-drainage masonry, pavement repair, structural perimeter-wall builds and neighborhood access-pathway stabilization.",
    image: regionalRoadImage,
    overview:
      "Regional civil and auxiliary road works delivered within local infrastructure networks under KeRRA framework prequalification arrangements.",
    challenge:
      "Distributed sites required practical drainage, pavement and access interventions responsive to local road and boundary conditions.",
    solution:
      "Delivery combined road-drainage masonry, targeted pavement repairs, structural perimeter walls and stabilization of neighborhood access pathways.",
    technologies: [
      "Drainage masonry",
      "Pavement repair",
      "Perimeter structures",
      "Access stabilization",
    ],
    gallery: [regionalRoadImage, kcaaRoadImage, infrastructure],
    size: "wide",
  },
];

export type LeadershipMember = { name: string; role: string; bio: string; phone?: string };
export const LEADERSHIP: LeadershipMember[] = [
  {
    name: "Dr. Adaeze Okonkwo",
    role: "Group Chief Executive",
    bio: "Chartered civil engineer with 28 years across megaprojects in West and East Africa.",
    phone: "0114470441",
  },
  {
    name: "Marc Verwoerd",
    role: "Chief Operating Officer",
    bio: "Former MD of a tier-one European contractor, now leading operational excellence across Contel's 14 markets.",
    phone: "0768241871",
  },
  {
    name: "Linda Mboya",
    role: "Chief Engineering Officer",
    bio: "Structural specialist; led the design of three of Africa's ten tallest mixed-use towers.",
    phone: "0712208525",
  },
  {
    name: "Yusuf Al-Hassan",
    role: "Chief Financial Officer",
    bio: "Infrastructure finance leader with a background in DFI lending and concession structuring.",
  },
  {
    name: "Sarah Mokoena",
    role: "Chief Sustainability Officer",
    bio: "ESG strategist; architect of Contel's net-zero by 2040 roadmap.",
  },
  {
    name: "Tariq Salim",
    role: "Chief Technology Officer",
    bio: "BIM and digital-twin pioneer; runs Contel's Engineering Intelligence Lab.",
  },
];

export type Milestone = { year: string; title: string; body: string };
export const MILESTONES: Milestone[] = [
  {
    year: "1992",
    title: "Established in Kenya",
    body: "Contel begins as a Kenyan general contracting and civil engineering practice.",
  },
  {
    year: "2001",
    title: "Cross-border",
    body: "First international project — a 38 km dual carriageway in Ghana — marks Contel's pan-African ambition.",
  },
  {
    year: "2010",
    title: "Engineering Lab",
    body: "The Engineering Intelligence Lab opens, introducing BIM as a company-wide standard.",
  },
  {
    year: "2016",
    title: "1 million m²",
    body: "Cumulative completed floor area passes 1 million square metres across nine countries.",
  },
  {
    year: "2021",
    title: "Sustainability charter",
    body: "Contel commits to net-zero operations by 2040 with a third-party verified roadmap.",
  },
  {
    year: "2025",
    title: "Engineering Tomorrow",
    body: "Contel operates in 14 countries with 1,250 engineers and a continent-shaping portfolio.",
  },
];

export type WhyCard = { number: string; title: string; body: string };
export const WHY_CONTEL: WhyCard[] = [
  {
    number: "01",
    title: "Engineering Excellence",
    body: "An in-house engineering bench across structural, civil, MEP and geotechnical disciplines.",
  },
  {
    number: "02",
    title: "Quality Assurance",
    body: "ISO 9001 quality systems audited against international benchmarks at every stage gate.",
  },
  {
    number: "03",
    title: "Safety First",
    body: "Lost-time incident rate of 0.18 — among the lowest in African construction.",
  },
  {
    number: "04",
    title: "Certified Professionals",
    body: "Chartered engineers, PMP project managers and PRINCE2 practitioners on every project.",
  },
  {
    number: "05",
    title: "Timely Delivery",
    body: "97% of programmes delivered within contractual time across the last 60 months.",
  },
  {
    number: "06",
    title: "Sustainable Construction",
    body: "Embodied-carbon accounting on every project and a verified net-zero roadmap to 2040.",
  },
  {
    number: "07",
    title: "Innovative Solutions",
    body: "BIM Level 2 minimum, with digital twins and AI-assisted programme analytics.",
  },
  {
    number: "08",
    title: "Cost Efficiency",
    body: "Open-book commercial models and value-engineering studios that protect margin without compromising spec.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    body: "Listen, frame the brief, agree the success metrics.",
  },
  { step: "02", title: "Planning", body: "Feasibility, programme, risk, procurement strategy." },
  { step: "03", title: "Design", body: "Architecture and engineering converge in one model." },
  {
    step: "04",
    title: "Engineering",
    body: "Detailed analysis, specification, and constructability review.",
  },
  {
    step: "05",
    title: "Construction",
    body: "Lean delivery on site with daily field digital reporting.",
  },
  { step: "06", title: "Quality Control", body: "Independent inspection at each stage gate." },
  { step: "07", title: "Completion", body: "Soft landings, training, and operational readiness." },
  { step: "08", title: "Maintenance", body: "Whole-of-life FM with performance accountability." },
];

export type Testimonial = { quote: string; name: string; role: string; org: string };
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Contel didn't just build a tower — they engineered our market entry. Calm, technical, on time.",
    name: "Ifeoma Adeyemi",
    role: "CEO",
    org: "Axis Holdings Plc",
  },
  {
    quote: "The corridor opened six weeks early. That's what professional delivery looks like.",
    name: "Hon. Diallo Ndiaye",
    role: "Minister of Infrastructure",
    org: "Republic of Senegal",
  },
  {
    quote: "From day one their engineers behaved like part of our team. World class.",
    name: "Dr. Mireille Uwase",
    role: "Project Director",
    org: "Ministry of Health, Rwanda",
  },
];

export const COUNTRIES = [
  "Nigeria",
  "Ghana",
  "Senegal",
  "Côte d'Ivoire",
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "South Africa",
  "Mozambique",
  "Angola",
  "Morocco",
  "Egypt",
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  read: string;
  image: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "building-for-african-climate",
    category: "Engineering",
    title: "Building for the African climate, not against it",
    excerpt:
      "Why our specification stack starts with thermal mass, shading and ventilation — and how that compresses energy load by 40%.",
    body: "Most imported reference standards assume temperate conditions. Across Contel's 14 markets, design temperature, humidity profiles and dust regimes vary wildly. We open every project with a climate-first specification: thermal mass strategy, shading geometry tuned to local solar paths, and natural ventilation pathways modelled in CFD before mechanical sizing.",
    date: "March 18, 2025",
    read: "6 min read",
    image: residential,
  },
  {
    slug: "the-quiet-revolution-in-african-infrastructure",
    category: "Infrastructure",
    title: "The quiet revolution in African infrastructure finance",
    excerpt:
      "Blended finance and African-led DFIs are changing what contractors can deliver — and how risk is shared.",
    body: "A decade ago, large infrastructure programmes on the continent leaned almost exclusively on bilateral concessional finance. Today the stack is more sophisticated: African DFIs, pension capital, sovereign green bonds and blended structures combine to crowd in private contractors at scale.",
    date: "February 2, 2025",
    read: "8 min read",
    image: infrastructure,
  },
  {
    slug: "digital-twins-on-active-sites",
    category: "Innovation",
    title: "Digital twins are no longer a marketing artefact",
    excerpt:
      "Inside Contel's Engineering Intelligence Lab and the live twin running our Kigali hospital.",
    body: "When the model is the source of truth and field reality is sensored, programme delays surface days before they become commercial events. That's the operating thesis behind the Engineering Intelligence Lab.",
    date: "January 14, 2025",
    read: "5 min read",
    image: engineer,
  },
];

export const CERTS = ["ISO 9001", "ISO 14001", "ISO 45001", "LEED AP", "EDGE", "BREEAM", "IFC PS"];

export const OFFICES = [
  {
    city: "Lagos",
    country: "Nigeria",
    address: "12 Marina Avenue, Lagos Island",
    role: "Group HQ",
  },
  { city: "Nairobi", country: "Kenya", address: "Commercial St, Nairobi", role: "East Africa hub" },
  {
    city: "Johannesburg",
    country: "South Africa",
    address: "Sandton Central, JHB",
    role: "Southern Africa hub",
  },
  {
    city: "Dakar",
    country: "Senegal",
    address: "Plateau District, Dakar",
    role: "West Africa francophone",
  },
];
