'use client'
import { useEffect } from 'react'

type RGB = readonly [number, number, number]

function lerpRGB(a: RGB, b: RGB, t: number): RGB {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ] as const
}

function multiStop(stops: RGB[], t: number): string {
  if (t <= 0) return toCSS(stops[0])
  if (t >= 1) return toCSS(stops[stops.length - 1])
  const pos = t * (stops.length - 1)
  const i = Math.floor(pos)
  return toCSS(lerpRGB(stops[i], stops[i + 1], pos - i))
}

function toCSS([r, g, b]: RGB): string {
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`
}

// Sine ease in-out: imperceptibly slow at the very start,
// peaks gently mid-scroll, settles quietly at the end.
// At 10% scroll → only 2.4% through the shift (feels like nothing)
// At 50% scroll → exactly halfway (the soft beige moment)
// At 90% scroll → 97.6% (warm parchment, nearly complete)
function ease(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2
}

// Three stops   matches the description exactly:
//   Top    → fresh white (clinical, minimal)
//   Middle → soft neutral beige (balanced)
//   Bottom → warm parchment (grounded, earthy)
const PALETTE: Record<string, RGB[]> = {
  '--color-cream': [
    [250, 250, 247],  // white
    [238, 224, 204],  // soft beige
    [200, 168, 128],  // warm parchment
  ],
  '--color-surface': [
    [240, 240, 235],
    [228, 212, 188],
    [190, 156, 112],
  ],
  '--color-line': [
    [226, 226, 220],
    [210, 196, 172],
    [184, 150, 108],
  ],
  '--color-muted': [
    [107, 107, 101],
    [116,  96,  70],
    [122,  68,  26],
  ],
  '--color-ink': [
    [ 10,  10,  10],
    [ 16,  11,   6],
    [ 22,  12,   3],
  ],
}

export function ScrollColorShift() {
  useEffect(() => {
    const root = document.documentElement
    let raf: number | null = null

    const update = () => {
      raf = null
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max <= 0) return

      // Full 0→1 range   the sine curve provides the natural delay at both ends
      const t = ease(Math.min(1, Math.max(0, window.scrollY / max)))

      for (const [prop, stops] of Object.entries(PALETTE)) {
        root.style.setProperty(prop, multiStop(stops, t))
      }
    }

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
