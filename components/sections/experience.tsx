import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { experiences } from '@/lib/data'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Experience() {
  return (
    <Section id="experience" index="04" eyebrow="Experience" title="Internship Experience" className="bg-secondary/30">
      <ol className="relative ml-1 space-y-10 border-l border-border pl-8 md:ml-4 md:pl-12">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative">
            <span
              className="absolute -left-[49px] top-1 flex size-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary md:-left-[65px]"
              aria-hidden="true"
            >
              <Briefcase className="size-4" />
            </span>
            <Reveal delay={i * 0.08}>
              <article className="glass rounded-xl p-6 transition-all hover:border-primary/40 md:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="font-medium text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1">
                      <CalendarDays className="size-3.5" aria-hidden="true" />
                      {exp.duration}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
