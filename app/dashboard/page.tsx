"use client";

import Sidebar from "@/components/sidebar";
import StatCard from "@/components/statcard";
import {
  FileText,
  Search,
  Clock3,
  ShieldCheck,
  Activity,
  AlertTriangle,
} from "lucide-react";

const recentActivity = [
  "Uploaded passport.pdf",
  "Generated AI timeline",
  "Searched for fee receipt",
  "Added emergency contact",
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="neon-text">Dashboard</h1>

            <p className="mt-2 text-slate-400">
              Welcome back, Rohan. Your digital vault is secure.
            </p>
          </div>

          <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            ● System Status: Secure
          </div>
        </div>

        {/* Statistics */}
        <section className="py-0">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Documents"
              value={24}
              icon={FileText}
              change="+12%"
              description="Securely stored files"
            />

            <StatCard
              title="AI Searches"
              value={158}
              icon={Search}
              change="+18%"
              description="Queries processed"
            />

            <StatCard
              title="Timeline Events"
              value={8}
              icon={Clock3}
              change="+2"
              description="Life milestones recorded"
            />

            <StatCard
              title="Security Score"
              value="99%"
              icon={ShieldCheck}
              change="Excellent"
              description="Overall account protection"
            />
          </div>
        </section>

        {/* Dashboard Grid */}
        <section className="grid gap-6 py-8 lg:grid-cols-3">
          {/* Activity Feed */}
          <div className="glass-card lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Activity className="text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                    <span className="text-slate-200">{item}</span>
                  </div>

                  <span className="text-sm text-slate-500">
                    {index + 1} min ago
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="glass-card">
            <h2 className="mb-6 text-2xl font-bold text-cyan-400">
              AI Insights
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <p className="font-medium text-white">
                  3 Documents Need Backup
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  PHOENIX recommends backing up your insurance and
                  educational records.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                <p className="font-medium text-white">
                  Timeline Updated
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  A new milestone was added to your digital history.
                </p>
              </div>

              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                <p className="font-medium text-white">
                  Security Status Excellent
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Two-factor authentication is enabled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Panel */}
        <section className="grid gap-6 py-0 md:grid-cols-2">
          <div className="glass-card">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="text-green-400" />
              <h2 className="text-xl font-bold text-white">
                Security Overview
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>2FA</span>
                <span className="text-green-400">Enabled</span>
              </div>

              <div className="flex justify-between">
                <span>Emergency Mode</span>
                <span className="text-cyan-400">Configured</span>
              </div>

              <div className="flex justify-between">
                <span>Last Login</span>
                <span className="text-slate-400">
                  Today, 10:42 AM
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="text-yellow-400" />
              <h2 className="text-xl font-bold text-white">
                Recommendations
              </h2>
            </div>

            <ul className="space-y-3 text-slate-300">
              <li>• Upload your latest fee receipt.</li>
              <li>• Add an emergency contact.</li>
              <li>• Export your timeline report.</li>
              <li>• Enable cloud backup.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}