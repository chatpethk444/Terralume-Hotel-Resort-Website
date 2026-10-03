# Technical Requirements Document (TRD)
**Project Name:** Terralume Hotel & Resort  
**Architecture:** Modern Web Application (Static-First to Fullstack Architecture)  

---

## 1. Tech Stack Overview

| Category | Technology | Reason for Choice |
| :--- | :--- | :--- |
| **Frontend Framework** | React / Next.js (App Router) หรือ HTML5/Vanilla JS | Next.js รองรับ SEO เยี่ยมยอด, Image Optimization และ SSR เหมาะกับงานโรงแรม |
| **Styling** | Tailwind CSS + Custom CSS Variables | จัดการ Typography และ Palette สี Earthy ตาม Design System ได้ยืดหยุ่น |
| **Icons** | Lucide React / SVG Minimal Outline Icons | ไอคอนสไตล์เส้นบาง (Thin Line) เข้ากับทิศทางความหรูหราของแบรนด์ |
| **Typography** | Google Fonts (`Playfair Display`, `Montserrat`) | โหลดผ่าน `next/font` หรือ `<link>` แบบ Async ป้องกัน layout shift |
| **Backend & API** | Node.js (Next.js Server Actions หรือ Express.js) | จัดการคำขอการจองและดึงข้อมูลห้องพักแบบ REST/Action |
| **Database** | PostgreSQL (Managed via Supabase หรือ Neon) + Prisma ORM | จัดเก็บข้อมูลห้องพัก การจอง และรีวิวอย่างเป็นระเบียบ |
| **Hosting & CDN** | Vercel / Cloudflare Pages | ให้ Latency ต่ำ และบริการ Edge Caching ทั่วโลก |

## 2. Non-Functional Requirements & Performance
- **Image Optimization:** 
  - รูปภาพทั้งหมดต้องแปลงเป็นฟอร์แมต WebP หรือ AVIF
  - ใช้เทคนิค Progressive Blur-up ขณะโหลดรูปภาพ
- **Mobile First & Responsive Breakpoints:**
  - Mobile: `< 640px`
  - Tablet: `640px - 1024px`
  - Desktop: `> 1024px`
- **Security:**
  - HTTPS บังคับใช้ทั้งหมด
  - ป้องกัน CSRF / XSS ในฟอร์มการส่งคำขอจอง
  - Sanitization ของ User Inputs
- **SEO & Social Share:**
  - OpenGraph Meta Tags (ภาพ Hero, สโลแกนโรงแรม)
  - Schema.org Structured Data (`Hotel`, `LodgingBusiness`)

## 3. Environment & Configuration
```env
NEXT_PUBLIC_SITE_URL=https://terralume.hotel.com
DATABASE_URL=postgresql://user:password@localhost:5432/terralume_db
BOOKING_API_KEY=your_secure_api_key
```