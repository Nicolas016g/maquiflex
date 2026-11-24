"use client";

import { useState } from "react";

const pouches = [
  ["Alça + tampa corner", "/media/pouches/alca-corner.jpg"],
  ["Bico formatado", "/media/pouches/bico.jpg"],
  ["Forma + tampa superior", "/media/pouches/forma-tampa.jpg"],
  ["Forma + zíper", "/media/pouches/forma-ziper.jpg"],
  ["Tampa corner", "/media/pouches/tampa-corner.jpg"],
  ["Tampa superior", "/media/pouches/tampa-superior.jpg"],
  ["Zíper e display", "/media/pouches/ziper-display.jpg"],
];

export function Pouches() {
  const [current, setCurrent] = useState(3);
  return (
    <section className="bg-[#f4f6f8] text-[#12151b]" id="pouches">
      <div className="flex items-end justify-between gap-6 px-6 py-14 md:px-10">
        <div>
          <p className="tech text-[11px] text-[#202847]">05 — Formatos</p>
          <h2 className="display mt-3 text-6xl md:text-7xl">Sete pouches.<br />Uma máquina.</h2>
        </div>
        <p className="hidden max-w-xs text-right text-[#202847] md:block">{pouches[current][0]}</p>
      </div>
      <img key={pouches[current][1]} src={pouches[current][1]} alt={pouches[current][0]} className="soft-in mx-auto h-[46vh] w-full max-w-5xl object-contain px-6 md:h-[52vh]" />
      <div className="mt-8 flex gap-3 overflow-x-auto px-6 pb-16 md:px-10">
        {pouches.map(([name, src], index) => (
          <button key={name} type="button" aria-label={name} onClick={() => setCurrent(index)} className={`shrink-0 border bg-white p-2 transition-opacity duration-500 ${index === current ? "border-[#202847] opacity-100" : "border-transparent opacity-55 hover:opacity-100"}`}>
            <img src={src} alt="" className="h-20 w-20 object-contain md:h-24 md:w-24" />
          </button>
        ))}
      </div>
    </section>
  );
}
