import { futureProjects } from '../data'
import { useInView } from '../hooks/useInView'

export function FutureProjectsSection() {
  const { ref, inView } = useInView()

  return (
    <section id="future" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative" ref={ref}>
        {/* Section header */}
        <div className={`scroll-animate text-center mb-16 ${inView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs uppercase tracking-widest text-violet-400 font-medium mb-4">
            Próximos pasos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Proyectos en Mente</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ideas y proyectos que tengo planificados para seguir creciendo y explorando nuevas tecnologías.
          </p>
        </div>

        {/* Grid */}
        <div className={`scroll-animate grid sm:grid-cols-2 gap-6 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
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
                    background: 'radial-gradient(400px circle at 50% 50%, rgba(139,92,246,0.06), transparent)',
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
