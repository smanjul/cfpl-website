import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; //
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "CFPL - Complex Flow Physics Lab",
  description: "High-fidelity simulation of complex fluid systems"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white font-sans transition">
	  <Navbar /> {/* ✅ add this */}
        {children}
      </body>
    </html>
  );
}
