import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

export default function Publications() {
  const { t } = useLang()
  return (
    <Section id="publications" index="06" title={t.publicationsTitle}>
      <Reveal as="ol" stagger className="divide-y divide-line border-y border-line">
        {t.publications.map((p, i) => (
          <li key={p.id} className="grid gap-3 py-8 md:grid-cols-[4rem_1fr_8rem]">
            <span className="font-display text-3xl text-muted" aria-hidden="true">0{i + 1}</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer" className="link-u">
                    {p.title} <span aria-hidden="true" className="text-ember text-xl">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              {p.authors && <p className="mt-2 text-sm text-paper/80">{p.authors}</p>}
              <p className="mt-1 text-sm text-muted italic">{p.venue}</p>
              {p.summary && <p className="mt-3 text-muted max-w-3xl">{p.summary}</p>}
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => <li key={tag} className="chip text-xs">{tag}</li>)}
              </ul>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted md:text-right md:pt-2">{p.date}</p>
          </li>
        ))}
      </Reveal>

      <h3 className="eyebrow mt-12 mb-6">Awards</h3>
      {/* Equal-height cards; proof (certificate image, link) sits in a matching footer row. */}
      <Reveal stagger className="grid gap-6 md:grid-cols-3">
        {t.awards.map((a) => (
          <article key={a.title} className="flex flex-col rounded-2xl border border-line bg-ink-2 p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-ember">{a.date}</p>
            <h4 className="mt-2 font-display text-2xl leading-tight">{a.title}</h4>
            <p className="mt-1 text-sm text-paper/80">{a.org}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{a.detail}</p>
            {(a.image || a.link) && (
              <div className="mt-auto flex items-center gap-4 pt-5">
                {a.image && (
                  <a href={a.image.src} target="_blank" rel="noreferrer" className="group/img flex items-center gap-3 text-sm">
                    <img
                      src={a.image.src}
                      alt={a.image.alt}
                      width="96"
                      height="68"
                      loading="lazy"
                      className="h-[68px] w-24 rounded-md border border-line object-cover transition-transform group-hover/img:scale-105"
                    />
                    <span className="link-u">{a.image.label} <span aria-hidden="true">↗</span></span>
                  </a>
                )}
                {a.link && (
                  <a href={a.link.url} target="_blank" rel="noreferrer" className="link-u text-sm">
                    {a.link.label} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </Reveal>
    </Section>
  )
}
