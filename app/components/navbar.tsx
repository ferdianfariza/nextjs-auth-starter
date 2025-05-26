'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  House, TrendingUp, ArrowDownLeft, ArrowUpRight, Package, PackageCheck  
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';


// Navigation groups
const navSections = [
  {
    title: 'OVERVIEW',
    links: [
      { name: 'Home', href: '/', icon: House },
      { name: 'Report', href: '/dashboard/report', icon: TrendingUp },
    ],
  },
  {
    title: 'AKTIVITAS',
    links: [
      { name: 'Masuk', href: '/dashboard/masuk', icon: ArrowDownLeft },
      { name: 'Keluar', href: '/dashboard/keluar', icon: ArrowUpRight },
    ],
  },
  {
    title: 'DATA',
    links: [
      { name: 'Stok', href: '/dashboard/stok', icon: PackageCheck  },
      { name: 'Barang', href: '/dashboard/barang', icon: Package },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const renderLinks = (links: typeof navSections[number]['links']) => (
    <div className="grid px-3 pb-5 text-sm space-y-1">
      {links.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          className={clsx(
            'flex items-center gap-2 rounded-lg p-1.5 w-full font-medium text-gray-500 border hover:bg-gray-200',
            {
              'bg-gray-50 text-gray-800 font-semibold border-gray-300 hover:bg-white': pathname === href,
              'border-transparent': pathname !== href,
            }
          )}
        >
          <Icon className="w-4" />
          <p className="block">{name}</p>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="flex flex-col justify-between h-full">
      {/* Top nav content */}
      <div>
        <div className="text-3xl font-bold flex items-center gap-2 tracking-tight border-b border-gray-300 p-8 mb-5">
          <Image src="/icon.png" width={40} height={40} alt="logo" />
          K9sim
        </div>

        {navSections.map(({ title, links }) => (
          <div key={title}>
            <div className="px-5 text-[14px] font-semibold text-gray-400 mb-2 tracking-wider">
              {title}
            </div>
            {renderLinks(links)}
          </div>
        ))}
      </div>

      {/* Bottom pinned content */}
      <div className="border-t border-gray-300 p-5 text-gray-600 text-sm">
        <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      </div>
    </nav>
  );
}
