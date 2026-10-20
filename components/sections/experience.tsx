import { Briefcase } from 'lucide-react'
import { experience } from '@/lib/portfolio-data'
import { Section, Placeholder, isPlaceholder } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Professional experience">
      <ol className="relative border-l border-white/10 pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <Reveal>
              <span
                aria-hidden="true"
                className="absolute -left-[45px] top-7 grid size-6 place-items-center rounded-full border border-primary/50 bg-background text-primary"
              >
                <Briefcase className="size-3" />
              </span>
              <article className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-electric">{job.company}</p>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
                  {job.focus.map((f) => (
                    <li key={f} className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                      {f}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.details.map((d) => (
                    <li key={d} className="flex gap-3 text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-electric" />
                      {isPlaceholder(d) ? <Placeholder className="whitespace-normal">{d}</Placeholder> : d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
