import { Mountain, MapPin, Mail } from "lucide-react";
import { STR, type Lang } from "../data/i18n";

export default function Footer({
  onBook,
  lang,
}: {
  onBook: () => void;
  lang: Lang;
}) {
  const t = STR[lang];
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
            {t.footer.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-sand">
            {t.footer.explore}
          </p>
          <ul className="mt-4 space-y-2.5 text-[13px] font-medium">
            {[
              [t.nav.home, "#home"],
              [t.nav.rooms, "#rooms"],
              [t.nav.experiences, "#experiences"],
              [t.nav.gallery, "#gallery"],
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
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-2.5 text-[13px] font-light">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
              {t.footer.address}
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
            {t.nav.book}
          </button>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-[11px] font-light tracking-wide text-cream/50 sm:flex-row md:px-8">
          <span>{t.footer.rights}</span>
          <span className="uppercase tracking-eyebrow">{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
}
