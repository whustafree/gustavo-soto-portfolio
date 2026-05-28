import { useState, useMemo } from 'react'
import { completedProjects, getAllTechnologies } from '../data'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { useInView } from '../hooks/useInView'

export function ProjectsSection() {
  const { ref, inView } = useInView()
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const technologies = useMemo(() => getAllTechnologies(), [])

  const filteredProjects = useMemo(() => {
    if (!activeFilter) return completedProjects
    return completedProjects.filter((p) => p.tech.includes(activeFilter))
  }, [activeFilter])
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative" ref={ref}>
        {/* Section header */}
        <div className={`scroll-animate text-center mb-16 ${inView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs uppercase tracking-widest text-emerald-400 font-medium mb-4">
            Trabajo realizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proyectos Completados</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Aplicaciones web progresivas construidas desde cero con enfoque en calidad, rendimiento y experiencia de usuario.
          </p>
        </div>

        {/* Projects */}
        <ProjectFilter
          technologies={technologies}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="space-y-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))
          ) : (
            <p className="text-center text-slate-500 py-12">
              No hay proyectos con la tecnología &quot;{activeFilter}&quot;
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
