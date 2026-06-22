"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/nxr-admin-portal-9x7k/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Blogs",
    href: "/nxr-admin-portal-9x7k/blogs",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/nxr-admin-portal-9x7k/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 px-6 border-b flex items-center">
        <Link href="/nxr-admin-portal-9x7k/dashboard" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="Naxora Technology"
            width={233}
            height={64}
            priority
            quality={90}
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        <div className="space-y-2">

          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <item.icon size={18} />

                <span className="font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>
      </div>
    </aside>
  );
}
