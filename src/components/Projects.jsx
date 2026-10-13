import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

function RepoLink({ repo, ui, tone = 'dark' }) {
  if (!repo) return null
  if (repo.private) {
    return (
      <span className={`font-mono text-xs ${tone === 'parchment' ? 'text-quill/70' : 'text-muted'}`}>
        {ui.privateRepo}
      </span>
    )
  }
  return (
    <a href={repo.url} target="_blank" rel="noreferrer" className="link-u text-sm">
      {ui.repo} <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function Chips({ items, tone = 'dark' }) {
  if (!items?.length) return null
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((x) => (
        <li
          key={x}
          className={
            tone === 'parchment'
              ? 'rounded-full border border-gold/50 px-2.5 py-0.5 text-xs text-quill'
              : 'chip'
          }
        >
          {x}
        </li>
      ))}
    </ul>
  )
}

function Status({ children, tone = 'dark' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider ${
        tone === 'parchment' ? 'bg-emerald text-parchment' : 'bg-ember-soft text-ember'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  )
}

// Concept presentation, not a UI mockup: Chronicle has no built screens yet.
function ChronicleCard({ p, ui }) {
  return (
    <Reveal
      as="article"
      aria-labelledby={`${p.id}-title`}
      className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-parchment text-quill p-6 sm:p-12 shadow-[0_30px_80px_-30px_rgba(184,145,58,0.45)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,rgba(31,107,79,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(184,145,58,0.25),transparent_60%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-3 sm:inset-5 rounded-[1.5rem] border border-gold/40" />
      <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Status tone="parchment">{p.status}</Status>
            <span className="font-mono text-xs uppercase tracking-wider text-quill/70">Featured · {p.group}</span>
          </div>
          <h3 id={`${p.id}-title`} className="font-display text-6xl sm:text-8xl leading-none text-emerald">
            {p.name}
          </h3>
          <p className="mt-3 font-display italic text-2xl text-quill/80">{p.tagline}</p>
          <p className="mt-6 leading-relaxed">{p.description}</p>
          <p className="mt-4 border-l-2 border-gold pl-4 italic text-quill/85">{p.distinction}</p>
        </div>
        <div className="flex flex-col gap-6 lg:pt-4">
          <div className="rounded-2xl border border-gold/40 bg-parchment-2/60 p-5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-emerald mb-3">{p.plannedTitle}</h4>
            <ol className="space-y-2">
              {p.planned.map((x, i) => (
                <li key={x} className="flex gap-3">
                  <span className="font-display text-gold text-lg leading-6" aria-hidden="true">{['I', 'II', 'III', 'IV'][i]}</span>
                  <span>{x}</span>
                </li>
              ))}
            </ol>
          </div>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-quill/60">{ui.status}</dt>
              <dd>{p.progress}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-quill/60">{ui.role}</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-quill/60 mb-1.5">{ui.tech}</dt>
              <dd><Chips items={p.tech} tone="parchment" /></dd>
            </div>
          </dl>
          <RepoLink repo={p.repo} ui={ui} tone="parchment" />
        </div>
      </div>
    </Reveal>
  )
}

// `thumb` crops to a uniform tile (top-aligned) and links to the full image, for multi-image grids.
function Figure({ img, className = '', thumb = false }) {
  const image = (
    <img
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      loading="lazy"
      className={thumb ? 'aspect-[4/3] w-full bg-white object-contain p-1.5 transition-transform duration-500 group-hover/fig:scale-[1.03]' : 'w-full h-auto'}
    />
  )
  return (
    <figure className={`overflow-hidden rounded-xl border border-line bg-ink-3 ${className}`}>
      {thumb ? (
        <a href={img.src} target="_blank" rel="noreferrer" className="group/fig block" aria-label={`${img.alt} (open full image in a new tab)`}>
          {image}
        </a>
      ) : (
        image
      )}
    </figure>
  )
}

function FeaturedCard({ p, ui }) {
  return (
    <Reveal as="article" aria-labelledby={`${p.id}-title`} className="rounded-[2rem] border border-line bg-ink-2 p-6 sm:p-10">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Status>{p.status}</Status>
        <span className="font-mono text-xs uppercase tracking-wider text-muted">Featured · {p.group}</span>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h3 id={`${p.id}-title`} className="font-display text-4xl sm:text-5xl leading-tight">{p.name}</h3>
          <p className="mt-3 text-paper/80">{p.tagline}</p>
          <p className="mt-5 text-muted leading-relaxed">{p.description}</p>
          {p.note && <p className="mt-4 text-sm text-muted border-l-2 border-ember/60 pl-3">{p.note}</p>}
          <p className="mt-5 text-sm"><span className="text-muted">{ui.role}: </span>{p.role}</p>
          <div className="mt-5"><Chips items={p.tech} /></div>
          <div className="mt-6"><RepoLink repo={p.repo} ui={ui} /></div>
        </div>
        {p.images[0] && <Figure img={p.images[0]} className="self-center" />}
      </div>
    </Reveal>
  )
}

function ProjectCard({ p, ui, publications }) {
  const related = (p.related || []).map((id) => publications.find((x) => x.id === id)).filter(Boolean)
  return (
    <article aria-labelledby={`${p.id}-title`} className="group flex flex-col rounded-2xl border border-line bg-ink-2 p-6 transition-colors duration-300 hover:border-ember/50">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Status>{p.status}</Status>
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{p.group}</p>
      <h3 id={`${p.id}-title`} className="mt-1 font-display text-3xl leading-tight">
        {p.name}
        {p.subtitle && <span className="block text-lg text-muted italic">{p.subtitle}</span>}
      </h3>
      <p className="mt-3 text-paper/85">{p.tagline}</p>
      <p className="mt-3 text-sm text-muted leading-relaxed">{p.description}</p>

      {p.achievement && (
        <p className="mt-4 rounded-xl bg-ember-soft p-3 text-sm text-paper">
          <span aria-hidden="true">🏆 </span>{p.achievement}
        </p>
      )}

      {p.role && <p className="mt-4 text-sm"><span className="text-muted">{ui.role}: </span>{p.role}</p>}

      {p.contributions && (
        <details className="mt-3 text-sm">
          <summary className="cursor-pointer text-ember">{ui.myContributions}</summary>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
            {p.contributions.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </details>
      )}

      {related.length > 0 && (
        <div className="mt-4 text-sm">
          <p className="text-muted mb-1">{ui.relatedPapers}</p>
          <ul className="space-y-1">
            {related.map((r) => (
              <li key={r.id}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer" className="link-u">{r.title}</a>
                ) : (
                  <span>{r.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {p.images.length > 0 && (
        <div className={`mt-5 grid gap-3 ${p.images.length > 1 ? 'grid-cols-2' : ''}`}>
          {p.images.map((img) => <Figure key={img.src} img={img} thumb={p.images.length > 1} />)}
        </div>
      )}

      <div className="mt-auto pt-5 space-y-4">
        <Chips items={p.tech || p.tools} />
        <RepoLink repo={p.repo} ui={ui} />
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  const [chronicle, ...featured] = t.featured
  return (
    <Section id="projects" index="02" title={t.projectsTitle} intro={t.projectsIntro}>
      <div className="space-y-8">
        <ChronicleCard p={chronicle} ui={t.ui} />
        {featured.map((p) => <FeaturedCard key={p.id} p={p} ui={t.ui} />)}
      </div>
      <Reveal stagger className="mt-8 grid items-start gap-6 md:grid-cols-2">
        {t.projects.map((p) => (
          <ProjectCard key={p.id} p={p} ui={t.ui} publications={t.publications} />
        ))}
      </Reveal>
    </Section>
  )
}
