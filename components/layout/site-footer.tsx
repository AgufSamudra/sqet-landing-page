import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig, trainingCategories } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#062f57] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Image
            src="/logo-web.png"
            alt={`${siteConfig.name} logo`}
            width={150}
            height={48}
            className="h-auto w-36 rounded-md bg-white px-2 py-1"
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-100">
            Kami mempunyai tekad yang terbaik untuk anak bangsa serta mendorong
            mahasiswa, karyawan, dan instansi untuk berkarya, inovatif, kreatif,
            dan berpikir cerdas.
          </p>
          <p className="mt-5 text-sm font-semibold text-[#ffb703]">
            Copyright © 2026 SQET
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold">Navigasi</h2>
          <div className="mt-5 grid gap-3 text-sm text-blue-100">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#ffb703]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold">Kategori</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {trainingCategories.map((category) => (
              <span
                key={category}
                className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-blue-50"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-sm text-blue-100">
            <p>Senin - Jumat 08:00 - 17:00 WIB</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-5 py-5 text-xs text-blue-100">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#ffb703]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
