import { useState } from 'react'
import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

// Only rendered when a Formspree ID is configured. Shows success only on a real 2xx response.
function ContactForm({ formId }) {
  const [state, setState] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setState('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      setState(res.ok ? 'sent' : 'error')
      if (res.ok) form.reset()
    } catch {
      setState('error')
    }
  }

  const field = 'w-full rounded-xl border border-line bg-ink-2 px-4 py-3 text-paper placeholder:text-muted/70 focus:border-ember focus:outline-none'
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">Name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">Message</span>
        <textarea name="message" required rows="5" className={field} />
      </label>
      <button type="submit" disabled={state === 'sending'} className="rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink disabled:opacity-60">
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p role="status" className="text-sm text-muted">
        {state === 'sent' && 'Thanks, your message was sent.'}
        {state === 'error' && 'Something went wrong. Please email me directly instead.'}
      </p>
    </form>
  )
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  return (
    <Section id="contact" index="08" title={c.title}>
      <div className={`grid gap-12 ${c.formspreeId ? 'lg:grid-cols-2' : ''}`}>
        <Reveal>
          <p className="max-w-xl text-lg text-paper/85 leading-relaxed">{c.lead}</p>
          <a
            href={`mailto:${c.email}`}
            className="group mt-8 inline-block font-display text-[clamp(1.6rem,5vw,3.5rem)] leading-tight break-all transition-colors hover:text-ember"
          >
            {c.email}
            <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
          </a>
          <ul className="mt-8 flex flex-wrap gap-3">
            {c.links.map((l) => (
              <li key={l.label}>
                <a href={l.url} target="_blank" rel="noreferrer" className="inline-block rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-ember hover:text-ember">
                  {l.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        {c.formspreeId && (
          <Reveal>
            <ContactForm formId={c.formspreeId} />
          </Reveal>
        )}
      </div>
    </Section>
  )
}
