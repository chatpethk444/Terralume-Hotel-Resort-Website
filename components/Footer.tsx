import { Mountain, MapPin, Mail } from "lucide-react";

export default function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="bg-stone text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
        <div>
          <div className="flex items-center gap-2.5 text-cream">
            <Mountain className="h-6 w-6" strokeWidth={1.25} aria-hidden="true" />
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-semibold tracking-[0.18em]">
                TERRALUME
              </span>
              <span className="block text-[9px] font-medium tracking-[0.32em] opacity-70">
                HOTEL &amp; RESORT
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] font-light leading-relaxed">
            A place to slow down — where natural beauty meets thoughtful
            comfort.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-sand">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-[13px] font-medium">
            {[
              ["Home", "#home"],
              ["Rooms", "#rooms"],
              ["Experiences", "#experiences"],
              ["Gallery", "#gallery"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-cream">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-sand">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-[13px] font-light">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              By the bay — reservations on request
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              stay@terralumehotel.com
            </li>
          </ul>
          <button
            onClick={onBook}
            className="mt-5 bg-cream px-6 py-2.5 text-[13px] font-semibold tracking-[0.05em] text-bark transition-colors hover:bg-sand"
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] font-light tracking-wide text-cream/50 sm:flex-row md:px-8">
          <span>© 2026 Terralume Hotel &amp; Resort</span>
          <span className="uppercase tracking-eyebrow">Stay closer to what matters</span>
        </div>
      </div>
    </footer>
  );
}
