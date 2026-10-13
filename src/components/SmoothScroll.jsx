import { useEffect } from 'react'
import { prefersReducedMotion } from '../motion'

// Lenis smooth scrolling, loaded after first paint. Anchor links (#id) scroll through Lenis.
// Disabled under prefers-reduced-motion, and on touch devices, which already have native momentum scrolling.
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion() || window.matchMedia('(pointer: coarse)').matches) return

    let lenis
    let frame
    let cancelled = false
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({ duration: 1.1, anchors: { offset: -72 } })
      const raf = (time) => {
        lenis.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])

  return null
}
