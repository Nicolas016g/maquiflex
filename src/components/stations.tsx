"use client";

import { useState } from "react";

const stations = [
  { id: "01", name: "Desbobinadora", file: "/media/video/desbobinadora.mp4", text: "Filme contínuo, freio pneumático e alinhamento automático das bordas. Bobina de até 600 mm." },
  { id: "02", name: "Formação", file: "/media/video/formacao.mp4", text: "Fundo do pouch, fotocélula de passo e a arte impressa no centro de cada embalagem." },
  { id: "03", name: "Envase", file: "/media/video/linha-360.mp4", text: "Duas estações de dosagem, estiramento da boca e selagem superior em aço inoxidável." },
];

export function Stations() {
  const [current, setCurrent] = useState(1);
  const station = stations[current];
  return (
    <section className="bg-[#07080a] text-white" id="estacoes">
      <div className="px-6 py-16 md:px-10">
        <p className="tech text-[11px] text-white/40">04 — Estações</p>
        <h2 className="display mt-3 max-w-3xl text-6xl md:text-7xl">Do filme ao pouch fechado.</h2>
      </div>
      <div className="grid lg:grid-cols-[280px_1fr]">
        <div className="border-y border-white/10 lg:border-y-0 lg:border-r">
          {stations.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`flex w-full items-baseline gap-4 border-b border-white/10 px-6 py-6 text-left md:px-10 ${index === current ? "bg-white text-black" : "hover:bg-white/5"}`}
            >
              <span className="display text-4xl">{item.id}</span>
              <span className="text-lg">{item.name}</span>
            </button>
          ))}
        </div>
        <div className="relative min-h-[420px]">
          <video key={station.file} className="soft-in h-full min-h-[420px] w-full object-cover" src={station.file} poster="/media/linha.jpg" autoPlay muted loop playsInline />
          <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-lg md:p-10">{station.text}</p>
        </div>
      </div>
    </section>
  );
}
