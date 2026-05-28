import { Code2, Mail } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Code2 className="w-4 h-4" />
          <span>Portfolio &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/whustafree" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 transition-colors">
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a href="mailto:Magustoregustavo@gmail.com" className="text-slate-600 hover:text-slate-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
