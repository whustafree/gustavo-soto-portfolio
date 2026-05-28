import { skills } from '../data'

export function SkillsSection() {
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
