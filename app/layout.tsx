
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project PHOENIX",
  description: "Rebuild Your Digital Life with AI.",
  keywords: [
    "AI",
    "Cybersecurity",
    "OpenAI",
    "Codex",
    "Next.js",
    "Project PHOENIX",
  ],
};

export default function RootLayout({
  children,
}: 

{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Main Application Wrapper */}
        <div className="relative flex min-h-screen flex-col">
          {/* Top Banner */}
          <header className="border-b border-cyan-500/20 bg-slate-900/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-xl font-bold tracking-widest text-cyan-400">
                  PROJECT PHOENIX
                </h1>
                <p className="text-xs text-slate-400">
                  Rebuild Your Digital Life with AI
                </p>
              </div>

              <div className="rounded-full border border-cyan-500/30 px-4 py-1 text-xs text-cyan-300">
                OpenAI Codex Hackathon
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-cyan-500/20 bg-slate-900/70 py-4 text-center text-sm text-slate-400 backdrop-blur-md">
            © {new Date().getFullYear()} Project PHOENIX • Built with Next.js,
            TypeScript, Tailwind CSS, and OpenAI
          </footer>
        </div>
      </body>
    </html>
  );
}