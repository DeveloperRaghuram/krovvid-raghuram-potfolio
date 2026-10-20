import Link from 'next/link'
import { ArrowRight, Building2, Lock, User } from 'lucide-react'
import { GithubIcon as Github } from '@/components/brand-icons'
import { projects, type Project } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={cn(
        'glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px] hover:shadow-primary/40 md:p-7',
        featured && 'border-primary/30',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-electric/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
      />
      <h4 className="text-2xl font-semibold tracking-tight text-balance">{project.title}</h4>
      <p className="mt-1 text-electric">{project.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-col gap-2 text-sm">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            {f}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((t) => (
          <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px] shadow-primary/60 transition-colors hover:bg-primary/90"
          >
            <Github className="size-4" aria-hidden="true" />
            View Source Code
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
        {project.detailHref && (
          <Link
            href={project.detailHref}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            Project details
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
        {project.kind === 'professional' && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <Lock className="size-3.5" aria-hidden="true" />
            Company work — source code not public
          </span>
        )}
      </div>
    </article>
  )
}

function GroupHeading({ icon: Icon, title, text }: { icon: typeof User; title: string; text: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-lg bg-primary/15 text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}

export function Projects() {
  const personal = projects.filter((p) => p.kind === 'personal')
  const professional = projects.filter((p) => p.kind === 'professional')

  return (
    <Section id="projects" eyebrow="04 · Projects" title="Projects">
      <div className="flex flex-col gap-12">
        <div>
          <GroupHeading icon={User} title="Personal projects" text="Built independently, source code on GitHub." />
          <div className="grid gap-6">
            {personal.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} featured />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <GroupHeading
            icon={Building2}
            title="Professional projects"
            text="Work delivered at Tata Consultancy Services."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {professional.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
