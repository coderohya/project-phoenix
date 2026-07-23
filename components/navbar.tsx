"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Upload", href: "/upload" },
  { name: "AI Assistant", href: "/ai" },
  { name: "Timeline", href: "/timeline" },
  { name: "Emergency", href: "/emergency" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
      <nav className="container-phoenix flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
            <Shield className="h-6 w-6 text-white" />
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-widest text-cyan-400">
              PHOENIX
            </h2>
            <p className="text-xs text-slate-400">
              AI Digital Recovery System
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition duration-300 hover:text-cyan-400 ${
                pathname === item.href
                  ? "font-semibold text-cyan-400"
                  : "text-slate-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link href="/login" className="cyber-button">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-cyan-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-cyan-500/20 bg-slate-950 md:hidden">
          <div className="container-phoenix flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-3 py-2 transition ${
                  pathname === item.href
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/login"
              className="cyber-button text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}