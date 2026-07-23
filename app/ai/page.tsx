"use client";

import Sidebar from "@/components/sidebar";
import AIChat from "@/components/aichat";
import { Bot, Brain, Cpu, Sparkles } from "lucide-react";

const capabilities = [
  {
    title: "Document Search",
    description:
      "Instantly search passports, receipts, IDs, and important records using natural language.",
    icon: Brain,
  },
  {
    title: "Timeline Generation",
    description:
      "Automatically generate a digital timeline from uploaded documents and milestones.",
    icon: Sparkles,
  },
  {
    title: "AI Insights",
    description:
      "Receive intelligent recommendations for backups, security, and document management.",
    icon: Cpu,
  },
];

export default function AIPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="neon-text">PHOENIX AI Assistant</h1>

            <p className="mt-2 text-slate-400">
              Interact with your AI-powered digital assistant to manage your
              documents, timelines, and security.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            <Bot size={16} />
            AI Status: Online
          </div>
        </div>

        {/* AI Capabilities */}
        <section className="py-0">
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="dashboard-card">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h2 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* AI Chat Interface */}
        <section>
          <AIChat />
        </section>

        {/* AI Information Panel */}
        <section className="grid gap-6 py-0 md:grid-cols-2">
          <div className="glass-card">
            <h2 className="mb-4 text-xl font-bold text-cyan-400">
              PHOENIX AI Features
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Natural Language Processing</li>
              <li>• AI-Powered Document Retrieval</li>
              <li>• Smart Timeline Generation</li>
              <li>• Personalized Recommendations</li>
              <li>• Context-Aware Responses</li>
              <li>• Secure Query Processing</li>
            </ul>
          </div>

          <div className="glass-card">
            <h2 className="mb-4 text-xl font-bold text-cyan-400">
              Example Commands
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• "Show my passport"</li>
              <li>• "Find my fee receipt"</li>
              <li>• "Generate my timeline"</li>
              <li>• "List all uploaded documents"</li>
              <li>• "What documents are missing?"</li>
              <li>• "Recommend a backup strategy"</li>
            </ul>
          </div>
        </section>

        {/* Footer Banner */}
        <section className="pb-0">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              Powered by Artificial Intelligence
            </h2>

            <p className="mx-auto max-w-3xl text-slate-300">
              Project PHOENIX combines AI, cybersecurity, and digital recovery
              technologies to provide a next-generation experience for managing
              your digital identity and important life records.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}