import { useEffect, useState, type ComponentType } from 'react'
import {
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronDown,
  Smartphone,
  Activity,
  Wallet,
  Sparkles,
  Brain,
  Globe,
  BarChart3,
  Bot,
  Zap,
  type LucideIcon,
} from 'lucide-react'

type Tech = {
  name: string
  color: string
  bg: string
}

type Project = {
  title: string
  description: string
  longDescription: string
  tech: string[]
  icon: LucideIcon | ComponentType<{ className?: string }>
  gradient: string
  links?: { label: string; href: string }[]
  status: 'completado' | 'en progreso' | 'idea'
}

type FutureProject = {
  title: string
  description: string
  icon: LucideIcon | ComponentType<{ className?: string }>
  gradient: string
  tech: string[]
}

type Experience = {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
  gradient: string
}

// ─── DATA ──────────────────────────────────────────────────
const skills: Tech[] = [
  { name: 'React', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' },
  { name: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.1)' },
  { name: 'Tailwind CSS', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)' },
  { name: 'Firebase', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
  { name: 'Vite', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)' },
  { name: 'Recharts', color: '#34d399', bg: 'rgba(52,211,153,0.1)' },
  { name: 'React Router', color: '#fb7185', bg: 'rgba(251,113,133,0.1)' },
  { name: 'PWA', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)' },
  { name: 'Git', color: '#f05032', bg: 'rgba(240,80,50,0.1)' },
  { name: 'npm', color: '#cb3837', bg: 'rgba(203,56,55,0.1)' },
  { name: 'Vercel', color: '#ffffff', bg: 'rgba(255,255,255,0.05)' },
  { name: 'ESLint', color: '#4b32c3', bg: 'rgba(75,50,195,0.1)' },
]

const completedProjects: Project[] = [
  {
    title: 'Diabetes Control',
    description: 'App de monitoreo de glucosa, plan de comidas y dieta',
    longDescription:
      'Aplicación progresiva (PWA) para el control de diabetes. Incluye registro de glucosa con gráficos interactivos, plan de comidas personalizado, recordatorios de medicación, y exportación a PDF. Soporte offline con sincronización en la nube mediante Firebase.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Recharts', 'PWA', 'PDF export'],
    icon: Activity,
    gradient: 'from-blue-500 to-cyan-400',
    links: [{ label: 'Abrir app', href: 'https://diabetes-app-woad.vercel.app/' }],
    status: 'completado',
  },
  {
    title: 'GastosApp',
    description: 'App de finanzas personales con lectura de liquidación de sueldo',
    longDescription:
      'Gestor de finanzas personales con soporte multi-moneda, presupuestos mensuales, metas de ahorro, y lectura automática de liquidaciones de sueldo mediante OCR. Incluye calculadora de horas extras y liquidación, dashboard con gráficos, y modo offline.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Firebase', 'Recharts', 'OCR', 'PWA'],
    icon: Wallet,
    gradient: 'from-emerald-500 to-teal-400',
    links: [{ label: 'Abrir app', href: 'https://gastos-app-five-iota.vercel.app/' }],
    status: 'completado',
  },
  {
    title: 'MarijoTattoo',
    description: 'Landing page profesional para estudio de tatuajes',
    longDescription:
      'Sitio web moderno para un estudio de tatuajes con galería de trabajos, información del artista, estilos disponibles, y formulario de contacto. Diseño oscuro con estética rockera y experiencia mobile-first.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    icon: Sparkles,
    gradient: 'from-rose-500 to-pink-400',
    links: [{ label: 'Abrir sitio', href: 'https://marijotatoo.vercel.app/' }],
    status: 'completado',
  },
  {
    title: 'Whustaf',
    description: 'Sitio personal y portfolio creativo',
    longDescription:
      'Plataforma personal tipo link-in-bio con diseño minimalista y elegante. Incluye enlaces a redes sociales, proyectos destacados, y una interfaz limpia y rápida ideal para presencia digital.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    icon: Globe,
    gradient: 'from-sky-500 to-indigo-400',
    links: [{ label: 'Abrir sitio', href: 'https://whustaf.vercel.app/' }],
    status: 'completado',
  },
  {
    title: 'Hex6',
    description: 'Landing page corporativa con diseño moderno',
    longDescription:
      'Sitio web corporativo con diseño geométrico y paleta de colores vibrante. Construido con enfoque en rendimiento, animaciones suaves y experiencia de usuario fluida.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    icon: HexagonIcon,
    gradient: 'from-violet-500 to-fuchsia-400',
    links: [{ label: 'Abrir sitio', href: 'https://hex6.vercel.app/' }],
    status: 'completado',
  },
]

