export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// GSAP is loaded on demand so it stays out of the critical bundle (first paint).
let gsapPromise
export function loadGsap() {
  gsapPromise ??= Promise.all([import('gsap'), import('gsap/SplitText')]).then(([{ gsap }, { SplitText }]) => {
    gsap.registerPlugin(SplitText)
    return { gsap, SplitText }
  })
  return gsapPromise
}
