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
        <Reveal as="aside" stagger className="flex flex-col gap-6 self-start">
          {a.photo && (
            <figure className="overflow-hidden rounded-2xl border border-line bg-ink-2">
              <img
                src={a.photo.src}
                srcSet={a.photo.srcSet}
                sizes="(min-width: 768px) 30vw, 92vw"
                alt={a.photo.alt}
                width={a.photo.width}
                height={a.photo.height}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              {a.photo.caption && <figcaption className="px-5 py-3 font-mono text-xs text-muted">{a.photo.caption}</figcaption>}
            </figure>
          )}
        </Reveal>
      </div>

      {/* Full width under the bio and photo, like the PeaceGeeks story, so no column is left half empty. */}
      <Reveal className="mt-12">
        <h3 id="languages-title" className="eyebrow mb-5">{a.languagesTitle}</h3>
        <ul aria-labelledby="languages-title" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {a.languages.map((l) => (
            <li key={l.name} className="flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-line bg-ink-2 p-5">
              <div className="min-w-0">
                <p className="font-display text-2xl leading-tight">{l.name}</p>
                <p className="text-sm text-muted">{l.level}</p>
              </div>
              {l.credential && (
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  <img
                    src={l.credential.logo.src}
                    alt={l.credential.logo.alt}
                    width={l.credential.logo.width / 2}
                    height={l.credential.logo.height / 2}
                    loading="lazy"
                    className="h-12 w-auto rounded-md"
                  />
                  <p className="font-mono text-xs text-ember">
                    {l.credential.name} · {l.credential.score}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
