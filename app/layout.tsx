import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";

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
        {/* Google Analytics */}
        <Script id="ga" strategy="afterInteractive">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-G1G060YJS6', {
    anonymize_ip: true
  });
`}
</Script>
        {children}
      </body>
    </html>
  );
}
