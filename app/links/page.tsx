"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type LinkItem = {
  title: string;
  url: string;
  description?: string;
  icon?: string;
};

type LinkCategory = {
  name: string;
  icon: string;
  links: LinkItem[];
};

// ============================================================================
// CONSTANTS & DATA
// ============================================================================

const LINK_CATEGORIES: LinkCategory[] = [
  {
    name: "Discord",
    icon: "💬",
    links: [
      {
        title: "KingZyphor Studios Discord",
        url: "https://discord.gg/85SKNqWQq2",
        description: "Join our community",
        icon: "🎮"
      }
    ]
  },
  {
    name: "Projects",
    icon: "🚀",
    links: [
      {
        title: "Portfolio Website",
        url: "https://github.com/KingZyphor/portfolio",
        description: "This website's source code",
        icon: "💻"
      },
      {
        title: "Devtools CLI NPM Package",
        url: "https://www.npmjs.com/package/@kingzyphor/devtools-cli",
        description: "Developer tools command line interface",
        icon: "📦"
      }
    ]
  },
  {
    name: "Social Media",
    icon: "🌐",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/KingZyphor",
        description: "Check out my code",
        icon: "💻"
      }
    ]
  },
  {
    name: "Other Links",
    icon: "🔗",
    links: [
      {
        title: "Photo Editing Services",
        url: "/photography",
        description: "Free photo editing",
        icon: "📸"
      },
      {
        title: "Contact Form",
        url: "/contact",
        description: "Get in touch",
        icon: "✉️"
      }
    ]
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative">
        <Navigation />

        <main className="max-w-6xl mx-auto px-6 py-20">
          {/* Header Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Links
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Find all my social media profiles, projects, and other resources in one place.
            </p>
          </section>

          {/* Links Categories */}
          <section className="mb-32">
            {LINK_CATEGORIES.map((category) => (
              <div key={category.name} className="mb-12">
                <h2 className="section-title flex items-center gap-3 justify-center">
                  <span className="text-4xl">{category.icon}</span>
                  {category.name}
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {category.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('http') ? "_blank" : undefined}
                      rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="feature-card group cursor-pointer"
                    >
                      <div className="text-4xl mb-4">{link.icon}</div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {link.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Call to Action */}
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