# Deploy ke Cloudflare Pages (Free Plan)

Panduan ini untuk website **PT. Supangkat Eka Prasetya Makmur**.
Situs ini **100% static** (`output: "export"`), sehingga dibangun menjadi folder
`out/` dan tidak memerlukan Worker/Function. Cukup Cloudflare Pages Free.

## Pengaturan Build (WAJIB — sama untuk semua metode)

| Setting                | Nilai            |
| ---------------------- | ---------------- |
| Framework preset       | `Next.js (Static HTML Export)` |
| Build command          | `npx next build` |
| Build output directory | `out`            |
| Environment variable   | `NODE_VERSION` = `20` |

## Metode 1 — Git Integration (auto-deploy saat push)

Cocok untuk update berkelanjutan. Cloudflare akan build otomatis dari GitHub.

### 1. Push project ke GitHub

```bash
cd /Users/Supangkat/Downloads/repo/company-profile
git remote add origin https://github.com/<username>/company-profile.git
git push -u origin main
```

> Tips: gunakan **Personal Access Token** sebagai password saat `git push`
> (GitHub tidak lagi menerima password biasa). Atau pakai `gh` CLI:
> `gh auth login` lalu `gh repo create company-profile --public --source=. --push`

### 2. Buat project di Cloudflare

1. Login ke <https://dash.cloudflare.com> → menu **Workers & Pages**
2. Klik **Create** → tab **Pages** → **Connect to Git**
3. Pilih repository `company-profile`
4. Isi build settings sesuai tabel di atas (build command `npx next build`,
   output directory `out`)
5. Klik **Save and Deploy**

Selesai. Situs tersedia di `https://<nama-project>.pages.dev`.

### 3. Auto-deploy

Setiap `git push` ke branch `main` akan otomatis build + deploy ulang.
Branch lain otomatis mendapat **preview URL** terpisah.

## Metode 2 — Direct Upload via Wrangler (tanpa GitHub)

Cocok untuk deploy manual sekali jalan.

```bash
npm run build                 # menghasilkan folder out/
npx wrangler login            # login sekali, buka browser
npx wrangler pages deploy out --project-name=company-profile
```

Atau langsung: `npm run deploy`

## Custom Domain

1. Buka project → **Custom domains** → **Set up a custom domain**
2. Masukkan domain (mis. `sepmakmur.co.id`)
3. Jika domain sudah memakai DNS Cloudflare, tinggal konfirmasi.
   Jika belum, arahkan **CNAME** ke `<nama-project>.pages.dev`
4. SSL/HTTPS otomatis aktif (gratis).

## Update & Rollback

- **Update**: `git push` (Metode 1) atau `npm run deploy` (Metode 2)
- **Rollback**: dashboard → tab **Deployments** → pilih deployment lama →
  **Rollback to this deployment**. Riwayat deployment tak terbatas, gratis.

## Security Headers

File `public/_headers` sudah disertakan (otomatis ikut ke `out/_headers`) dan
menambahkan:

- `X-Frame-Options: SAMEORIGIN` (anti-clickjacking)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (matikan geolocation/mic/camera)
- Cache immutable 1 tahun untuk aset `/_next/static/*`

## Batas Free Plan

| Item                          | Limit Free          |
| ----------------------------- | ------------------- |
| Request & bandwidth (static)  | Unlimited           |
| Build per bulan               | 500 (timeout 20 mnt)|
| Ukuran site                   | 20.000 file, 25 MiB/file |
| Custom domain                 | 100 per project     |
| Workers Function (jika dipakai)| 100.000 request/hari, 10 ms CPU |

## Troubleshooting

| Masalah | Solusi |
| ------- | ------ |
| Build gagal "Node version" | Set env `NODE_VERSION=20` di Settings → Environment variables |
| Halaman `/layanan` 404 | Pastikan output directory = `out` (bukan `.next`) |
| Error "next start not supported" | Wajar; `output: "export"` tidak memakai `next start`. Pakai `npm run preview` |
| Aset lama masih muncul | Purge cache dari dashboard, atau cek `_headers` |
| Form tidak mengirim email | Memang simulasi klien. Perlu Worker + Resend/MailChannels untuk pengiriman nyata |

## Verifikasi Lokal Sebelum Deploy

```bash
npm run build      # harus sukses & membuat out/
npm run preview    # cek di http://localhost:3000
```
