"use client";

import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";

const employees = [
  { id: 1, name: "Andi Pratama", nip: "199501012020011001", position: "Staf" },
  { id: 2, name: "Budi Santoso", nip: "199502022020011002", position: "Staf" },
  { id: 3, name: "Citra Lestari", nip: "199503032020011003", position: "Staf" },
  { id: 4, name: "Deni Maulana", nip: "199504042020011004", position: "Staf" },
  { id: 5, name: "Eko Saputra", nip: "199505052020011005", position: "Staf" },
  { id: 6, name: "Fajar Hidayat", nip: "199506062020011006", position: "Staf" },
  { id: 7, name: "Gilang Ramadhan", nip: "199507072020011007", position: "Staf" },
  { id: 8, name: "Hendra Wijaya", nip: "199508082020011008", position: "Staf" },
  { id: 9, name: "Indra Kurniawan", nip: "199509092020011009", position: "Staf" },
  { id: 10, name: "Joko Susanto", nip: "199510102020011010", position: "Staf" },
  { id: 11, name: "Kurniawan", nip: "199511112020011011", position: "Staf" },
  { id: 12, name: "Lina Marlina", nip: "199512122020011012", position: "Staf" },
];

const ITEMS_PER_PAGE = 5;

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter berdasarkan pencarian
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const keyword = search.toLowerCase();

      return (
        employee.name.toLowerCase().includes(keyword) ||
        employee.nip.toLowerCase().includes(keyword) ||
        employee.position.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  // Total halaman
  const totalPages = Math.ceil(
    filteredEmployees.length / ITEMS_PER_PAGE
  );

  // Data yang ditampilkan pada halaman aktif
  const paginatedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredEmployees.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredEmployees, currentPage]);

  // Reset halaman ketika melakukan pencarian
  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // Pindah halaman
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 pt-5 pb-8 sm:px-6 lg:px-8 lg:pt-7">

      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={20} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-[#10264d] sm:text-2xl">
                Data Pegawai
              </h1>

              <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                Kelola data pegawai PiketKu
              </p>
            </div>
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700">
          <Plus size={18} />
          Tambah Pegawai
        </button>

      </div>


      {/* CARD */}
      <section className="overflow-hidden rounded-[25px] border border-blue-100 bg-white shadow-sm">

        {/* SEARCH */}
        <div className="border-b border-slate-100 p-4 sm:p-5">

          <div className="relative max-w-md">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari nama, NIP, atau jabatan..."
              className="
                w-full rounded-xl
                border border-slate-200
                bg-slate-50
                py-3 pl-10 pr-4
                text-sm
                outline-none
                transition
                focus:border-blue-400
                focus:bg-white
                focus:ring-2
                focus:ring-blue-100
              "
            />

          </div>

        </div>


        {/* TABLE DESKTOP */}
        <div className="hidden overflow-x-auto md:block">

          <table className="w-full text-left text-sm">

            <thead className="bg-slate-50 text-xs text-slate-400">
              <tr>
                <th className="px-5 py-3">#</th>
                <th className="px-5 py-3">Nama Pegawai</th>
                <th className="px-5 py-3">NIP</th>
                <th className="px-5 py-3">Jabatan</th>
                <th className="px-5 py-3 text-right">Aksi</th>
              </tr>
            </thead>

            <tbody>

              {paginatedEmployees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className="border-b border-slate-100 last:border-0"
                >

                  <td className="px-5 py-4 text-xs text-slate-400">
                    {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                  </td>

                  <td className="px-5 py-4 font-semibold text-slate-700">
                    {employee.name}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {employee.nip}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {employee.position}
                  </td>

                  <td className="px-5 py-4 text-right">

                    <button className="mr-1 rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600">
                      <Edit3 size={16} />
                    </button>

                    <button className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        {/* MOBILE */}
        <div className="space-y-3 p-4 md:hidden">

          {paginatedEmployees.map((employee, index) => (
            <div
              key={employee.id}
              className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                  <p className="text-sm font-bold text-slate-800">
                    {employee.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    NIP: {employee.nip}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {employee.position}
                  </p>

                </div>

                <div className="flex shrink-0">

                  <button className="rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600">
                    <Edit3 size={16} />
                  </button>

                  <button className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* EMPTY */}
        {paginatedEmployees.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="text-sm font-semibold text-slate-500">
              Data pegawai tidak ditemukan
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Coba gunakan kata pencarian yang berbeda.
            </p>
          </div>
        )}


        {/* PAGINATION */}
        {filteredEmployees.length > 0 && (
          <div className="
            flex flex-col gap-3
            border-t border-slate-100
            px-4 py-4
            sm:flex-row sm:items-center sm:justify-between
            sm:px-5
          ">

            {/* INFO */}
            <p className="text-xs text-slate-400">
              Menampilkan{" "}
              <span className="font-semibold text-slate-600">
                {(currentPage - 1) * ITEMS_PER_PAGE + 1}
              </span>
              {" - "}
              <span className="font-semibold text-slate-600">
                {Math.min(
                  currentPage * ITEMS_PER_PAGE,
                  filteredEmployees.length
                )}
              </span>
              {" dari "}
              <span className="font-semibold text-slate-600">
                {filteredEmployees.length}
              </span>{" "}
              pegawai
            </p>


            {/* BUTTONS */}
            <div className="flex items-center justify-between gap-1 sm:justify-end">

              {/* PREVIOUS */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-slate-500
                  transition
                  hover:bg-blue-50
                  hover:text-blue-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ChevronLeft size={17} />
              </button>


              {/* PAGE NUMBERS */}
              <div className="flex items-center gap-1">

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`
                      flex h-9 min-w-9
                      items-center justify-center
                      rounded-lg
                      px-2
                      text-xs font-bold
                      transition
                      ${
                        currentPage === page
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}

              </div>


              {/* NEXT */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-slate-500
                  transition
                  hover:bg-blue-50
                  hover:text-blue-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ChevronRight size={17} />
              </button>

            </div>

          </div>
        )}

      </section>

    </div>
  );
}