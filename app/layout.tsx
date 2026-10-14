import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CFPL - Complex Flow Physics Lab",
  description: "High-fidelity simulation of complex fluid systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />

        {/* Google Analytics — Suspense required for useSearchParams in App Router */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
