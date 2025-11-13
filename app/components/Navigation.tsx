"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl sm:text-2xl">⚡</span>
            <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
              KingZyphor
            </span>
          </Link>
          <div className="flex gap-3 sm:gap-6">
            <Link 
              href="/" 
              className={`nav-link ${isActive("/") ? "text-blue-600 dark:text-blue-400" : ""}`}
            >
              Home
            </Link>
            <Link 
              href="/photography" 
              className={`nav-link ${isActive("/photography") ? "text-blue-600 dark:text-blue-400" : ""}`}
            >
              Photography
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive("/contact") ? "text-blue-600 dark:text-blue-400" : ""}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}