"use client";

import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/lib/site";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), "");

  useEffect(() => {
    const element = ref.current;

    if (!element || hasStarted || Number.isNaN(target)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasStarted(true);
        const duration = 2500;
        const start = performance.now();

        const tick = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(Math.round(target * eased));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted, target]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function CountingSection() {
  return (
    <section className="bg-white pb-16 pt-44 sm:pt-48 lg:pt-56">
      <div className="section-container text-center">
        <p className="text-lg font-black tracking-tight text-[#031b45] sm:text-xl lg:text-2xl">
          Tingkatkan Standar Kualitas Perusahaan Anda!
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#031b45] sm:text-4xl lg:text-5xl">
          Dapatkan pelatihan SQET yang praktis, terukur, dan terbukti efektif
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-black leading-none tracking-tight text-[#031b45] sm:text-6xl">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="mx-auto mt-4 max-w-44 text-lg font-bold leading-snug text-slate-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
