"use client";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl neon-text">PROJECT PHOENIX</h1>

        <p className="mt-4 text-cyan-400 animate-pulse">
          INITIALIZING AI CORE...
        </p>
      </div>
    </div>
  );
}