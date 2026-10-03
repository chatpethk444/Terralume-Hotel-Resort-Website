"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Flower2,
  UtensilsCrossed,
  Sailboat,
  Clock,
  Heart,
  X,
  Check,
} from "lucide-react";
import { EXPERIENCES, WISHLIST_KEY, type Experience } from "../data/content";
import { STR, type Lang } from "../data/i18n";
import Reveal from "./Reveal";

const ICONS: Record<string, typeof Flower2> = {
  wellness: Flower2,
  culture: UtensilsCrossed,
  adventure: Sailboat,
};

function loadWishlist(): string[] {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export default function Experiences({
  onReserve,
  lang,
}: {
  onReserve: () => void;
  lang: Lang;
}) {
  const t = STR[lang];
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selected, setSelected] = useState<Experience | null>(null);

  useEffect(() => {
    setWishlist(loadWishlist());
  }, []);

  // Lock background scroll while the program modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const text = (exp: Experience) => (lang === "th" ? exp.th : exp);

  const toggle = (id: string) => {
    setWishlist((prev) => {
      const next = prev.includes(id)
        ? prev.filter((w) => w !== id)
        : [...prev, id];
      try {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
      } catch {
        /* private mode — wishlist stays in memory */
      }
      return next;
    });
  };

  return (
    <section id="experiences" className="scroll-mt-20 bg-white/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-eyebrow text-terracotta">
            {t.experiences.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[28px] font-medium text-stone md:text-[36px]">
            {t.experiences.title}
          </h2>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-stone/80">
            {t.experiences.intro}
          </p>
          {wishlist.length > 0 && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-terracotta">
              <Heart
                className="h-3.5 w-3.5 fill-terracotta"
                aria-hidden="true"
              />
              {t.experiences.saved} · {wishlist.length}
            </p>
          )}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EXPERIENCES.map((exp, i) => {
            const Icon = ICONS[exp.id] ?? Flower2;
            const saved = wishlist.includes(exp.id);
            const tx = text(exp);
            return (
              <Reveal key={exp.id} delay={i * 120}>
                <article className="group flex h-full flex-col border border-sand/60 bg-cream">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={82}
                      className="object-cover transition-transform duration-[2s] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone/55 via-transparent to-transparent" />
                    <button
                      onClick={() => toggle(exp.id)}
                      aria-label={`${saved ? "Remove" : "Save"} ${tx.title}`}
                      aria-pressed={saved}
                      className={`absolute right-3 top-3 p-2.5 backdrop-blur-sm transition-colors ${
                        saved
                          ? "bg-terracotta text-cream"
                          : "bg-stone/40 text-cream hover:bg-stone/60"
                      }`}
                    >
                      <Heart
                        className={`h-[18px] w-[18px] ${saved ? "fill-cream" : ""}`}
                        strokeWidth={1.5}
                      />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-5">
                      <Icon
                        className="h-5 w-5 text-sand"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                      <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-cream">
                        {tx.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[22px] font-medium leading-snug text-stone">
                      {tx.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-[12px] font-medium text-sage">
                      <Clock
                        className="h-3.5 w-3.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      {tx.schedule}
                    </p>
                    <p className="mt-2.5 flex-1 text-[14px] font-light leading-relaxed text-stone/75">
                      {tx.text}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <button
                        onClick={() => setSelected(exp)}
                        className="flex-1 border border-bark px-4 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-bark transition-colors hover:bg-bark hover:text-cream"
                      >
                        {t.experiences.viewProgram}
                      </button>
                      <button
                        onClick={onReserve}
                        className="flex-1 bg-bark px-4 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
                      >
                        {t.experiences.reserve}
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Experience detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-stone/60 backdrop-blur-[2px] sm:items-center sm:p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${text(selected).title} ${t.experiences.programOf}`}
        >
          <div
            className="modal-panel max-h-[90svh] w-full max-w-2xl overflow-y-auto bg-cream"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={selected.image}
                alt={selected.alt}
                fill
                sizes="(max-width: 640px) 100vw, 672px"
                quality={82}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone/50 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                aria-label={t.experiences.closeProgram}
                className="absolute right-4 top-4 bg-stone/60 p-2 text-cream transition-colors hover:bg-stone"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <p className="absolute bottom-4 left-6 text-[11px] font-semibold uppercase tracking-eyebrow text-sand">
                {text(selected).category} · {text(selected).schedule}
              </p>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-medium text-stone md:text-3xl">
                {text(selected).title}
              </h3>
              <p className="mt-2 text-[14px] font-light leading-relaxed text-stone/80">
                {text(selected).text}
              </p>
              <ul className="mt-5 space-y-2.5">
                {text(selected).program.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[14px] text-stone"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-olive"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => toggle(selected.id)}
                  className={`flex items-center gap-2 border px-5 py-3.5 text-[13px] font-semibold tracking-[0.05em] transition-colors ${
                    wishlist.includes(selected.id)
                      ? "border-terracotta bg-terracotta/10 text-terracotta"
                      : "border-bark text-bark hover:bg-bark hover:text-cream"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${wishlist.includes(selected.id) ? "fill-terracotta" : ""}`}
                    strokeWidth={1.5}
                  />
                  {wishlist.includes(selected.id)
                    ? t.experiences.saved
                    : t.experiences.save}
                </button>
                <button
                  onClick={() => {
                    setSelected(null);
                    onReserve();
                  }}
                  className="flex-1 bg-bark py-3.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
                >
                  {t.experiences.reserveThis}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
