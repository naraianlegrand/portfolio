import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { prefersReducedMotion } from '../motion'

const SHOW_AFTER_MS = 2500
const VISIBLE_MS = 9000

function alreadySeen(id) {
  try {
    return localStorage.getItem('seen-announcement') === id
  } catch {
    return false
  }
}

function markSeen(id) {
  try {
    localStorage.setItem('seen-announcement', id)
  } catch {
    // storage unavailable: it may show again next visit
  }
}

// The target can sit deep inside a `.cv-auto` section: sections passed on the way render at their real height
// (not the 1200px placeholder), so the anchor scroll ends off target. Once scrolling stops, nudge it into place.
function settleOn(selector, offset = 88) {
  let last = -1
  let still = 0
  const poll = setInterval(() => {
    still = Math.abs(scrollY - last) < 1 ? still + 1 : 0
    last = scrollY
    if (still < 3) return
    clearInterval(poll)
    const top = document.querySelector(selector)?.getBoundingClientRect().top
    if (top !== undefined && Math.abs(top - offset) > 8) {
      scrollTo({ top: scrollY + top - offset, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    }
  }, 100)
  setTimeout(() => clearInterval(poll), 5000)
}

// Small corner toast for news (e.g. a new certification). Client-only: renders nothing on the server,
// appears once per visitor a moment after load, closes itself, and pauses while hovered or focused.
export default function Announcement() {
  const { t } = useLang()
  const a = t.announcement
  const [state, setState] = useState('off') // off → hidden → shown → hidden → off
  const [reduced, setReduced] = useState(false)
  const timer = useRef({ id: 0, started: 0, remaining: VISIBLE_MS })

  const close = () => {
    clearTimeout(timer.current.id)
    setState('hidden')
    setTimeout(() => setState('off'), 500)
  }

  const startTimer = () => {
    clearTimeout(timer.current.id)
    timer.current.started = Date.now()
    timer.current.id = setTimeout(close, timer.current.remaining)
  }

  const pauseTimer = () => {
    clearTimeout(timer.current.id)
    timer.current.remaining -= Date.now() - timer.current.started
  }

  useEffect(() => {
    if (!a || alreadySeen(a.id) || new Date() > new Date(`${a.until}T23:59:59`)) return
    setReduced(prefersReducedMotion())
    const show = setTimeout(() => {
      // Skip it if the visitor is already looking at the target section.
      const target = document.querySelector(a.href)
      const r = target?.getBoundingClientRect()
      if (r && r.top < innerHeight && r.bottom > 0) return
      markSeen(a.id)
      setState('hidden')
      requestAnimationFrame(() => requestAnimationFrame(() => setState('shown')))
    }, SHOW_AFTER_MS)
    return () => clearTimeout(show)
    // Run once per page load; a language switch only changes the text.
  }, [])

  useEffect(() => {
    if (state !== 'shown') return
    startTimer()
    const onKey = (e) => e.key === 'Escape' && close()
    addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer.current.id)
      removeEventListener('keydown', onKey)
    }
  }, [state === 'shown'])

  if (!a || state === 'off') return null

  return (
    <aside
      role="status"
      aria-label={a.label}
      data-state={state}
      onPointerEnter={pauseTimer}
      onPointerLeave={startTimer}
      onFocus={pauseTimer}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && startTimer()}
      className="toast fixed inset-x-4 bottom-4 z-50 overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-2xl shadow-black/50 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[21rem]"
    >
      <div className="flex items-center gap-3 p-3 pr-2">
        <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#5b86f6]">
          {reduced ? (
            <img src={a.staticImage} alt="" width="64" height="64" className="h-16 w-16" />
          ) : (
            <img src={a.image} alt="" width="320" height="192" className="h-full w-full scale-150 object-contain" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ember">{a.label}</p>
          <p className="truncate text-sm font-medium">{a.text}</p>
          <a
            href={a.href}
            onClick={() => {
              close()
              settleOn(a.href)
            }}
            className="link-u mt-0.5 inline-block text-xs"
          >
            {a.cta} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label={a.close}
          className="grid h-8 w-8 shrink-0 place-items-center self-start rounded-full text-muted transition-colors hover:bg-ink-3 hover:text-paper"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      {!reduced && (
        <div className="toast-timer h-0.5 bg-ember" style={{ '--toast-ms': `${VISIBLE_MS}ms` }} aria-hidden="true" />
      )}
    </aside>
  )
}
