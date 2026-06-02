"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Star,
  Sparkles,
  MessageSquare,
  BookOpen,
  Mail,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Ratings",
    href: "/admin/ratings",
    icon: Star,
  },
  {
    name: "Name Generator",
    href: "/admin/generator",
    icon: Sparkles,
  },
  {
    name: "Community",
    href: "/admin/community",
    icon: MessageSquare,
  },
  {
    name: "Learning Center",
    href: "/admin/learning",
    icon: BookOpen,
  },
  {
    name: "Newsletter",
    href: "/admin/newsletter",
    icon: Mail,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col">

      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          Brightstar Tech
        </h1>

        <p className="text-sm text-slate-400">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-600 transition"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}

      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500" />

          <div>
            <p className="font-medium">
              Dev. Brightstar Tech
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
}