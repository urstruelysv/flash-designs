"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Examples", href: "#example-works" },
  { name: "Order", href: "#order" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Dock() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-500/95 via-pink-500/95 to-orange-500/95 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="Flash Designs"
                fill
                className="rounded-full border-2 border-yellow-400 object-cover shadow-lg"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Flash Designs
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-white/90 hover:text-yellow-400 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-gradient-to-r from-purple-500/95 via-pink-500/95 to-orange-500/95 backdrop-blur-lg border-t border-yellow-400/20">
            <div className="container mx-auto py-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors rounded-lg font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
