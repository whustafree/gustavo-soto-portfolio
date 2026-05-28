import { experience } from '../data'

export function ExperienceSection() {
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
