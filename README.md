# Website Company Profile — PT. Supangkat Eka Prasetya Makmur

Website company profile modern, responsif (mobile-first), dibangun dengan
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Halaman

| Route      | Isi                                                                 |
| ---------- | ------------------------------------------------------------------- |
| `/`        | Landing / Hero, keunggulan, statistik, preview layanan, CTA         |
| `/layanan` | 6 layanan (Web, Mobile, Cloud & DevOps, Konsultan IT, UI/UX, Security) |
| `/tim`     | 4 anggota tim + budaya kerja DevSecOps                              |
| `/kontak`  | Info kontak + form pesan (validasi client-side)                     |

## Struktur

```
src/
├── app/
│   ├── layout.tsx        # Root layout + Navbar + Footer + metadata SEO
│   ├── page.tsx          # Landing / Hero
│   ├── globals.css
│   ├── layanan/page.tsx
│   ├── tim/page.tsx
│   └── kontak/page.tsx
├── components/
│   ├── Navbar.tsx        # Responsif + hamburger menu mobile
│   └── Footer.tsx
└── data/company.ts       # Data terpusat (profil, layanan, tim, kontak)
```

## Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & Preview

Project ini memakai `output: "export"` (static export) sehingga mudah
di-hosting di CDN/hosting statis apa pun, termasuk **Cloudflare Pages**.

```bash
npm run build        # menghasilkan folder out/
npm run preview      # preview hasil static di local
```

## Deploy

Lihat panduan lengkap di [DEPLOY-CLOUDFLARE.md](./DEPLOY-CLOUDFLARE.md).

```bash
# Opsi cepat — Direct Upload ke Cloudflare Pages
npm run build
npm run deploy
```

## Catatan

- Form kontak saat ini hanya simulasi di sisi klien (belum mengirim email).
  Untuk pengiriman nyata, sambungkan ke Pages Function/Worker + layanan email
  (mis. Resend) atau penyedia form pihak ketiga.
- Tidak ada environment variable yang dibutuhkan untuk build.

