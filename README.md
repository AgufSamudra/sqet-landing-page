# SQET Landing Page

Next.js App Router landing page starter untuk SQET dengan struktur SEO dasar.

## Struktur utama

- `app/layout.tsx` - metadata global, Open Graph, Twitter card, dan root layout.
- `app/page.tsx` - komposisi section homepage.
- `app/robots.ts` - robots.txt otomatis.
- `app/sitemap.ts` - sitemap.xml otomatis.
- `lib/site.ts` - konfigurasi brand, SEO, navigasi, layanan, dan konten section.
- `components/layout` - header dan footer.
- `components/sections` - section landing page yang bisa dikembangkan.

## Getting Started

Jalankan development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup sebelum production

1. Ganti `NEXT_PUBLIC_SITE_URL` dengan domain final.
2. Update `name`, `title`, `description`, `keywords`, dan `email` di `lib/site.ts`.
3. Ganti copy layanan dan CTA sesuai positioning bisnis final.
4. Tambahkan gambar Open Graph final sebelum launch.

Contoh `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://sqet.co.id
```

## Scripts

```bash
pnpm dev
pnpm build
pnpm lint
```

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
