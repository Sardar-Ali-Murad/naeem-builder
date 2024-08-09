const projectCards = [
  {
    id: 1,
    admin: {
      name: "Emily Watson",
      date: "15-05-2023",
      initial: "E",
    },
    imageSrc: "images/project-7.jpeg",
    type: ["house", "renovation"],
    name: "Modern Home Renovation",
    location: "Selly Oak, Birmingham, England - B29 6SN",
    details: {
      rooms: "3 BHK",
      bathrooms: "2",
      area: "1200sqft",
    },
    extraDetails: {
      image: "images/project-7.jpeg",
      title: "Modern Home Renovation",
      location: "Selly Oak, Birmingham, England - B29 6SN",
      owner: "Emily Watson",
      phone: "+44 7898 769063",
      date: "15-05-2023",
      siteType: "house",
      projectType: "renovation",
      description:
        "A comprehensive renovation project focusing on modernizing a 3 BHK home with state-of-the-art materials and technology.",
      amenities: [
        "Daily Clean-Up Service",
        "Quality Material Sourcing",
        "On-Site Safety Inspection",
      ],
      previousState: [
        { feature: "rooms", state: "Old wooden flooring" },
        { feature: "bathrooms", state: "Outdated fixtures" },
        { feature: "kitchen", state: "Lack of modern appliances" },
      ],
    },
  },
  {
    id: 2,
    admin: {
      name: "Oliver Smith",
      date: "20-06-2023",
      initial: "O",
    },
    imageSrc: "images/project-2.jpeg",
    type: ["apartment", "construction"],
    name: "Luxury Apartment Build",
    location: "Edgbaston, Birmingham, England - B16 9SL",
    details: {
      rooms: "5 BHK",
      bathrooms: "4",
      area: "2500sqft",
    },
    extraDetails: {
      image: "images/project-2.jpeg",
      title: "Luxury Apartment Build",
      location: "Edgbaston, Birmingham, England - B16 9SL",
      owner: "Oliver Smith",
      phone: "+44 7898 769064",
      date: "20-06-2023",
      siteType: "apartment",
      projectType: "construction",
      description:
        "A high-end apartment complex with premium finishes and modern amenities designed for luxury living.",
      amenities: [
        "24/7 Security",
        "High-Quality Construction Materials",
        "On-Site Project Management",
      ],
      previousState: [
        { feature: "land", state: "Vacant land" },
        { feature: "utilities", state: "No water or electricity supply" },
      ],
    },
  },
  {
    id: 3,
    admin: {
      name: "Sophia Johnson",
      date: "12-07-2023",
      initial: "S",
    },
    imageSrc: "images/project-3.jpeg",
    type: ["villa", "renovation"],
    name: "Classic Villa Restoration",
    location: "Harborne, Birmingham, England - B17 9LG",
    details: {
      rooms: "4 BHK",
      bathrooms: "3",
      area: "1800sqft",
    },
    extraDetails: {
      image: "images/project-3.jpeg",
      title: "Classic Villa Restoration",
      location: "Harborne, Birmingham, England - B17 9LG",
      owner: "Sophia Johnson",
      phone: "+44 7898 769065",
      date: "12-07-2023",
      siteType: "villa",
      projectType: "renovation",
      description:
        "Restoring a classic villa to its former glory with modern enhancements while preserving its historical character.",
      amenities: [
        "Historical Preservation Consulting",
        "Custom Carpentry",
        "Landscaping Services",
      ],
      previousState: [
        { feature: "roof", state: "Leaking roof" },
        { feature: "exterior", state: "Faded paint and damaged masonry" },
      ],
    },
  },
  {
    id: 4,
    admin: {
      name: "James Williams",
      date: "05-08-2024",
      initial: "J",
    },
    imageSrc: "images/project-4.jpeg",
    type: ["bungalow", "extension"],
    name: "Bungalow Extension",
    location: "Kings Heath, Birmingham, England - B14 7DB",
    details: {
      rooms: "2 BHK",
      bathrooms: "1",
      area: "900sqft",
    },
    extraDetails: {
      image: "images/project-4.jpeg",
      title: "Bungalow Extension",
      location: "Kings Heath, Birmingham, England - B14 7DB",
      owner: "James Williams",
      phone: "+44 7898 769066",
      date: "05-08-2023",
      siteType: "bungalow",
      projectType: "extension",
      description:
        "An extension project to add extra living space to a cozy bungalow, enhancing its functionality and value.",
      amenities: [
        "Foundation Work",
        "Custom Design",
        "Permitting and Compliance",
      ],
      previousState: [
        { feature: "living room", state: "Small living space" },
        { feature: "kitchen", state: "Outdated layout" },
      ],
    },
  },
  {
    id: 5,
    admin: {
      name: "Isabella Brown",
      date: "18-08-2024",
      initial: "I",
    },
    imageSrc: "images/project-6.jpeg",
    type: ["townhouse", "renovation"],
    name: "Townhouse Renovation",
    location: "Flat, 6 Walford Road, Birmingham, B11 INR",
    details: {
      rooms: "3 BHK",
      bathrooms: "2",
      area: "1100sqft",
    },
    extraDetails: {
      image: "images/project-6.jpeg",
      title: "Townhouse Renovation",
      location: "Flat, 6 Walford Road, Birmingham, B11 INR",
      owner: "Isabella Brown",
      phone: "+44 7898 769067",
      date: "18-08-2023",
      siteType: "townhouse",
      projectType: "renovation",
      description:
        "A renovation project aimed at modernizing an old townhouse while preserving its classic architectural features.",
      amenities: [
        "Custom Woodwork",
        "Energy-Efficient Windows",
        "Interior Design Consulting",
      ],
      previousState: [
        { feature: "windows", state: "Single-pane windows" },
        { feature: "insulation", state: "Poor insulation" },
      ],
    },
  },
  {
    id: 6,
    admin: {
      name: "Liam Davis",
      date: "25-08-2024",
      initial: "L",
    },
    imageSrc: "images/project-1.jpeg",
    type: ["commercial", "construction"],
    name: "Commercial Office Build",
    location: "Kingstanding, Birmingham, England - B44 9LS",
    details: {
      rooms: "10 Offices",
      bathrooms: "5",
      area: "4000sqft",
    },
    extraDetails: {
      image: "images/project-1.jpeg",
      title: "Commercial Office Build",
      location: "Kingstanding, Birmingham, England - B44 9LS",
      owner: "Liam Davis",
      phone: "+44 7898 769068",
      date: "25-08-2023",
      siteType: "commercial",
      projectType: "construction",
      description:
        "A large-scale commercial office building project designed to accommodate multiple businesses with modern amenities.",
      amenities: [
        "High-Speed Internet",
        "Energy-Efficient HVAC",
        "On-Site Cafeteria",
      ],
      previousState: [
        { feature: "land", state: "Industrial warehouse" },
        {
          feature: "utilities",
          state: "Outdated electrical and plumbing systems",
        },
      ],
    },
  },
];

export default projectCards;
