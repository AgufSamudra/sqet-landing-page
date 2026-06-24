import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig, trainingMenu } from "@/lib/site";

export function SiteHeader() {
  const primaryNavItems = navItems.slice(0, 3);
  const secondaryNavItems = navItems.slice(3);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[#083f73] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 text-xs font-medium sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
            <span>Training and Consulting</span>
            <span className="hidden min-[420px]:inline">Bogor, Jawa Barat</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
            <Link href={`mailto:${siteConfig.email}`} className="hover:text-[#ffb703]">
              {siteConfig.email}
            </Link>
            <Link
              href={siteConfig.whatsapp}
              className="hidden hover:text-[#ffb703] sm:inline"
            >
              Mulai Obrolan di WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="shrink-0" aria-label="SQET home">
          <Image
            src="/logo-web.png"
            alt="SQET Quality Excellence Training"
            width={220}
            height={72}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#083f73]"
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="#jadwal"
              className="inline-flex items-center gap-2 py-7 transition hover:text-[#083f73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]"
            >
              Training
              <span className="text-[10px] leading-none">v</span>
            </Link>
            <div className="glass-panel invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 translate-y-3 rounded-2xl p-4 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid gap-3 sm:grid-cols-2">
                {trainingMenu.map((group) => (
                  <div key={group.title} className="rounded-xl bg-[#f7fbfc] p-4">
                    <p className="text-sm font-black text-[#083f73]">
                      {group.title}
                    </p>
                    <div className="mt-3 grid gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={`${group.title}-${item}`}
                          href="#jadwal"
                          className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-[#0f8fa5]"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {secondaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#083f73]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.registrationUrl}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-[#f59e0b] px-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#d97706] sm:h-11 sm:px-5 sm:text-sm"
        >
          Daftar
          <span className="hidden sm:inline">&nbsp;Sekarang</span>
        </Link>
      </div>

      <div className="border-t border-slate-100 bg-white lg:hidden">
        <nav className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-6 py-3 text-sm font-bold text-slate-700 sm:px-8 lg:px-10">
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 transition hover:bg-[#eaf7fb] hover:text-[#083f73]"
            >
              {item.label}
            </Link>
          ))}

          <details className="group relative shrink-0">
            <summary className="list-none rounded-md px-3 py-2 text-[#083f73] transition hover:bg-[#eaf7fb] [&::-webkit-details-marker]:hidden">
              Training
            </summary>
            <div className="glass-panel fixed inset-x-4 top-[12rem] z-50 max-h-[65vh] overflow-y-auto rounded-2xl p-4 sm:top-[10.5rem]">
              <div className="grid gap-3 sm:grid-cols-2">
                {trainingMenu.map((group) => (
                  <div key={group.title} className="rounded-xl bg-[#f7fbfc] p-4">
                    <p className="text-sm font-black text-[#083f73]">
                      {group.title}
                    </p>
                    <div className="mt-3 grid gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={`${group.title}-${item}`}
                          href="#jadwal"
                          className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-[#0f8fa5]"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>

          {secondaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 transition hover:bg-[#eaf7fb] hover:text-[#083f73]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
