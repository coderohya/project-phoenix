"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  description?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  change,
  description,
}: StatCardProps) {
  return (
    <div className="dashboard-card group relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-4xl font-bold text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
          <Icon className="h-7 w-7 text-cyan-400" />
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mb-3 text-sm text-slate-400">{description}</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <span className="text-xs text-slate-500">
          Last updated just now
        </span>

        {change && (
          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
            {change}
          </span>
        )}
      </div>
    </div>
  );
}