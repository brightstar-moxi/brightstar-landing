// app/constants/templates.ts

// export const TEMPLATE = [
//   { id: "modern", name: "Modern" },
//   { id: "minimal", name: "Minimal" },
//   { id: "professional", name: "Professional", premium: true },
// ];


// export const TEMPLATES = [
//   {
//     id: "modern",
//     name: "Modern",
//     image: "/templates/modern.png",
//   },
//   {
//     id: "minimal",
//     name: "Minimal",
//     image: "/templates/minimal.png",
//   },
//   {
//     id: "professional",
//     name: "Professional",
//     image: "/templates/professional.png",
//     premium: true,
//   },
// ];


export const TEMPLATES = [
  {
    category: "modern",
    designs: [
      {
        id: "modern-blue",
        name: "Modern Blue",
        preview: "/templates/modern-blue.png",
      },
      {
        id: "modern-dark",
        name: "Modern Dark",
        preview: "/templates/modern-dark.png",
      },
      {
        id: "modern-clean",
        name: "Modern Clean",
        preview: "/templates/modern-clean.png",
      },
    ],
  },

  {
    category: "minimal",
    designs: [
      {
        id: "minimal-white",
        name: "Minimal White",
        preview: "/templates/minimal-white.png",
      },
      {
        id: "minimal-gray",
        name: "Minimal Gray",
        preview: "/templates/minimal-gray.png",
      },
    ],
  },

  {
    category: "professional",
    designs: [
      {
        id: "professional-executive",
        name: "Executive",
        preview: "/templates/professional-executive.png",
      },
      {
        id: "professional-corporate",
        name: "Corporate",
        preview: "/templates/professional-corporate.png",
      },
    ],
  },
];