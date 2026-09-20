"use client";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Plus,
  Edit3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";
import { useMemo, useState } from "react";

const employees = [
  {
    name: "Andi Pratama",
    time: "08:30",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Budi Santoso",
    time: "08:45",
    status: "Tepat waktu",
    late: "-",
    keterangan: "Hadir sesuai jadwal",
  },
  {
    name: "Citra Lestari",
    time: "08:52",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Deni Maulana",
    time: "09:05",
    status: "Terlambat",
    late: "5 menit",
    keterangan: "Terlambat karena urusan dinas",
  },
  {
    name: "Eko Saputra",
    time: "",
    status: "Belum absen",
    late: "-",
    keterangan: "Izin",
  },
  {
    name: "Fajar Hidayat",
    time: "08:40",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Gilang Ramadhan",
    time: "08:48",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Hendra Wijaya",
    time: "09:10",
    status: "Terlambat",
    late: "10 menit",
    keterangan: "Kendala perjalanan",
  },
  {
    name: "Indra Kurniawan",
    time: "08:42",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Joko Susanto",
    time: "",
    status: "Belum absen",
    late: "-",
    keterangan: "Dinas luar",
  },
  {
    name: "Kamaluddin",
    time: "08:35",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Lukman Hakim",
    time: "08:55",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "M. Rizky",
    time: "09:02",
    status: "Terlambat",
    late: "2 menit",
    keterangan: "",
  },
  {
    name: "Nanda Saputra",
    time: "08:44",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Oki Prasetyo",
    time: "",
    status: "Belum absen",
    late: "-",
    keterangan: "Tidak hadir",
  },
  {
    name: "Putra Wijaya",
    time: "08:38",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Rian Maulana",
    time: "08:47",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Sandi Firmansyah",
    time: "09:08",
    status: "Terlambat",
    late: "8 menit",
    keterangan: "Kendala kendaraan",
  },
  {
    name: "Taufik Hidayat",
    time: "08:41",
    status: "Tepat waktu",
    late: "-",
    keterangan: "",
  },
  {
    name: "Umar Fauzi",
    time: "",
    status: "Belum absen",
    late: "-",
    keterangan: "Izin",
  },
];

const ITEMS_PER_PAGE = 15;

export default function PicketDetailPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    employees.length / ITEMS_PER_PAGE
  );

  const currentEmployees = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE;

    const endIndex =
      startIndex + ITEMS_PER_PAGE;

    return employees.slice(startIndex, endIndex);
  }, [currentPage]);

  const startItem =
    employees.length === 0
      ? 0
      : (currentPage - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(
    currentPage * ITEMS_PER_PAGE,
    employees.length
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      {/* BACK */}
      <Link
        href="/pickets"
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-blue-600"
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

        <button
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Tambah Pegawai
        </button>

      </div>

      {/* INFO */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">

        <Info
          icon={<CalendarDays size={20} />}
          title="Tanggal"
          value="18 September 2026"
        />

        <Info
          icon={<Clock3 size={20} />}
          title="Jadwal Masuk"
          value="08:45"
        />

        <Info
          icon={<Clock3 size={20} />}
          title="Toleransi"
          value="15 menit"
        />

      </div>

      {/* TABLE */}
      <div className="mt-5 overflow-hidden rounded-[25px] border border-blue-100 bg-white shadow-sm">

        {/* TABLE HEADER */}
        <div className="border-b border-slate-100 p-5">

          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="font-extrabold">
                Daftar Pegawai Piket
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Masukkan jam masuk aktual dan keterangan
                masing-masing pegawai.
              </p>
            </div>

            <div className="text-xs font-semibold text-slate-400">
              {employees.length} pegawai
            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px] text-left text-sm">

            {/* HEAD */}
            <thead className="bg-slate-50 text-xs text-slate-400">

              <tr>

                <th className="px-5 py-4">
                  Pegawai
                </th>

                <th className="px-5 py-4">
                  Jam Masuk
                </th>

                <th className="px-5 py-4">
                  Status
                </th>

                <th className="px-5 py-4">
                  Keterlambatan
                </th>

                <th className="px-5 py-4">
                  Keterangan
                </th>

                <th className="px-5 py-4 text-right">
                  Aksi
                </th>

              </tr>

            </thead>

            {/* BODY */}
            <tbody>

              {currentEmployees.map((employee) => (

                <tr
                  key={employee.name}
                  className="border-t border-slate-100 transition hover:bg-slate-50/70"
                >

                  {/* PEGAWAI */}
                  <td className="px-5 py-4 font-semibold">
                    {employee.name}
                  </td>

                  {/* JAM MASUK */}
                  <td className="px-5 py-4">

                    <input
                      type="time"
                      defaultValue={employee.time}
                      className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    />

                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-4">
                    <Status employee={employee} />
                  </td>

                  {/* KETERLAMBATAN */}
                  <td
                    className={`px-5 py-4 text-xs font-semibold ${
                      employee.status === "Terlambat"
                        ? "text-red-500"
                        : "text-slate-400"
                    }`}
                  >
                    {employee.late}
                  </td>

                  {/* KETERANGAN */}
                  <td className="px-5 py-4">

                    <input
                      type="text"
                      defaultValue={employee.keterangan}
                      placeholder="Tambahkan keterangan"
                      className="w-full min-w-[220px] rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition placeholder:text-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    />

                  </td>

                  {/* AKSI */}
                  <td className="px-5 py-4 text-right">

                    <button
                      className="rounded-xl p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                      title="Edit"
                    >
                      <Edit3 size={17} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (

          <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            {/* PAGINATION INFO */}
            <p className="text-xs font-medium text-slate-400">

              Menampilkan{" "}

              <span className="font-bold text-slate-600">
                {startItem}-{endItem}
              </span>{" "}

              dari{" "}

              <span className="font-bold text-slate-600">
                {employees.length}
              </span>{" "}

              pegawai

            </p>

            {/* PAGINATION BUTTON */}
            <div className="flex items-center gap-1">

              {/* PREVIOUS */}
              <button
                onClick={() =>
                  goToPage(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={17} />
              </button>

              {/* PAGE NUMBER */}
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`flex h-9 min-w-9 items-center justify-center rounded-xl px-2 text-xs font-bold transition ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {page}
                </button>

              ))}

              {/* NEXT */}
              <button
                onClick={() =>
                  goToPage(currentPage + 1)
                }
                disabled={
                  currentPage === totalPages
                }
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={17} />
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function Info({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-[22px] border border-blue-100 bg-white p-5 shadow-sm">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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

/* =========================================================
   STATUS
========================================================= */

function Status({ employee }) {
  const statusColor =
    employee.status === "Terlambat"
      ? "text-red-500"
      : employee.status === "Tepat waktu"
        ? "text-emerald-500"
        : "text-slate-400";

  return (
    <span
      className={`text-xs font-bold ${statusColor}`}
    >
      ● {employee.status}
    </span>
  );
}