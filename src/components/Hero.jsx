import { useLayoutEffect, useRef } from 'react'
import { useLang } from '../i18n'
import { loadGsap, prefersReducedMotion } from '../motion'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const root = useRef(null)
  const nameRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    let split
    let ctx
    let cancelled = false
    // index.html adds `hero-intro` to <html> so the text stays hidden until GSAP has set its start state.
    const reveal = () => document.documentElement.classList.remove('hero-intro')
    // Split once fonts are in so line breaks are measured correctly.
    Promise.all([loadGsap(), document.fonts.ready])
      .then(([{ gsap, SplitText }]) => {
        if (cancelled || !nameRef.current) return
        ctx = gsap.context(() => {
          split = SplitText.create(nameRef.current, { type: 'chars', mask: 'chars' })
          gsap
            .timeline({ defaults: { ease: 'power4.out' } })
            // Revert after the intro so the mask stops clipping descenders (the "y").
            .from(split.chars, { yPercent: 110, duration: 1.1, stagger: 0.03, onComplete: () => split.revert() })
            .from('[data-hero-fade]', { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, '-=0.7')
            // Photo is the LCP element: move it, never hide it.
            .from('[data-hero-photo]', { y: 30, scale: 0.97, duration: 1.2 }, '<-0.4')
        }, root)
      })
      .finally(reveal)
    return () => {
      cancelled = true
      split?.revert()
      ctx?.revert()
    }
  }, [])

  return (
    <section id="top" ref={root} aria-label="Introduction" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="container-x grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p data-hero-fade className="eyebrow mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-ember" aria-hidden="true" />
            {h.status}
          </p>
          <h1 className="font-display leading-[0.9] tracking-tight text-[clamp(3.5rem,11vw,8.5rem)]">
            <span ref={nameRef} className="block">
              {h.firstName}
              <br />
              <span className="italic text-ember">{h.lastName}</span>
            </span>
          </h1>
          <p data-hero-fade className="mt-8 text-2xl sm:text-3xl font-display">{h.headline}</p>
          <p data-hero-fade className="mt-3 text-muted">{h.subheadline}</p>
          <p data-hero-fade className="mt-1 text-muted text-sm">{h.location}</p>
          <div data-hero-fade className="mt-9 flex flex-wrap gap-3">
            {h.ctas.map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                className={`group rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  i === 0 ? 'bg-ember text-ink hover:shadow-[0_8px_30px_-6px] hover:shadow-ember/60' : 'border border-line hover:border-paper'
                }`}
              >
                {c.label}
                <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </div>

        {h.photo && (
          <div data-hero-photo className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-ember/30 to-transparent blur-2xl" aria-hidden="true" />
            <picture>
              <source type="image/webp" srcSet={h.photo.srcSetWebp} sizes="(min-width: 768px) 40vw, 92vw" />
              <img
                src={h.photo.src}
                srcSet={h.photo.srcSet}
                sizes="(min-width: 768px) 40vw, 92vw"
                alt={h.photo.alt}
                width="900"
                height="1334"
                fetchPriority="high"
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_25%] border border-line"
              />
            </picture>
          </div>
        )}
      </div>
    </section>
  )
}
