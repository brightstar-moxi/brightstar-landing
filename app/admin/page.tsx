// "use client";

// import { useState } from "react";
// import { useAction } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import toast, { Toaster } from "react-hot-toast";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// type Orb = {
//   id: number;
//   x: number;
//   y: number;
//   scale: number;
//   duration: number;
//   delay: number;
// };

// export default function AdminPage() {
//   const sendUpdateEmail = useAction(api.sendUpdateEmail.sendUpdateEmail);

//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const router = useRouter();

//   // ✅ Generate ONCE (fixes all errors)
//   const [orbs] = useState<Orb[]>(() =>
//     Array.from({ length: 12 }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 600 - 300,
//       y: Math.random() * 600 - 300,
//       scale: Math.random() + 0.5,
//       duration: 8 + Math.random() * 4,
//       delay: Math.random() * 4,
//     }))
//   );

//   const handleSend = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!subject || !message) {
//       toast.error("Please enter both a subject and message!");
//       return;
//     }

//     setIsSending(true);

//     try {
//       const result = await sendUpdateEmail({ subject, message });
//       toast.success(`✅ Sent update to ${result.count} subscribers!`);
//       setSubject("");
//       setMessage("");
//     } catch {
//       toast.error("❌ Failed to send updates.");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   const handleLogout = async () => {
//     await fetch("/api/admin-logout", { method: "POST" });
//     router.push("/admin/login");
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
//       <Toaster position="top-center" />

//       {/* Background */}
//       <motion.div
//         className="absolute inset-0 opacity-70"
//         animate={{
//           backgroundImage: [
//             "linear-gradient(to bottom right, #14b8a6, #7c3aed, #3b82f6)",
//             "linear-gradient(to bottom right, #22d3ee, #6366f1, #a855f7)",
//             "linear-gradient(to bottom right, #06b6d4, #9333ea, #3b82f6)",
//           ],
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         style={{ backgroundSize: "400% 400%" }}
//       />

//       {/* Orbs */}
//       {orbs.map((orb) => (
//         <motion.div
//           key={orb.id}
//           className="absolute w-3 h-3 bg-cyan-300 rounded-full opacity-30"
//           initial={{ x: orb.x, y: orb.y, scale: orb.scale }}
//           animate={{ y: [orb.y, orb.y - 60, orb.y], opacity: [0.2, 0.7, 0.2] }}
//           transition={{
//             duration: orb.duration,
//             repeat: Infinity,
//             delay: orb.delay,
//             ease: "linear",
//           }}
//         />
//       ))}

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative z-10 w-full max-w-2xl bg-[#10151A] rounded-3xl border border-cyan-400/40 p-10"
//       >
//         <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
//           👑 Admin Dashboard
//         </h1>

//         <form onSubmit={handleSend} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Email subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             className="w-full p-4 rounded-xl bg-[#0B0F14] border border-cyan-400/30 text-white"
//           />

//           <textarea
//             placeholder="Type your message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             rows={8}
//             className="w-full p-4 rounded-xl bg-[#0B0F14] border border-cyan-400/30 text-white"
//           />

//           <button
//             type="submit"
//             disabled={isSending}
//             className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
//           >
//             {isSending ? "Sending..." : "Send Update 🚀"}
//           </button>
//         </form>
//       </motion.div>

//       {/* Logout */}
//       <button
//         onClick={handleLogout}
//         className="mt-8 px-8 py-3 rounded-xl font-bold bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }








import AnalyticsChart from "../components/admin/AnalyticsChart";
import QuickActions from "../components/admin/QuickActions";
import RecentActivity from "../components/admin/RecentActivity";
import StatsCards from "../components/admin/StatsCards";
import TopFeatures from "../components/admin/TopFeatures";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <StatsCards />
      <div className="grid lg:grid-cols-3 gap-6 mt-6">

  <div className="lg:col-span-2">
    <AnalyticsChart />
    <TopFeatures/>
  </div>

  <div className="space-y-6">
    <RecentActivity />
    <QuickActions />
  </div>

</div>
    </div>
  );
}