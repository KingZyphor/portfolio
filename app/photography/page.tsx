"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  game?: string; // Optional: name of the game
}

// ============================================================================
// SAMPLE DATA - Replace with your actual photos
// ============================================================================

// Replace these with your actual photo filenames from public/photos/
const PHOTOS: Photo[] = [
  {
    id: 1,
    src: "/forza5pic1.jpg",
    alt: "Forza Horizon 5 edited picture",
    title: "Supra parked in the desert near houses",
    game: "Forza Horizon 5"
  },
  {
    id: 2,
    src: "/crewmotorfestH2sunset1.jpg",
    alt: "The sunset with a H2 parked on the road",
    title: "The Ninja H2 parked on the road during sunset",
    game: "The Crew Motorfest"
  },
  {
    id: 3,
    src: "/NinjaH2withsunoverbackseat.jpg",
    alt: "The 2015 Kawasaki Ninja H2 with the sun over the backseat",
    title: "The 2015 Kawasaki Ninja H2 with the sun over the backseat",
    game: "The Crew Motorfest"
  },
  {
    id: 4,
    src: "/exoticcarinthegrasswithnicesky.jpg",
    alt: "A exotic car parked in the grass with a nice sky",
    title: "An exotic car parked in the grass with a nice sky",
    game: "Forza Horizon 5"
  },
  {
    id: 5,
    src: "/exoticcaringrasswithrainyweather.jpg",
    alt: "Exotic car parked in the grass during rainy weather",
    title: "Exotic car parked in the grass during rainy weather",
    game: "Forza Horizon 5"
  },{
    id: 6,
    src: "/exoticcarparkedonroadinforestwithrainyweather.jpg",
    alt: "Exotic car parked on road in forest with rainy weather",
    title: "Exotic car parked on road in forest with rainy weather",
    game: "Forza Horizon 5"
  },{
    id: 7,
    src: "/2015SRThellcatparkedatbeach.jpg",
    alt: "2015 SRT Hellcat parked at beach",
    title: "2015 SRT Hellcat parked at beach",
    game: "Forza Horizon 5"
  },

 /* 
// ============================================================================
// Template for adding more photos
// ============================================================================

{
    id: 4,
    src: "/image",
    alt: "",
    title: "",
    game: ""
  },

  */
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative">
        <Navigation />

        <main className="max-w-7xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Game Screenshot Editing
              </span>
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg max-w-3xl mx-auto mb-6">
              I specialize in editing and enhancing gaming screenshots to bring out better detail and quality. 
              Each image is carefully refined through post-processing to achieve professional results.
            </p>
            <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800/50 rounded-xl p-6 mb-4">
              <p className="text-blue-800 dark:text-blue-300 font-semibold text-lg mb-2">
                ✨ 100% Free Service
              </p>
              <p className="text-zinc-700 dark:text-zinc-400">
                I offer this service completely free because not many people do this kind of work without charging. 
                However, I reserve the right to deny or delay any request based on my availability and workload.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400">
              <span className="font-medium"></span>
              <span className="text-zinc-400 dark:text-zinc-600"></span>
            </div>
          </div>

          {/* Photo Grid - Scrollable */}
          {PHOTOS.length > 0 ? (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
                My Work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {PHOTOS.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-zinc-200 dark:bg-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-xl">{photo.title}</h3>
                        {photo.game && (
                          <p className="text-blue-400 text-sm font-medium mb-1">{photo.game}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                🎮 Edited screenshots coming soon! Check back later.
              </p>
            </div>
          )}

          {/* Services/Skills Section */}
          <div className="max-w-4xl mx-auto mt-20 mb-16">
            <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
              What I Do
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="feature-card text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Color Grading
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Enhancing colors and tones to make gaming screenshots pop with vibrant, cinematic quality.
                </p>
              </div>

              <div className="feature-card text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Detail Enhancement
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Sharpening details, improving clarity, and bringing out textures for professional results.
                </p>
              </div>

              <div className="feature-card text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                  Post-Processing
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Careful editing and refinement to transform raw screenshots into polished, showcase-worthy images.
                </p>
              </div>
            </div>
          </div>

          {/* Terms/Info Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="info-panel">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 text-center">
                Important Information
              </h3>
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🆓</span>
                  <span><strong>Completely Free:</strong> I provide this service at no cost because I believe quality editing should be accessible to everyone.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">⏱️</span>
                  <span><strong>Flexible Timeline:</strong> Turnaround time varies based on my schedule and current workload. I'll do my best to complete requests promptly.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✋</span>
                  <span><strong>Selective Requests:</strong> I reserve the right to decline any request that doesn't align with my skills or availability.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💬</span>
                  <span><strong>Communication:</strong> I'll keep you updated on the status of your request and let you know if there are any delays.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-6">
              Have gaming screenshots you'd like enhanced?
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Submit a Request
            </Link>
          </div>
        </main>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-zinc-300 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-white font-bold text-2xl mb-2">{selectedPhoto.title}</h3>
                {selectedPhoto.game && (
                  <p className="text-blue-400 font-medium mb-1">{selectedPhoto.game}</p>
                )}
              </div>
            </div>
          </div>
        )}

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