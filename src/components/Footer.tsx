import Link from "next/link";
import { company, navLinks } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              S
            </span>
            <span className="text-base font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">{company.description}</p>
          <p className="mt-4 text-sm">{company.address}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigasi</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Kontak</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{company.email}</li>
            <li>{company.phone}</li>
            <li>{company.whatsapp}</li>
            <li>{company.hours}</li>
          </ul>
          <Link
            href="/kontak"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {company.name}. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat dengan Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
