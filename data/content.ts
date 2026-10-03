export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bed: string;
  view: string;
  viewIcon: "waves" | "trees";
  size: string;
  image: string;
  alt: string;
  features: string[];
};

export const ROOMS: Room[] = [
  {
    slug: "deluxe-sea-view",
    name: "Deluxe Sea View Room",
    tagline: "Wake up above the water",
    description:
      "Floor-to-ceiling glass opens onto a private terrace above the water. Hand-finished stone walls keep the room cool and quiet; mornings arrive with salt air and soft light. Made for slow wake-ups and long, unhurried evenings.",
    bed: "King Bed",
    view: "Ocean View",
    viewIcon: "waves",
    size: "35 m²",
    image: "/images/rooms-main.webp",
    alt: "Deluxe Sea View Room with panoramic ocean view",
    features: [
      "King Bed",
      "Ocean View",
      "35 m²",
      "Private Terrace",
      "Rain Shower",
      "Daily Housekeeping",
    ],
  },
  {
    slug: "terrace-pool-suite",
    name: "Terrace Pool Suite",
    tagline: "Long days on your private terrace",
    description:
      "A generous suite that lives outdoors as much as in. Lounge on the terrace with the sea in front of you, dine as the light turns gold, and fall asleep to the sound of water. Our most requested room for anniversaries.",
    bed: "King Bed",
    view: "Panoramic Sea View",
    viewIcon: "waves",
    size: "48 m²",
    image: "/images/room2.webp",
    alt: "Terrace Pool Suite bedroom opening onto a sea-view terrace",
    features: [
      "King Bed",
      "Sea-view Terrace",
      "48 m²",
      "Outdoor Lounge",
      "Rain Shower",
      "Evening Turndown",
    ],
  },
  {
    slug: "garden-pavilion",
    name: "Garden Pavilion Room",
    tagline: "Quiet green, soft light",
    description:
      "Tucked into the olive garden, this pavilion room trades horizon for greenery. Clay pottery, sage linen, and a courtyard made for reading. The calmest sleep on the property, guests say.",
    bed: "Queen Bed",
    view: "Garden Courtyard",
    viewIcon: "trees",
    size: "32 m²",
    image: "/images/room3.webp",
    alt: "Garden Pavilion Room opening onto an olive courtyard",
    features: [
      "Queen Bed",
      "Garden Courtyard",
      "32 m²",
      "Olive Trees",
      "Rain Shower",
      "Daily Housekeeping",
    ],
  },
];

export type Experience = {
  id: string;
  category: string;
  title: string;
  text: string;
  schedule: string;
  image: string;
  alt: string;
  program: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "wellness",
    category: "Wellness",
    title: "Sunrise Yoga & Meditation",
    text: "Salute the sun above the water, then sit still with it. Mats, tea, and silence provided.",
    schedule: "Daily 7:00 · Terrace Shala",
    image: "/images/yoga-card.webp",
    alt: "Woman meditating on a terrace above the sea at sunrise",
    program: [
      "Sunrise yoga — 60 minutes, all levels",
      "Guided meditation by the water",
      "Herbal tea ritual to close",
    ],
  },
  {
    id: "culture",
    category: "Local Culture",
    title: "Coastal Culinary Journey",
    text: "The day's catch, local wine, and stories from the hosts who grew up on this bay.",
    schedule: "Nightly · Bay Terrace",
    image: "/images/dining-card.webp",
    alt: "Candlelit seaside dinner overlooking the bay",
    program: [
      "Candlelit dinner above the bay",
      "Menu built on the local catch",
      "Evening with local hosts",
    ],
  },
  {
    id: "adventure",
    category: "Adventure",
    title: "Island Sailing",
    text: "A wooden boat, hidden coves, and a guide who reads the sea like family history.",
    schedule: "Daily 9:00 & 16:00 · Private Cove",
    image: "/images/sailing-card.webp",
    alt: "Traditional wooden sailboat gliding past rocky coves",
    program: [
      "Half-day sail to hidden coves",
      "Swim stops in clear water",
      "Sunset return with light bites",
    ],
  },
];

export const WISHLIST_KEY = "terralume-wishlist";
