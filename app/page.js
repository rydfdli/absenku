"use client";

import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Edit3,
  Plus,
  Users,
  ClipboardList,
  BarChart3,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Andi Pratama",
    time: "08:30",
    status: "Tepat waktu",
    late: "-",
  },
  {
    id: 2,
    name: "Budi Santoso",
    time: "08:45",
    status: "Tepat waktu",
    late: "-",
  },
  {
    id: 3,
    name: "Citra Lestari",
    time: "08:52",
    status: "Tepat waktu",
    late: "-",
  },
  {
    id: 4,
    name: "Deni Maulana",
    time: "09:05",
    status: "Terlambat",
    late: "20 menit",
  },
  {
    id: 5,
    name: "Eko Saputra",
    time: "-",
    status: "Belum absen",
    late: "-",
  },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-[1500px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      {/* HERO */}

      {/* HERO */}
<section className="relative w-full overflow-hidden rounded-3xl bg-[#eaf6ff] min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]">

  {/* Background image */}
  <img
    src="/images/piketku-hero.png"
    alt=""
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[65%_center]
      sm:object-[68%_center]
      lg:object-center
    "
  />

  {/* Overlay */}
  <div className="
    absolute inset-0
    bg-gradient-to-r
    from-white/95
    via-white/80
    to-white/10
    sm:from-white/95
    sm:via-white/65
    sm:to-transparent
  " />

  {/* Content */}
  <div className="
    relative z-10
    flex min-h-[280px]
    items-center
    px-5 py-8
    sm:min-h-[300px] sm:px-8
    lg:min-h-[320px] lg:px-10
  ">
    <div className="max-w-[55%] sm:max-w-lg">

      <span className="
        inline-flex
        rounded-full
        bg-blue-100
        px-3 py-1
        text-[11px] font-bold
        text-blue-700
        sm:text-xs
      ">
        PiketKu
      </span>

      <h1 className="
        mt-3
        text-2xl font-extrabold
        leading-tight tracking-tight
        text-[#10264d]
        sm:mt-4 sm:text-3xl
        lg:text-4xl
      ">
        Catat Kehadiran
      </h1>

      <p className="
        mt-2
        max-w-md
        text-xs leading-5
        text-slate-600
        sm:mt-3 sm:text-sm sm:leading-6
        lg:text-base
      ">
        Kelola jadwal piket dan catat kehadiran pegawai
        dengan lebih mudah dan teratur.
      </p>

      <button className="
        mt-4
        rounded-xl
        bg-blue-600
        px-4 py-2.5
        text-xs font-bold
        text-white
        shadow-lg shadow-blue-200
        transition
        hover:bg-blue-700
        sm:mt-5 sm:px-5 sm:py-3 sm:text-sm
      ">
        + Tambah Piket
      </button>

    </div>
  </div>
</section>


      {/* MAIN */}

      <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-[1.65fr_0.85fr]">

  {/* TODAY */}
  <section className="min-w-0 rounded-[25px] border border-blue-100 bg-white p-4 shadow-sm sm:p-6">

    {/* HEADER */}
    <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <div className="flex items-center gap-2">
          <CalendarDays
            size={20}
            className="shrink-0 text-blue-600"
          />

          <h2 className="font-extrabold text-slate-800">
            Piket Hari Ini
          </h2>
        </div>

        <p className="mt-1 pl-7 text-xs text-slate-400">
          18 September 2026
        </p>
      </div>

      <Link
        href="/pickets"
        className="self-start text-xs font-bold text-blue-600 transition hover:text-blue-700 sm:self-auto"
      >
        Lihat Detail →
      </Link>

    </div>


    {/* INFO */}
    <div className="mb-4 grid gap-3 sm:mb-5 sm:grid-cols-2">

      {/* JADWAL */}
      <div className="flex items-center gap-3 rounded-2xl bg-[#eff8ff] p-3.5 sm:gap-4 sm:p-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 sm:h-12 sm:w-12">
          <Clock3 size={22} />
        </div>

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Jadwal Masuk
          </p>

          <p className="text-xl font-black text-slate-800 sm:text-2xl">
            08:45
          </p>

          <p className="text-xs text-slate-400">
            Toleransi 15 menit
          </p>
        </div>

      </div>


      {/* PEGAWAI */}
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#f7fbff] p-3.5 sm:p-4">

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Pegawai Piket
          </p>

          <p className="mt-1 font-extrabold text-slate-800">
            5 Pegawai
          </p>
        </div>

        <div className="flex shrink-0 -space-x-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-bold text-blue-600 sm:h-9 sm:w-9 sm:text-xs"
            >
              {item}
            </div>
          ))}
        </div>

      </div>

    </div>


    {/* ================= DESKTOP TABLE ================= */}
    <div className="hidden md:block overflow-x-auto">

      <table className="w-full text-left text-sm">

        <thead className="bg-slate-50 text-xs text-slate-400">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Pegawai</th>
            <th className="px-4 py-3">Jam Masuk</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Keterlambatan</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>

        <tbody>

          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b border-slate-100 last:border-0"
            >

              <td className="px-4 py-3 text-xs text-slate-400">
                {employee.id}
              </td>

              <td className="px-4 py-3 font-semibold text-slate-700">
                {employee.name}
              </td>

              <td className="px-4 py-3 text-slate-600">
                {employee.time}
              </td>

              <td className="px-4 py-3">
                <Status status={employee.status} />
              </td>

              <td className="px-4 py-3 text-xs font-semibold text-red-500">
                {employee.late}
              </td>

              <td className="px-4 py-3 text-right">
                <button
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  <Edit3 size={16} />
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>


    {/* ================= MOBILE CARDS ================= */}
    <div className="space-y-3 md:hidden">

      {employees.map((employee) => (
        <div
          key={employee.id}
          className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
        >

          {/* NAME + EDIT */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <p className="truncate text-sm font-bold text-slate-800">
                {employee.name}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Jam masuk:{" "}
                <span className="font-semibold text-slate-600">
                  {employee.time}
                </span>
              </p>

            </div>

            <button
              className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Edit3 size={16} />
            </button>

          </div>


          {/* STATUS */}
          <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">

            <Status status={employee.status} />

            {employee.late !== "-" && (
              <span className="text-xs font-semibold text-red-500">
                {employee.late}
              </span>
            )}

          </div>

        </div>
      ))}

    </div>

  </section>


  {/* RIGHT */}
  <div className="min-w-0 space-y-4 sm:space-y-5">

    <CalendarWidget />

    <Recap />

  </div>

</div>


      {/* ACTIVITY */}

      <section className="mt-5 rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm sm:p-6">

        <div className="mb-5 flex justify-between">

          <div className="flex items-center gap-2">
            <Clock3
              size={20}
              className="text-blue-600"
            />

            <h2 className="font-extrabold">
              Aktivitas Terbaru
            </h2>
          </div>

          <button className="text-xs font-bold text-blue-600">
            Lihat Semua →
          </button>

        </div>

        <div className="space-y-4">

          <Activity
            icon={<Clock3 size={17} />}
            text="Andi Pratama mengisi jam masuk 08:30"
            time="18 Sep 2026 • 08:31"
          />

          <Activity
            icon={<CheckCircle2 size={17} />}
            text="Citra Lestari mengisi jam masuk 08:52"
            time="18 Sep 2026 • 08:54"
          />

          <Activity
            icon={<AlertCircle size={17} />}
            text="Deni Maulana terlambat 20 menit"
            time="18 Sep 2026 • 09:06"
          />

        </div>

      </section>

    </div>
  );
}


