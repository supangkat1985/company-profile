import Link from "next/link";
import { advantages, company, services, stats } from "@/data/company";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
              Jasa Teknologi & Konsultan
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              {company.tagline}
            </h1>
            <p className="mt-5 text-blue-100">{company.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontak" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-blue-800 hover:bg-blue-50">
                Konsultasi Gratis
              </Link>
              <Link href="/layanan" className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-bold hover:bg-white/10">
                Lihat Layanan
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-2xl">
            <h2 className="font-bold">Kenapa Memilih Kami?</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>✓ Proses cepat & transparan</li>
              <li>✓ Garansi bug 90 hari + SLA 24/7</li>
              <li>✓ Teknologi modern Next.js & Cloud</li>
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-2xl font-extrabold text-blue-700">{s.value}</p>
                  <p className="text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold">{s.value}</p>
                <p className="text-xs text-blue-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold">Keunggulan Kami</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="rounded-2xl border p-6 shadow-sm hover:shadow-lg">
              <span className="text-3xl">{a.icon}</span>
              <h3 className="mt-3 font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{a.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-extrabold">Layanan Unggulan</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <div key={s.slug} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-2 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.price}</p>
              </div>
            ))}
          </div>
          <Link href="/layanan" className="mt-6 inline-block font-bold text-blue-700">
            Lihat semua layanan →
          </Link>
        </div>
      </section>
    </>
  );
}
