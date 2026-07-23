"use client";

import { useState } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const suggestedPrompts = [
  "Show my passport",
  "Find my fee receipt",
  "Generate my timeline",
  "List all uploaded documents",
];

const mockResponses: Record<string, string> = {
  "show my passport":
    "I found your passport document. It was uploaded on July 18, 2026 and is stored securely in your PHOENIX Vault.",

  "find my fee receipt":
    "I found 3 fee receipts associated with your account. The latest receipt was uploaded on July 15, 2026.",

  "generate my timeline":
    "Timeline Generated:\n• 2015 - School Admission\n• 2024 - College Admission\n• 2025 - Passport Application\n• 2026 - Education Loan Approval",

  "list all uploaded documents":
    "Documents Found:\n1. Passport.pdf\n2. Fee_Receipt.pdf\n3. Aadhaar.png\n4. Insurance.pdf",
};

export default function AIChat() {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I am PHOENIX AI. I can help you search documents, generate timelines, and manage your digital life.",
    },
  ]);

  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const key = message.toLowerCase().trim();

      const response =
        mockResponses[key] ??
        "I couldn't find an exact match, but PHOENIX AI is continuously learning to better understand your requests.";

      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="glass-card flex h-[700px] flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4 border-b border-slate-800 pb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
          <Bot className="h-7 w-7 text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            PHOENIX AI Assistant
          </h2>

          <p className="text-sm text-green-400">
            ● Online & Ready to Assist
          </p>
        </div>
      </div>

      {/* Suggested Prompts */}
      <div className="mb-6 flex flex-wrap gap-3">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => sendMessage(prompt)}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 transition hover:border-cyan-400"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-4 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/50 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === "user"
                  ? "bg-cyan-500 text-black"
                  : "border border-cyan-500/20 bg-slate-900 text-white"
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                {message.role === "assistant" ? (
                  <Bot size={18} />
                ) : (
                  <User size={18} />
                )}

                <span className="text-sm font-semibold">
                  {message.role === "assistant"
                    ? "PHOENIX AI"
                    : "You"}
                </span>
              </div>

              <p className="whitespace-pre-line text-sm">
                {message.content}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>PHOENIX AI is thinking...</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Ask PHOENIX AI anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(input);
            }
          }}
        />

        <button
          onClick={() => sendMessage(input)}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-white transition hover:scale-105"
        >
          <Send size={18} />
          Send
        </button>
      </div>
    </div>
  );
}