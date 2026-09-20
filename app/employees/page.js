"use client";

import { Plus, Search, MoreHorizontal, Users } from "lucide-react";
import { useState } from "react";

const employees = [
  {
    id: 1,
    name: "Andi Pratama",
    nip: "199001010001",
    position: "Administrator",
    status: "Aktif",
  },
  {
    id: 2,
    name: "Budi Santoso",
    nip: "199002020002",
    position: "Pelaksana",
    status: "Aktif",
  },
  {
    id: 3,
    name: "Citra Lestari",
    nip: "199003030003",
    position: "Pelaksana",
    status: "Aktif",
  },
  {
    id: 4,
    name: "Deni Maulana",
    nip: "199004040004",
    position: "Pelaksana",
    status: "Aktif",
  },
  {
    id: 5,
    name: "Eko Saputra",
    nip: "199005050005",
    position: "Pelaksana",
    status: "Nonaktif",
  },
];

export default function EmployeesPage() {

  const [search, setSearch] = useState("");

  const filtered = employees.filter((employee) =>
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      {/* HEADER */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            Master Data
          </p>

          <h1 className="mt-1 text-2xl font-black sm:text-3xl">
            Pegawai
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Kelola data pegawai yang dapat mengikuti piket.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">

          <Plus size={18} />

          Tambah Pegawai

        </button>

      </div>


      {/* SEARCH */}

      <div className="rounded-[25px] border border-blue-100 bg-white p-4 shadow-sm">

        <div className="relative max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama pegawai..."
            className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-400 focus:bg-white"
          />

        </div>

      </div>


      {/* TABLE */}

      <div className="mt-5 overflow-hidden rounded-[25px] border border-blue-100 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px] text-left text-sm">

            <thead className="bg-slate-50 text-xs text-slate-400">

              <tr>
                <th className="px-5 py-4">Pegawai</th>
                <th className="px-5 py-4">NIP</th>
                <th className="px-5 py-4">Jabatan</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Aksi</th>
              </tr>

            </thead>

            <tbody>

              {filtered.map((employee) => (

                <tr
                  key={employee.id}
                  className="border-t border-slate-100 hover:bg-blue-50/30"
                >

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                        {employee.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-bold">
                          {employee.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Pegawai
                        </p>
                      </div>

                    </div>

                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {employee.nip}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {employee.position}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        employee.status === "Aktif"
                          ? "bg-emerald-50 text-emerald-500"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {employee.status}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-right">

                    <button className="rounded-xl p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600">
                      <MoreHorizontal size={19} />
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