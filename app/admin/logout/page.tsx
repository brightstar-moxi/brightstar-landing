"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin-logout", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Logout failed");
      }

      toast.success("Logged out successfully");

      setTimeout(() => {
        router.replace("/admin/login");
      }, 800);
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition"
    >
      Logout
    </button>
  );
}