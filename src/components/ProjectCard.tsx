import { ExternalLink, Smartphone } from 'lucide-react'
import type { Project } from '../types'
import { ImageGallery } from './ImageGallery'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
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

        {/* Screenshots gallery */}
        {project.images && project.images.length > 0 && (
          <ImageGallery images={project.images} projectTitle={project.title} />
        )}

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
