"use client";

import { useRef, useState } from "react";
import { Upload, FileText, Image as ImageIcon, X } from "lucide-react";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  type: string;
}

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<UploadedFile[]>([
    {
      id: 1,
      name: "passport.pdf",
      size: "1.2 MB",
      type: "PDF",
    },
    {
      id: 2,
      name: "fee_receipt.png",
      size: "450 KB",
      type: "IMAGE",
    },
  ]);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFiles = event.target.files;

    if (!uploadedFiles) return;

    const newFiles = Array.from(uploadedFiles).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      type: file.type.includes("image") ? "IMAGE" : "PDF",
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id: number) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="glass-card">
      {/* Header */}
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Upload Documents
        </h2>

        <p className="text-slate-400">
          Upload passports, fee receipts, insurance papers, and
          other important documents securely.
        </p>
      </div>

      {/* Upload Area */}
      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-cyan-500/30 p-10 text-center transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/5"
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
            <Upload className="h-10 w-10 text-cyan-400" />
          </div>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-white">
          Drag & Drop Files
        </h3>

        <p className="mb-4 text-slate-400">
          Supports PDF, PNG, JPG, and JPEG files.
        </p>

        <button className="cyber-button">
          Select Files
        </button>

        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          onChange={handleUpload}
        />
      </div>

      {/* Uploaded Files */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-cyan-400">
          Uploaded Documents ({files.length})
        </h3>

        <div className="space-y-4">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  {file.type === "IMAGE" ? (
                    <ImageIcon className="h-6 w-6 text-cyan-400" />
                  ) : (
                    <FileText className="h-6 w-6 text-cyan-400" />
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-white">
                    {file.name}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {file.size} • {file.type}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFile(file.id)}
                className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-cyan-400">
            Security Notice:
          </span>{" "}
          All uploaded documents are encrypted and stored securely
          using Project PHOENIX's AI-powered digital vault.
        </p>
      </div>
    </div>
  );
}