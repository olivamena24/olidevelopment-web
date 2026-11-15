
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Monitor,
  PencilRuler,
  Rocket,
  SearchCheck,
  Send,
  Settings2,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desarrollo Web",
    description:
      "Sitios web modernos, rápidos y adaptados a todos los dispositivos.",
    features: [
      "Sitios corporativos",
      "Landing pages",
      "Plataformas web",
      "Integración de APIs",
    ],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Aplicaciones intuitivas y funcionales para conectar tu negocio con sus usuarios.",
    features: [
      "Aplicaciones Android",
      "Apps personalizadas",
      "Interfaces intuitivas",
      "Mantenimiento y mejoras",
    ],
  },
  {
    icon: Database,
    title: "Sistemas Empresariales",
    description:
      "Software a medida para organizar y optimizar las operaciones de tu empresa.",
    features: [
      "Control de stock y ventas",
      "Gestión de producción",
      "Reportes y dashboards",
      "Sistemas administrativos",
    ],
  },
  {
    icon: SearchCheck,
    title: "Testing y QA",
    description:
      "Evaluamos la calidad de tu software para detectar errores y mejorar la experiencia del usuario.",
    features: [
      "Pruebas funcionales",
      "Testing web y móvil",
      "Reporte de errores",
      "Pruebas de regresión",
    ],
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Optimizamos procesos repetitivos para ahorrar tiempo y reducir errores.",
    features: [
      "Automatización de tareas",
      "Integración de sistemas",
      "Flujos de trabajo",
      "Optimización de procesos",
    ],
  },
  {
    icon: Layers3,
    title: "Integraciones y ERP",
    description:
      "Conectamos herramientas y desarrollamos soluciones para centralizar tu información.",
    features: [
      "Integración de APIs",
      "ERPNext y Odoo",
      "Sistemas de facturación",
      "Integraciones empresariales",
    ],
  },
];

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Analizamos",
    description: "Escuchamos tu idea y comprendemos tus necesidades.",
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Diseñamos",
    description: "Planificamos una solución adaptada a tu negocio.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollamos",
    description: "Construimos y probamos cada funcionalidad.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementamos",
    description: "Ponemos en marcha la solución y te acompañamos.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/logosinfondo.png"
              alt="Oli Development LLC"
              width={65}
              height={65}
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="hidden text-lg font-bold text-white sm:block">
              Oli <span className="text-[#39B9FF]">Development</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
            <a href="#inicio" className="transition hover:text-cyan-400">
              Inicio
            </a>
            <a href="#nosotros" className="transition hover:text-cyan-400">
              Nosotros
            </a>
            <a href="#servicios" className="transition hover:text-cyan-400">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-cyan-400">
              Proceso
            </a>
            <a href="#proyectos" className="transition hover:text-cyan-400">
              Proyectos
            </a>
            <a href="#contacto" className="transition hover:text-cyan-400">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-xs font-semibold shadow-lg shadow-blue-500/20 transition hover:scale-105 sm:text-sm"
          >
            <CalendarDays size={17} />
            Solicitar cotización
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[760px] items-center overflow-hidden px-6 pb-24 pt-36"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[550px] w-[550px] rounded-full bg-blue-700/25 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Desarrollamos el futuro
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight md:text-6xl xl:text-7xl">
              Soluciones digitales para hacer crecer{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                tu negocio.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
              Desarrollamos aplicaciones móviles, sitios web y sistemas de
              gestión a medida. También realizamos pruebas de software
              (QA) para garantizar calidad, funcionalidad y una excelente
              experiencia de usuario.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold shadow-xl shadow-blue-500/20 transition hover:-translate-y-1"
              >
                <Rocket size={19} />
                Solicitar una cotización
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center gap-3 rounded-xl border border-cyan-400/50 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400/10"
              >
                Conocer nuestros servicios
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              {["Desarrollo Web", "Apps", "Sistemas", "QA Testing"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ILUSTRACIÓN TECNOLÓGICA */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-10 rounded-full bg-blue-500/25 blur-[100px]" />

            <div className="relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#122A53] to-[#050C1D] p-5 shadow-[0_25px_100px_rgba(0,91,255,0.2)]">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-400">
                  Oli Development / Dashboard
                </span>
                <Code2 size={18} className="text-cyan-400" />
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/15 p-3">
                  <Layers3 className="text-cyan-400" size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Sistema de Gestión</h3>
                  <p className="text-xs text-slate-400">
                    Tecnología para tu empresa
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Ventas", icon: Globe2 },
                  { name: "Inventario", icon: Database },
                  { name: "Reportes", icon: Settings2 },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <item.icon
                      size={25}
                      className="mx-auto mb-3 text-cyan-400"
                    />
                    <p className="text-xs text-slate-300">{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-[#07162F] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Panel de análisis
                  </span>
                  <span className="text-xs text-cyan-400">
                    Vista ilustrativa
                  </span>
                </div>

                <div className="flex h-36 items-end justify-between gap-3">
                  {[38, 62, 48, 75, 58, 90, 72, 100, 85].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="w-full rounded-t-md bg-gradient-to-t from-blue-700 to-cyan-400"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-[#081A35] p-4 shadow-2xl sm:-left-8">
              <ShieldCheck size={32} className="text-cyan-400" />
              <div>
                <p className="text-sm font-bold">Quality Assurance</p>
                <p className="text-xs text-slate-400">
                  Software confiable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUMEN DE SERVICIOS */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Monitor, title: "Desarrollo Web", text: "Sitios modernos y rápidos." },
            { icon: Smartphone, title: "Apps Móviles", text: "Aplicaciones a medida." },
            { icon: Layers3, title: "Sistemas de Gestión", text: "Organización y control." },
            { icon: SearchCheck, title: "Testing (QA)", text: "Calidad de software." },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-blue-400/15 bg-[#0B1B35] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <item.icon
                size={35}
                className="mb-5 text-cyan-400 transition group-hover:scale-110"
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="scroll-mt-20 bg-[#061126] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#102D57] via-[#07152D] to-[#080D20] p-10">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative flex min-h-[300px] flex-col items-center justify-center">
              <Image
                src="/logosinfondo.png"
                alt="Logo Oli Development LLC"
                width={300}
                height={220}
                className="h-auto w-full max-w-[300px] object-contain drop-shadow-[0_0_35px_rgba(0,145,255,0.25)]"
              />
              <p className="mt-8 text-center text-sm uppercase tracking-[0.25em] text-cyan-300">
                Desarrollamos el futuro
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Sobre nosotros
            </p>
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Tu aliado estratégico en{" "}
              <span className="text-cyan-400">tecnología.</span>
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-slate-300">
              En Oli Development LLC transformamos ideas en soluciones
              digitales reales. Nos especializamos en desarrollo web,
              aplicaciones móviles, sistemas empresariales y aseguramiento
              de calidad de software.
            </p>

            <p className="mt-5 leading-relaxed text-slate-400">
              Nuestro enfoque combina innovación, atención personalizada
              y tecnología para ayudar a las empresas a optimizar sus
              procesos y alcanzar sus objetivos.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Target, title: "Resultados" },
                { icon: Users, title: "Atención personalizada" },
                { icon: ShieldCheck, title: "Calidad" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon
                    size={31}
                    className="mx-auto mb-3 text-cyan-400"
                  />
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Nuestros servicios
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              ¿Qué podemos hacer por ti?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Soluciones tecnológicas diseñadas para impulsar tu negocio.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0D203D] to-[#071226] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_15px_50px_rgba(0,145,255,0.12)]"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-500/15 p-4">
                  <service.icon size={33} className="text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 min-h-[72px] leading-relaxed text-slate-400">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <Check size={17} className="shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:gap-3"
                >
                  Solicitar información
                  <ArrowUpRight size={17} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="scroll-mt-20 bg-[#061126] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Nuestro proceso
            </p>
            <h2 className="mt-4 text-4xl font-extrabold">
              De tu idea a una solución real
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-[#10264A]">
                  <step.icon size={33} className="text-cyan-400" />
                </div>
                <p className="text-sm font-bold text-cyan-400">
                  {step.number}
                </p>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[240px] text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Portafolio
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Soluciones que desarrollamos
            </h2>
            <p className="mt-5 max-w-2xl text-slate-400">
              Algunos ejemplos de las soluciones digitales que podemos
              crear para diferentes sectores.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Gestión de Producción",
                type: "Sistema empresarial",
                description:
                  "Control de producción, inventario, ventas y reportes en una sola plataforma.",
              },
              {
                icon: CalendarDays,
                title: "Gestión de Reservas",
                type: "Solución para servicios",
                description:
                  "Organización de turnos, clientes y servicios mediante herramientas digitales.",
              },
              {
                icon: Smartphone,
                title: "Aplicaciones Móviles",
                type: "Desarrollo Android",
                description:
                  "Aplicaciones personalizadas para mejorar la interacción con los clientes.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-blue-400/15 bg-[#0A1B35]"
              >
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#153A70] via-[#0B2045] to-[#080F24]">
                  <project.icon
                    size={90}
                    strokeWidth={1.2}
                    className="text-cyan-400 transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-20 bg-[#061126] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Contáctanos
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              Cuéntanos tu idea o necesidad. Te ayudaremos a encontrar la
              mejor solución tecnológica para tu negocio.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:office@olidevelopment.net"
                className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
              >
                <Mail size={23} className="text-cyan-400" />
                office@olidevelopment.net
              </a>

              <a
                href="https://olidevelopment.net"
                className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
              >
                <Globe2 size={23} className="text-cyan-400" />
                olidevelopment.net
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <MapPin size={23} className="text-cyan-400" />
                Paraguay · Servicios digitales
              </div>
            </div>
          </div>

          <form
            action="mailto:office@olidevelopment.net"
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-blue-400/15 bg-[#0B1B35] p-7 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-semibold">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="empresa" className="mb-2 block text-sm font-semibold">
                Empresa (opcional)
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Nombre de tu empresa"
                className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="servicio" className="mb-2 block text-sm font-semibold">
                Servicio de interés
              </label>
              <select
                id="servicio"
                name="servicio"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-3 text-white outline-none focus:border-cyan-400"
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
            </div>

            <div className="mt-5">
              <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                placeholder="Describe brevemente lo que necesitas..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#071326] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold shadow-lg shadow-blue-500/20 transition hover:opacity-90"
            >
              <Send size={19} />
              Enviar mensaje
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Se abrirá tu aplicación de correo para enviar la consulta.
            </p>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-violet-700 p-10 lg:flex-row lg:p-14">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              ¿Listo para digitalizar tu negocio?
            </h2>
            <p className="mt-3 text-blue-100">
              Conversemos sobre tu proyecto y encontremos la solución ideal.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-900 transition hover:scale-105"
          >
            <CalendarDays size={20} />
            Hablemos de tu proyecto
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logosinfondo.png"
              alt="Oli Development LLC"
              width={65}
              height={65}
              className="h-12 w-auto object-contain"
            />
            <span className="font-bold">Oli Development LLC</span>
          </div>

          <p className="text-sm tracking-widest text-slate-400">
            Desarrollamos el futuro
          </p>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Oli Development LLC
          </p>
        </div>
      </footer>
    </main>
  );
}
