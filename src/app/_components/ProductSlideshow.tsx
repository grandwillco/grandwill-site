"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import clsx from "clsx";

type Product = {
  src: string;          // e.g., "/products/your-image.jpg"
  title?: string;       // short caption headline
  subtitle?: string;    // optional supporting line
};

export default function ProductSlideshow({
  products,
  intervalMs = 4000,
}: {
  products: Product[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const count = products.length;

  useEffect(() => {
    if (count <= 1) return;

    if (!paused) {
      timer.current = setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, intervalMs);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [count, intervalMs, paused]);

  const go = (n: number) => {
    if (timer.current) clearInterval(timer.current);
    setIndex((n + count) % count);
  };

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key.toLowerCase() === " ") setPaused((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const current = products[index];

  return (
    <div
      className="relative group select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Product slideshow"
    >
      {/* Frame */}
      <div className="aspect-[4/3] rounded-none border border-white/15 bg-black overflow-hidden">
        {/* Image */}
        {current?.src ? (
          <Image
            src={current.src}
            alt={current.title ?? "Product image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
            priority
          />
        ) : (
          <div className="w-full h-full grid place-content-center text-white/50 text-sm">
            Add images to /public/products to populate the slideshow
          </div>
        )}

        {/* Gradient for legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Caption */}
        {(current?.title || current?.subtitle) && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {current?.title && (
              <p className="text-white font-bold tracking-wide uppercase">
                {current.title}
              </p>
            )}
            {current?.subtitle && (
              <p className="text-white/80 text-sm mt-0.5">{current.subtitle}</p>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      {count > 1 && (
        <>
          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black text-white border border-white/20 hidden sm:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black text-white border border-white/20 hidden sm:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots + Pause/Play */}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3">
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play" : "Pause"}
              className="p-2 bg-black/60 hover:bg-black text-white border border-white/20"
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <div className="flex items-center gap-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={clsx(
                    "h-2 w-2 border border-white/40",
                    i === index ? "bg-blue-500" : "bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
