"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string; // benefits text
  descriptionItems?: string[]; // detailed benefits list
};

type GalleryProps = {
  items: GalleryItem[];
  title?: string;
};

export default function Gallery({ items, title }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, string>>({});
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title ? (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
          </div>
        ) : null}

        {/* Masonry-like grid with one featured card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const currentSrc = imageErrors[idx] || item.src;
            const isFeatured = idx === 0; // make first image large
            return (
              <figure
                key={idx}
                className={
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2 relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-50"
                    : "relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-gray-50"
                }
              >
                <Image
                  src={currentSrc}
                  alt={item.alt}
                  title={item.title || item.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes={
                    isFeatured
                      ? "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  }
                  priority={idx < 1}
                  onError={() => setImageErrors(prev => ({ ...prev, [idx]: "/fizyo-sefa-logo.jpg" }))}
                  onClick={() => setActiveIndex(idx)}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white text-sm p-3 cursor-pointer" onClick={() => setActiveIndex(idx)}>
                  {item.title || item.alt}
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Modal */}
        {activeItem ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {activeItem.title || activeItem.alt}
                </h3>
                {activeItem.descriptionItems && activeItem.descriptionItems.length > 0 ? (
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {activeItem.descriptionItems.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    {activeItem.description || "Bu uygulamanın faydaları: ağrıyı azaltma, hareket kabiliyetini artırma ve iyileşmeyi hızlandırma."}
                  </p>
                )}
                <div className="mt-4 text-right">
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}


