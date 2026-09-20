"use client";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Plus,
  Edit3,
} from "lucide-react";

import Link from "next/link";

const employees = [
  {
    name: "Andi Pratama",
    time: "08:30",
    status: "Tepat waktu",
    late: "-",
  },
  {
    name: "Budi Santoso",
    time: "08:45",
    status: "Tepat waktu",
    late: "-",
  },
  {
    name: "Citra Lestari",
    time: "08:52",
    status: "Tepat waktu",
    late: "-",
  },
  {
    name: "Deni Maulana",
    time: "09:05",
    status: "Terlambat",
    late: "5 menit",
  },
  {
    name: "Eko Saputra",
    time: "",
    status: "Belum absen",
    late: "-",
  },
];

export default function PicketDetailPage() {

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      {/* BACK */}

      <Link
        href="/pickets"
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-600"
      >
        <ArrowLeft size={17} />
        Kembali ke Piket
      </Link>


      {/* HEADER */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-sm font-semibold text-blue-600">
            Selasa, 18 September 2026
          </p>

          <h1 className="mt-1 text-2xl font-black sm:text-3xl">
            Piket Hari Ini
          </h1>

        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white">
          <Plus size={18} />
          Tambah Pegawai
        </button>

      </div>


      {/* INFO */}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">

        <Info
          icon={<CalendarDays />}
          title="Tanggal"
          value="18 September 2026"
        />

        <Info
          icon={<Clock3 />}
          title="Jadwal Masuk"
          value="08:45"
        />

        <Info
          icon={<Clock3 />}
          title="Toleransi"
          value="15 menit"
        />

      </div>


      {/* TABLE */}

      <div className="mt-5 overflow-hidden rounded-[25px] border border-blue-100 bg-white shadow-sm">

        <div className="border-b border-slate-100 p-5">
          <h2 className="font-extrabold">
            Daftar Pegawai Piket
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Masukkan jam masuk aktual masing-masing pegawai.
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px] text-left text-sm">

            <thead className="bg-slate-50 text-xs text-slate-400">
              <tr>
                <th className="px-5 py-4">Pegawai</th>
                <th className="px-5 py-4">Jam Masuk</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Keterlambatan</th>
                <th className="px-5 py-4 text-right">Aksi</th>
              </tr>
            </thead>

            <tbody>

              {employees.map((employee) => (

                <tr
                  key={employee.name}
                  className="border-t border-slate-100"
                >

                  <td className="px-5 py-4 font-semibold">
                    {employee.name}
                  </td>

                  <td className="px-5 py-4">

                    <input
                      type="time"
                      defaultValue={employee.time}
                      className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    />

                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`text-xs font-bold ${
                        employee.status === "Terlambat"
                          ? "text-red-500"
                          : employee.status === "Tepat waktu"
                          ? "text-emerald-500"
                          : "text-slate-400"
                      }`}
                    >
                      ● {employee.status}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-xs font-semibold text-red-500">
                    {employee.late}
                  </td>

                  <td className="px-5 py-4 text-right">

                    <button className="rounded-xl p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600">
                      <Edit3 size={17} />
                    </button>

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


function Info({
  icon,
  title,
  value,
}) {

  return (
    <div className="flex items-center gap-4 rounded-[22px] border border-blue-100 bg-white p-5 shadow-sm">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>

        <p className="text-xs text-slate-400">
          {title}
        </p>

        <p className="mt-1 font-bold">
          {value}
        </p>

      </div>

    </div>
  );
}