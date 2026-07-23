"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  Bot,
  Clock3,
  ShieldAlert,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "AI Assistant",
    href: "/ai",
    icon: Bot,
  },
  {
    name: "Timeline",
    href: "/timeline",
    icon: Clock3,
  },
  {
    name: "Emergency",
    href: "/emergency",
    icon: ShieldAlert,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 border-r border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl lg:block">
      <div className="flex h-full flex-col p-6">
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
            PHOENIX
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            AI Digital Recovery System
          </p>
        </div>

        {/* User Card */}
        <div className="glass-card mb-8">
          <h3 className="text-lg font-semibold text-white">
            Welcome Back
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Rohan Pandge
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-green-400">
              System Secure
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Security Status */}
        <div className="dashboard-card mb-6">
          <h4 className="mb-3 font-semibold text-cyan-400">
            Security Status
          </h4>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>2FA</span>
              <span className="text-green-400">Enabled</span>
            </div>

            <div className="flex justify-between">
              <span>Documents</span>
              <span className="text-cyan-400">24</span>
            </div>

            <div className="flex justify-between">
              <span>AI Searches</span>
              <span className="text-cyan-400">158</span>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 px-4 py-3 text-red-400 transition duration-300 hover:bg-red-500/10">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}