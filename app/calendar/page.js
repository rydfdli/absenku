"use client";

import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

const days = [
  "", "", "1", "2", "3", "4", "5",
  "6", "7", "8", "9", "10", "11", "12",
  "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26",
  "27", "28", "29", "30", "", "", "",
];

const picketDays = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "8",
  "11",
  "12",
  "15",
  "18",
  "19",
  "20",
];

export default function CalendarPage() {

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      <div className="mb-6">

        <p className="text-sm font-semibold text-blue-600">
          Jadwal
        </p>

        <h1 className="mt-1 text-2xl font-black sm:text-3xl">
          Kalender Piket
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Lihat seluruh catatan piket berdasarkan tanggal.
        </p>

      </div>


      <div className="rounded-[28px] border border-blue-100 bg-white p-5 shadow-sm sm:p-8">

        {/* MONTH */}

        <div className="mb-8 flex items-center justify-between">

          <button className="rounded-xl p-3 hover:bg-blue-50">
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-3">

            <CalendarDays className="text-blue-600" />

            <h2 className="text-xl font-black">
              September 2026
            </h2>

          </div>

          <button className="rounded-xl p-3 hover:bg-blue-50">
            <ChevronRight size={20} />
          </button>

        </div>


        {/* WEEK */}

        <div className="grid grid-cols-7 border-b border-slate-100 pb-3 text-center">

          {[
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
            "Minggu",
          ].map((day) => (

            <span
              key={day}
              className="text-xs font-bold text-slate-400"
            >
              {day}
            </span>

          ))}

        </div>


        {/* DAYS */}

        <div className="mt-3 grid grid-cols-7">

          {days.map((day, index) => {

            const hasPicket =
              picketDays.includes(day);

            const today =
              day === "18";

            return (
              <div
                key={index}
                className="min-h-[85px] border-b border-r border-slate-100 p-2 sm:min-h-[110px]"
              >

                {day && (

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      today
                        ? "bg-blue-600 text-white"
                        : hasPicket
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-500"
                    }`}
                  >
                    {day}
                  </div>

                )}

                {hasPicket && (

                  <div className="mt-3 hidden rounded-lg bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-600 sm:block">
                    Piket
                  </div>

                )}

              </div>
            );
          })}

        </div>


        {/* LEGEND */}

        <div className="mt-6 flex gap-5 text-xs text-slate-400">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-600" />
            Hari ini
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-100" />
            Ada piket
          </div>

        </div>

      </div>

    </div>
  );
}