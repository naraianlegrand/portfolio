import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills() {
  const { t } = useLang()
  return (
    <Section id="skills" index="04" title={t.skillsTitle}>
      <Reveal stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.map((s) => (
          <div key={s.group} className="bg-ink-2 p-6">
            <h3 className="eyebrow mb-4">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => <li key={i} className="chip">{i}</li>)}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
