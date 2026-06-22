import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Kalam } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "INFOCO | Desde Adentro",
  description: "Revista del centro INTRES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${manrope.variable} ${kalam.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
