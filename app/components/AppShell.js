"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Bell,
  CalendarDays,
  Home,
  Users,
  ClipboardList,
  BarChart3,
  Settings,
  UserRound,
  Plus,
  MoreHorizontal,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Pegawai",
    href: "/employees",
    icon: Users,
  },
  {
    name: "Piket",
    href: "/pickets",
    icon: ClipboardList,
  },
  {
    name: "Kalender",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    name: "Rekap",
    href: "/reports",
    icon: BarChart3,
  },
];

export default function AppShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#eef7ff] text-[#10264d]">

      {/* DESKTOP SIDEBAR */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[245px] flex-col border-r border-blue-100 bg-white px-5 py-7 lg:flex">

        {/* LOGO */}

        <Link href="/" className="mb-10 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <CalendarDays size={23} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold">
              PiketKu
            </h1>

            <p className="text-[10px] text-slate-400">
              Pencatatan Piket Pegawai
            </p>
          </div>
        </Link>

        {/* MENU */}

        <nav className="space-y-2">

          {menus.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Icon size={20} />

                {item.name}
              </Link>
            );
          })}

          <Link
            href="/settings"
            className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition ${
              pathname.startsWith("/settings")
                ? "bg-blue-50 text-blue-600"
                : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Settings size={20} />

            Pengaturan
          </Link>

        </nav>

        {/* BOTTOM CARD */}

        <div className="mt-auto rounded-3xl bg-gradient-to-br from-blue-50 to-sky-100 p-5">

          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600">
            <CalendarDays size={20} />
          </div>

          <h3 className="font-bold">
            PiketKu
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Catat piket dan kehadiran pegawai
            dengan mudah.
          </p>

        </div>

      </aside>


      {/* MAIN */}

      <div className="lg:ml-[245px]">

        {/* TOPBAR */}

        <header className="sticky top-0 z-30 hidden h-[78px] items-center justify-between border-b border-blue-100 bg-white/90 px-8 backdrop-blur-xl lg:flex">

          <div className="relative w-[360px]">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              placeholder="Cari pegawai, tanggal, atau catatan..."
              className="w-full rounded-2xl border border-blue-100 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />

          </div>

          <div className="flex items-center gap-5">

            <button className="relative rounded-xl p-2 text-slate-500 hover:bg-blue-50">

              <Bell size={21} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />

            </button>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <UserRound size={21} />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Administrator
                </p>

                <p className="text-xs text-slate-400">
                  Admin
                </p>
              </div>

            </div>

          </div>

        </header>


        {/* MOBILE HEADER */}

        <header className="sticky top-0 z-40 flex h-[70px] items-center justify-between border-b border-blue-100 bg-white/95 px-5 backdrop-blur-xl lg:hidden">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <CalendarDays size={21} />
            </div>

            <div>
              <h1 className="font-extrabold">
                PiketKu
              </h1>

              <p className="text-[9px] text-slate-400">
                Pencatatan Piket
              </p>
            </div>

          </Link>

          <button className="relative p-2">
            <Bell size={20} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

        </header>


        {/* CONTENT */}

        <main className="min-h-screen pb-24 lg:pb-8">
          {children}
        </main>

      </div>


      {/* MOBILE NAVIGATION */}

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-blue-100 bg-white/95 px-3 py-2 backdrop-blur-xl lg:hidden">

        <div className="mx-auto flex max-w-md items-center justify-around">

          <MobileItem
            href="/"
            icon={<Home size={20} />}
            label="Beranda"
            active={pathname === "/"}
          />

          <MobileItem
            href="/employees"
            icon={<Users size={20} />}
            label="Pegawai"
            active={pathname.startsWith("/employees")}
          />

          <Link
            href="/pickets"
            className="relative -mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-200"
          >
            <Plus size={25} />
          </Link>

          <MobileItem
            href="/pickets"
            icon={<ClipboardList size={20} />}
            label="Piket"
            active={pathname.startsWith("/pickets")}
          />

          <MobileItem
            href="/reports"
            icon={<BarChart3 size={20} />}
            label="Rekap"
            active={pathname.startsWith("/reports")}
          />

        </div>

      </nav>

    </div>
  );
}


function MobileItem({
  href,
  icon,
  label,
  active,
}) {
  return (
    <Link
      href={href}
      className={`flex min-w-[55px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[10px] font-semibold ${
        active
          ? "text-blue-600"
          : "text-slate-400"
      }`}
    >
      {icon}

      {label}
    </Link>
  );
}