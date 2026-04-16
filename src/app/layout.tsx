import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bolo de Pote Premium | Delícias em Pote",
  description: "Os melhores bolos de pote artesanais com ingredientes selecionados e sabores irresistíveis.",
  keywords: ["bolo de pote", "doce gourmet", "confeitaria premium", "brigadeiro", "ninho com nutella"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} dark antialiased`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
