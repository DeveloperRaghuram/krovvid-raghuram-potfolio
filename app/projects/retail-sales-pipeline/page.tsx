import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDown, ArrowLeft, FileText, ShieldCheck } from 'lucide-react'
import { GithubIcon as Github } from '@/components/brand-icons'
import { pipelineDetail, projects } from '@/lib/portfolio-data'

const project = projects.find((p) => p.slug === 'retail-sales-pipeline')!

export const metadata: Metadata = {
  title: `${project.title} | Krovvidi Raghuram`,
  description: project.description,
}

function Card({ title, icon: Icon, children }: { title: string; icon: typeof FileText; children: React.ReactNode }) {
  return (
    <section className="glass rounded-2xl p-6 md:p-7" aria-labelledby={title}>
      <div className="flex items-center gap-2.5">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        <h2 id={title} className="text-lg font-semibold">
          {title}
        </h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function RetailPipelinePage() {
  return (
    <main id="main" className="relative mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <Link
        href="/#projects"
        className="relative inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to portfolio
      </Link>

      <header className="relative mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-electric">Personal project</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80">
              {t}
            </li>
          ))}
        </ul>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px] shadow-primary/60 transition-colors hover:bg-primary/90"
          >
            <Github className="size-4" aria-hidden="true" />
            View Source Code
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
      </header>

      <div className="relative mt-12 grid gap-6">
        <Card title="Pipeline architecture" icon={ArrowDown}>
          <ol className="flex flex-col items-start gap-2">
            {pipelineDetail.architecture.map((step, i) => (
              <li key={step} className="flex flex-col items-start gap-2">
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-sm">
                  <span className="mr-3 text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </span>
                {i < pipelineDetail.architecture.length - 1 && (
                  <ArrowDown className="ml-6 size-4 text-primary" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Card>

        <Card title="Data-quality rules" icon={ShieldCheck}>
          <ul className="flex flex-col gap-2.5 text-sm leading-relaxed">
            {pipelineDetail.qualityRules.map((rule) => (
              <li key={rule} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {rule}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Example outputs" icon={FileText}>
          <ul className="divide-y divide-white/5">
            {pipelineDetail.outputs.map((o) => (
              <li key={o.file} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                <code className="font-mono text-sm text-electric">{o.file}</code>
                <span className="text-sm text-muted-foreground">{o.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">{pipelineDetail.note}</p>
        </Card>
      </div>
    </main>
  )
}
