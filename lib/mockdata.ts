import {
  FileText,
  Shield,
  Clock3,
  Search,
  GraduationCap,
  Building2,
  IdCard,
  Landmark,
  Rocket,
  Brain,
  Upload,
  ShieldAlert,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Documents",
    value: 24,
    icon: FileText,
    change: "+12%",
    description: "Securely stored files",
  },
  {
    title: "AI Searches",
    value: 158,
    icon: Search,
    change: "+18%",
    description: "Queries processed",
  },
  {
    title: "Timeline Events",
    value: 8,
    icon: Clock3,
    change: "+2",
    description: "Life milestones recorded",
  },
  {
    title: "Security Score",
    value: "99%",
    icon: Shield,
    change: "Excellent",
    description: "Overall account protection",
  },
];

export const uploadedDocuments = [
  {
    id: 1,
    name: "passport.pdf",
    size: "1.2 MB",
    type: "PDF",
    uploadedAt: "18 Jul 2026",
  },
  {
    id: 2,
    name: "aadhaar_card.png",
    size: "540 KB",
    type: "IMAGE",
    uploadedAt: "15 Jul 2026",
  },
  {
    id: 3,
    name: "education_loan.pdf",
    size: "2.1 MB",
    type: "PDF",
    uploadedAt: "12 Jul 2026",
  },
  {
    id: 4,
    name: "fee_receipt.pdf",
    size: "860 KB",
    type: "PDF",
    uploadedAt: "10 Jul 2026",
  },
];

export const timelineEvents = [
  {
    year: "2015",
    title: "School Admission",
    description:
      "Started the academic journey and built a strong foundation.",
    status: "completed",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Engineering Admission",
    description:
      "Joined the Computer Science (IoT) program and began exploring AI and cybersecurity.",
    status: "completed",
    icon: Building2,
  },
  {
    year: "2025",
    title: "Passport Application",
    description:
      "Applied for a passport to pursue global opportunities.",
    status: "completed",
    icon: IdCard,
  },
  {
    year: "2026",
    title: "Education Loan Approved",
    description:
      "Successfully secured an education loan for higher studies.",
    status: "current",
    icon: Landmark,
  },
  {
    year: "2030",
    title: "M.Tech at IIT Bombay",
    description:
      "Target milestone for postgraduate studies in AI and Cybersecurity.",
    status: "upcoming",
    icon: Rocket,
  },
];

export const aiFeatures = [
  {
    title: "Document Search",
    description:
      "Find documents instantly using natural language.",
    icon: Brain,
  },
  {
    title: "Smart Uploads",
    description:
      "Automatically classify and organize uploaded files.",
    icon: Upload,
  },
  {
    title: "Emergency Recovery",
    description:
      "Provide secure access to trusted contacts during emergencies.",
    icon: ShieldAlert,
  },
];

export const emergencyContacts = [
  {
    name: "Primary Guardian",
    relation: "Father",
    phone: "+91 98765 43210",
  },
  {
    name: "Emergency Support",
    relation: "Mother",
    phone: "+91 91234 56789",
  },
  {
    name: "Trusted Contact",
    relation: "Brother",
    phone: "+91 99887 76655",
  },
];

export const recentActivity = [
  {
    id: 1,
    action: "Uploaded passport.pdf",
    time: "2 minutes ago",
  },
  {
    id: 2,
    action: "Generated AI timeline",
    time: "10 minutes ago",
  },
  {
    id: 3,
    action: "Searched for fee receipt",
    time: "18 minutes ago",
  },
  {
    id: 4,
    action: "Added emergency contact",
    time: "30 minutes ago",
  },
];

export const securityStatus = {
  twoFactorAuth: true,
  emergencyMode: true,
  cloudBackup: true,
  securityScore: 99,
};

export const suggestedPrompts = [
  "Show my passport",
  "Find my fee receipt",
  "Generate my timeline",
  "List all uploaded documents",
  "Recommend a backup strategy",
];

export const mockResponses: Record<string, string> = {
  "show my passport":
    "Your passport was uploaded on 18 July 2026 and is securely stored in the PHOENIX Vault.",

  "find my fee receipt":
    "I found 3 fee receipts. The latest receipt was uploaded on 10 July 2026.",

  "generate my timeline":
    "Timeline generated successfully. You currently have 5 recorded milestones.",

  "list all uploaded documents":
    "Documents Found: passport.pdf, aadhaar_card.png, education_loan.pdf, fee_receipt.pdf",

  "recommend a backup strategy":
    "Enable cloud backup, export monthly reports, and configure emergency recovery access.",
};