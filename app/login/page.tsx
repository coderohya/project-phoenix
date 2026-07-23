"use client";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mock Login
    console.log("Login Data:", formData);

    alert("Login Successful! Redirecting to Dashboard...");
    window.location.href = "/dashboard";
  };

  return (
    <div className="container-phoenix flex min-h-[85vh] items-center justify-center">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/50 shadow-2xl backdrop-blur-xl lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden flex-col justify-center border-r border-cyan-500/20 p-12 lg:flex">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
              <Shield className="h-8 w-8 text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-cyan-400">
                PROJECT PHOENIX
              </h1>

              <p className="text-slate-400">AI Digital Recovery System</p>
            </div>
          </div>

          <h2 className="mb-6 text-5xl font-bold leading-tight">
            Secure Your
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Digital Identity
            </span>
          </h2>

          <p className="mb-10 max-w-md text-lg text-slate-300">
            Access your AI-powered digital vault and manage your documents with
            enterprise-grade cybersecurity.
          </p>

          <div className="space-y-6">
            {[
              "AI-powered document search",
              "End-to-end encrypted storage",
              "Interactive life timeline",
              "Emergency access system",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <div className="mx-auto max-w-md">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-white">Welcome Back</h2>

              <p className="mt-3 text-slate-400">
                Sign in to continue to Project PHOENIX
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-cyan-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="pl-12"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-cyan-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    className="pl-12 pr-12"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-slate-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-400">
                  <input type="checkbox" className="w-4" />
                  Remember Me
                </label>

                <Link
                  href="#"
                  className="text-sm text-cyan-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button type="submit" className="cyber-button w-full">
                Login to PHOENIX
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-700" />
              <span className="text-sm text-slate-500">OR</span>
              <div className="h-px flex-1 bg-slate-700" />
            </div>

            <button onClick={() => signIn("google")} className="cyber-button">
              Continue with Google
            </button>

            {/* Footer */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link href="/" className="font-semibold text-cyan-400">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
