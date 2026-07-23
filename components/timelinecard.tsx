"use client";

import { CalendarDays, LucideIcon } from "lucide-react";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  status?: "completed" | "current" | "upcoming";
  icon?: LucideIcon;
}

export default function TimelineCard({
  year,
  title,
  description,
  status = "completed",
  icon: Icon = CalendarDays,
}: TimelineCardProps) {
  const statusStyles = {
    completed: {
      dot: "bg-green-500",
      badge: "bg-green-500/10 text-green-400",
      text: "Completed",
    },
    current: {
      dot: "bg-cyan-500",
      badge: "bg-cyan-500/10 text-cyan-400",
      text: "Current",
    },
    upcoming: {
      dot: "bg-purple-500",
      badge: "bg-purple-500/10 text-purple-400",
      text: "Upcoming",
    },
  };

  const currentStatus = statusStyles[status];

  return (
    <div className="group relative flex gap-6">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div
          className={`z-10 flex h-14 w-14 items-center justify-center rounded-full ${currentStatus.dot} shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="glass-card mb-8 flex-1">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-cyan-400">
              {year}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {title}
            </h3>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${currentStatus.badge}`}
          >
            {currentStatus.text}
          </span>
        </div>

        <p className="text-slate-300">{description}</p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
          <span className="text-xs text-slate-500">
            Recorded by Project PHOENIX
          </span>

          <span className="text-xs text-cyan-400">
            Timeline Event
          </span>
        </div>
      </div>
    </div>
  );
}