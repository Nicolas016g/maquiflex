export const metadata = { title: "MF480Q | Maquiflex" };

const specs = [
  ["Modelo", "MF480Q form-fill & seal"],
  ["Volume", "100 g a 2 kg"],
  ["Velocidade", "50–60 ppm no duplex · 200–220 ppm no quadriplex"],
  ["Pouch", "mín. 80×100×20 mm · máx. 220×300×60 mm"],
  ["Eficiência", "mínimo 95% (DIN 8743)"],
  ["Perdas", "< 0,5%"],
  ["Dosagem", "precisão < 1,0%"],
  ["Vazamento", "1 / 15.000"],
  ["Máquina", "2.150 × 14.000 × 3.500 mm"],
  ["Energia", "máx. 70 kW · 220/440 V"],
  ["Ar", "6 bar · 1.200 Nl/min"],
  ["Ruído", "< 70 dB"],
  ["Acabamento", "aço inoxidável AISI-304 / AISI-316 no contato com produto"],
];

export default function MaquinaPage() {
  return (
    <main className="bg-[#f3f5f7] pt-32 text-[#141820]">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2">
        <div>
          <p className="tech text-[11px] text-[#202847]">Portfólio</p>
          <h1 className="display mt-3 text-7xl md:text-8xl">MF480Q</h1>
          <p className="mt-4 max-w-xl text-lg">Envasadora horizontal que parte da bobina, forma o pouch, dosa e sela. Quadriplex para os formatos rápidos e duplex quando o volume sobe.</p>
        </div>
        <img src="/media/linha.jpg" alt="Linha completa MF480Q" className="w-full bg-white object-contain" />
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-8 md:grid-cols-3">
        {[
          ["Desbobinadora", "Filme contínuo, freio pneumático, alinhamento de borda e bobina de até 600 mm.", "/media/video/desbobinadora.mp4"],
          ["Formação", "Fundo do pouch, fotocélula de passo e centralização da arte impressa.", "/media/video/formacao.mp4"],
          ["Envase e selagem", "Duas estações de dosagem, estiramento da boca e selagem superior.", "/media/video/linha-360.mp4"],
        ].map(([title, text, src]) => (
          <article key={title}>
            <video className="aspect-video w-full bg-black object-cover" src={src} muted loop playsInline autoPlay />
            <h2 className="mt-3 text-2xl">{title}</h2>
            <p className="mt-2 text-[#202847]">{text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <dl className="divide-y divide-black/10 border-y border-black/10">
          {specs.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 md:grid-cols-[220px_1fr]">
              <dt className="tech text-[11px] text-[#202847]">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
