const steps = ["Cliente", "Projeto", "Modelagem 3D", "Fabricação", "Montagem", "FAT", "Instalação", "Pós-venda"];
const services = ["Instalação e start-up", "Treinamento", "Suporte remoto", "Assistência em campo", "Peças de reposição", "Manutenção preventiva", "Upgrades e retrofit"];

export const metadata = { title: "Engenharia | Maquiflex" };

export default function EngenhariaPage() {
  return (
    <main className="bg-[#07080a] pt-32 text-white">
      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="tech text-[11px] text-white/50">Monte Alto</p>
        <h1 className="display mt-3 max-w-4xl text-6xl md:text-8xl">Da linha Volpak para uma fábrica própria.</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">Rafael Pereira e Renato Ramalho somam décadas ao lado dos principais fabricantes de HFFS. A Maquiflex transforma esse conhecimento em máquina própria, com SolidWorks, CLP, servo e pós-venda local.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="border border-white/15 p-5">
            <h2 className="text-2xl">Rafael Pereira</h2>
            <p className="tech mt-1 text-[11px] text-white/45">Diretor comercial</p>
            <p className="mt-3 text-white/70">26 anos no setor. Passou pela linha Volpak na SIG e pela Mespack no Brasil antes de fundar a operação comercial da Maquiflex.</p>
          </article>
          <article className="border border-white/15 p-5">
            <h2 className="text-2xl">Renato Ramalho</h2>
            <p className="tech mt-1 text-[11px] text-white/45">Diretor técnico</p>
            <p className="mt-3 text-white/70">20 anos em automação. Manutenção de HFFS em todo o Brasil, hoje à frente da engenharia e do pós-venda.</p>
          </article>
        </div>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="border border-white/15 p-4">
              <span className="tech text-[11px] text-white/40">0{index + 1}</span>
              <p className="mt-2 text-lg">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="display text-4xl">Fábrica</h2>
            <p className="mt-3 text-white/70">1.200 m² hoje, área preparada para 4.000 m². Até 8 máquinas em montagem ao mesmo tempo, showroom, estoque estratégico e Pouch Lab.</p>
          </div>
          <div>
            <h2 className="display text-4xl">Depois da entrega</h2>
            <ul className="mt-3 grid gap-2 text-white/75">
              {services.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
