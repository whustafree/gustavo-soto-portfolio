import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { type FormEvent, useState } from 'react'

// ⚠️ Reemplaza esta URL con tu endpoint de Formspree:
// 1. Ve a https://formspree.io y crea una cuenta gratis
// 2. Crea un nuevo formulario
// 3. Copia la URL que empieza con "https://formspree.io/f/..."
const FORMSPREE_URL = 'https://formspree.io/f/xyzylqpl'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !message.trim()) return

    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setMessage('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6" aria-label="Formulario de contacto">
      <div className="space-y-4">
        <div>
          <label htmlFor="contact-email" className="sr-only">Tu email</label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/50 text-slate-300 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all text-sm"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="sr-only">Tu mensaje</label>
          <textarea
            id="contact-message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tu mensaje"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/50 text-slate-300 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === 'sending' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : status === 'success' ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <Send className="w-5 h-5" />
          )}
          {status === 'idle' && 'Enviar mensaje'}
          {status === 'sending' && 'Enviando...'}
          {status === 'success' && '¡Mensaje enviado!'}
          {status === 'error' && 'Error al enviar'}
        </button>

        {status === 'error' && (
          <p className="flex items-center justify-center gap-1.5 text-sm text-rose-400" role="alert">
            <AlertCircle className="w-4 h-4" />
            No se pudo enviar el mensaje. Intenta de nuevo o escribe directamente a Magustoregustavo@gmail.com
          </p>
        )}

        <p className="text-xs text-center text-slate-600">
          O escríbeme directamente a{' '}
          <a href="mailto:Magustoregustavo@gmail.com" className="text-blue-400 hover:underline">
            Magustoregustavo@gmail.com
          </a>
        </p>
      </div>
    </form>
  )
}
