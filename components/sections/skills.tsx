import { CheckCircle2, Sparkles } from 'lucide-react'
import { experiencedSkills, learningSkills, type Skill } from '@/lib/portfolio-data'
import { Section, Placeholder, isPlaceholder } from '@/components/section'
import { Reveal } from '@/components/reveal'

function SkillRow({ skill, learning }: { skill: Skill; learning?: boolean }) {
  if (isPlaceholder(skill.name)) {
    return (
      <li className="py-3">
        <Placeholder>{skill.name}</Placeholder>
      </li>
    )
  }
  return (
    <li className="group flex items-center gap-4 py-3">
      <span className="flex-1 font-medium">{skill.name}</span>
      {skill.note && <span className="font-mono text-xs text-muted-foreground">{skill.note}</span>}
      <span
        aria-hidden="true"
        className={
          learning
            ? 'learning-bar relative h-1.5 w-16 overflow-hidden rounded-full bg-electric/25'
            : 'h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-electric transition-shadow group-hover:shadow-[0_0_12px] group-hover:shadow-primary/70'
        }
      />
    </li>
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="Skills & technologies"
      description="Grouped by hands-on experience versus active learning — no self-rated percentages."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-semibold">Professional experience</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Used in my work at Tata Consultancy Services.</p>
            <ul className="mt-4 divide-y divide-white/5">
              {experiencedSkills.map((s) => (
                <SkillRow key={s.name} skill={s} />
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass h-full rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-electric" aria-hidden="true" />
              <h3 className="text-lg font-semibold">Data Engineering</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Applied in personal projects and ongoing study — not professional experience yet.
            </p>
            <ul className="mt-4 divide-y divide-white/5">
              {learningSkills.map((s) => (
                <SkillRow key={s.name} skill={s} learning />
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
