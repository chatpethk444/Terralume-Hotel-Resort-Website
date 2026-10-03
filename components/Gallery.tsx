import Image from "next/image";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-eyebrow text-terracotta">
              Gallery
            </p>
            <h2 className="mt-3 font-display text-[28px] font-medium text-stone md:text-[36px]">
              Atmosphere in Frames
            </h2>
          </div>
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-sage">
            Natural / Authentic / Refined / Timeless
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <Reveal className="col-span-2 row-span-2">
            <div className="relative aspect-square h-full min-h-[280px] w-full overflow-hidden md:min-h-[420px]">
              <Image
                src="/images/terrace-2x.webp"
                alt="Sunset over the infinity pool"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={82}
                className="object-cover transition-transform duration-[2s] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="col-span-2 md:col-span-2">
            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src="/images/room2.webp"
                alt="Morning light in the terrace suite"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={82}
                className="object-cover transition-transform duration-[2s] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/sailing-card.webp"
                alt="Sailing past the cliffs at golden hour"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                className="object-cover transition-transform duration-[2s] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={240} className="col-span-2 md:col-span-1">
            <div className="flex aspect-[2/1] w-full flex-col justify-between bg-bark p-6 md:aspect-square md:p-7">
              <p className="font-display text-lg italic leading-snug text-cream md:text-2xl">
                &ldquo;Stay closer to what matters&rdquo;
              </p>
              <p className="text-[11px] font-medium uppercase tracking-eyebrow text-sand">
                Terralume mood
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
