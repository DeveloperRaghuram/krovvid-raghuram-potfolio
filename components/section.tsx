import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Placeholder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-dashed border-amber-400/50 bg-amber-400/10 px-2 py-0.5 font-mono text-xs text-amber-200',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function isPlaceholder(text: string) {
  return text.startsWith('[') && text.endsWith(']')
}
