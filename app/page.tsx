import Link from "next/link";
import { Shield, Brain, Upload, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    title: "AI Assistant",
    description: "Search and manage your digital documents using natural language.",
    icon: Brain,
  },
  {
    title: "Secure Vault",
    description: "Store passports, receipts, and important records securely.",
    icon: Shield,
  },
  {
    title: "Smart Uploads",
    description: "Upload PDFs and images with AI-powered organization.",
    icon: Upload,
  },
  {
    title: "Life Timeline",
    description: "Generate an interactive timeline of important life events.",
    icon: Clock,
  },
];

const stats = [
  { label: "Documents Secured", value: "12K+" },
  { label: "AI Searches", value: "85K+" },
  { label: "Active Users", value: "3.2K+" },
  { label: "Recovery Success", value: "99.9%" },
];

export default function Home() {
  return (
    <div className="container-phoenix">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <div className="floating mb-6 rounded-full border border-cyan-500/30 px-4 py-2 text-sm text-cyan-400">
          Built for the OpenAI Codex Hackathon
        </div>

        <h1 className="mb-6 max-w-4xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Rebuild Your Digital Life with AI
        </h1>

        <p className="mb-10 max-w-3xl text-lg text-slate-300">
          Project PHOENIX is an AI-powered digital recovery platform that helps
          users organize, search, and protect their most important documents
          using modern cybersecurity practices.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/login" className="cyber-button">
            Get Started
          </Link>

          <Link href="/dashboard" className="cyber-button-outline">
            View Dashboard
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <h2 className="mb-10 text-center neon-text">
          Platform Statistics
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="dashboard-card text-center">
              <h3 className="mb-2 text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-10 text-center neon-text">
          Core Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="glass-card">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mb-2">{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Demo Workflow */}
      <section>
        <h2 className="mb-10 text-center neon-text">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Upload Documents",
            "AI Organizes Data",
            "Search Instantly",
            "Recover Anytime",
          ].map((step, index) => (
            <div
              key={step}
              className="dashboard-card flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-black">
                {index + 1}
              </div>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="pb-20">
        <div className="glass-card text-center">
          <h2 className="mb-4">
            Ready to Experience Project PHOENIX?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl">
            Join thousands of users who trust AI to manage and protect their
            digital identities.
          </p>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 cyber-button"
          >
            Launch PHOENIX
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}