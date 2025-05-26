"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const pathTitles: Record<string, string> = {
  '/': 'Home',
  '/dashboard': 'Dashboard', 
  '/dashboard/report': 'Report',
  '/dashboard/masuk': 'Barang Masuk',
  '/dashboard/keluar': 'Barang Keluar',
  '/dashboard/barang': 'Daftar Barang',
  '/dashboard/user': 'Daftar User',
  '/dashboard/stok': 'Stok Barang',
  '/sign-in': 'Login', 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(false); 
  const pathname = usePathname();
  const currentTitle = pathTitles[pathname] || '';



  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.className}>
        <body className="bg-gray-100">
              <div className="flex h-screen overflow-hidden">

                {/* Mobile Hamburger Button */}
                <button
                  className="absolute top-4 right-4 z-50 lg:hidden"
                  onClick={() => setShowNav(!showNav)}
                  aria-label="Toggle Menu"
                >
                  <Menu className="w-6 h-6 text-gray-800" />
                </button>

                {/* Sidebar */}
                <div
                  className={`
                    fixed top-0 left-0 z-40 h-full bg-gray-100 border-r text-gray-800 border-gray-300
                    transform transition-transform duration-200 ease-in-out
                    ${showNav ? "translate-x-0" : "-translate-x-full"}
                    w-52
                    lg:translate-x-0 lg:static lg:flex-shrink-0
                    `}
                    >
                  <Navbar />
                </div>

                <div className="flex-1 overflow-y-auto h-auto w-full">
                  {currentTitle && (
                    <header className="text-3xl font-bold tracking-tight border-b border-gray-300 p-3 lg:p-8">
                      {currentTitle}
                    </header>
                  )}
                  <div className="p-3">
                    {children}
                  </div>
                </div>
              </div>
        </body>
      </html>
    </ClerkProvider>
  );
}