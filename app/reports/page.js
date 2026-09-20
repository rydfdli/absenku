"use client";

import {
  CheckCircle2,
  Clock3,
  Users,
  Download,
} from "lucide-react";

const reports = [
  ["Andi Pratama", 12, 10, 2, 35],
  ["Budi Santoso", 11, 9, 2, 28],
  ["Citra Lestari", 10, 10, 0, 0],
  ["Deni Maulana", 12, 8, 4, 64],
  ["Eko Saputra", 9, 8, 1, 12],
];

export default function ReportsPage() {

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-sm font-semibold text-blue-600">
            Laporan
          </p>

          <h1 className="mt-1 text-2xl font-black sm:text-3xl">
            Rekap Kehadiran
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Rekap piket dan ketepatan waktu pegawai.
          </p>

        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white">
          <Download size={18} />
          Export
        </button>

      </div>


      {/* FILTER */}

      <div className="mt-6 rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm">

        <div className="grid gap-4 sm:grid-cols-3">

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Bulan
            </label>

            <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm">
              <option>September</option>
              <option>Agustus</option>
              <option>Juli</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Tahun
            </label>

            <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm">
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Pegawai
            </label>

            <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm">
              <option>Semua Pegawai</option>
              <option>Andi Pratama</option>
              <option>Budi Santoso</option>
              <option>Citra Lestari</option>
            </select>
          </div>

        </div>

      </div>


      {/* SUMMARY */}

      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">

        <Summary
          icon={<Users />}
          value="54"
          label="Total Piket"
        />

        <Summary
          icon={<CheckCircle2 />}
          value="45"
          label="Tepat Waktu"
        />

        <Summary
          icon={<Clock3 />}
          value="9"
          label="Terlambat"
        />

        <Summary
          icon={<Clock3 />}
          value="139"
          label="Menit Terlambat"
        />

      </div>


      {/* TABLE */}

      <div className="mt-5 overflow-hidden rounded-[25px] border border-blue-100 bg-white shadow-sm">

        <div className="border-b border-slate-100 p-5">
          <h2 className="font-extrabold">
            Rekap Pegawai
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px] text-left text-sm">

            <thead className="bg-slate-50 text-xs text-slate-400">

              <tr>
                <th className="px-5 py-4">Pegawai</th>
                <th className="px-5 py-4">Total Piket</th>
                <th className="px-5 py-4">Tepat Waktu</th>
                <th className="px-5 py-4">Terlambat</th>
                <th className="px-5 py-4">Menit Terlambat</th>
              </tr>

            </thead>

            <tbody>

              {reports.map((report) => (

                <tr
                  key={report[0]}
                  className="border-t border-slate-100"
                >

                  <td className="px-5 py-4 font-bold">
                    {report[0]}
                  </td>

                  <td className="px-5 py-4">
                    {report[1]}
                  </td>

                  <td className="px-5 py-4 font-semibold text-emerald-500">
                    {report[2]}
                  </td>

                  <td className="px-5 py-4 font-semibold text-red-500">
                    {report[3]}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {report[4]} menit
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}


function Summary({
  icon,
  value,
  label,
}) {

  return (
    <div className="rounded-[22px] border border-blue-100 bg-white p-4 shadow-sm">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="mt-4 text-2xl font-black">
        {value}
      </p>

      <p className="text-xs text-slate-400">
        {label}
      </p>

    </div>
  );
}