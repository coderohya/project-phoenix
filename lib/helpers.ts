import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes safely.
 *
 * Example:
 * cn(
 *   "bg-cyan-500",
 *   isActive && "text-white",
 *   className
 * );
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a file size in bytes into a readable string.
 *
 * Example:
 * formatFileSize(1048576) => "1.00 MB"
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(2)} ${
    sizes[index]
  }`;
}

/**
 * Formats a JavaScript Date object.
 *
 * Example:
 * formatDate(new Date())
 * => "20 Jul 2026"
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

/**
 * Generates a mock PHOENIX document ID.
 *
 * Example:
 * generateDocumentId()
 * => PHX-482913
 */
export function generateDocumentId(): string {
  const random = Math.floor(100000 + Math.random() * 900000);

  return `PHX-${random}`;
}

/**
 * Returns a security status label based on score.
 */
export function getSecurityStatus(
  score: number
): "Excellent" | "Good" | "Moderate" | "Critical" {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 50) return "Moderate";

  return "Critical";
}

/**
 * Returns Tailwind classes for security badges.
 */
export function getSecurityBadgeClass(score: number): string {
  const status = getSecurityStatus(score);

  switch (status) {
    case "Excellent":
      return "bg-green-500/10 text-green-400";

    case "Good":
      return "bg-cyan-500/10 text-cyan-400";

    case "Moderate":
      return "bg-yellow-500/10 text-yellow-400";

    default:
      return "bg-red-500/10 text-red-400";
  }
}

/**
 * Simulates an AI response delay.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a greeting based on time.
 */
export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";

  return "Good Evening";
}

/**
 * Calculates storage usage percentage.
 */
export function calculateStoragePercentage(
  used: number,
  total: number
): number {
  if (total === 0) return 0;

  return Math.round((used / total) * 100);
}

/**
 * Masks sensitive data.
 *
 * Example:
 * maskString("9876543210")
 * => ******3210
 */
export function maskString(
  value: string,
  visibleCharacters: number = 4
): string {
  const hiddenLength = Math.max(
    value.length - visibleCharacters,
    0
  );

  return (
    "*".repeat(hiddenLength) +
    value.slice(-visibleCharacters)
  );
}