import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

// Round-robin across places so one trip doesn't fill a whole row (Edmonton, Toronto, Edmonton, …).
function interleaveByPlace(items) {
  const groups = new Map()
  items.forEach((i) => groups.set(i.place, [...(groups.get(i.place) || []), i]))
  const queues = [...groups.values()]
  const out = []
  while (queues.some((q) => q.length)) queues.forEach((q) => q.length && out.push(q.shift()))
  return out
}

function TravelGallery({ title, items }) {
  const withPhotos = interleaveByPlace(items.filter((i) => i.photo))
  if (!withPhotos.length) return null
  return (
    <Reveal className="mt-12">
      <h3 className="eyebrow mb-5">{title}</h3>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {withPhotos.map((i) => (
          <li key={i.place + i.when}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-ink-2">
              <img
                src={i.photo.src}
                alt={i.photo.alt}
                width={i.photo.width}
                height={i.photo.height}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <figcaption className="p-4 text-sm">
                <span className="font-display text-lg">{i.place}</span>
                <span className="text-muted"> · {i.when}</span>
                {i.caption && <span className="block text-muted">{i.caption}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function BeyondCode() {
  const { t } = useLang()
  const b = t.beyond
  return (
    <Section id="beyond" index="07" title={b.title} intro={b.intro}>
      <Reveal stagger className="grid gap-6 lg:grid-cols-3">
        {b.stories.map((s) => (
          <article key={s.title} className="flex flex-col rounded-2xl border border-line bg-ink-2 p-6 sm:p-8">
            <h3 className="font-display text-3xl">{s.title}</h3>
            <p className="mt-4 text-muted leading-relaxed">{s.body}</p>
            {s.link && (
              <a href={s.link.url} target="_blank" rel="noreferrer" className="link-u mt-auto pt-5 text-sm">
                {s.link.label} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </article>
        ))}
      </Reveal>

      <Reveal className="mt-12 rounded-2xl border border-line bg-ink-2 px-6 py-8 sm:px-10">
        <p className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug italic text-paper/90 sm:text-3xl">“{b.personal}”</p>
      </Reveal>

      <div className="mt-12">
        <Reveal>
          <h3 className="eyebrow mb-5">{b.leadershipTitle}</h3>
          <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-10">
            {b.leadership.map((l) => (
              <li key={l.role + l.org} className="border-b border-line py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-medium">
                    {l.role},{' '}
                    {l.url ? (
                      <a href={l.url} target="_blank" rel="noreferrer" className="link-u font-normal">{l.org}</a>
                    ) : (
                      <span className="font-normal">{l.org}</span>
                    )}
                  </p>
                  <p className="font-mono text-xs text-muted">{l.dates}</p>
                </div>
                {l.detail && <p className="mt-1.5 text-sm text-muted">{l.detail}</p>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <TravelGallery title={b.travelTitle} items={b.travel} />
    </Section>
  )
}
