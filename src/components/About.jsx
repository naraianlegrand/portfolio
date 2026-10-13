import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <Section id="about" index="01" title={a.title}>
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal stagger className="space-y-6 text-lg leading-relaxed text-paper/90">
          {a.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <Reveal as="aside" aria-labelledby="languages-title" className="rounded-2xl border border-line bg-ink-2 p-6 self-start">
          <h3 id="languages-title" className="eyebrow mb-4">{a.languagesTitle}</h3>
          <dl className="divide-y divide-line">
            {a.languages.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between gap-4 py-2.5">
                <dt>{l.name}</dt>
                <dd className="text-sm text-muted text-right">{l.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
