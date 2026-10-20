import { ExternalLink, Plus } from 'lucide-react'
import { GithubIcon as Github } from '@/components/brand-icons'
import { projects, type Project } from '@/lib/portfolio-data'
import { Section, Placeholder, isPlaceholder } from '@/components/section'
import { Reveal } from '@/components/reveal'

function ProjectLink({ href, label, icon: Icon }: { href: string | null; label: string; icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' }> }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-amber-400/40 px-2.5 py-1.5 font-mono text-xs text-amber-200/80">
        <Icon className="size-3.5" aria-hidden="true" />
        {label} [add link]
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px] hover:shadow-primary/40 md:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-electric/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
      />
      <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-electric">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-col gap-2 text-sm">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            {isPlaceholder(f) ? <Placeholder className="whitespace-normal">{f}</Placeholder> : f}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((t) =>
          isPlaceholder(t) ? (
            <li key={t}>
              <Placeholder>{t}</Placeholder>
            </li>
          ) : (
            <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80">
              {t}
            </li>
          ),
        )}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <ProjectLink href={project.github} label="GitHub" icon={Github} />
        <ProjectLink href={project.demo} label="Live demo" icon={ExternalLink} />
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 · Projects" title="Selected projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="h-full">
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
        <Reveal delay={200} className="md:col-span-2">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 p-6 text-sm text-muted-foreground">
            <Plus className="size-4" aria-hidden="true" />
            More projects coming soon
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
