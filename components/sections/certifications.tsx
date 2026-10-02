import { BadgeCheck, Code2, PenTool, Users } from 'lucide-react'
import { certifications } from '@/lib/data'
import { Reveal } from '../reveal'
import { Section } from '../section'

const icons = { hackathon: Users, web: Code2, uiux: PenTool } as const

export function Certifications() {
  return (
    <Section id="certifications" index="06" eyebrow="Certifications" title="Certifications" className="bg-secondary/30">
      <ul className="grid gap-5 md:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = icons[cert.key]
          return (
            <Reveal
              key={cert.key}
              as="li"
              delay={i * 0.07}
              className="glass group relative h-full overflow-hidden rounded-xl p-6 transition-[border-color,translate] hover:-translate-y-1 hover:border-primary/40"
            >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full border border-dashed border-primary/20"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <BadgeCheck className="size-5 text-primary/70" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 to-transparent" aria-hidden="true" />
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
