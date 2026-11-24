const pouches = [
  ["Alça + tampa corner", "/media/pouches/alca-corner.jpg"],
  ["Bico formatado", "/media/pouches/bico.jpg"],
  ["Forma + tampa superior", "/media/pouches/forma-tampa.jpg"],
  ["Forma + zíper", "/media/pouches/forma-ziper.jpg"],
  ["Tampa corner", "/media/pouches/tampa-corner.jpg"],
  ["Tampa superior", "/media/pouches/tampa-superior.jpg"],
  ["Zíper e display", "/media/pouches/ziper-display.jpg"],
];

export const metadata = { title: "Embalagens | Maquiflex" };

export default function EmbalagensPage() {
  return (
    <main className="bg-[#f3f5f7] pt-32 text-[#141820]">
      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="tech text-[11px] text-[#202847]">Pouch Lab</p>
        <h1 className="display mt-2 text-6xl">O formato entra no projeto.</h1>
        <p className="mt-4 max-w-2xl text-lg">Stand-up pouch e quatro soldas, com os formatos fotografados no banco da Maquiflex. O Pouch Lab testa filme, aplicação e dosagem antes da máquina sair.</p>
        <img src="/media/pouches/cargill.png" alt="Pouch desenvolvido para a Cargill" className="mt-8 max-h-80 w-full bg-white object-contain" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pouches.map(([name, src]) => (
            <figure key={name} className="bg-white p-3">
              <img src={src} alt={name} className="h-64 w-full object-contain" />
              <figcaption className="mt-2 text-sm">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
