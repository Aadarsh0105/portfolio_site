"use client";

import { usePathname } from "next/navigation";
import {
  Bell,
  LogOut,
  Search,
} from "lucide-react";

import { routeTitles } from "@/lib/admin-navigation";

export default function AdminHeader() {
  const pathname = usePathname();

  const title =
    routeTitles[pathname] || "Admin Panel";

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">

      <div>
        <p className="text-sm text-slate-500">
          Naxora Admin
        </p>

        <h1 className="text-2xl font-bold text-slate-900">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search..."
            className="h-11 w-72 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50"
          />
        </div>

        <button className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center">
          <Bell size={18} />
        </button>

        <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-semibold">
          A
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600">
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </header>
  );
}