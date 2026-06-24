import { partners } from "@/lib/site";

export function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-[-5rem] top-20 size-72 rounded-full bg-[#0f8fa5]/10 blur-3xl" />
      <div className="absolute right-[-6rem] bottom-10 size-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
            Partner Kami
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#083f73] sm:text-5xl">
            Dipercaya berbagai sektor industri dan layanan.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            SQET berkolaborasi dengan organisasi dari sektor manufaktur,
            laboratorium, pangan, QHSE, dan rumah sakit.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="glass-panel group rounded-2xl border border-white/80 bg-white/58 p-5 shadow-[0_20px_70px_rgb(8_63_115_/_0.1)] transition hover:-translate-y-1 hover:bg-white/72 hover:shadow-2xl hover:shadow-[#083f73]/14"
            >
              <div className="flex items-center gap-4">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl border border-white/80 bg-[#eaf7fb]/90 text-lg font-black text-[#083f73] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.9)]">
                  {partner.initials}
                </div>
                <div>
                  <h3 className="text-lg font-black leading-tight text-[#083f73]">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {partner.field}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
