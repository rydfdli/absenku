"use client";

import Link from "next/link";

import {
  Plus,
  CalendarDays,
  Clock3,
  Users,
  ChevronRight,
} from "lucide-react";

const pickets = [
  {
    id: 1,
    date: "18 September 2026",
    day: "Selasa",
    time: "08:45",
    employees: 5,
    status: "Selesai",
  },
  {
    id: 2,
    date: "19 September 2026",
    day: "Rabu",
    time: "08:45",
    employees: 4,
    status: "Belum dimulai",
  },
  {
    id: 3,
    date: "20 September 2026",
    day: "Kamis",
    time: "08:45",
    employees: 5,
    status: "Belum dimulai",
  },
  {
    id: 4,
    date: "21 September 2026",
    day: "Jumat",
    time: "08:45",
    employees: 4,
    status: "Belum dimulai",
  },
];

export default function PicketsPage() {

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-sm font-semibold text-blue-600">
            Pencatatan
          </p>

          <h1 className="mt-1 text-2xl font-black sm:text-3xl">
            Piket
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Catat jadwal dan kehadiran pegawai.
          </p>

        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200">

          <Plus size={18} />

          Tambah Piket

        </button>

      </div>


      {/* LIST */}

      <div className="mt-6 grid gap-4">

        {pickets.map((picket) => (

          <Link
            key={picket.id}
            href={`/pickets/${picket.id}`}
            className="group rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* DATE */}

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

                  <CalendarDays size={20} />

                </div>

                <div>

                  <p className="text-xs font-semibold text-blue-600">
                    {picket.day}
                  </p>

                  <h2 className="text-lg font-black">
                    {picket.date}
                  </h2>

                </div>

              </div>


              {/* DATA */}

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                <div>
                  <p className="text-[11px] text-slate-400">
                    Jadwal
                  </p>

                  <p className="mt-1 flex items-center gap-1 font-bold">
                    <Clock3 size={15} />
                    {picket.time}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Pegawai
                  </p>

                  <p className="mt-1 flex items-center gap-1 font-bold">
                    <Users size={15} />
                    {picket.employees}
                  </p>
                </div>

                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                      picket.status === "Selesai"
                        ? "bg-emerald-50 text-emerald-500"
                        : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    {picket.status}
                  </span>
                </div>

              </div>


              <ChevronRight
                size={20}
                className="hidden text-slate-300 transition group-hover:translate-x-1 sm:block"
              />

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}