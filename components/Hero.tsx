"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { STR, type Lang } from "../data/i18n";

const SLIDES = [
  {
    desktop: "/images/hero-2x.webp",
    mobile: "/images/hero-mobile.webp",
    alt: "Infinity pool terrace over the sea at sunset",
  },
  {
    desktop: "/images/terrace-2x.webp",
    mobile: "/images/terrace-mobile.webp",
    alt: "Daybed terrace with infinity pool above the caldera",
  },
  {
    desktop: "/images/roomwide.webp",
    mobile: "/images/roombed-mobile.webp",
    alt: "Deluxe Sea View Room opening onto the ocean",
  },
];

export default function Hero({ lang }: { lang: Lang }) {
  const t = STR[lang];
  const [active, setActive] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));

  const go = useCallback(
    (i: number) => {
      const n = ((i % SLIDES.length) + SLIDES.length) % SLIDES.length;
      setVisited((v) => new Set(v).add(n));
      setActive(n);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => {
        const n = (a + 1) % SLIDES.length;
        setVisited((v) => new Set(v).add(n));
        return n;
      });
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center">
      {/* Crossfading backgrounds — art-directed per breakpoint.
          Slide images mount on first visit so initial load is slide 1 only. */}
      {SLIDES.map((s, i) => (
        <div
          key={s.desktop}
          className="hero-slide absolute inset-0"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          {i === active || visited.has(i) ? (
            <>
              {/* Desktop 16:9 */}
              <div className="absolute inset-0 hidden overflow-hidden md:block">
                <div
                  className={`absolute inset-0 ${i === active ? "kenburns" : ""}`}
                >
                  <Image
                    src={s.desktop}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    quality={90}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Mobile portrait crop */}
              <div className="absolute inset-0 overflow-hidden md:hidden">
                <div
                  className={`absolute inset-0 ${i === active ? "kenburns" : ""}`}
                >
                  <Image
                    src={s.mobile}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    quality={90}
                    className="object-cover"
                  />
                </div>
              </div>
            </>
          ) : null}
        </div>
      ))}
      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone/60 via-stone/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone/40 to-transparent" />

      {/* Copy — left aligned per board */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 md:px-8">
        <div className="max-w-xl">
          <p className="text-[12px] font-medium uppercase tracking-eyebrow text-sand">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[36px] font-medium leading-[1.12] text-cream md:text-[56px]">
            {t.hero.titleA}
            <br />
            {t.hero.titleB}
          </h1>
          <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-cream/85 md:text-base">
            {t.hero.sub}
          </p>
          <a
            href="#rooms"
            className="mt-8 inline-block bg-bark px-8 py-3.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Slider indicators 01 02 03 */}
        <div className="mt-14 flex items-center gap-5 pb-10 md:mt-20">
          {SLIDES.map((s, i) => (
            <button
              key={s.desktop}
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}`}
              className="group flex flex-col items-start gap-1.5"
            >
              <span
                className={`text-[11px] font-medium tracking-[0.1em] transition-colors ${
                  i === active
                    ? "text-cream"
                    : "text-cream/50 group-hover:text-cream/80"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`h-px transition-all duration-500 ${
                  i === active
                    ? "w-10 bg-cream"
                    : "w-5 bg-cream/40 group-hover:bg-cream/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
