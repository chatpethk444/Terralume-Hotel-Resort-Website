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
  th: {
    tagline: string;
    description: string;
    bed: string;
    view: string;
    size: string;
    features: string[];
  };
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
    th: {
      tagline: "ตื่นขึ้นเหนือผืนน้ำ",
      description:
        "กระจกบานใหญ่จากพื้นจรดเพดานเปิดสู่ระเบียงส่วนตัวเหนือทะเล ผนังหินขัดมือเก็บความเย็นและความเงียบ ยามเช้ามาพร้อมกลิ่นไอเค็มและแสงอ่อน เหมาะกับการตื่นช้าๆ และค่ำคืนที่ไม่เร่งรีบ",
      bed: "เตียงคิง",
      view: "วิวทะเล",
      size: "35 ตร.ม.",
      features: [
        "เตียงคิง",
        "วิวทะเล",
        "35 ตร.ม.",
        "ระเบียงส่วนตัว",
        "ฝักบัวเรนชาวเวอร์",
        "ทำความสะอาดรายวัน",
      ],
    },
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
    th: {
      tagline: "วันยาวนานบนระเบียงส่วนตัว",
      description:
        "สวีทห้องกว้างที่ใช้ชีวิตกลางแจ้งได้มากพอๆ กับในห้อง พักผ่อนบนระเบียงที่มีทะเลอยู่เบื้องหน้า รับประทานอาหารยามแสงทอง และหลับไปพร้อมเสียงน้ำ ห้องที่ถูกขอมากที่สุดสำหรับวันครบรอบ",
      bed: "เตียงคิง",
      view: "วิวทะเลพาโนรามา",
      size: "48 ตร.ม.",
      features: [
        "เตียงคิง",
        "ระเบียงวิวทะเล",
        "48 ตร.ม.",
        "มุมพักผ่อนกลางแจ้ง",
        "ฝักบัวเรนชาวเวอร์",
        "บริการเตรียมห้องยามค่ำ",
      ],
    },
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
    th: {
      tagline: "ความเขียวอันเงียบสงบ แสงอ่อนโยน",
      description:
        "ห้องศาลาซ่อนตัวในสวนมะกอก แลกเส้นขอบฟ้ากับความเขียวขจี เครื่องปั้นดินเผา ผ้าลินินสีเสจ และลานสำหรับอ่านหนังสือ แขกหลายท่านบอกว่าหลับสบายที่สุดในรีสอร์ท",
      bed: "เตียงควีน",
      view: "ลานสวน",
      size: "32 ตร.ม.",
      features: [
        "เตียงควีน",
        "ลานสวน",
        "32 ตร.ม.",
        "ต้นมะกอก",
        "ฝักบัวเรนชาวเวอร์",
        "ทำความสะอาดรายวัน",
      ],
    },
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
  th: {
    category: string;
    title: string;
    text: string;
    schedule: string;
    program: string[];
  };
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
    th: {
      category: "เวลเนส",
      title: "โยคะรับอรุณและสมาธิ",
      text: "ไหว้พระอาทิตย์เหนือผืนน้ำ แล้วนั่งนิ่งไปกับมัน เสื่อ ชา และความเงียบ เราจัดเตรียมไว้ให้",
      schedule: "ทุกวัน 7:00 · ศาลา Terrace",
      program: [
        "โยคะรับอรุณ 60 นาที ทุกระดับ",
        "สมาธิพร้อมผู้นำริมน้ำ",
        "พิธีชาสมุนไพรปิดท้าย",
      ],
    },
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
    th: {
      category: "วัฒนธรรมท้องถิ่น",
      title: "เส้นทางอาหารชายฝั่ง",
      text: "วัตถุดิบสดจากทะเล ไวน์ท้องถิ่น และเรื่องเล่าจากเจ้าบ้านผู้เติบโตมาบนอ่าวนี้",
      schedule: "ทุกค่ำ · ระเบียง Bay Terrace",
      program: [
        "อาหารค่ำใต้แสงเทียนเหนืออ่าว",
        "เมนูจากวัตถุดิบท้องถิ่นประจำวัน",
        "ค่ำคืนกับเจ้าบ้านท้องถิ่น",
      ],
    },
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
    th: {
      category: "ผจญภัย",
      title: "ล่องเรือใบรอบเกาะ",
      text: "เรือไม้ อ่าวลับ และไกด์ผู้อ่านทะเลออกเหมือนเรื่องราวของครอบครัว",
      schedule: "ทุกวัน 9:00 และ 16:00 · อ่าวส่วนตัว",
      program: [
        "ล่องเรือครึ่งวันสู่อ่าวลับ",
        "แวะว่ายน้ำในน้ำใส",
        "กลับยามพระอาทิตย์ตกพร้อมของว่าง",
      ],
    },
  },
];

export const WISHLIST_KEY = "terralume-wishlist";
