"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { programGroups } from "@/lib/site";

export function ProcessSection() {
  const [query, setQuery] = useState("");
  const [slideIndexes, setSlideIndexes] = useState<Record<string, number>>({});
  const [slidePhase, setSlidePhase] = useState<"idle" | "leaving" | "entering">(
    "idle",
  );
  const slideTimerRef = useRef<number | null>(null);

  const filteredGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return programGroups;
    }

    return programGroups
      .map((group) => ({
        ...group,
        programs: group.programs.filter((program) => {
          const searchableText =
            `${program.title} ${program.description}`.toLowerCase();

          return searchableText.includes(normalizedQuery);
        }),
      }))
      .filter((group) => group.programs.length > 0);
  }, [query]);

  useEffect(() => {
    if (query.trim()) {
      if (slideTimerRef.current) {
        window.clearTimeout(slideTimerRef.current);
        slideTimerRef.current = null;
      }

      setSlidePhase("idle");

      return;
    }

    const interval = window.setInterval(() => {
      setSlidePhase("leaving");

      slideTimerRef.current = window.setTimeout(() => {
        setSlideIndexes((currentIndexes) => {
          const nextIndexes = { ...currentIndexes };

          filteredGroups.forEach((group) => {
            if (group.programs.length > 4) {
              const currentIndex = currentIndexes[group.title] ?? 0;
              nextIndexes[group.title] =
                (currentIndex + 1) % group.programs.length;
            }
          });

          return nextIndexes;
        });

        setSlidePhase("entering");
        window.requestAnimationFrame(() => {
          setSlidePhase("idle");
        });
        slideTimerRef.current = null;
      }, 320);
    }, 5000);

    return () => {
      window.clearInterval(interval);

      if (slideTimerRef.current) {
        window.clearTimeout(slideTimerRef.current);
        slideTimerRef.current = null;
      }
    };
  }, [filteredGroups, query]);

  const getVisiblePrograms = (group: (typeof programGroups)[number]) => {
    if (group.programs.length <= 4) {
      return group.programs;
    }

    const startIndex = slideIndexes[group.title] ?? 0;

    return Array.from({ length: 4 }, (_, index) => {
      const programIndex = (startIndex + index) % group.programs.length;

      return group.programs[programIndex];
    });
  };

  return (
    <section id="jadwal" className="bg-white py-24">
      <div className="section-container">
        <div className="grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
              Program Training SQET
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#083f73] sm:text-5xl">
              Program Training QHSE dan Rumah Sakit
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Temukan program pelatihan SQET untuk kebutuhan QHSE, laboratorium,
              ISO, food safety, akreditasi, keperawatan, SDM, dan manajemen
              pelayanan rumah sakit.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/80 bg-white/64 p-3 shadow-[0_24px_70px_rgb(8_63_115_/_0.14)]">
            <label htmlFor="program-search" className="sr-only">
              Cari program training
            </label>
            <div className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#083f73]/55"
                fill="none"
              >
                <path
                  d="m21 21-4.3-4.3m2.3-5.7a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <input
                id="program-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari training berdasarkan judul atau deskripsi..."
                className="h-14 w-full rounded-xl border border-[#083f73]/12 bg-white/90 pl-12 pr-4 text-sm font-semibold text-[#083f73] outline-none transition placeholder:text-slate-500 focus:border-[#0f8fa5] focus:bg-white focus:ring-4 focus:ring-[#0f8fa5]/18"
              />
            </div>
          </div>
        </div>

        <div id="kategori" className="mt-16 grid gap-16">
          {filteredGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-12"
            >
              <div>
                <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#031b45]">
                  {group.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {group.description}
                </p>
                <a
                  href="#kontak"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-xl bg-[#031b45] px-5 py-3 text-sm font-bold leading-5 text-white shadow-lg shadow-[#031b45]/15 transition hover:-translate-y-0.5 hover:bg-[#083f73] hover:shadow-xl hover:shadow-[#031b45]/20 sm:w-auto lg:w-full"
                >
                  <span>{group.cta}</span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/12 text-base leading-none">
                    -&gt;
                  </span>
                </a>
              </div>

              <div
                className={`grid gap-4 transition duration-500 ease-out md:grid-cols-2 xl:grid-cols-4 ${
                  slidePhase === "leaving"
                    ? "-translate-x-8 opacity-0"
                    : slidePhase === "entering"
                      ? "translate-x-8 opacity-0"
                      : "translate-x-0 opacity-100"
                }`}
              >
                {getVisiblePrograms(group).map((program, index) => (
                  <article
                    key={`${group.title}-${program.title}-${index}`}
                    className="group glass-panel relative cursor-pointer overflow-hidden rounded-2xl border border-white/80 bg-white/58 p-3 transition duration-300 hover:-translate-y-2 hover:border-[#0f8fa5]/35 hover:bg-white/74 hover:shadow-2xl hover:shadow-[#083f73]/24 focus-within:-translate-y-2 focus-within:border-[#0f8fa5]/45 focus-within:bg-white/74 focus-within:shadow-2xl focus-within:shadow-[#083f73]/24"
                    tabIndex={0}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#0f8fa5]/0 transition group-hover:ring-4 group-hover:ring-[#0f8fa5]/16 group-focus:ring-4 group-focus:ring-[#0f8fa5]/16" />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#d9f0f4]">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 40vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-110 group-focus:scale-110"
                      />
                    </div>
                    <div className="px-2 py-4">
                      <h4 className="text-lg font-black leading-7 text-[#083f73]">
                        {program.title}
                      </h4>
                      <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#083f73]/18 to-transparent" />
                      <p className="text-sm leading-6 text-slate-600">
                        {program.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredGroups.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-[#083f73]/20 bg-[#f7fbfc] p-8 text-center">
            <p className="text-lg font-black text-[#083f73]">
              Program tidak ditemukan
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Coba cari dengan kata kunci lain seperti ISO, laboratorium, HSE,
              akreditasi, atau rumah sakit.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
