// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// import "./globals.css"; // ✅ Must come first
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Brightstar Tech",
//   description: "Empowering youth through digital skills and knowledge",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


// "use client";

// import "./globals.css";
// import { Inter } from "next/font/google";
// import { ConvexProvider, ConvexReactClient } from "convex/react";
// import { ReactNode } from "react";
// import { Analytics } from "@vercel/analytics/next"

// // ✅ Create your Convex client
// // Replace with your actual deployment URL from the Convex dashboard
// // const convex = new ConvexReactClient("https://brightstar-landing.convex.cloud");
// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* ✅ Wrap your entire app with ConvexProvider */}
//         <ConvexProvider client={convex}>
//           {children}
//            <Analytics />
//         </ConvexProvider>
//       </body>
//     </html>
//   );
// }



// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import ConvexClientProvider from "./ConvexClientProvider"; // We'll create this

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
