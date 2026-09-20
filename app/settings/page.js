"use client";

import {
  Settings,
  Clock3,
  UserRound,
  Bell,
  ShieldCheck,
} from "lucide-react";

export default function SettingsPage() {

  return (
    <div className="mx-auto max-w-[1000px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">

      <div className="mb-6">

        <p className="text-sm font-semibold text-blue-600">
          Konfigurasi
        </p>

        <h1 className="mt-1 text-2xl font-black sm:text-3xl">
          Pengaturan
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Atur konfigurasi aplikasi PiketKu.
        </p>

      </div>


      <div className="space-y-5">

        {/* DEFAULT */}

        <section className="rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-5 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Clock3 size={20} />
            </div>

            <div>
              <h2 className="font-extrabold">
                Pengaturan Piket
              </h2>

              <p className="text-xs text-slate-400">
                Nilai default untuk pencatatan piket.
              </p>
            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>

              <label className="text-xs font-semibold text-slate-500">
                Jam Masuk Default
              </label>

              <input
                type="time"
                defaultValue="08:45"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400"
              />

            </div>

            <div>

              <label className="text-xs font-semibold text-slate-500">
                Toleransi Keterlambatan
              </label>

              <div className="relative mt-2">

                <input
                  type="number"
                  defaultValue="15"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-20 outline-none focus:border-blue-400"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                  menit
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* PROFILE */}

        <section className="rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <UserRound size={20} />
            </div>

            <div>
              <h2 className="font-extrabold">
                Profil
              </h2>

              <p className="text-xs text-slate-400">
                Informasi administrator aplikasi.
              </p>
            </div>

          </div>

        </section>


        {/* NOTIFICATION */}

        <section className="rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Bell size={20} />
            </div>

            <div>
              <h2 className="font-extrabold">
                Notifikasi
              </h2>

              <p className="text-xs text-slate-400">
                Pengaturan notifikasi aplikasi.
              </p>
            </div>

          </div>

        </section>


        {/* SECURITY */}

        <section className="rounded-[25px] border border-blue-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h2 className="font-extrabold">
                Keamanan
              </h2>

              <p className="text-xs text-slate-400">
                Pengaturan keamanan akun.
              </p>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}