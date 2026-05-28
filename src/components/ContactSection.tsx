import { Mail, MapPin, Zap } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import { ContactForm } from './ContactForm'
import { useInView } from '../hooks/useInView'

export function ContactSection() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center" ref={ref}>
        <div className={`scroll-animate ${inView ? 'in-view' : ''}`}>
          <span className="inline-block text-xs uppercase tracking-widest text-blue-400 font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Hablamos?</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Estoy abierto a nuevas oportunidades, colaboraciones o simplemente charlar sobre tecnología.
          </p>
        </div>

        <div className={`scroll-animate mt-8 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
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

          <ContactForm />
        </div>

        <div className={`scroll-animate mt-8 ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
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
      </div>
    </section>
  )
}
