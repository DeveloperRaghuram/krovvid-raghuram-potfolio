import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

const channels = [
  {
    label: 'Email',
    icon: Mail,
    value: profile.email,
    href: profile.email ? `mailto:${profile.email}` : null,
    external: false,
  },
  { label: 'LinkedIn', icon: Linkedin, value: profile.linkedin, href: profile.linkedin, external: true },
  { label: 'GitHub', icon: Github, value: profile.github, href: profile.github, external: true },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="06 · Contact"
      title="Let's connect"
      description="Open to opportunities as a Java Backend Developer, Software Engineer, or Data Engineer."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {channels.map(({ label, icon: Icon, value, href, external }, i) => (
          <Reveal as="li" key={label} delay={i * 80}>
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{label}</span>
                    <span className="block truncate text-sm text-muted-foreground">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                  {external && <span className="sr-only">(opens in new tab)</span>}
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-2xl border border-dashed border-amber-400/40 p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-amber-400/10 text-amber-200">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-medium">{label}</span>
                    <span className="block font-mono text-xs text-amber-200/90">[Add {label} {label === 'Email' ? 'address' : 'URL'}]</span>
                  </span>
                </div>
              )}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
