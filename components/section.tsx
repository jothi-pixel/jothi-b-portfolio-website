import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string
  index: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('relative py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span>{index}</span>
            <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
            <span>{eyebrow}</span>
          </p>
          <h2 id={`${id}-title`} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
