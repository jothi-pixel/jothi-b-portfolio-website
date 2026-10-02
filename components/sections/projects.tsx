import Image from 'next/image'
import { ArrowUpRight, CheckCircle2, Leaf } from 'lucide-react'
import { project } from '@/lib/data'
import { GithubIcon } from '../brand-icons'
import { Reveal } from '../reveal'
import { Section } from '../section'

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Featured Project"
      description="A practical project applying Python and machine learning to real-world agricultural decisions."
    >
      <Reveal>
        <article className="glass group overflow-hidden rounded-2xl transition-all hover:border-primary/40">
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-full">
              <Image
                src="/images/agriverse.png"
                alt="Illustration of a crop field with an AI data overlay showing soil moisture and nutrient readings"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/30" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Leaf className="size-3.5 text-[oklch(0.82_0.15_150)]" aria-hidden="true" />
                Agriculture + AI
              </span>
            </div>

            <div className="flex flex-col p-6 md:p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{project.tagline}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{project.name}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                    {t}
                  </li>
                ))}
              </ul>

              <h4 className="mt-7 text-sm font-semibold">Highlights</h4>
              <ul className="mt-3 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3 pt-2 lg:mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  View Project
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