const experience: Experience[] = [
  {
    role: 'Desarrollador Web Freelance',
    company: 'Independiente',
    period: '2024 — Presente',
    description:
      'Creación de aplicaciones web modernas y landing pages para clientes, utilizando React, TypeScript y Tailwind CSS. Desarrollo full-stack con Firebase para autenticación, base de datos y despliegue en Vercel.',
    achievements: [
      'GastosApp — App de finanzas personales con OCR, multi-moneda y modo offline',
      'Diabetes Control — PWA de monitoreo de glucosa con gráficos y sincronización cloud',
      'Landing pages profesionales para estudios y marcas personales',
    ],
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Firebase', 'PWA', 'Vercel'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    role: 'Técnico en Telecomunicaciones',
    company: 'Empresa de Telecomunicaciones',
    period: '2016 — 2024',
    description:
      'Instalación, configuración y mantenimiento de redes de telecomunicaciones. Gestión de proyectos técnicos, atención a clientes empresariales y resolución de problemas complejos en terreno.',
    achievements: [
      'Gesti\u00f3n de proyectos de infraestructura de red para clientes corporativos',
      'Optimizaci\u00f3n de procesos t\u00e9cnicos reduciendo tiempos de instalaci\u00f3n en un 30%',
      'Capacitaci\u00f3n a nuevos t\u00e9cnicos en protocolos y equipos de telecomunicaciones',
    ],
    tech: ['Redes', 'Fibra Óptica', 'Configuración', 'Soporte Técnico', 'Gestión'],
    gradient: 'from-emerald-500 to-teal-400',
  },
]

