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
      {/* Full-width stories: banner images sit on top, portrait images (layout: 'side') sit beside the text. */}
      <Reveal stagger className="grid gap-6">
        {b.stories.map((s) => {
          const side = s.image?.layout === 'side'
          return (
            <article
              key={s.title}
              className={`overflow-hidden rounded-2xl border border-line bg-ink-2 ${side ? 'grid md:grid-cols-[minmax(0,2fr)_3fr]' : 'flex flex-col'}`}
            >
              {s.image && (
                <figure className={`relative ${side ? 'border-b border-line md:border-b-0 md:border-r' : ''}`}>
                  <img
                    src={s.image.src}
                    srcSet={s.image.srcSet}
                    sizes={side ? '(min-width: 1152px) 440px, (min-width: 768px) 40vw, 92vw' : '(min-width: 1152px) 1104px, 92vw'}
                    alt={s.image.alt}
                    width={s.image.width}
                    height={s.image.height}
                    loading="lazy"
                    className={side ? 'mx-auto h-full w-full max-w-sm object-cover object-top md:max-w-none' : 'w-full h-auto'}
                  />
                  {s.image.credit && (
                    <figcaption className="absolute bottom-2 right-3 rounded bg-ink/70 px-2 py-0.5 font-mono text-[0.65rem] text-paper/80">
                      {s.image.credit}
                    </figcaption>
                  )}
                </figure>
              )}
              <div className={`flex flex-col p-6 sm:p-8 ${side ? 'md:justify-center lg:p-12' : ''}`}>
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-display text-3xl">{s.title}</h3>
                  {s.badge && (
                    <figure className="flex shrink-0 flex-col items-end gap-1.5">
                      <img src={s.badge.src} alt={s.badge.alt} width={s.badge.width / 2} height={s.badge.height / 2} loading="lazy" className="h-12 w-auto rounded-md" />
                      <figcaption className="font-mono text-xs text-ember">{s.badge.caption}</figcaption>
                    </figure>
                  )}
                </div>
                <p className="mt-4 max-w-3xl text-muted leading-relaxed">{s.body}</p>
                {s.link && (
                  <a href={s.link.url} target="_blank" rel="noreferrer" className={`link-u self-start pt-5 text-sm ${side ? '' : 'mt-auto'}`}>
                    {s.link.label} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </article>
          )
        })}
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
