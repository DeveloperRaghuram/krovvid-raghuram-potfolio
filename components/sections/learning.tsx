import { Award, BookOpen } from 'lucide-react'
import { certifications, learning } from '@/lib/portfolio-data'
import { Section, Placeholder } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function Learning() {
  return (
    <Section id="learning" eyebrow="05 · Learning & Certifications" title="Continuous learning">
      <div className="grid gap-6 lg:grid-cols-3">
        {learning.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <article className="glass h-full rounded-2xl p-6 transition-colors hover:border-electric/40">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-electric/15 text-electric">
                  <BookOpen className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-electric/30 px-2.5 py-0.5 font-mono text-xs text-electric">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.provider}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                {item.topics.map((t) => (
                  <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-foreground/80">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <div id="certifications" className="scroll-mt-24">
          {certifications.map((c) => (
            <Reveal key={c.name} delay={160}>
              <article className="relative h-full overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/5 to-electric/10 p-6">
                <span className="grid size-10 place-items-center rounded-lg bg-primary/25 text-primary">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-5 font-mono text-xs uppercase tracking-wider text-muted-foreground">Certification</p>
                <h3 className="mt-1 text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.issued ? (
                    <span className="font-mono text-xs text-muted-foreground">Issued {c.issued}</span>
                  ) : (
                    <Placeholder>[Add issue date]</Placeholder>
                  )}
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Verify credential
                    </a>
                  ) : (
                    <Placeholder>[Add credential link]</Placeholder>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
