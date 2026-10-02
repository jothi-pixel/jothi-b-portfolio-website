import { Medal, Trophy } from 'lucide-react'
import { achievement } from '@/lib/data'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Achievements() {
  return (
    <Section id="achievements" index="07" eyebrow="Achievements" title="Achievements">
      <Reveal>
        <article className="relative overflow-hidden rounded-2xl border border-highlight/30 bg-gradient-to-br from-highlight/15 via-card/60 to-card/60 p-8 backdrop-blur-md md:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-highlight)_0%,transparent_55%)] opacity-15"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl bg-highlight text-highlight-foreground shadow-lg shadow-highlight/25 md:size-24">
              <Trophy className="size-10 md:size-12" aria-hidden="true" />
              <span className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-full border-2 border-background bg-foreground font-mono text-xs font-bold text-background">
                1st
              </span>
            </div>
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-highlight">
                <Medal className="size-4" aria-hidden="true" />
                Inter-college sports
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{achievement.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{achievement.description}</p>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
