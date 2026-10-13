import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience() {
  const { t } = useLang()
  return (
    <Section id="experience" index="03" title={t.experienceTitle}>
      <Reveal as="ol" stagger className="relative border-l border-line ml-1.5">
        {t.experience.map((e) => (
          <li key={e.role + e.org} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-ember ring-4 ring-ink" aria-hidden="true" />
            <div className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted pt-1.5">{e.dates}</p>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl leading-tight">{e.role}</h3>
                <p className="mt-1 text-paper/85">
                  {e.url ? (
                    <a href={e.url} target="_blank" rel="noreferrer" className="link-u">{e.org}</a>
                  ) : (
                    e.org
                  )}
                  {e.meta && <span className="text-muted"> · {e.meta}</span>}
                </p>
                {e.summary && <p className="mt-3 text-muted leading-relaxed max-w-3xl">{e.summary}</p>}
                {e.highlights && (
                  <ul className="mt-3 space-y-1.5 max-w-3xl">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-muted">
                        <span className="text-ember" aria-hidden="true">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
