import Image from "next/image";
import { trainingGallery } from "@/lib/site";

export function GallerySection() {
  return (
    <section
      id="galeri"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#eaf7fb_0%,#ffffff_44%,#fff7e0_100%)] py-24"
    >
      <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-[#0f8fa5]/15 blur-3xl" />
      <div className="absolute bottom-10 right-[-5rem] h-80 w-80 rounded-full bg-[#f59e0b]/20 blur-3xl" />

      <div className="section-container relative">
        <div className="glass-panel rounded-[2rem] p-6 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
                Galeri Training
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#083f73] sm:text-5xl">
                Dokumentasi training yang sudah berjalan.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Kumpulan dokumentasi kegiatan SQET untuk menampilkan suasana
                kelas, praktik, dan sesi pendampingan dengan tampilan modern.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trainingGallery.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group glass-panel overflow-hidden rounded-2xl p-3 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#083f73]/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#d9f0f4]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
