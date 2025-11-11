"use client";

import { useState } from "react";
import Image from "next/image";

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

const SKILLS = [
  { name: "HTML5", category: "Core" },
  { name: "CSS3", category: "Core" },
  { name: "JavaScript (ES6+)", category: "Core" },
  { name: "Responsive Design", category: "Design" },
  { name: "Version Control (Git/GitHub)", category: "Tools" },
  { name: "React", category: "Learning", badge: "🌱" },
  { name: "Next.js", category: "Learning", badge: "🌱" },
  { name: "Tailwind CSS", category: "Learning", badge: "🌱" },
] as const;

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

export default function Home() {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<StatusMessage>("");

  // --------------------------------------------------------------------------
  // EVENT HANDLERS
  // --------------------------------------------------------------------------

  /**
   * Handles contact form submission
   * Sends form data to the API endpoint and manages loading/success states
   */
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
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  /**
   * Updates form field values
   */
  function handleInputChange(
    field: keyof ContactForm,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  /**
   * Returns appropriate status message based on current state
   */
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

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      {/* Subtle Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800/50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">⚡</span>
                <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">KingZyphor</span>
              </div>
              
              <div className="flex gap-3 sm:gap-6">
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Container */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          
          {/* ================================================================
              HERO SECTION
              ================================================================ */}
          <section className="min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center items-center text-center mb-20 sm:mb-32">
            <div className="mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20" />
              <Image
                src="/profile.jpg"
                alt="Profile photo of KingZyphor"
                width={120}
                height={120}
                className="relative rounded-full shadow-2xl border-4 border-white dark:border-zinc-800 sm:w-[140px] sm:h-[140px]"
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 px-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Building the Web
              </span>
              <br />
              <span className="text-zinc-900 dark:text-zinc-100">One Line at a Time</span>
            </h1>

            <p className="max-w-2xl text-base sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 sm:mb-8 px-4">
              Beginner web developer passionate about{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">modern web technologies</span>{" "}
              and creating intuitive user experiences with{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">clean, readable code</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full px-4 sm:w-auto">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#skills" className="btn-secondary">
                View Skills
              </a>
            </div>
          </section>

          {/* ================================================================
              ABOUT SECTION
              ================================================================ */}
          <section id="about" className="mb-20 sm:mb-32 scroll-mt-20">
            <h2 className="section-title">About Me</h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {/* Card 1: Journey */}
              <div className="feature-card">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  The Journey
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Started web development a few months ago and fell in love with 
                  bringing ideas to life through code and design.
                </p>
              </div>

              {/* Card 2: Focus */}
              <div className="feature-card">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  My Focus
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Writing clean, well-structured code while continuously learning 
                  modern frameworks and best practices.
                </p>
              </div>

              {/* Card 3: Goals */}
              <div className="feature-card">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Future Goals
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Growing into a full-stack developer and collaborating on 
                  real-world projects that make an impact.
                </p>
              </div>
            </div>

            <div className="info-panel">
              <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-lg">
                I started my web development journey a few months ago, and since then I've fallen in
                love with bringing ideas to life through clean design and interactive user experiences.
                I focus on writing well-structured, readable code and continuously improving my skills.
                <br /><br />
                I'm currently learning frameworks and tools like{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span> and{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Tailwind CSS</span>{" "}
                to expand my capabilities and create modern web applications. My long-term goal is to 
                grow into a full-stack developer and assist others in building their projects.
              </p>
            </div>
          </section>

          {/* ================================================================
              SKILLS SECTION
              ================================================================ */}
          <section id="skills" className="mb-20 sm:mb-32 scroll-mt-20">
            <h2 className="section-title">My Current Skills</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                      {skill.name}
                    </span>
                    {skill.badge && (
                      <span className="text-lg">{skill.badge}</span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-medium">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium">
                <span className="text-green-500">🌱</span> Currently learning and actively improving
              </p>
            </div>
          </section>

          {/* ================================================================
              CONTACT SECTION
              ================================================================ */}
          <section id="contact" className="mb-20 sm:mb-32 scroll-mt-20">
            <h2 className="section-title">Let's Connect</h2>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-base sm:text-lg text-zinc-700 dark:text-zinc-300 mb-8 sm:mb-12 px-4">
                I'm always open to connecting with other developers, creators, or anyone who wants to
                collaborate on interesting projects. Feel free to reach out — I'd love to hear from you!
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2"
                    >
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

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2"
                    >
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

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2"
                    >
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-submit"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {/* Status Message */}
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

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-6 sm:mt-8">
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
          </section>
        </main>

        {/* ================================================================
            FOOTER
            ================================================================ */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-zinc-50 dark:bg-zinc-950">
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