import { CalendarDays, ChartNoAxesColumn, GraduationCap, MapPin } from 'lucide-react'
import { about, profile } from '@/lib/data'
import { Reveal } from '../reveal'
import { Section } from '../section'

const facts = [
  { label: 'Education', value: 'BE Computer Science & Engineering', Icon: GraduationCap },
  { label: 'Graduation', value: '2027', Icon: CalendarDays },
  { label: 'CGPA', value: '8.37', Icon: ChartNoAxesColumn },
  { label: 'Location', value: profile.location, Icon: MapPin },
]

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-foreground/85">{about}</p>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {facts.map(({ label, value, Icon }, i) => (
            <Reveal
              key={label}
              as="li"
              delay={i * 0.06}
              className="glass group h-full rounded-xl p-5 transition-[border-color,translate] hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
              <p className="mt-1 font-semibold leading-snug">{value}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
