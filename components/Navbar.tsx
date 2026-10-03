"use client";

import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { STR, type Lang } from "../data/i18n";

export default function Navbar({
  onBook,
  lang,
  onLang,
}: {
  onBook: () => void;
  lang: Lang;
  onLang: (l: Lang) => void;
}) {
  const t = STR[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.rooms, href: "#rooms" },
    { label: t.nav.experiences, href: "#experiences" },
    { label: t.nav.gallery, href: "#gallery" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const solid = scrolled || open;

  const toggle = (mobile: boolean) => (
    <div
      className={`flex items-center text-[12px] font-semibold tracking-[0.08em] ${
        mobile ? "gap-3" : "gap-1.5"
      } ${solid || mobile ? "text-stone" : "text-cream"}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "th"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            onClick={() => onLang(l)}
            aria-pressed={lang === l}
            className={`uppercase transition-opacity ${
              lang === l ? "opacity-100" : "opacity-50 hover:opacity-80"
            }`}
          >
            {l === "en" ? "EN" : "ไทย"}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid
            ? "bg-cream/95 shadow-[0_1px_0_rgba(60,56,53,0.08)] backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${
            solid ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className={`flex items-center gap-2.5 ${
              solid ? "text-stone" : "text-cream"
            }`}
          >
            <Mountain
              className="h-6 w-6"
              strokeWidth={1.25}
              aria-hidden="true"
            />
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-semibold tracking-[0.18em]">
                TERRALUME
              </span>
              <span className="block text-[9px] font-medium tracking-[0.32em] opacity-80">
                HOTEL &amp; RESORT
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[13px] font-medium tracking-[0.05em] transition-colors ${
                    solid
                      ? "text-stone hover:text-terracotta"
                      : "text-cream/90 hover:text-cream"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <span className="hidden md:block">{toggle(false)}</span>
            <button
              onClick={onBook}
              className="hidden bg-bark px-6 py-2.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta md:block"
            >
              {t.nav.book}
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className={`p-1 md:hidden ${
                solid ? "text-stone" : "text-cream"
              }`}
            >
              {open ? (
                <X className="h-6 w-6" strokeWidth={1.5} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen drawer — Flow C */}
      <div
        className={`fixed inset-0 z-30 flex flex-col bg-cream transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-2 px-8 pt-16">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-sand/60 py-4 font-display text-3xl text-stone transition-all delay-75 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-6">
            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-sage">
              {t.nav.tagline}
            </p>
            {toggle(true)}
          </div>
        </div>
        <div className="p-5">
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="w-full bg-bark py-4 text-sm font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
          >
            {t.nav.book}
          </button>
        </div>
      </div>
    </>
  );
}
