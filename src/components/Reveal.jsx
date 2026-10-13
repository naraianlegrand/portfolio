import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../motion'

// Fades and lifts its children in when they scroll into view.
// IntersectionObserver + CSS transitions (see .reveal in index.css) keep the main thread free;
// GSAP is reserved for the hero. Content stays visible without JS or with reduced motion.
// `stagger` animates direct children one after another instead of the wrapper.
export default function Reveal({ as: Tag = 'div', stagger = false, delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const targets = stagger ? [...el.children] : [el]
    targets.forEach((t, i) => {
      t.classList.add('reveal')
      t.style.transitionDelay = `${delay + (stagger ? Math.min(i, 8) * 0.08 : 0)}s`
    })
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        targets.forEach((t) => t.classList.add('is-in'))
        io.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [stagger, delay])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
