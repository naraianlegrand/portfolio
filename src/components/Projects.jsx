import { useState } from 'react'
import { useLang } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'
import NewTab from './NewTab'
import ShowMore from './ShowMore'

function RepoLink({ repo, ui }) {
  if (!repo) return null
  if (repo.private) {
    return <span className="font-mono text-xs text-muted">{ui.privateRepo}</span>
  }
  return (
    <a href={repo.url} target="_blank" rel="noreferrer" className="link-u text-sm">
      {ui.repo} <span aria-hidden="true">↗</span>
      <NewTab />
    </a>
  )
}

function Chips({ items }) {
  if (!items?.length) return null
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((x) => (
        <li key={x} className="chip">{x}</li>
      ))}
    </ul>
  )
}

function Status({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-ember-soft px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ember">
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  )
}

// `thumb` crops to a uniform tile (top-aligned) and links to the full image, for multi-image grids.
function Figure({ img, className = '', thumb = false }) {
  const { t } = useLang()
  const image = (
    <img
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      loading="lazy"
      className={thumb ? 'aspect-[4/3] w-full object-contain p-1.5 transition-transform duration-500 group-hover/fig:scale-[1.03]' : 'w-full h-auto'}
    />
  )
  return (
    <figure className={`overflow-hidden rounded-xl border border-line bg-ink-3 ${className}`}>
      {thumb ? (
        <a href={img.src} target="_blank" rel="noreferrer" className="group/fig block" aria-label={`${img.alt} (${t.ui.openFull})`}>
          {image}
        </a>
      ) : (
        image
      )}
    </figure>
  )
}

// The lead screenshot doubles as a link to the live site, with a slow ember glow so it reads as clickable.
function LiveFigure({ img, href, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="glow-pulse group/live relative isolate block rounded-xl">
      <figure className="overflow-hidden rounded-xl border border-ember/60 bg-ink-3">
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          className="w-full h-auto transition-transform duration-500 group-hover/live:scale-[1.02]"
        />
      </figure>
      <span className="absolute bottom-3 right-3 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-medium text-paper transition-colors group-hover/live:text-ember">
        {label} <span aria-hidden="true">↗</span>
        <NewTab />
      </span>
    </a>
  )
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-u text-sm">
      {children} <span aria-hidden="true">↗</span>
      <NewTab />
    </a>
  )
}

// The first featured project gets the big card; later ones are compact, with role, tech and
// links under the screenshot so the two columns end at about the same height.
function FeaturedCard({ p, ui, compact = false }) {
  const [lead, ...more] = p.images
  const meta = (
    <>
      <p className={`text-sm ${compact ? '' : 'mt-5'}`}><span className="text-muted">{ui.role}: </span>{p.role}</p>
      <div className={compact ? '' : 'mt-5'}><Chips items={p.tech} /></div>
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${compact ? '' : 'mt-6'}`}>
        {p.live && <ExternalLink href={p.live}>{ui.live}</ExternalLink>}
        {p.story && <ExternalLink href={p.story}>{ui.readStory}</ExternalLink>}
        <RepoLink repo={p.repo} ui={ui} />
      </div>
    </>
  )
  return (
    <Reveal as="article" aria-labelledby={`${p.id}-title`} className={`rounded-[2rem] border border-line bg-ink-2 ${compact ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`}>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Status>{p.status}</Status>
        <span className="font-mono text-xs uppercase tracking-wider text-muted">{ui.featured} · {p.group}</span>
      </div>
      <div className={`grid ${compact ? 'gap-8 lg:grid-cols-[1.1fr_1fr]' : 'gap-10 lg:grid-cols-[1fr_1.2fr]'}`}>
        <div>
          <h3 id={`${p.id}-title`} className={`font-display leading-tight ${compact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}>{p.name}</h3>
          <p className="mt-3 text-paper/80">{p.tagline}</p>
          <p className={`text-muted leading-relaxed ${compact ? 'mt-4 text-sm' : 'mt-5'}`}>{p.description}</p>
          {p.note && <p className="mt-4 text-sm text-muted border-l-2 border-ember/60 pl-3">{p.note}</p>}
          {!compact && meta}
        </div>
        <div className={`flex flex-col ${compact ? 'gap-5' : 'gap-6'}`}>
          {lead && (p.live ? <LiveFigure img={lead} href={p.live} label={ui.visitLive} /> : <Figure img={lead} />)}
          {compact && meta}
          {more.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {more.map((img) => <Figure key={img.src} img={img} thumb />)}
            </div>
          )}
          {p.highlights && (
            <ul className="space-y-3 text-sm">
              {p.highlights.map((h) => (
                <li key={h.lead} className="border-l-2 border-ember/60 pl-3">
                  <span className="font-medium text-paper">{h.lead}. </span>
                  <span className="text-muted">{h.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  )
}

function ProjectCard({ p, ui, publications, hidden }) {
  const related = (p.related || []).map((id) => publications.find((x) => x.id === id)).filter(Boolean)
  return (
    <article aria-labelledby={`${p.id}-title`} hidden={hidden} className="group flex w-full flex-col rounded-2xl border border-line bg-ink-2 p-6 transition-colors duration-300 hover:border-ember/50">
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
      {p.note && <p className="mt-3 text-sm text-muted border-l-2 border-ember/60 pl-3">{p.note}</p>}

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
          {p.images.map((img, i) => (
            // With an odd count, the first image spans both columns so no tile sits alone.
            <Figure key={img.src} img={img} thumb={p.images.length > 1} className={i === 0 && p.images.length > 1 && p.images.length % 2 ? 'col-span-2' : ''} />
          ))}
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
  const [expanded, setExpanded] = useState(false)
  const moreCount = t.projects.filter((p) => p.more).length
  return (
    <Section id="projects" index="02" title={t.projectsTitle} intro={t.projectsIntro}>
      <div className="space-y-8">
        {t.featured.map((p, i) => <FeaturedCard key={p.id} p={p} ui={t.ui} compact={i > 0} />)}
      </div>
      {/* Masonry columns: cards of different heights pack without holes. */}
      <Reveal id="project-list" stagger className="mt-8 gap-6 md:columns-2 [&>*]:mb-6 [&>*]:break-inside-avoid">
        {t.projects.map((p) => (
          <ProjectCard key={p.id} p={p} ui={t.ui} publications={t.publications} hidden={p.more && !expanded} />
        ))}
      </Reveal>
      {moreCount > 0 && (
        <div className="mt-4">
          <ShowMore
            expanded={expanded}
            onToggle={() => setExpanded((x) => !x)}
            controls="project-list"
            count={moreCount}
            labels={{ more: t.ui.showAllProjects, less: t.ui.showLess }}
          />
        </div>
      )}
    </Section>
  )
}