const futureProjects: FutureProject[] = [
  {
    title: 'FitTrack Pro',
    description:
      'App integral de seguimiento fitness con planes de entrenamiento personalizados por IA, registro de ejercicios con video, progreso visual en 3D, y comunidad social para compartir logros.',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-400',
    tech: ['React Native', 'TensorFlow.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
  },
  {
    title: 'Travel Buddy',
    description:
      'Planificador de viajes inteligente que integra mapas interactivos, presupuesto en tiempo real, recomendaciones basadas en IA, y bitácora de viaje colaborativa para grupos.',
    icon: Globe,
    gradient: 'from-orange-500 to-amber-400',
    tech: ['Next.js', 'Mapbox', 'OpenAI API', 'Prisma', 'Redis'],
  },
  {
    title: 'DevMetrics',
    description:
      'Dashboard de métricas para desarrolladores: integración con GitHub, seguimiento de productividad, análisis de código, y visualización de contribuciones open-source.',
    icon: BarChart3,
    gradient: 'from-rose-500 to-pink-400',
    tech: ['Next.js', 'GitHub API', 'D3.js', 'tRPC', 'Docker'],
  },
  {
    title: 'Asistente IA',
    description:
      'Chatbot inteligente integrado con múltiples APIs (OpenAI, Claude, Gemini) con contexto persistente, memoria a largo plazo, y capacidad de ejecutar acciones en servicios externos.',
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-400',
    tech: ['Python', 'FastAPI', 'LangChain', 'Redis', 'WebSockets'],
  },
]

// ─── COMPONENTS ─────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Ideas', href: '#future' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Code2 className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
          <span className="font-semibold text-lg text-white">Portfolio</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Menú"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current rounded transition-all ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded transition-all ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current rounded transition-all ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Desarrollador Web</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Hola, soy </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
            Gustavo Soto
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Creo aplicaciones web modernas, funcionales y con experiencia de usuario excepcional.
          Especializado en React, TypeScript y ecosistemas cloud.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
          >
            Ver proyectos
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 hover:border-slate-600 transition-all hover:scale-105 active:scale-95"
          >
            Contacto
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up hidden sm:block" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-amber-400 font-medium mb-4">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experiencia Laboral</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Mi recorrido profesional combinando desarrollo web con experiencia en telecomunicaciones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  key={exp.role}
                  className={`stagger-enter relative flex flex-col ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } items-start gap-6 sm:gap-12`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400/60 z-10 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Spacer on mobile, card on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div className="relative w-full sm:w-1/2 pl-10 sm:pl-0">
                    <div className="p-5 sm:p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/50 hover:border-slate-700/50 transition-all duration-500 group">
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(400px circle at 50% 50%, ${i === 0 ? 'rgba(59,130,246,0.06)' : 'rgba(16,185,129,0.06)'}, transparent)`,
                        }}
                      />

                      <div className="relative z-10">
                        {/* Period badge */}
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
                          {exp.period}
                        </span>

                        {/* Role & company */}
                        <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-sm text-slate-500 mb-3">{exp.company}</p>

                        {/* Description */}
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-slate-400">
                              <span
                                className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.gradient}`}
                              />
                              {a}
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs rounded-md bg-slate-800/50 text-slate-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-blue-400 font-medium mb-4">
            Tecnologías
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Tools</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Stack tecnológico con el que trabajo día a día para construir aplicaciones modernas y escalables.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="stagger-enter group relative p-4 rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700/50 transition-all hover:scale-105 cursor-default"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: skill.bg, color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
              <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(200px circle at center, ${skill.bg}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon
  const isLeft = index % 2 === 0

  return (
    <div
      className={`stagger-enter group relative flex flex-col ${
        isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center gap-8 lg:gap-16 p-6 sm:p-8 rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-500`}
    >
      {/* Icon / Visual */}
      <div className="flex-shrink-0">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${project.gradient} p-0.5 animate-pulse-glow`}
        >
          <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center lg:text-left">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.status}
          </span>
        </div>
        <p className="text-slate-400 mb-2">{project.description}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-5">{project.longDescription}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500">
            <Smartphone className="w-4 h-4" />
            <span>App en funcionamiento</span>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-emerald-400 font-medium mb-4">
            Trabajo realizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proyectos Completados</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Aplicaciones web progresivas construidas desde cero con enfoque en calidad, rendimiento y experiencia de usuario.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {completedProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FutureProjectsSection() {
  return (
    <section id="future" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-violet-400 font-medium mb-4">
            Próximos pasos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proyectos en Mente</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ideas y proyectos que tengo planificados para seguir creciendo y explorando nuevas tecnologías.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {futureProjects.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="stagger-enter group relative p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-500 hover:border-slate-700/50"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at 50% 50%, rgba(139,92,246,0.06), transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 mb-4`}
                  >
                    <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded-md bg-slate-800/50 text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        <div className="mb-12">
          <span className="inline-block text-xs uppercase tracking-widest text-blue-400 font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Estoy abierto a nuevas oportunidades, colaboraciones o simplemente charlar sobre tecnología.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="mailto:Magustoregustavo@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Enviar email
          </a>
          <a
            href="https://github.com/whustafree"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 hover:border-slate-600 transition-all hover:scale-105 active:scale-95"
          >
            <GitHubIcon className="w-5 h-5" />
            GitHub
          </a>
        </div>

        {/* Location & info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Rancagua, Chile
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            Disponible para proyectos
          </span>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function HexagonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Code2 className="w-4 h-4" />
          <span>Portfolio &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/whustafree" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 transition-colors">
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a href="mailto:Magustoregustavo@gmail.com" className="text-slate-600 hover:text-slate-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FutureProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
