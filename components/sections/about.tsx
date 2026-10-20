import { Code2, Database, ServerCog } from 'lucide-react'
import { about } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

const pillars = [
  { icon: ServerCog, title: 'Backend', text: 'Java, REST APIs, and service integration.' },
  { icon: Database, title: 'Data', text: 'SQL today, with Data Engineering in progress.' },
  { icon: Code2, title: 'Engineering', text: 'Version control with Git and clean, maintainable code.' },
]

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="From backend development to Data Engineering">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
          {about.map((p) => (
            <p key={p.slice(0, 24)} className="text-pretty">
              {p}
            </p>
          ))}
        </Reveal>
        <ul className="grid gap-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 80}
              className="glass flex items-start gap-4 rounded-xl p-5 hover:border-primary/40"
            >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
