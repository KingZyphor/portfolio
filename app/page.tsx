"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type Skill = {
  name: string;
  category: string;
  badge?: string;
};

// ============================================================================
// CONSTANTS & DATA
// ============================================================================

const SKILLS: Skill[] = [
  { name: "HTML5", category: "Core" },
  { name: "CSS3", category: "Core" },
  { name: "JavaScript (ES6+)", category: "Core" },
  { name: "Responsive Design", category: "Design" },
  { name: "Version Control (Git/GitHub)", category: "Tools" },
  { name: "React", category: "Learning", badge: "🌱" },
  { name: "Next.js", category: "Learning", badge: "🌱" },
  { name: "Tailwind CSS", category: "Learning", badge: "🌱" },
];

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-4 text-center">
          <p className="text-sm sm:text-base font-medium">
            <span className="text-lg mr-2">🎨</span>
            <strong>Announcement:</strong> I am now accepting picture editing requests for free!{" "}
            <Link href="/photography" className="underline hover:text-blue-100 transition-colors font-semibold">
              Learn More
            </Link>
          </p>
        </div>

        <Navigation />

        <main className="max-w-6xl mx-auto px-6 py-20">
          <section className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-32">
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20" />
              <Image
                src="/profile.jpg"
                alt="Profile photo of KingZyphor"
                width={140}
                height={140}
                className="relative rounded-full shadow-2xl border-4 border-white dark:border-zinc-800"
                priority
              />
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Building the Web
              </span>
              <br />
              <span className="text-zinc-900 dark:text-zinc-100">One Line at a Time</span>
            </h1>

            <p className="max-w-2xl text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
              Beginner web developer and photo editor passionate about{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">modern web technologies</span>{" "}
              and{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">enhancing gaming screenshots</span>{" "}
              with clean, professional results.
            </p>

            {/* Free Services Notice Box */}
            <div className="max-w-2xl mx-auto mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700/50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl">🎉</span>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300">
                  All Services Free!
                </h3>
                <span className="text-3xl">🎉</span>
              </div>
              <p className="text-green-800 dark:text-green-200 font-medium">
                All development help and photo editing services are completely free until further notice!
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a href="#skills" className="btn-secondary">
                View Skills
              </a>
            </div>
          </section>

          <section id="about" className="mb-32 scroll-mt-20">
            <h2 className="section-title">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="feature-card">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Web Development
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Started web development a few months ago and fell in love with 
                  bringing ideas to life through code and design. I focus on writing 
                  clean, well-structured code.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Photo Editing
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Specialized in enhancing gaming screenshots and bringing out better 
                  detail and quality. I offer free editing services to make your images 
                  look professional.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Continuous Learning
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Constantly improving my skills in modern frameworks and tools like 
                  Next.js and Tailwind CSS, while refining my photo editing techniques.
                </p>
              </div>

              <div className="feature-card">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Future Goals
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Growing into a full-stack developer and collaborating on 
                  real-world projects while helping others enhance their visual content.
                </p>
              </div>
            </div>

            <div className="info-panel">
              <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-lg">
                I started my web development journey a few months ago, and since then I've fallen in
                love with bringing ideas to life through clean design and interactive user experiences.
                I focus on writing well-structured, readable code and continuously improving my skills.
                <br /><br />
                Alongside development, I also specialize in{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">photo editing and enhancement</span>,
                particularly for gaming screenshots. I offer free editing services to help bring out better 
                detail and quality in images, making them look professional and polished.
                <br /><br />
                I'm currently learning frameworks and tools like{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span> and{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Tailwind CSS</span>{" "}
                to expand my capabilities and create modern web applications. My long-term goal is to 
                grow into a full-stack developer while continuing to help others with both their development 
                and visual content needs.
              </p>
            </div>
          </section>

          <section id="skills" className="mb-32 scroll-mt-20">
            <h2 className="section-title">My Current Skills</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

            <div className="mt-8 text-center">
              <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                <span className="text-green-500">🌱</span> Currently learning and actively improving
              </p>
            </div>
          </section>

          <section className="mb-32">
            <h2 className="section-title">Get in Touch</h2>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8">
                I'm always open to connecting with other developers, creators, or anyone who wants to
                collaborate on interesting projects. Need help with code or want your gaming screenshots enhanced? 
                I'm here to help!
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Contact Me
              </Link>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
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