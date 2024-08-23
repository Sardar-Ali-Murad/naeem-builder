const projectCards = [
  {
    id: 1,
    admin: {
      name: "Emily Watson",
      date: "15-05-2023",
      initial: "E",
    },
    imageSrc: "images/listing/1.jpg",
    type: ["house", "renovation"],
    name: "Complete Home Renovation",
    location: "Selly Oak, Birmingham, England - B29 6SN",
    details: {
      rooms: "3 BHK",
      bathrooms: "2",
      area: "1200sqft",
    },
    extraDetails: {
      image: "images/listing/1.jpg",
      title: "Complete Home Renovation",
      location: "Selly Oak, Birmingham, England - B29 6SN",
      owner: "Emily Watson",
      phone: "+44 7898 769063",
      date: "15-05-2023",
      siteType: "house",
      projectType: "renovation",
      description:
        "A comprehensive renovation project aimed at transforming an outdated 3 BHK home into a modern, stylish living space.",
      amenities: [
        "Custom Carpentry Work",
        "High-Quality Paint Finishes",
        "Energy-Efficient Upgrades",
      ],
      previousState: [
        { feature: "rooms", state: "Worn-out flooring and walls" },
        { feature: "bathrooms", state: "Outdated fixtures and plumbing" },
        { feature: "kitchen", state: "Old cabinetry and appliances" },
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
    imageSrc: "images/listing/2.jpeg",
    type: ["roof", "renovation"],
    name: "Roof Renovation and Carpentry",
    location: "Edgbaston, Birmingham, England - B16 9SL",
    details: {
      rooms: "N/A",
      bathrooms: "N/A",
      area: "N/A",
    },
    extraDetails: {
      image: "images/listing/2.jpeg",
      title: "Roof Renovation and Carpentry",
      location: "Edgbaston, Birmingham, England - B16 9SL",
      owner: "Oliver Smith",
      phone: "+44 7898 769064",
      date: "20-06-2023",
      siteType: "roof",
      projectType: "renovation",
      description:
        "A detailed renovation project focusing on restoring the roof structure with high-quality carpentry and weatherproofing.",
      amenities: [
        "High-Grade Roofing Materials",
        "Custom Roof Carpentry",
        "Weatherproof Coating",
      ],
      previousState: [
        { feature: "roof", state: "Leaking and damaged shingles" },
        { feature: "structure", state: "Weak roof trusses" },
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
    imageSrc: "images/listing/3.jpg",
    type: ["garden", "landscaping"],
    name: "Garden Landscaping & Tree Cutting",
    location: "Harborne, Birmingham, England - B17 9LG",
    details: {
      rooms: "N/A",
      bathrooms: "N/A",
      area: "1500sqft",
    },
    extraDetails: {
      image: "images/listing/3.jpg",
      title: "Garden Landscaping and Tree Cutting",
      location: "Harborne, Birmingham, England - B17 9LG",
      owner: "Sophia Johnson",
      phone: "+44 7898 769065",
      date: "12-07-2023",
      siteType: "garden",
      projectType: "landscaping",
      description:
        "A project focused on revitalizing a garden space, including professional tree cutting and custom landscaping.",
      amenities: [
        "Expert Tree Removal",
        "Custom Garden Design",
        "Soil and Turf Preparation",
      ],
      previousState: [
        { feature: "trees", state: "Overgrown and unmanageable" },
        { feature: "lawn", state: "Patchy and uneven" },
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
    imageSrc: "images/listing/4.jpg",
    type: ["interior", "painting"],
    name: "Interior Painting and Finishing",
    location: "Kings Heath, Birmingham, England - B14 7DB",
    details: {
      rooms: "2 BHK",
      bathrooms: "1",
      area: "900sqft",
    },
    extraDetails: {
      image: "images/listing/4.jpg",
      title: "Interior Painting and Finishing",
      location: "Kings Heath, Birmingham, England - B14 7DB",
      owner: "James Williams",
      phone: "+44 7898 769066",
      date: "05-08-2023",
      siteType: "interior",
      projectType: "painting",
      description:
        "An interior painting project designed to refresh living spaces with high-quality paint and detailed finishing work.",
      amenities: [
        "Custom Paint Selection",
        "Detailed Finishing",
        "Odor-Free Paint Options",
      ],
      previousState: [
        { feature: "walls", state: "Faded and peeling paint" },
        { feature: "ceilings", state: "Stained and cracked surfaces" },
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
    imageSrc: "images/listing/5.webp",
    type: ["woodwork", "customization"],
    name: "Custom Woodwork and Furniture",
    location: "Flat, 6 Walford Road, Birmingham, B11 INR",
    details: {
      rooms: "3 BHK",
      bathrooms: "2",
      area: "1100sqft",
    },
    extraDetails: {
      image: "images/listing/5.webp",
      title: "Custom Woodwork and Furniture",
      location: "Flat, 6 Walford Road, Birmingham, B11 INR",
      owner: "Isabella Brown",
      phone: "+44 7898 769067",
      date: "18-08-2023",
      siteType: "interior",
      projectType: "woodwork",
      description:
        "A project focusing on custom woodwork, including bespoke furniture and cabinetry for a 3 BHK home.",
      amenities: [
        "Custom Furniture Design",
        "High-Quality Wood Materials",
        "Precision Craftsmanship",
      ],
      previousState: [
        { feature: "furniture", state: "Outdated and worn furniture" },
        { feature: "cabinets", state: "Basic and uninspired design" },
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
    imageSrc: "images/listing/6.jpg",
    type: ["commercial", "construction"],
    name: "Commercial Office Renovation",
    location: "Kingstanding, Birmingham, England - B44",
    details: {
      rooms: "10 Offices",
      bathrooms: "5",
      area: "4000sqft",
    },
    extraDetails: {
      image: "images/listing/6.jpg",
      title: "Commercial Office Renovation",
      location: "Kingstanding, Birmingham, England - B44",
      owner: "Liam Davis",
      phone: "+44 7898 769068",
      date: "25-08-2023",
      siteType: "commercial",
      projectType: "renovation",
      description:
        "A major renovation project for a commercial office space, incorporating modern design elements and improved functionality.",
      amenities: [
        "Open-Plan Office Design",
        "Energy-Efficient Lighting",
        "Modern Breakout Areas",
      ],
      previousState: [
        { feature: "layout", state: "Outdated office layout" },
        {
          feature: "utilities",
          state: "Old electrical and plumbing systems",
        },
      ],
    },
  },
];

export default projectCards;
