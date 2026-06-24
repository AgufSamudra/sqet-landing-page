import Image from "next/image";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="tentang" className="bg-white py-24">
      <div className="section-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -left-8 top-10 size-44 rounded-full bg-[#0f8fa5]/16 blur-3xl" />
          <div className="absolute -right-8 bottom-8 size-52 rounded-full bg-[#f59e0b]/12 blur-3xl" />

          <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-white/54 p-4 shadow-[0_28px_90px_rgb(8_63_115_/_0.16)] sm:p-5">
            <div className="relative h-full overflow-hidden rounded-[1.45rem] bg-[#d9f0f4] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.78)]">
              <Image
                src="/tentang.png"
                alt="Dokumentasi training SQET"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062f57]/10 via-transparent to-white/8" />
            </div>
          </div>
          <div className="glass-panel absolute -bottom-6 right-6 rounded-2xl border border-white/80 bg-white/58 px-6 py-4 text-[#083f73] shadow-2xl shadow-[#083f73]/18 backdrop-blur-2xl">
            <p className="text-3xl font-black leading-none">25+</p>
            <p className="mt-1 text-sm font-bold">Tahun Pengalaman</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
            Tentang Kami
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#083f73] sm:text-5xl">
            Solusi Quality Excellence Training
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            SQET adalah provider training yang dibangun untuk menjadi salah satu
            training terbaik di Indonesia, dengan hasrat memenuhi kebutuhan jasa
            pelatihan berkualitas untuk analis, mahasiswa, karyawan, instansi,
            lembaga, balai, dan umum.
          </p>
          <div id="layanan" className="mt-10 grid gap-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="glass-panel rounded-2xl border border-white/80 bg-white/60 p-6 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.9),0_22px_70px_rgb(8_63_115_/_0.12)] backdrop-blur-2xl backdrop-saturate-150 transition hover:-translate-y-1 hover:bg-white/72 hover:shadow-2xl hover:shadow-[#083f73]/16"
              >
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/70 bg-[#eaf7fb]/90 text-sm font-black text-[#083f73] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.86)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[#083f73]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
