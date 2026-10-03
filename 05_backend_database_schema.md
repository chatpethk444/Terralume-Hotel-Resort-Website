# Backend & Database Schema
**Project:** Terralume Hotel & Resort  
**Database Engine:** PostgreSQL (Compatible with Prisma / Supabase)  

---

## 1. Entity Relationship Overview
```text
[Rooms] 1 ──── < [RoomAmenities] > ──── 1 [Amenities]
   │
   └────────── < [Bookings]
                   │
                   └─────── 1 [Guests]

[Experiences] (Independent Content Entity)
```

## 2. Detailed Schema Definitions

### Table: `rooms`
เก็บบัญชีรายชื่อห้องพักและรายละเอียดพื้นฐาน
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | PK, Default `gen_random_uuid()` | รหัสประจำตัวห้องพัก |
| `slug` | `VARCHAR(100)` | UNIQUE, NOT NULL | URL-friendly slug เช่น `deluxe-sea-view` |
| `name` | `VARCHAR(150)` | NOT NULL | ชื่อห้อง เช่น `Deluxe Sea View Room` |
| `tagline` | `VARCHAR(255)` | NULLABLE | สโลแกนสั้น เช่น `Wake up to ocean views` |
| `description` | `TEXT` | NOT NULL | คำบรรยายห้องพักฉบับเต็ม |
| `size_sqm` | `INTEGER` | NOT NULL | ขนาดห้อง (ตารางเมตร เช่น 35) |
| `bed_type` | `VARCHAR(50)` | NOT NULL | ประเภทเตียง เช่น `King Bed` |
| `view_type` | `VARCHAR(50)` | NOT NULL | ประเภทวิว เช่น `Ocean View` |
| `base_price` | `NUMERIC(10,2)`| NOT NULL | ราคาเริ่มต้นต่อคืน |
| `cover_image` | `TEXT` | NOT NULL | URL ภาพหน้าปกห้องพัก |
| `gallery` | `TEXT[]` | DEFAULT `'{}'` | อาร์เรย์ของรูปภาพห้องพักเพิ่มเติม |
| `created_at` | `TIMESTAMPTZ` | DEFAULT `NOW()` | วันที่บันทึกข้อมูล |

### Table: `experiences`
เก็บบันทึกข้อมูลกิจกรรมพิเศษ (Wellness, Local Culture, Adventure)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | PK, Default `gen_random_uuid()` | รหัสกิจกรรม |
| `category` | `VARCHAR(50)` | NOT NULL | หมวดหมู่ (`wellness`, `culture`, `adventure`) |
| `title` | `VARCHAR(150)` | NOT NULL | ชื่อกิจกรรม เช่น `Sunrise Yoga Session` |
| `description` | `TEXT` | NOT NULL | รายละเอียดกิจกรรม |
| `image_url` | `TEXT` | NOT NULL | URL รูปภาพประกอบ |
| `is_featured` | `BOOLEAN` | DEFAULT `true` | แสดงในหน้าแรกหรือไม่ |

### Table: `bookings`
เก็บบันทึกข้อมูลการจองห้องพัก
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `UUID` | PK, Default `gen_random_uuid()` | รหัสการจอง |
| `room_id` | `UUID` | FK -> `rooms(id)` | อ้างอิงห้องพักที่จอง |
| `guest_name` | `VARCHAR(150)` | NOT NULL | ชื่อ-นามสกุล ผู้เข้าพัก |
| `guest_email` | `VARCHAR(150)` | NOT NULL | อีเมลติดต่อ |
| `guest_phone` | `VARCHAR(30)` | NOT NULL | เบอร์โทรศัพท์ |
| `check_in` | `DATE` | NOT NULL | วันที่เดินทางเข้าพัก |
| `check_out` | `DATE` | NOT NULL | วันที่สิ้นสุดการเข้าพัก |
| `guests_count` | `INTEGER` | DEFAULT 2 | จำนวนผู้เข้าพัก |
| `total_price` | `NUMERIC(10,2)`| NOT NULL | ราคาสุทธิ |
| `status` | `VARCHAR(30)` | DEFAULT `'pending'` | สถานะ: `pending`, `confirmed`, `cancelled` |
| `created_at` | `TIMESTAMPTZ` | DEFAULT `NOW()` | เวลาที่ทำรายการ |

## 3. SQL Migration Snippet (DDL)
```sql
CREATE TABLE rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    size_sqm INT NOT NULL,
    bed_type VARCHAR(50) NOT NULL,
    view_type VARCHAR(50) NOT NULL,
    base_price NUMERIC(10,2) NOT NULL,
    cover_image TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```