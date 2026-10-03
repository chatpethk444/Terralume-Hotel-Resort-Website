# Step-by-Step Implementation Plan
**Methodology:** AI Vibecoding (Sprint-based Iterative Building)  
**Goal:** พัฒนาเว็บไซต์ Terralume Hotel จากเอกสาร Blueprint ทีละขั้นตอนอย่างมีประสิทธิภาพ

---

## Phase 1: Environment & Design Token Setup
- [ ] **Step 1.1:** Setup Project Folder และโครงสร้างไฟล์แยกส่วน
- [ ] **Step 1.2:** นำเข้า Font ครบทั้ง 2 ชุด:
  - `Playfair Display` (Headings)
  - `Montserrat` (Body & UI)
- [ ] **Step 1.3:** ประกาศตัวแปรสีใน CSS/Tailwind:
  - Primary Sand: `#E5C89F`
  - Terracotta: `#C37956`
  - Olive Gold: `#BE9244`
  - Deep Brown: `#654433`

## Phase 2: Navigation & Hero Section (Desktop & Mobile)
- [ ] **Step 2.1:** สร้าง Navigation Bar แบบโปร่งแสง ลอยตัวอยู่ด้านบน (Transparent Sticky Navbar)
- [ ] **Step 2.2:** วางเลย์เอาต์ Hero Banner ภาพมุมกว้างและสระน้ำตามภาพต้นฉบับ
- [ ] **Step 2.3:** ใส่ Typography ระดับ Display: "Nature's Beauty, Your Perfect Stay"
- [ ] **Step 2.4:** ใส่ปุ่ม "Explore Our Rooms" และตัวเลื่อนสไลด์ "01 02 03"
- [ ] **Step 2.5:** ปรับ Responsive หน้าจอ Mobile ด้วย Hamburger Menu

## Phase 3: Room Showcase Component (Deluxe Sea View)
- [ ] **Step 3.1:** สร้าง Component แสดงรายละเอียดห้องพัก
- [ ] **Step 3.2:** วางระบบ Grid: ภาพห้องพักหลักด้านซ้าย + รายละเอียดและภาพขนาดย่อมด้านขวา
- [ ] **Step 3.3:** ฝังชุดไอคอนมินิมอล 3 ตัว (King Bed, Ocean View, 35 m²) พร้อมป้ายข้อความ
- [ ] **Step 3.4:** ใส่ปุ่ม Action "View Details" สี Deep Brown สไตล์ Flat Luxury

## Phase 4: Experiences Section & Mood Collage
- [ ] **Step 4.1:** สร้างหมวดหมู่ประสบการณ์ "More Than a Stay"
- [ ] **Step 4.2:** สร้างการ์ดภาพ 3 คอลัมน์ (Wellness, Local Culture, Adventure)
- [ ] **Step 4.3:** เพิ่มส่วนภาพจัดวางแบบ Mood & Inspiration Collage (มุมขวาล่างของบอร์ด)

## Phase 5: Interaction, Micro-animations & Quality Audit
- [ ] **Step 5.1:** ใส่ Transition และ Smooth Scroll เมื่อคลิกเลือกเมนู
- [ ] **Step 5.2:** ทำฟังก์ชัน Modal เปิดหน้าต่าง Quick Booking เมื่อกด "Book Now"
- [ ] **Step 5.3:** ตรวจสอบความถูกต้องของสัดส่วน, ระยะห่าง (Padding/Margin), และค่าสีเทียบกับภาพบอร์ด 100%