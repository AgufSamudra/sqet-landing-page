import { trainers } from "@/lib/site";

export function TrainersSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fbfc_50%,#eaf7fb_100%)] py-24">
      <div className="absolute left-[-5rem] bottom-10 size-72 rounded-full bg-[#0f8fa5]/12 blur-3xl" />
      <div className="absolute right-[-6rem] top-16 size-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f8fa5]">
            Trainer Kami
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#083f73] sm:text-5xl">
            Didampingi praktisi berpengalaman.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.name}
              className="glass-panel rounded-2xl border border-white/80 bg-white/60 p-6 text-center shadow-[0_22px_70px_rgb(8_63_115_/_0.12)] transition hover:-translate-y-1 hover:bg-white/72 hover:shadow-2xl hover:shadow-[#083f73]/16"
            >
              <div className="mx-auto grid size-28 place-items-center rounded-full border border-white/80 bg-[linear-gradient(135deg,#eaf7fb,#ffffff)] text-3xl font-black text-[#083f73] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.9),0_18px_50px_rgb(8_63_115_/_0.14)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl font-black leading-tight text-[#083f73]">
                {trainer.name}
              </h3>
              <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-[#083f73]/24 to-transparent" />
              <p className="text-sm leading-7 text-slate-600">
                {trainer.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
