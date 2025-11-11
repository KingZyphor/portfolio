"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 px-6 py-20 text-zinc-900 dark:from-black dark:to-zinc-900 dark:text-zinc-50">
      <main className="w-full max-w-4xl text-center sm:text-left">
        {/* Hero Section */}
        <section className="flex flex-col items-center sm:items-start gap-6">
          <Image
            src="/profile.jpg"
            alt="Profile photo of KingZyphor"
            width={120}
            height={120}
            className="rounded-full shadow-lg border-4 border-white dark:border-zinc-800"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">KingZyphor</span> 👋
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            I’m a beginner web developer with a few months of hands-on experience in{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              HTML, CSS, and JavaScript
            </span>. I’m currently exploring more advanced tools like{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              React, Next.js, and Tailwind CSS
            </span>{" "}
            to build faster, more dynamic websites. My goal is to learn through real-world
            collaboration and contribute to awesome projects.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
          >
            Contact Me
          </a>
        </section>

        {/* About Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I started my web development journey a few months ago, and since then I’ve fallen in
            love with bringing ideas to life through clean design and interactive user experiences.
            I focus on writing well-structured, readable code and continuously improving my skills.
            <br />
            <br />
            I’m currently learning frameworks and tools like <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong> to expand my capabilities and create modern web
            applications. My long-term goal is to grow into a full-stack developer and assist others
            in building their projects.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">My Current Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML5",
              "CSS3",
              "JavaScript (ES6+)",
              "Responsive Design",
              "Version Control (Git/GitHub)",
              "React (Learning)",
              "Next.js (Learning)",
              "Tailwind CSS (Learning)",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium dark:bg-zinc-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20 text-center sm:text-left">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300 mb-6">
            I’m always open to connecting with other developers, creators, or anyone who wants to
            collaborate on interesting projects. Feel free to reach out — I’d love to hear from you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto sm:mx-0 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full rounded-md border border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full rounded-md border border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full rounded-md border border-zinc-300 bg-white dark:bg-zinc-900 dark:border-zinc-700 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm text-center sm:text-left text-zinc-600 dark:text-zinc-400">
                {status}
              </p>
            )}
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mt-8">
            <a
              href="https://github.com/KingZyphor"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              My GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-sm text-zinc-500 dark:text-zinc-500 text-center">
          © {new Date().getFullYear()} KingZyphor. Built with ❤️ using Next.js & Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}
