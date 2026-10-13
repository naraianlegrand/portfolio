import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

export default function Education() {
  const { t } = useLang()
  return (
    <Section id="education" index="05" title={t.educationTitle}>
      <Reveal stagger className="grid gap-6 md:grid-cols-2">
        {t.education.map((e) => (
          <article key={e.degree} className="rounded-2xl border border-line bg-ink-2 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{e.dates}</p>
            <h3 className="mt-2 font-display text-3xl leading-tight">{e.degree}</h3>
            <p className="mt-1 text-paper/85">{e.school}</p>
            <p className="text-sm text-muted">{[e.detail, e.location, e.grade].filter(Boolean).join(' · ')}</p>
            {e.activities && (
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {e.activities.map((a) => (
                  <li key={a} className="flex gap-3"><span className="text-ember" aria-hidden="true">—</span><span>{a}</span></li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="eyebrow mb-5">{t.courseworkTitle}</h3>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {t.coursework.map((term) => (
            <div key={term.term} className="bg-ink-2 p-5">
              <p className="font-display text-xl mb-3">{term.term}</p>
              <ul className="space-y-2.5 text-sm">
                {term.courses.map(([code, title]) => (
                  <li key={code}>
                    <span className="block font-mono text-xs text-ember">{code}</span>
                    <span className="text-paper/85">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h3 id="certifications" className="font-display text-3xl sm:text-4xl mb-6">{t.certificationsTitle}</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.map((c) => (
            <li key={c.name} className="flex gap-4 rounded-2xl border border-line bg-ink-2 p-5">
              {c.badge && (
                <img src={c.badge.src} alt={c.badge.alt} width="64" height="64" loading="lazy" className="h-16 w-16 shrink-0" />
              )}
              <div className="min-w-0">
                <p className="font-medium leading-snug">{c.name}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-ember">{c.date}</p>
                {c.detail && <p className="mt-2 text-xs text-muted">{c.detail}</p>}
                {c.credentialId && (
                  <p className="mt-2 text-xs text-muted break-all">
                    {t.ui.credentialId}: <span className="font-mono">{c.credentialId}</span>
                  </p>
                )}
                {c.file && (
                  <a href={c.file} target="_blank" rel="noreferrer" className="link-u mt-2 inline-block text-xs">
                    {t.ui.viewCredential} (PDF)
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
