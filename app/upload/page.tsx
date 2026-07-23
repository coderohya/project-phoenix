"use client";

import Sidebar from "@/components/sidebar";
import UploadCard from "@/components/uploadcard";
import { FileText, HardDrive, Shield, Upload } from "lucide-react";

const storageData = [
  {
    title: "Documents Stored",
    value: "24",
    icon: FileText,
  },
  {
    title: "Storage Used",
    value: "1.8 GB",
    icon: HardDrive,
  },
  {
    title: "Security Level",
    value: "99%",
    icon: Shield,
  },
];

export default function UploadPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="neon-text">Document Upload Center</h1>

            <p className="mt-2 text-slate-400">
              Securely upload and manage your important digital documents.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            <Upload size={16} />
            AI Upload Engine Active
          </div>
        </div>

        {/* Statistics */}
        <section className="py-0">
          <div className="grid gap-6 md:grid-cols-3">
            {storageData.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="dashboard-card">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <Icon className="text-cyan-400" size={24} />
                  </div>

                  <p className="text-4xl font-bold text-cyan-400">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Upload Component */}
        <section>
          <UploadCard />
        </section>

        {/* Security Information */}
        <section className="grid gap-6 py-0 md:grid-cols-2">
          <div className="glass-card">
            <h2 className="mb-4 text-xl font-bold text-cyan-400">
              Supported File Types
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• PDF Documents</li>
              <li>• PNG Images</li>
              <li>• JPG / JPEG Images</li>
              <li>• Government IDs</li>
              <li>• Fee Receipts</li>
              <li>• Insurance Documents</li>
            </ul>
          </div>

          <div className="glass-card">
            <h2 className="mb-4 text-xl font-bold text-cyan-400">
              Security Features
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• End-to-End Encryption</li>
              <li>• AI Document Classification</li>
              <li>• Secure Cloud Backup</li>
              <li>• Two-Factor Authentication</li>
              <li>• Real-Time Threat Monitoring</li>
              <li>• Automated Recovery System</li>
            </ul>
          </div>
        </section>

        {/* Footer Banner */}
        <section className="pb-0">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              PHOENIX Vault
            </h2>

            <p className="mx-auto max-w-2xl text-slate-300">
              Every document uploaded to Project PHOENIX is protected using
              enterprise-grade cybersecurity practices and AI-powered indexing
              for instant retrieval.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}