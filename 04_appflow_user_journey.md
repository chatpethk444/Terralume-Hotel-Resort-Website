# Appflow & User Journey Map
**Project:** Terralume Hotel & Resort  

---

## 1. Overall Sitemap
```text
[Terralume Home]
   ├── 01. Hero Banner (Explore / Slow Down)
   ├── 02. About & Philosophy (Authentic Stays)
   ├── 03. Rooms & Suites (Room Highlights & Details Modal)
   ├── 04. Experiences (Wellness, Culture, Adventure)
   ├── 05. Gallery & Mood (Visuals)
   └── 06. Booking Engine / Drawer
```

## 2. Detailed Step-by-Step User Flow

### Flow A: การสำรวจและจองห้องพัก (Discovery to Booking)
1. **User Land on Page:** ผู้ใช้เปิดหน้าเว็บ พบ Hero Section โหลดพร้อมเอฟเฟกต์ Fade-in นุ่มนวล
2. **Scroll to Discover:** ผู้ใช้เลื่อนหน้าจอผ่านภาพบรรยากาศห้องพัก พบ `Deluxe Sea View Room`
3. **Inspect Room Details:** 
   - ผู้ใช้คลิกปุ่ม `View Details`
   - ระบบเปิดหน้าต่าง Modal หรือเลื่อนไปยังรายละเอียด พร้อมแสดง Amenities (King Bed, 35 m², Ocean View)
4. **Trigger Booking:**
   - ผู้ใช้คลิกปุ่ม `Book Now` (จาก Header หรือจากการ์ดห้องพัก)
   - หน้าต่าง Booking Flow ปรากฏขึ้นมาให้เลือก:
     - Check-in & Check-out Date
     - จำนวนผู้เข้าพัก (Adults, Children)
     - ตัวเลือกประเภทห้อง
5. **Confirmation Step:** ผู้ใช้กรอกข้อมูลส่วนตัว > กดยืนยันคำขอการจอง > แสดงหน้ารับข้อมูลสำเร็จพร้อมหมายเลขอ้างอิง

### Flow B: การสำรวจหมวด Experiences (กิจกรรม)
1. **Explore Section:** ผู้ใช้เลื่อนมาถึงส่วน `More Than a Stay`
2. **Category Selection:** เลือกหมวดหมู่ที่สนใจ (Wellness / Local Culture / Adventure)
3. **Detail View:** แสดงโปรแกรมกิจกรรมสั้นๆ เช่น Sunrise Yoga, Local Culinary
4. **Action:** มีปุ่มติดต่อจองแพ็กเกจล่วงหน้าหรือบันทึกเป็น Wishlist

### Flow C: Mobile User Navigation
1. ผู้ใช้เปิดผ่านสมาร์ตโฟน
2. แตะปุ่ม Hamburger Icon (`☰`)
3. เมนู Full-screen Drawer สี Earthy Tone เปิดออกอย่างนุ่มนวล
4. สามารถกดสลับดูหน้าห้องพัก หรือกดปุ่ม `Book Now` เด่นชัดด้านล่างสุดของจอได้ทันที