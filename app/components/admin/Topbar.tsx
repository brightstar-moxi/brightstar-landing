"use client";

import { Bell, Search, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white h-20 border-b px-6 flex items-center justify-between">

      <button>
        <Menu />
      </button>

      <div className="flex items-center gap-4">

        <div className="flex items-center border rounded-xl px-3 py-2 w-80">
          <Search size={18} />

          <input
            placeholder="Search anything..."
            className="outline-none px-2 w-full"
          />
        </div>

        <button className="relative">
          <Bell />

          <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>

      </div>
    </header>
  );
}