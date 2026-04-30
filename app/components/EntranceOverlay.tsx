'use client'
import { useEffect, useState } from 'react'

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function EntranceOverlay() {
  const [count, setCount] = useState(0)
  const [showScroll, setShowScroll] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const target = 12000
    const duration = 1600
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setShowScroll(true), 120)
        setTimeout(() => setExiting(true), 900)
        setTimeout(() => setGone(true), 1700)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (gone) return null

  return (
    <div
      className={`
        fixed inset-0 z-[200] bg-cream
        flex flex-col items-center justify-center
        will-change-transform transition-transform duration-[800ms]
        ${exiting ? 'translate-y-full ease-in' : 'translate-y-0 ease-linear'}
        ${exiting ? 'pointer-events-none' : ''}
      `}
    >
      {/* Brand label */}
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-muted mb-10 md:mb-14">
        Gyata Nutrition
      </p>

      {/* Big number */}
      <p
        className="
          text-[clamp(4.5rem,22vw,14rem)]
          font-black leading-none tracking-tight text-ink uppercase
          tabular-nums select-none
        "
      >
        {formatNumber(count)}+
      </p>

      {/* Divider */}
      <div className="w-10 h-px bg-line my-7 md:my-10" />

      {/* Label */}
      <p className="text-[0.6rem] tracking-[0.45em] uppercase text-muted">
        Products Sold
      </p>

      {/* Scroll hint */}
      <div
        className={`
          absolute bottom-10 md:bottom-14
          flex flex-col items-center gap-3
          transition-opacity duration-500
          ${showScroll ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <p className="text-[0.55rem] tracking-[0.45em] uppercase text-muted">
          Scroll to explore
        </p>
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-7 bg-ink/20" />
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            className="text-ink/40 animate-bounce"
            aria-hidden="true"
          >
            <path
              d="M1 1.5L5 5.5L9 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