/* ================= COMPONENT ================= */

function Stat({
  icon,
  title,
  value,
  badge,
  color,
}) {

  const colors = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-500",
    green: "bg-emerald-50 text-emerald-500",
  };

  return (
    <div className="rounded-[22px] border border-blue-100 bg-white p-4 shadow-sm sm:p-5">

      <div className="flex items-start justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${colors[color]}`}
        >
          {icon}
        </div>

        {badge && (
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-500">
            {badge}
          </span>
        )}

      </div>

      <p className="mt-4 text-2xl font-black">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {title}
      </p>

    </div>
  );
}


function Status({ status }) {

  const config = {
    "Tepat waktu": {
      color: "text-emerald-500",
      dot: "bg-emerald-500",
    },

    "Terlambat": {
      color: "text-red-500",
      dot: "bg-red-500",
    },

    "Belum absen": {
      color: "text-slate-400",
      dot: "bg-slate-300",
    },
  };

  const item = config[status];

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold ${item.color}`}>
      <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
      {status}
    </span>
  );
}


function CalendarWidget() {

  const days = [
    "", "", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10", "11", "12",
    "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26",
    "27", "28", "29", "30", "", "", "",
  ];

  return (
    <div className="rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm">

      <div className="mb-5 flex justify-between">

        <h2 className="font-extrabold">
          Kalender
        </h2>

        <a className="text-xs font-bold text-blue-600">
          Lihat Semua
        </a>

      </div>

      <div className="mb-5 flex items-center justify-between">

        <button>
          ←
        </button>

        <b className="text-sm">
          September 2026
        </b>

        <button>
          →
        </button>

      </div>

      <div className="grid grid-cols-7 text-center">

        {[
          "Sen",
          "Sel",
          "Rab",
          "Kam",
          "Jum",
          "Sab",
          "Min",
        ].map((day) => (
          <span
            key={day}
            className="py-2 text-[10px] font-semibold text-slate-400"
          >
            {day}
          </span>
        ))}

        {days.map((day, index) => (
          <div
            key={index}
            className="flex h-8 items-center justify-center"
          >
            {day && (
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                  day === "18"
                    ? "bg-blue-600 font-bold text-white"
                    : ["1", "2", "3", "4", "5", "8", "11", "12"].includes(day)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500"
                }`}
              >
                {day}
              </span>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}


function Recap() {

  return (
    <div className="rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm">

      <div className="mb-5 flex justify-between">

        <h2 className="font-extrabold">
          Rekap Bulan Ini
        </h2>

        <button className="text-xs font-bold text-blue-600">
          Detail
        </button>

      </div>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <Users className="text-blue-600" />

          <div>
            <b>12</b>
            <p className="text-xs text-slate-400">
              Rata-rata piket/pegawai
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" />

          <div>
            <b>83%</b>
            <p className="text-xs text-slate-400">
              Persentase tepat waktu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="text-red-500" />

          <div>
            <b>214 menit</b>
            <p className="text-xs text-slate-400">
              Total keterlambatan
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}


function Activity({
  icon,
  text,
  time,
}) {

  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-slate-600">
          {text}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          {time}
        </p>
      </div>

    </div>
  );
}