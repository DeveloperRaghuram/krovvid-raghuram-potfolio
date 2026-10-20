import Image from 'next/image'
import { Code2, Database, GraduationCap, MapPin, ServerCog } from 'lucide-react'
import { about, education, profile } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

const pillars = [
  { icon: ServerCog, title: 'Backend', text: 'Java, Jersey REST APIs, and enterprise integrations.' },
  { icon: Database, title: 'Data', text: 'Oracle SQL today, with Data Engineering in progress.' },
  { icon: Code2, title: 'Identity & Ops', text: 'LDAP, Keycloak, WebLogic deployments, and troubleshooting.' },
]

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="From backend development to Data Engineering">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <Reveal className="mx-auto w-full max-w-xs lg:mx-0">
          <figure className="glass overflow-hidden rounded-2xl p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <figcaption className="flex flex-col gap-1.5 px-3 pb-2 pt-4">
              <span className="font-medium">{profile.name}</span>
              {profile.location && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {profile.location}
                </span>
              )}
            </figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            {about.map((p) => (
              <p key={p.slice(0, 24)} className="text-pretty">
                {p}
              </p>
            ))}
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="glass flex flex-col gap-3 rounded-xl p-5 hover:border-primary/40"
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

          <Reveal delay={240} className="glass flex items-start gap-4 rounded-xl p-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-electric/15 text-electric">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-medium">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {education.school} · {education.year} · {education.grade}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
