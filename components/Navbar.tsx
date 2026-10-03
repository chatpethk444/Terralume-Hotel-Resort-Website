"use client";

import { useEffect, useState } from "react";
import { Menu, X, Mountain } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

          <div className="flex items-center gap-3">
            <button
              onClick={onBook}
              className="hidden bg-bark px-6 py-2.5 text-[13px] font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta md:block"
            >
              Book Now
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
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
          <p className="pt-6 text-[11px] font-medium uppercase tracking-eyebrow text-sage">
            A place to slow down
          </p>
        </div>
        <div className="p-5">
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="w-full bg-bark py-4 text-sm font-semibold tracking-[0.05em] text-cream transition-colors hover:bg-terracotta"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
