import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="kontak" className="bg-white py-24">
      <div className="section-container">
        <div className="overflow-hidden rounded-[2rem] bg-[#0f8fa5]/95 shadow-2xl shadow-[#0f8fa5]/20 backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 text-white md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffdc73]">
                Hubungi Kami
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Siapkan kebutuhan training quality dan laboratorium Anda.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50">
                Tim SQET siap membantu memilih program public training, in house
                training, atau konsultasi laboratorium sesuai kebutuhan instansi.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={siteConfig.whatsapp}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#f59e0b] px-6 text-sm font-bold text-white transition hover:bg-[#d97706]"
                >
                  Mulai Obrolan di WhatsApp
                </Link>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {siteConfig.email}
                </Link>
              </div>
            </div>

            <div className="bg-[#083f73] p-8 md:p-12">
              <div className="glass-panel rounded-2xl p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
                  Call Us
                </p>
                <p className="mt-4 text-4xl font-black text-[#083f73]">
                  {siteConfig.phone}
                </p>
                <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
                  <div>
                    <p className="font-black text-slate-950">Jam Kerja</p>
                    <p>Senin - Jumat 08:00 - 17:00 WIB</p>
                  </div>
                  <div>
                    <p className="font-black text-slate-950">Alamat</p>
                    <p>{siteConfig.address}</p>
                  </div>
                  <div>
                    <p className="font-black text-slate-950">Email</p>
                    <p>{siteConfig.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
