/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> menghasilkan folder `out/` untuk Cloudflare Pages
  output: "export",
  // Gambar tidak dioptimasi di sisi server (wajib untuk static export)
  images: { unoptimized: true },
  // Hapus header "X-Powered-By: Next.js"
  poweredByHeader: false,
};

export default nextConfig;
