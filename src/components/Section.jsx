import Reveal from './Reveal'

export default function Section({ id, index, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`cv-auto py-16 sm:py-24 ${className}`}>
      <div className="container-x">
        <Reveal className="mb-8 sm:mb-12 max-w-2xl">
          {index && <p className="eyebrow mb-3">{index}</p>}
          <h2 id={`${id}-title`} className="font-display text-4xl sm:text-6xl leading-none tracking-tight">
            {title}
          </h2>
          {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
