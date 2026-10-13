import { useEffect, useState } from 'react'
import { useLang } from '../i18n'

export default function Navbar() {
  const { t, lang, setLang, languages } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const els = t.nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [t.nav])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = t.nav.map((n) => (
    <li key={n.id}>
      <a
        href={`#${n.id}`}
        onClick={() => setOpen(false)}
        aria-current={active === n.id ? 'true' : undefined}
        className={`transition-colors hover:text-paper ${active === n.id ? 'text-paper' : 'text-muted'}`}
      >
        {n.label}
      </a>
    </li>
  ))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-300 border-b ${
        scrolled || open ? 'bg-ink/85 backdrop-blur-md border-line' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          Karthik<span className="text-ember">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm">{links}</ul>

        <div className="flex items-center gap-3">
          {languages.length > 1 && (
            <div role="group" aria-label={t.ui.language} className="flex rounded-full border border-line p-0.5 font-mono text-xs">
              {languages.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-2.5 py-1 uppercase ${lang === l ? 'bg-paper text-ink' : 'text-muted'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
          <button
            type="button"
            className="md:hidden rounded-full border border-line px-3.5 py-1.5 text-sm"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? t.ui.close : t.ui.menu}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-line bg-ink h-[calc(100dvh-4rem)]">
          <ul className="container-x flex flex-col gap-5 py-8 font-display text-3xl">{links}</ul>
        </div>
      )}
    </header>
  )
}
