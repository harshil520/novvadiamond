// ─── Novva Diamonds — Site Configuration ───
// Change these values to configure the site.
// Feature flags, contact info, and branding all live here.

export const siteConfig = {
  name: "Novva Diamonds",
  tagline: "Certified Brilliance. Delivered Worldwide.",
  description:
    "Premium certified loose diamonds — Natural & Lab-Grown — from Surat, India. GIA & IGI certified. Serving buyers in USA, Australia, Canada, Europe, and Kazakhstan.",
  url: "https://novvadiamonds.com",

  // ─── Contact ───
  whatsapp: {
    number: "+917211174478", // Replace with actual WhatsApp business number
    defaultMessage:
      "Hi Novva Diamonds! I'm interested in learning more about your diamond collection.",
  },
  email: "novvadiamonds@gmail.com",
  address: {
    street: "Surat Diamond Bourse",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    zip: "395002",
    full: "Surat Diamond Bourse, Surat, Gujarat 395002, India",
  },
  phone: "+91 72111 74478",
  web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Get a free key from https://web3forms.com

  // ─── Social Links ───
  social: {
    instagram: "https://instagram.com/novvadiamonds",
    facebook: "https://facebook.com/novvadiamonds",
    linkedin: "https://linkedin.com/company/novvadiamonds",
  },

  // ─── Feature Flags ───
  features: {
    showJewelry: false, // Set to true to activate the Jewelry section
    showLanguageSelector: false, // Future: Spanish & Portuguese
  },

  // ─── Supported Currencies ───
  currencies: [
    { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
    { code: "INR", symbol: "₹", name: "Indian Rupee", flag: "🇮🇳" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar", flag: "🇨🇦" },
    { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
    { code: "KZT", symbol: "₸", name: "Kazakhstani Tenge", flag: "🇰🇿" },
  ],

  // ─── Diamond Shapes ───
  shapes: [
    "Round",
    "Oval",
    "Pear",
    "Marquise",
    "Emerald",
    "Princess",
    "Cushion",
    "Radiant",
    "Asscher",
    "Heart",
  ] as const,

  // ─── Grading Scales ───
  cutGrades: ["Excellent", "Very Good", "Good"] as const,
  colorGrades: ["D", "E", "F", "G", "H", "I", "J"] as const,
  clarityGrades: [
    "FL",
    "IF",
    "VVS1",
    "VVS2",
    "VS1",
    "VS2",
    "SI1",
    "SI2",
  ] as const,
  origins: ["Natural", "Lab-Grown"] as const,
  certifications: ["GIA", "IGI"] as const,
} as const;

// ─── Type Exports ───
export type DiamondShape = (typeof siteConfig.shapes)[number];
export type CutGrade = (typeof siteConfig.cutGrades)[number];
export type ColorGrade = (typeof siteConfig.colorGrades)[number];
export type ClarityGrade = (typeof siteConfig.clarityGrades)[number];
export type Origin = (typeof siteConfig.origins)[number];
export type Certification = (typeof siteConfig.certifications)[number];

export interface Diamond {
  id: string;
  shape: DiamondShape;
  carat: number;
  cut: CutGrade;
  color: ColorGrade;
  clarity: ClarityGrade;
  mmSize: string;
  certification: Certification;
  certNumber: string;
  origin: Origin;
  images: string[];
  video?: string;
  featured: boolean;
}

// ─── WhatsApp Helpers ───
export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encoded}`;
}

export function getDiamondWhatsAppMessage(diamond: Diamond): string {
  return `Hi, I'm interested in this diamond from Novva Diamonds:

Shape: ${diamond.shape}
Carat: ${diamond.carat}ct
Cut: ${diamond.cut}
Color: ${diamond.color}
Clarity: ${diamond.clarity}
Size: ${diamond.mmSize}
Certification: ${diamond.certification}
Origin: ${diamond.origin}

Please share today's best price. Thank you!`;
}

export function getDiamondWhatsAppLink(diamond: Diamond): string {
  return getWhatsAppLink(getDiamondWhatsAppMessage(diamond));
}
