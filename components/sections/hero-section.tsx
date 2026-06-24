import Image from "next/image";
import Link from "next/link";
import { heroSlides, siteConfig, stats } from "@/lib/site";

export function HeroSection() {
  const [primarySlide, secondarySlide] = heroSlides;

  return (
    <section className="relative overflow-visible bg-[#eaf7fb] pb-20 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#ffffff_0,#ffffff_18%,transparent_38%),linear-gradient(135deg,#eaf7fb_0%,#d9f0f4_45%,#ffffff_100%)]" />
      <div className="section-container relative grid min-h-[calc(100vh-8.75rem)] gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <p className="glass-panel inline-flex rounded-md px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
            {primarySlide.eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-[#083f73] sm:text-6xl lg:text-7xl">
            <span className="block">Pusat Pelatihan</span>
            <span className="block text-[#f59e0b] drop-shadow-sm">
              QHSE & Rumah Sakit
            </span>
            <span className="block">Terbaik di Indonesia</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {primarySlide.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.whatsapp}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#f59e0b] px-6 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-[#d97706]"
            >
              Hubungi Kami via WhatsApp
            </Link>
            <Link
              href="#jadwal"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#083f73]/20 bg-white px-6 text-sm font-bold text-[#083f73] transition hover:border-[#083f73]"
            >
              Lihat Jadwal Training
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[#f59e0b]/25" />
          <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-[#0f8fa5]/20" />
          <div className="glass-panel relative rounded-[2rem] p-3 sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#083f73] text-white">
              <Image
                src="/hero.png"
                alt="Dokumentasi training SQET"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062f57]/20 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <div className="rounded-xl border border-white/35 bg-white/18 p-4 shadow-2xl shadow-[#062f57]/25 backdrop-blur-2xl sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ffb703] sm:text-sm">
                    {secondarySlide.eyebrow}
                  </p>
                  <p className="mt-2 text-lg font-black sm:text-2xl">
                    {secondarySlide.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
                    {secondarySlide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dl className="section-container relative z-20 -mb-24 mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:mb-0 lg:translate-y-1/2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="relative min-h-48 min-w-0 overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/58 p-6 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.9),0_24px_70px_rgb(8_63_115_/_0.18)] backdrop-blur-2xl backdrop-saturate-150 transition hover:-translate-y-1 hover:bg-white/68 hover:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.94),0_30px_90px_rgb(8_63_115_/_0.24)]"
          >
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/90" />
            <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-white/44 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 left-1/2 size-24 -translate-x-1/2 rounded-full bg-[#7dd3fc]/18 blur-2xl" />
            <dt className="relative break-words text-2xl font-black leading-tight text-[#031b45]">
              {stat.value}
            </dt>
            <div className="relative my-5 h-px w-full bg-gradient-to-r from-transparent via-[#083f73]/22 to-transparent" />
            <dd className="relative text-sm leading-7 text-slate-700">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
