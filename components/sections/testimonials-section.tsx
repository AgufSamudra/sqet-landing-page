import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#062f57] py-32 text-white">
      <div className="absolute left-[-5rem] top-[-5rem] size-80 rounded-full bg-[#0f8fa5]/24 blur-3xl" />
      <div className="absolute bottom-[-6rem] right-[-4rem] size-96 rounded-full bg-[#f59e0b]/18 blur-3xl" />

      <div className="section-container relative">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffb703]">
              Testimoni
            </p>
            <h2 className="mt-6 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:max-w-4xl">
              Cerita peserta setelah mengikuti training SQET.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-blue-100">
            Dummy sementara untuk menggambarkan pengalaman peserta dari berbagai
            latar belakang industri dan rumah sakit.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="glass-panel-dark rounded-2xl border border-white/18 bg-white/10 p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white/14"
            >
              <div className="flex gap-1 text-[#ffb703]" aria-label="5 stars">
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
              </div>
              <p className="mt-6 text-base leading-8 text-blue-50">
                "{testimonial.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-full bg-white text-sm font-black text-[#083f73]">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-black">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-blue-100">
                    {testimonial.role}
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
