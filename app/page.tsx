import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020817]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logosinfondo.png"
              alt="Oli Development LLC"
              width={38}
              height={38}
              className="object-contain"
            />

            <span className="text-xl font-bold text-white">
              Oli Development LLC
            </span>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#servicios" className="hover:text-white">
              Servicios
            </a>

            <a href="#nosotros" className="hover:text-white">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-white">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-28 pb-28">
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute left-1/2 top-80 h-[350px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Image
            src="/logosinfondo.png"
            alt="Oli Development LLC"
            width={180}
            height={180}
            priority
            className="mx-auto mb-6 object-contain drop-shadow-[0_0_45px_rgba(22,119,242,0.35)]"
          />

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#33B5FF]">
            Desarrollo Web • Apps • Sistemas Empresariales • Automatización
          </p>

<h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              Software que transforma
            <span className="block text-[#33B5FF]">negocios</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400 md:text-xl">
            Desarrollamos software, sistemas empresariales, automatizaciones e integraciones para
            empresas que buscan escalar sus operaciones y aumentar su
            productividad.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-xl bg-[#1677F2] px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#0D47C7]"
            >
              Solicitar Presupuesto
            </a>


          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>✓ Desarrollo Web</span>
            <span>✓ Sistemas Empresariales</span>
            <span>✓ Apps</span>
            <span>✓ Automatización</span>
            <span>✓ QA Testing</span>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-[#030B1D] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold text-[#33B5FF]">Servicios</p>
            <h2 className="mt-3 text-4xl font-bold">
              Soluciones digitales para empresas
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Desarrollo Web",
                desc: "Sitios corporativos, landing pages, portales y aplicaciones web modernas.",
              },
              {
                title: "Sistemas Empresariales",
                desc: "Ventas, stock, producción, reportes y gestión administrativa.",
              },
              {
                title: "Sistemas & Facturación",
                desc: "ERPNext, Odoo, integraciones API y facturación electrónica.",
              },
              {
                title: "Dashboards",
                desc: "Visualización de datos para tomar mejores decisiones.",
              },
              {
                title: "Automatización",
                desc: "Procesos automáticos para reducir tiempo y errores.",
              },
              {
                title: "QA Testing",
                desc: "Pruebas funcionales y aseguramiento de calidad.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* NOSOTROS */}
      <section id="nosotros" className="bg-[#020817] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-[#33B5FF]">Nosotros</p>

          <h2 className="mt-3 text-4xl font-bold">
            Tecnología enfocada en resultados
          </h2>

          <p className="mt-8 text-lg text-slate-400">
            Ayudamos a empresas a optimizar sus procesos
            mediante software moderno, automatización, sistemas empresariales y
            soluciones digitales escalables.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-[#030B1D] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-[#33B5FF]">Contacto</p>

          <h2 className="mt-3 text-4xl font-bold">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Hablemos y construyamos la solución ideal para tu negocio.
          </p>

          <a
            href="https://wa.me/595972397576"
            target="_blank"
            className="mt-10 inline-block rounded-xl bg-[#1677F2] px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#0D47C7]"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#020817] px-6 py-8 text-center text-slate-400">
        <p>© 2026 Oli Development LLC</p>
        <p className="mt-2 text-sm">
          Desarrollo Web • Apps • Sistemas Empresariales • Automatización
        </p>
      </footer>
    </main>
  );
}