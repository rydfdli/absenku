"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Plus,
  CalendarDays,
  Clock3,
  Users,
  ChevronRight,
  Loader2,
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
  const [visiblePickets, setVisiblePickets] = useState(
    pickets.slice(0, 10)
  );

  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // ============================
  // LOAD DATA LAMA
  // ============================
  const loadMore = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const currentLength = visiblePickets.length;

      const nextData = pickets.slice(
        currentLength,
        currentLength + 10
      );

      if (nextData.length === 0) {
        setHasMore(false);
      } else {
        setVisiblePickets((prev) => [
          ...prev,
          ...nextData,
        ]);
      }

      setLoading(false);
    }, 700);
  };

  // ============================
  // INFINITE SCROLL
  // ============================
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 300) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore, visiblePickets]);


  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            Pencatatan
          </p>

          <h1 className="mt-1 text-2xl font-black text-[#10264d] sm:text-3xl">
            Piket
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Catat jadwal dan kehadiran pegawai.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-blue-600
            px-5 py-3
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-blue-200
            transition
            hover:bg-blue-700
          "
        >
          <Plus size={18} />
          Tambah Piket
        </button>

      </div>


      {/* ================= LIST HEADER ================= */}
      <div className="mt-6 hidden rounded-2xl bg-slate-50 px-5 py-3 md:grid md:grid-cols-[minmax(260px,1fr)_120px_120px_150px_30px] md:items-center">

        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Tanggal
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Jadwal
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Pegawai
        </span>

        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Status
        </span>

        <span />

      </div>


      {/* ================= LIST ================= */}
      <div className="mt-3 space-y-3">

        {visiblePickets.map((picket) => (

          <Link
            key={picket.id}
            href={`/pickets/${picket.id}`}
            className="
              group
              block
              rounded-[22px]
              border
              border-blue-100
              bg-white
              p-4
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:shadow-md
              sm:p-5
            "
          >

            {/* ================= DESKTOP ================= */}
            <div className="hidden md:grid md:grid-cols-[minmax(260px,1fr)_120px_120px_150px_30px] md:items-center">

              {/* DATE */}
              <div className="flex min-w-0 items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CalendarDays size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-blue-600">
                    {picket.day}
                  </p>

                  <h2 className="truncate text-sm font-black text-slate-800 lg:text-base">
                    {picket.date}
                  </h2>
                </div>

              </div>


              {/* TIME */}
              <div>
                <p className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Clock3
                    size={16}
                    className="text-blue-500"
                  />
                  {picket.time}
                </p>
              </div>


              {/* EMPLOYEES */}
              <div>
                <p className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Users
                    size={16}
                    className="text-blue-500"
                  />
                  {picket.employees}
                </p>
              </div>


              {/* STATUS */}
              <div>
                <StatusBadge status={picket.status} />
              </div>


              {/* ARROW */}
              <div className="flex justify-end">
                <ChevronRight
                  size={19}
                  className="
                    text-slate-300
                    transition
                    group-hover:translate-x-1
                    group-hover:text-blue-500
                  "
                />
              </div>

            </div>


            {/* ================= MOBILE ================= */}
            <div className="md:hidden">

              {/* DATE */}
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CalendarDays size={19} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-[11px] font-semibold text-blue-600">
                    {picket.day}
                  </p>

                  <h2 className="truncate text-sm font-black text-slate-800">
                    {picket.date}
                  </h2>

                </div>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-slate-300"
                />

              </div>


              {/* DATA */}
              <div className="mt-4 grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 pt-4">

                {/* JADWAL */}
                <div className="px-2 first:pl-0">

                  <p className="text-[10px] text-slate-400">
                    Jadwal
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Clock3
                      size={14}
                      className="text-blue-500"
                    />
                    {picket.time}
                  </p>

                </div>


                {/* PEGAWAI */}
                <div className="px-3">

                  <p className="text-[10px] text-slate-400">
                    Pegawai
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Users
                      size={14}
                      className="text-blue-500"
                    />
                    {picket.employees}
                  </p>

                </div>


                {/* STATUS */}
                <div className="px-2 pr-0">

                  <p className="text-[10px] text-slate-400">
                    Status
                  </p>

                  <div className="mt-1">
                    <StatusBadge status={picket.status} />
                  </div>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>


      {/* ================= LOADING ================= */}
      {loading && (
        <div className="flex items-center justify-center py-8">

          <div className="flex items-center gap-2 text-sm text-slate-400">

            <Loader2
              size={18}
              className="animate-spin text-blue-500"
            />

            Memuat data lama...

          </div>

        </div>
      )}


      {/* ================= END ================= */}
      {!hasMore && !loading && (
        <div className="py-8 text-center">

          <p className="text-xs text-slate-400">
            Semua data piket telah ditampilkan.
          </p>

        </div>
      )}

    </div>
  );
}


/* ================= STATUS ================= */

function StatusBadge({ status }) {
  const isDone = status === "Selesai";

  return (
    <span
      className={`
        inline-flex
        items-center
        whitespace-nowrap
        rounded-full
        px-3
        py-1
        text-[10px]
        font-bold
        ${
          isDone
            ? "bg-emerald-50 text-emerald-600"
            : "bg-blue-50 text-blue-600"
        }
      `}
    >
      <span
        className={`
          mr-1.5
          h-1.5
          w-1.5
          rounded-full
          ${isDone ? "bg-emerald-500" : "bg-blue-500"}
        `}
      />

      {status}
    </span>
  );
}