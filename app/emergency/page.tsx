"use client";

import Sidebar from "@/components/sidebar";
import {
  AlertTriangle,
  Phone,
  Shield,
  User,
  FileWarning,
  Siren,
} from "lucide-react";

const emergencyContacts = [
  {
    name: "Primary Guardian",
    phone: "+91 98765 43210",
    relation: "Father",
  },
  {
    name: "Emergency Support",
    phone: "+91 91234 56789",
    relation: "Mother",
  },
  {
    name: "Trusted Contact",
    phone: "+91 99887 76655",
    relation: "Brother",
  },
];

const emergencyDocuments = [
  "Passport.pdf",
  "Aadhaar Card.png",
  "Insurance Policy.pdf",
  "Education Loan Documents.pdf",
];

export default function EmergencyPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="neon-text">Emergency Access Center</h1>

            <p className="mt-2 text-slate-400">
              Configure trusted contacts and manage emergency access to your
              critical digital assets.
            </p>
          </div>

          <div className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            <Siren className="mr-2 inline-block" size={16} />
            Emergency Mode Ready
          </div>
        </div>

        {/* Status Cards */}
        <section className="py-0">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="dashboard-card text-center">
              <Shield className="mx-auto mb-4 text-cyan-400" size={32} />
              <h2 className="text-4xl font-bold text-cyan-400">3</h2>
              <p>Trusted Contacts</p>
            </div>

            <div className="dashboard-card text-center">
              <FileWarning
                className="mx-auto mb-4 text-yellow-400"
                size={32}
              />
              <h2 className="text-4xl font-bold text-yellow-400">4</h2>
              <p>Protected Documents</p>
            </div>

            <div className="dashboard-card text-center">
              <AlertTriangle
                className="mx-auto mb-4 text-red-400"
                size={32}
              />
              <h2 className="text-4xl font-bold text-red-400">
                Active
              </h2>
              <p>Emergency Status</p>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section>
          <div className="glass-card">
            <h2 className="mb-6 text-2xl font-bold text-cyan-400">
              Trusted Emergency Contacts
            </h2>

            <div className="space-y-4">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.phone}
                  className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 md:flex-row md:items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-cyan-500/10 p-3">
                      <User className="text-cyan-400" size={24} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {contact.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {contact.relation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-cyan-400">
                    <Phone size={18} />
                    {contact.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Documents */}
        <section className="grid gap-6 py-0 md:grid-cols-2">
          <div className="glass-card">
            <h2 className="mb-5 text-xl font-bold text-cyan-400">
              Priority Documents
            </h2>

            <ul className="space-y-3">
              {emergencyDocuments.map((doc) => (
                <li
                  key={doc}
                  className="rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-slate-300"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card">
            <h2 className="mb-5 text-xl font-bold text-cyan-400">
              Emergency Protocol
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Notify trusted contacts automatically.</li>
              <li>• Share selected documents securely.</li>
              <li>• Generate an emergency access report.</li>
              <li>• Enable temporary recovery access.</li>
              <li>• Maintain encrypted audit logs.</li>
            </ul>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="pb-0">
          <div className="rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle
                className="mt-1 text-red-400"
                size={28}
              />

              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  Emergency Access Notice
                </h2>

                <p className="text-slate-300">
                  Project PHOENIX uses end-to-end encryption to protect all
                  emergency data. Trusted contacts will only receive access to
                  documents explicitly approved by the account owner.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}