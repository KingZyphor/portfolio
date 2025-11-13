"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type StatusMessage = "" | "sending" | "success" | "error";

// ============================================================================
// CONSTANTS & DATA
// ============================================================================

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/KingZyphor",
    icon: "💻",
  },
] as const;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<StatusMessage>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  function handleInputChange(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function getStatusMessage(): string {
    switch (status) {
      case "sending":
        return "⏳ Sending your message...";
      case "success":
        return "✅ Message sent successfully!";
      case "error":
        return "❌ Something went wrong. Please try again.";
      default:
        return "";
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative">
        <Navigation />

        <main className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg max-w-2xl mx-auto mb-8">
              Whether you need help with development or want your images enhanced, I'm here to help!
            </p>

            {/* Services Info Box */}
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-blue-200 dark:border-blue-800/50 rounded-xl p-6 text-left">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Development Services
                </h3>
                <ul className="text-zinc-700 dark:text-zinc-300 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Discussing development ideas and projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Code help and troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Writing code for your website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Guiding you to build your own website</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-2 border-purple-200 dark:border-purple-800/50 rounded-xl p-6 text-left">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Image Enhancement
                </h3>
                <ul className="text-zinc-700 dark:text-zinc-300 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                    <span>In-game screenshot enhancement (preferred)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                    <span>Real-life photo editing (if within my capabilities)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                    <span>Quality and detail improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 flex-shrink-0">•</span>
                    <span>Color grading and post-processing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700 rounded-lg p-4">
              <p className="text-zinc-700 dark:text-zinc-400 text-sm">
                <strong className="text-zinc-900 dark:text-zinc-200">Please note:</strong> I may decline requests if I cannot fulfill them to your needs. 
                If that's the case, I'm happy to guide you to someone else who might be a better fit.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn-submit">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <div
                    className={`text-center text-sm p-4 rounded-lg font-medium ${
                      status === "success"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-2 border-green-300 dark:border-green-500/30"
                        : status === "error"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-2 border-red-300 dark:border-red-500/30"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-500/30"
                    }`}
                  >
                    {getStatusMessage()}
                  </div>
                )}
              </div>
            </form>

            <div className="flex flex-wrap gap-4 justify-center mt-12">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="text-xl mr-2">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-zinc-50 dark:bg-zinc-950 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">KingZyphor</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              © {new Date().getFullYear()} Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}