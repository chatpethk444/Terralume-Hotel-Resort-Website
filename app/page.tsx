"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import Experiences from "../components/Experiences";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import type { Lang } from "../data/i18n";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [booking, setBooking] = useState<{ open: boolean; room?: string }>({
    open: false,
  });
  const openBooking = (room?: string) => setBooking({ open: true, room });

  useEffect(() => {
    document.documentElement.lang = lang === "th" ? "th" : "en";
  }, [lang]);

  return (
    <>
      <Navbar onBook={() => openBooking()} lang={lang} onLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Rooms onBook={openBooking} lang={lang} />
        <Experiences onReserve={() => openBooking()} lang={lang} />
        <Gallery lang={lang} />
      </main>
      <Footer onBook={() => openBooking()} lang={lang} />
      <BookingModal
        open={booking.open}
        initialRoom={booking.room}
        onClose={() => setBooking({ open: false })}
        lang={lang}
      />
    </>
  );
}
