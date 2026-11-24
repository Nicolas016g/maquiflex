import type { Metadata } from "next";
import { Barlow_Condensed, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Cursor } from "@/components/cursor";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Maquiflex | Envases flexíveis",
  description: "Fabricante brasileira de máquinas envasadoras horizontais. Engenharia própria, MF480Q e pós-venda local em Monte Alto/SP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable} ${mono.variable} antialiased`}>
        <Cursor />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
