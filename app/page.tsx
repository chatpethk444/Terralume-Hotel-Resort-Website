"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import Experiences from "../components/Experiences";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

export default function Home() {
  const [booking, setBooking] = useState<{ open: boolean; room?: string }>({
    open: false,
  });
  const openBooking = (room?: string) => setBooking({ open: true, room });

  return (
    <>
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero />
        <Rooms onBook={openBooking} />
        <Experiences onReserve={() => openBooking()} />
        <Gallery />
      </main>
      <Footer onBook={() => openBooking()} />
      <BookingModal
        open={booking.open}
        initialRoom={booking.room}
        onClose={() => setBooking({ open: false })}
      />
    </>
  );
}
