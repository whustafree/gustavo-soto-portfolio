import { useEffect, useState } from 'react'

function isTouchDevice(): boolean {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [isTouch] = useState(isTouchDevice)

  useEffect(() => {
    if (isTouch) return

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [visible, isTouch])

  if (isTouch) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-[width,height] duration-150 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          width: visible ? 8 : 0,
          height: visible ? 8 : 0,
          backgroundColor: '#fff',
          borderRadius: '50%',
        }}
      />
      {/* Glow ring */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: visible ? 32 : 0,
          height: visible ? 32 : 0,
          border: '1.5px solid rgba(96, 165, 250, 0.4)',
          boxShadow: '0 0 20px rgba(96, 165, 250, 0.15)',
        }}
      />
    </>
  )
}
