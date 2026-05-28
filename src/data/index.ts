import {
  Activity,
  Globe,
  Wallet,
  Sparkles,
  Brain,
  BarChart3,
  Bot,
} from 'lucide-react'
import type { Tech, Project, Experience, FutureProject } from '../types'
import { HexagonIcon } from '../components/HexagonIcon'

export const skills: Tech[] = [
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

export const completedProjects: Project[] = [
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

export const experience: Experience[] = [
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
      'Gestión de proyectos de infraestructura de red para clientes corporativos',
      'Optimización de procesos técnicos reduciendo tiempos de instalación en un 30%',
      'Capacitación a nuevos técnicos en protocolos y equipos de telecomunicaciones',
    ],
    tech: ['Redes', 'Fibra Óptica', 'Configuración', 'Soporte Técnico', 'Gestión'],
    gradient: 'from-emerald-500 to-teal-400',
  },
]

export const futureProjects: FutureProject[] = [
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
