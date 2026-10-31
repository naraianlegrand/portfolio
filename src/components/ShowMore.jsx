import { useRef } from 'react'

// Toggle for lists whose `more: true` items start collapsed. Collapsed items stay in the
// prerendered HTML with `hidden`, so they're still indexed and render without JS issues.
export default function ShowMore({ expanded, onToggle, controls, count, labels }) {
  const ref = useRef(null)
  const toggle = () => {
    onToggle()
    // Collapsing removes content above the button: bring the button back into view.
    if (expanded) requestAnimationFrame(() => ref.current?.scrollIntoView({ block: 'center' }))
  }
  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-ember hover:text-ember"
    >
      {expanded ? labels.less : `${labels.more} (${count})`}
      <span aria-hidden="true" className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>↓</span>
    </button>
  )
}
