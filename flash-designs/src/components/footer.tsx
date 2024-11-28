"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-gradient-to-r from-purple-500/95 via-pink-500/95 to-orange-500/95 backdrop-blur-lg border-t border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Link href="/" passHref>
              <div className="relative w-10 h-10 cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="Flash Designs Logo"
                  fill
                  sizes="(max-width: 40px) 100vw, 40px"
                  className="rounded-full border-2 border-yellow-400 object-cover"
                  priority
                />
              </div>
            </Link>
            <span className="text-lg font-bold text-white tracking-tight">
              Flash Designs
            </span>
          </div>

          {/* Copyright */}
          <div className="text-white/90 text-sm">
            © {currentYear} Flash Designs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
