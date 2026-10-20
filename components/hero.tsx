'use client'

import dynamic from 'next/dynamic'
import { useSyncExternalStore } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const HeroScene = dynamic(() => import('@/components/hero-scene'), {
  ssr: false,
  loading: () => <SceneFallback />,
})

function SceneFallback() {
  return (
    <div aria-hidden="true" className="grid h-full w-full place-items-center">
      <div className="size-56 rounded-full bg-gradient-to-br from-primary/60 to-electric/40 blur-2xl md:size-72" />
    </div>
  )
}

const reducedMotionQuery = '(prefers-reduced-motion: reduce)'
function subscribe(cb: () => void) {
  const mql = window.matchMedia(reducedMotionQuery)
  mql.addEventListener('change', cb)
  return () => mql.removeEventListener('change', cb)
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  )
}

const buttonBase =
  'inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-16">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-8 px-5 py-12 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="order-2 lg:order-1">
          <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-electric" />
            </span>
            2+ years at TCS · Hyderabad
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90 md:text-xl">{profile.headline}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">{profile.intro}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Target roles">
            {profile.roles.map((role) => (
              <li key={role} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground">
                {role}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={cn(buttonBase, 'group bg-primary text-primary-foreground shadow-[0_0_30px_-5px] shadow-primary/60 hover:bg-primary/90')}
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href="#contact" className={cn(buttonBase, 'glass text-foreground hover:bg-white/10')}>
              <Mail className="size-4" aria-hidden="true" />
              Contact
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                download
                className={cn(buttonBase, 'border border-primary/50 bg-primary/10 text-foreground hover:bg-primary/20')}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            ) : (
              <span
                className={cn(buttonBase, 'cursor-not-allowed border border-dashed border-amber-400/50 text-amber-200')}
                aria-disabled="true"
                title="Placeholder: add resume PDF to /public and set resumeUrl"
              >
                <Download className="size-4" aria-hidden="true" />
                Resume [placeholder]
              </span>
            )}
          </div>
        </div>

        <div className="relative order-1 h-[300px] sm:h-[380px] lg:order-2 lg:h-[520px]">
          <HeroScene reducedMotion={reducedMotion} />
        </div>
      </div>
    </section>
  )
}
