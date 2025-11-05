"use client";

import Image from "next/image";
import { useState } from "react";

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function LogoTile({ name, scale = 1 }: { name: string; scale?: number }) {
  const [index, setIndex] = useState(0);
  const base = `/brands/${slugify(name)}`;
  const sources = [`${base}.png`, `${base}.svg`];
  const src = sources[index];

  const boxCls = "h-16 md:h-20 lg:h-24 w-full flex items-center justify-center overflow-hidden";

  if (index >= sources.length) return <div className={boxCls} aria-hidden />;

  return (
    <div className={boxCls}>
      <Image
        src={src}
        alt={`${name} logo`}
        width={320}
        height={160}
        className="h-full w-auto object-contain"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
        onError={() => setIndex(index + 1)}
      />
    </div>
  );
}
