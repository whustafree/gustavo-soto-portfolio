import { FileDown } from 'lucide-react'

export function CVButton() {
  return (
    <a
      href="/cv-gustavo-soto.pdf"
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-medium hover:bg-slate-800/50 hover:border-slate-600 transition-all hover:scale-105 active:scale-95 group"
      aria-label="Descargar CV en PDF"
    >
      <FileDown className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      Descargar CV
    </a>
  )
}
