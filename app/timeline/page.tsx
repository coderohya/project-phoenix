"use client";

import Sidebar from "@/components/sidebar";
import TimelineCard from "@/components/timelinecard";
import {
  GraduationCap,
  Building2,
  IdCard,
  Landmark,
  Rocket,
} from "lucide-react";

const timelineEvents = [
  {
    year: "2015",
    title: "School Admission",
    description:
      "Started the academic journey and began building a foundation in science and technology.",
    status: "completed" as const,
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Engineering College Admission",
    description:
      "Joined the Computer Science (IoT) program and started exploring AI, cybersecurity, and software development.",
    status: "completed" as const,
    icon: Building2,
  },
  {
    year: "2025",
    title: "Passport Application",
    description:
      "Applied for a passport and began preparing for international opportunities and higher studies.",
    status: "completed" as const,
    icon: IdCard,
  },
  {
    year: "2026",
    title: "Education Loan Approved",
    description:
      "Successfully secured an education loan to continue higher education and professional growth.",
    status: "current" as const,
    icon: Landmark,
  },
  {
    year: "2030",
    title: "M.Tech at IIT Bombay",
    description:
      "Target milestone: Pursue postgraduate studies in Artificial Intelligence and Cybersecurity.",
    status: "upcoming" as const,
    icon: Rocket,
  },
];

export default function TimelinePage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="neon-text">Digital Life Timeline</h1>

            <p className="mt-2 text-slate-400">
              Explore your life milestones generated and managed by Project
              PHOENIX.
            </p>
          </div>

          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Timeline Status: Active
          </div>
        </div>

        {/* Timeline Stats */}
        <section className="py-0">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="dashboard-card text-center">
              <h2 className="text-4xl font-bold text-cyan-400">5</h2>
              <p>Total Milestones</p>
            </div>

            <div className="dashboard-card text-center">
              <h2 className="text-4xl font-bold text-green-400">3</h2>
              <p>Completed Events</p>
            </div>

            <div className="dashboard-card text-center">
              <h2 className="text-4xl font-bold text-purple-400">1</h2>
              <p>Future Goals</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="mx-auto max-w-5xl">
            {timelineEvents.map((event) => (
              <TimelineCard
                key={`${event.year}-${event.title}`}
                year={event.year}
                title={event.title}
                description={event.description}
                status={event.status}
                icon={event.icon}
              />
            ))}
          </div>
        </section>

        {/* AI Insights */}
        <section className="grid gap-6 py-0 md:grid-cols-2">
          <div className="glass-card">
            <h2 className="mb-4 text-xl font-bold text-cyan-400">
              PHOENIX Timeline Insights
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Your educational journey spans over 10 years.</li>
              <li>• 60% of your milestones are completed.</li>
              <li>• AI detected a strong interest in cybersecurity.</li>
              <li>• Higher education remains your primary objective.</li>
            </ul>
          </div>

          <div className="glass-card">
            <h2 className="mb-4 text-xl font-bold text-cyan-400">
              Recommended Next Steps
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Upload your latest academic certificates.</li>
              <li>• Add internship achievements to the timeline.</li>
              <li>• Configure automatic timeline backups.</li>
              <li>• Export your timeline as a PDF report.</li>
            </ul>
          </div>
        </section>

        {/* Footer Banner */}
        <section className="pb-0">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              Your Story, Preserved Forever
            </h2>

            <p className="mx-auto max-w-3xl text-slate-300">
              Project PHOENIX transforms documents and achievements into an
              intelligent, searchable timeline—helping you preserve your past,
              understand your present, and plan your future.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}