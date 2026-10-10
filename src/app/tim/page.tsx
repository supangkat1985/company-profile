import type { Metadata } from "next";
import Link from "next/link";
import { team } from "@/data/company";

export const metadata: Metadata = { title: "Tim Kami" };

export default function TimPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-700 px-4 py-14 text-center text-white sm:px-6">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Tim Kami</h1>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100">
          Dipimpin oleh para profesional berpengalaman yang berdedikasi pada
          kualitas, keamanan, dan kepuasan klien.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-extrabold text-white ${m.color}`}
              >
                {m.initials}
              </span>
              <h2 className="mt-4 font-bold text-slate-900">{m.name}</h2>
              <p className="text-sm font-semibold text-blue-700">{m.role}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {m.expertise}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl bg-blue-50 p-8 sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Budaya Kerja Kami
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Kami menjunjung transparansi, kolaborasi, dan continuous learning.
              Setiap proyek dikerjakan dengan standar DevSecOps: code review,
              automated testing, dan security check sebelum rilis.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {[
              "Update progres mingguan yang transparan",
              "Dokumentasi teknis lengkap untuk setiap serah terima",
              "Garansi bug 90 hari setelah go-live",
              "Dukungan SLA 24/7 untuk layanan kritikal",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 rounded-xl bg-white p-3 shadow-sm">
                <span className="text-blue-600">✓</span> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/kontak"
            className="inline-block rounded-xl bg-blue-700 px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-800"
          >
            Bekerja Sama dengan Kami
          </Link>
        </div>
      </section>
    </>
  );
}
