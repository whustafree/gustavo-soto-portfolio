import { completedProjects } from '../data'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
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
