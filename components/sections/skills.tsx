import { Code2, GitBranch, Globe, Network, Sparkles, Terminal } from 'lucide-react'
import { skillGroups, softSkills } from '@/lib/data'
import { Reveal } from '../reveal'
import { Section } from '../section'

const icons = {
  languages: Code2,
  web: Globe,
  vcs: GitBranch,
  os: Terminal,
  network: Network,
} as const

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="Technical Skills"
      description="Fresher-level skills built through coursework, internships, and personal projects — and still growing every semester."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.key]
          return (
            <Reveal
              key={group.key}
              as="li"
              delay={i * 0.05}
              className="glass group h-full rounded-xl p-6 transition-[border-color,translate] hover:-translate-y-1 hover:border-primary/40"
            >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-secondary/70 px-2.5 py-1 font-mono text-xs text-foreground/90 transition-colors group-hover:border-primary/25"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
            </Reveal>
          )
        })}

        <Reveal
          as="li"
          delay={0.25}
          className="h-full rounded-xl border border-primary/25 bg-gradient-to-br from-primary/10 to-transparent p-6 sm:col-span-2 lg:col-span-1"
        >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold">Interpersonal Skills</h3>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="Interpersonal skills">
              {softSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-primary/25 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                >
                  {s}
                </li>
              ))}
            </ul>
        </Reveal>
      </ul>
    </Section>
  )
}
