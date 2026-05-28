import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'

export type Tech = {
  name: string
  color: string
  bg: string
}

export type Project = {
  title: string
  description: string
  longDescription: string
  tech: string[]
  icon: LucideIcon | ComponentType<{ className?: string }>
  gradient: string
  links?: { label: string; href: string }[]
  status: 'completado' | 'en progreso' | 'idea'
}

export type FutureProject = {
  title: string
  description: string
  icon: LucideIcon | ComponentType<{ className?: string }>
  gradient: string
  tech: string[]
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
  gradient: string
}
