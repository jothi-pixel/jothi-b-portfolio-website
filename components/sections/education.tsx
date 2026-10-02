import { GraduationCap, School } from 'lucide-react'
import { education } from '@/lib/data'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education">
      <ol className="grid gap-5 md:grid-cols-3">
        {education.map((ed, i) => {
          const Icon = i === 0 ? GraduationCap : School
          return (
            <Reveal
              key={ed.degree}
              as="li"
              delay={i * 0.07}
              className={`glass relative flex h-full flex-col rounded-xl p-6 transition-[border-color,translate] hover:-translate-y-1 hover:border-primary/40 ${
                i === 0 ? 'border-primary/30 bg-gradient-to-br from-primary/10 to-transparent' : ''
              }`}
            >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{ed.period}</span>
                </div>
                <h3 className="text-pretty font-semibold leading-snug">{ed.degree}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ed.school}</p>
                <p className="mt-auto pt-5">
                  <span className="inline-flex rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                    {ed.score}
                  </span>
                </p>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
