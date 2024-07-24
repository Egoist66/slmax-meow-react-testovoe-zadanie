import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../assets/css/globals.css";
import "../assets/css/main.scss";
import { Header } from "@/components/partials/Header";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Shop | Home",
  description: "E-commerce shop with Next.js and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container">
          <main className="min-h-screen py-10">
          
            {children}
          
                                          
        
          </main>
        </div>
      </body>
    </html>
  );
}
