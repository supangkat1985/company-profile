import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/company";

export const metadata: Metadata = { title: "Layanan" };

export default function LayananPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-700 px-4 py-14 text-center text-white sm:px-6">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Layanan Kami</h1>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100">
          Enam layanan utama untuk mendukung perjalanan digital bisnis Anda — dari
          ide hingga production dan maintenance.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {s.icon}
              </span>
              <h2 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
              <ul className="mt-4 space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-blue-600">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t pt-4">
                <span className="text-sm font-bold text-blue-700">{s.price}</span>
                <Link
                  href="/kontak"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-bold text-white hover:bg-blue-800"
                >
                  Minta Penawaran
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">Butuh layanan kustom?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
            Setiap bisnis itu unik. Diskusikan kebutuhan spesifik Anda dan kami akan
            susun solusi + estimasi biaya yang transparan.
          </p>
          <Link
            href="/kontak"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold hover:bg-blue-500"
          >
            Konsultasi Gratis Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
