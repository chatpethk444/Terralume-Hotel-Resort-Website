"use client";

import { useState } from "react";
import Image from "next/image";
import { BedDouble, Waves, Maximize, Trees, X } from "lucide-react";
import { ROOMS, type Room } from "../data/content";
import { STR, type Lang } from "../data/i18n";
import Reveal from "./Reveal";
import useScrollLock from "../hooks/useScrollLock";

function ViewIcon({ room, className }: { room: Room; className?: string }) {
  const cls = className ?? "h-[18px] w-[18px] text-bark";
  if (room.viewIcon === "trees")
    return <Trees className={cls} strokeWidth={1.25} aria-hidden="true" />;
  return <Waves className={cls} strokeWidth={1.25} aria-hidden="true" />;
}

export default function Rooms({
  onBook,
  lang,
}: {
  onBook: (room: string) => void;
  lang: Lang;
}) {
  const t = STR[lang];
  const [selected, setSelected] = useState<Room | null>(null);
  useScrollLock(selected !== null);

  const text = (room: Room) => (lang === "th" ? room.th : room);

  return (
    <section id="rooms" className="scroll-mt-20 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-eyebrow text-terracotta">
            {t.rooms.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[28px] font-medium text-stone md:text-[36px]">
            {t.rooms.title}
          </h2>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-stone/80">
            {t.rooms.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ROOMS.map((room, i) => {
            const tx = text(room);
            return (
              <Reveal key={room.slug} delay={i * 120}>
                <article className="group flex h-full flex-col border border-sand/60 bg-white/40">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={85}
                      className="object-cover transition-transform duration-[2s] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[22px] font-medium leading-snug text-stone">
                      {room.name}
                    </h3>
                    <p className="mt-1 text-[13px] font-light italic text-stone/65">
                      {tx.tagline}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-sand/60 pt-4 text-[12px] font-medium text-stone">
                      <li className="flex items-center gap-1.5">
                        <BedDouble
                          className="h-4 w-4 text-bark"
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                        {tx.bed}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <ViewIcon
                          room={room}
                          className="h-4 w-4 text-bark"
                        />
                        {tx.view}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Maximize
                          className="h-4 w-4 text-bark"
                          strokeWidth={1.25}
                          aria-hidden="true"
                        />
                        {tx.size}
                      </li>
                    </ul>
                    <div className="mt-5 flex gap-3 pt-1">
                      <button
                        onClick={() => setSelected(room)}
                        className="flex-1 bg-bark px-4 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
                      >
                        {t.rooms.viewDetails}
                      </button>
                      <button
                        onClick={() => onBook(room.name)}
                        className="flex-1 border border-bark px-4 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-bark transition-colors hover:bg-bark hover:text-cream"
                      >
                        {t.rooms.bookNow}
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Room detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-stone/60 backdrop-blur-[2px] sm:items-center sm:p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} ${t.rooms.detailsOf}`}
        >
          <div
            className="modal-panel max-h-[90svh] w-full max-w-2xl overflow-y-auto overscroll-contain bg-cream"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={selected.image}
                alt={selected.alt}
                fill
                sizes="(max-width: 640px) 100vw, 672px"
                quality={85}
                className="object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label={t.rooms.closeDetails}
                className="absolute right-4 top-4 bg-stone/60 p-2 text-cream transition-colors hover:bg-stone"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[11px] font-medium uppercase tracking-eyebrow text-terracotta">
                {text(selected).tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-stone md:text-3xl">
                {selected.name}
              </h3>
              <p className="mt-3 text-[14px] font-light leading-relaxed text-stone/80">
                {text(selected).description}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-3 text-[13px] text-stone sm:grid-cols-3">
                {text(selected).features.map((f) => (
                  <li
                    key={f}
                    className="border border-sand/70 bg-white/50 px-3 py-2.5 text-center font-medium"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const name = selected.name;
                  setSelected(null);
                  onBook(name);
                }}
                className="mt-6 w-full bg-bark py-3.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
              >
                {t.rooms.bookThis}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
