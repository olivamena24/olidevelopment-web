
import Image from "next/image";
import AnimacionOD from "./components/AnimacionOD";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  ShieldCheck,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Sitios web modernos, rápidos y adaptados a las necesidades de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Aplicaciones intuitivas y funcionales para conectar con tus clientes.",
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description:
      "Soluciones a medida para optimizar ventas, inventario y procesos.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & QA",
    description:
      "Pruebas de software para garantizar calidad, seguridad y funcionalidad.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080F1F] text-white">
      {/* NAVEGACIÓN */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080F1F]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
  <Image
    src="/bluelogo.png"
    alt="Oli Development"
    width={42}
    height={42}
    className="h-auto w-10 object-contain"
  />

  <span className="text-base font-semibold tracking-tight">
    Oli Development <span className="text-slate-400">LLC</span>
  </span>
</a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#nosotros" className="transition hover:text-white">
              Nosotros
            </a>
            <a href="#proyectos" className="transition hover:text-white">
              Proyectos
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-lg border border-blue-500/40 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/10"
          >
            Hablemos
          </a>
        </div>
      </header>

      {/* INICIO */}
      <section
        id="inicio"
        className="relative flex min-h-[680px] items-center px-6 py-24"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[110px]" />

        <div className="relative mx-auto max-w-4xl text-center">

<AnimacionOD />

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            Desarrollamos el futuro
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Tecnología que impulsa
            <span className="block text-[#39B9FF]">tu negocio.</span>
          </h1>

         

          <div className="mt-10 flex justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 rounded-lg bg-[#087BFA] px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Solicitar presupuesto
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Nuestros servicios
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Soluciones digitales para tu empresa.
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Tecnología diseñada para resolver necesidades reales.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/10 bg-[#101C30] p-8 transition hover:border-blue-400/40"
              >
                <service.icon
                  size={29}
                  strokeWidth={1.6}
                  className="mb-6 text-[#39B9FF]"
                />

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-md leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="scroll-mt-24 border-y border-white/5 bg-[#0B1527] px-6 py-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Sobre nosotros
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              Transformamos ideas en soluciones digitales.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              En Oli Development LLC nos especializamos en desarrollo
              de software, aplicaciones y aseguramiento de calidad.
              Combinamos tecnología, creatividad y atención
              personalizada para ofrecer soluciones adaptadas a
              cada negocio.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Nuestro objetivo es ayudar a empresas y emprendedores
              a optimizar sus procesos y crecer mediante la tecnología.
            </p>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-24 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Nuestro trabajo
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Soluciones para diferentes necesidades.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Sistemas de gestión",
                description:
                  "Control de ventas, inventario y producción.",
              },
              {
                title: "Aplicaciones móviles",
                description:
                  "Herramientas digitales adaptadas a cada negocio.",
              },
              {
                title: "Plataformas web",
                description:
                  "Experiencias digitales modernas y funcionales.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="border-t border-white/15 py-6"
              >
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-24 border-t border-white/5 bg-[#0B1527] px-6 py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Contacto
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Hablemos de tu próximo proyecto.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Cuéntanos qué necesitas y encontremos juntos la
              solución tecnológica adecuada para tu negocio.
            </p>

            <div className="mt-10 space-y-5 text-sm text-slate-300">
              <a
                href="mailto:office@olidevelopment.net"
                className="flex items-center gap-3 hover:text-blue-400"
              >
                <Mail size={19} className="text-blue-400" />
                office@olidevelopment.net
              </a>

              <a
                href="https://olidevelopment.net"
                className="flex items-center gap-3 hover:text-blue-400"
              >
                <Globe size={19} className="text-blue-400" />
                olidevelopment.net
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={19} className="text-blue-400" />
                Paraguay
              </div>
            </div>
          </div>

          <form
            action="mailto:office@olidevelopment.net"
            method="post"
            encType="text/plain"
            className="space-y-5"
          >
            <input
              type="text"
              name="nombre"
              required
              placeholder="Nombre completo"
              className="w-full rounded-lg border border-white/10 bg-[#101C30] px-5 py-4 text-sm outline-none placeholder:text-slate-500 focus:border-blue-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Correo electrónico"
              className="w-full rounded-lg border border-white/10 bg-[#101C30] px-5 py-4 text-sm outline-none placeholder:text-slate-500 focus:border-blue-400"
            />

            <select
              name="servicio"
              required
              defaultValue=""
              className="w-full rounded-lg border border-white/10 bg-[#101C30] px-5 py-4 text-sm text-slate-300 outline-none focus:border-blue-400"
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </select>

            <textarea
              name="mensaje"
              required
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full resize-none rounded-lg border border-white/10 bg-[#101C30] px-5 py-4 text-sm outline-none placeholder:text-slate-500 focus:border-blue-400"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-[#087BFA] px-6 py-4 text-sm font-semibold transition hover:bg-blue-600"
            >
              Enviar consulta
            </button>

            <p className="text-xs text-slate-500">
              Se abrirá tu aplicación de correo para enviar el mensaje.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Oli Development LLC</p>
          <p>Desarrollamos el futuro.</p>
        </div>
      </footer>
    </main>
  );
}
