import { X } from 'lucide-react'

type ProjectFilterProps = {
  technologies: string[]
  activeFilter: string | null
  onFilterChange: (tech: string | null) => void
}

export function ProjectFilter({ technologies, activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="group" aria-label="Filtrar proyectos por tecnología">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
          activeFilter === null
            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700/50 hover:text-slate-300'
        }`}
        aria-pressed={activeFilter === null}
      >
        Todos
      </button>
      {technologies.map((tech) => {
        const isActive = activeFilter === tech
        return (
          <button
            key={tech}
            onClick={() => onFilterChange(isActive ? null : tech)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isActive
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700/50 hover:text-slate-300'
            }`}
            aria-pressed={isActive}
          >
            {tech}
            {isActive && <X className="w-3 h-3" />}
          </button>
        )
      })}
    </div>
  )
}
