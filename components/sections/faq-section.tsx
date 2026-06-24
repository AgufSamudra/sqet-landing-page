import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#f7fbfc_0%,#ffffff_48%,#eaf7fb_100%)] py-24">
      <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#083f73] sm:text-5xl">
            Pertanyaan yang sering diajukan.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Informasi awal terkait format training, sertifikat, pilihan program,
            dan cara pendaftaran.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group glass-panel rounded-2xl border border-white/80 bg-white/62 p-6 shadow-[0_20px_70px_rgb(8_63_115_/_0.1)] transition open:bg-white/76"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-black text-[#083f73]">
                {faq.question}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eaf7fb] text-xl leading-none transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#083f73]/18 to-transparent" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
