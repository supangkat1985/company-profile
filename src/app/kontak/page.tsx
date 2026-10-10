"use client";
import { useState } from "react";
import { company } from "@/data/company";

export default function KontakPage() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [ok, setOk] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.email || !form.pesan) return;
    setOk(true);
    setForm({ nama: "", email: "", pesan: "" });
    setTimeout(() => setOk(false), 6000);
  };
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-700 px-4 py-14 text-center text-white">
        <h1 className="text-3xl font-extrabold">Hubungi Kami</h1>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100">Tim kami siap membantu dalam 1x24 jam kerja.</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border p-5">📍 {company.address}</div>
          <div className="rounded-2xl border p-5">📞 {company.phone} / {company.whatsapp}</div>
          <div className="rounded-2xl border p-5">✉️ {company.email}</div>
          <div className="rounded-2xl border p-5">🕘 {company.hours}</div>
        </div>
        <form onSubmit={submit} className="rounded-2xl border p-6 lg:col-span-3">
          <h2 className="text-xl font-bold">Kirim Pesan</h2>
          {ok && <div className="mt-4 rounded-xl bg-green-50 p-4 text-sm text-green-800">Pesan terkirim! Terima kasih.</div>}
          <input name="nama" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} placeholder="Nama" required className="mt-4 w-full rounded-xl border px-4 py-3 text-sm" />
          <input name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" required className="mt-4 w-full rounded-xl border px-4 py-3 text-sm" />
          <textarea name="pesan" value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} rows={5} placeholder="Pesan" required className="mt-4 w-full rounded-xl border px-4 py-3 text-sm" />
          <button className="mt-6 rounded-xl bg-blue-700 px-8 py-3 text-sm font-bold text-white">Kirim Pesan</button>
        </form>
      </section>
    </>
  );
}
