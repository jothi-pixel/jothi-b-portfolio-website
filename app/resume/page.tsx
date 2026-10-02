import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { PrintButton } from '@/components/print-button'
import {
  achievement,
  certifications,
  education,
  experiences,
  profile,
  project,
  skillGroups,
  softSkills,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Resume | Jothi B',
  description: 'Resume of Jothi B, Computer Science and Engineering student graduating in 2027.',
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-border pb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary print:text-black">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-secondary/40 px-4 py-8 print:bg-white print:p-0">
      <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </a>
        <PrintButton />
      </div>

      <main className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 shadow-sm md:p-12 print:max-w-none print:rounded-none print:border-0 print:p-0 print:text-black print:shadow-none">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-foreground/80 print:text-black">{profile.title}</p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground print:text-black">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground print:text-black">
            <a href={profile.github}>github.com/{profile.githubHandle}</a>
            <span aria-hidden="true">·</span>
            <a href={profile.linkedin}>linkedin.com/in/{profile.linkedinHandle}</a>
          </p>
        </header>

        <section className="mb-7">
          <Heading>Summary</Heading>
          <p className="text-sm leading-relaxed">{profile.summary}</p>
        </section>

        <section className="mb-7">
          <Heading>Education</Heading>
          <ul className="space-y-3">
            {education.map((ed) => (
              <li key={ed.degree} className="text-sm">
                <div className="flex flex-wrap justify-between gap-x-4">
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="text-muted-foreground print:text-black">{ed.period}</p>
                </div>
                <p className="text-muted-foreground print:text-black">
                  {ed.school} · {ed.score}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-7">
          <Heading>Technical Skills</Heading>
          <dl className="grid gap-1.5 text-sm sm:grid-cols-[180px_1fr]">
            {skillGroups.map((g) => (
              <div key={g.key} className="contents">
                <dt className="font-medium">{g.title}</dt>
                <dd className="text-foreground/85 print:text-black">{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-7">
          <Heading>Experience</Heading>
          <ul className="space-y-4">
            {experiences.map((exp) => (
              <li key={exp.company} className="text-sm">
                <div className="flex flex-wrap justify-between gap-x-4">
                  <p className="font-semibold">
                    {exp.role} — {exp.company}
                  </p>
                  <p className="text-muted-foreground print:text-black">
                    {exp.duration}
                    {exp.location ? ` · ${exp.location}` : ''}
                  </p>
                </div>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-foreground/85 print:text-black">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-7">
          <Heading>Project</Heading>
          <div className="text-sm">
            <div className="flex flex-wrap justify-between gap-x-4">
              <p className="font-semibold">
                {project.name} — {project.tagline}
              </p>
              <p className="text-muted-foreground print:text-black">{project.tech.join(', ')}</p>
            </div>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-foreground/85 print:text-black">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mt-1.5 text-muted-foreground print:text-black">
              Live: <a href={project.live}>agriverseai.vercel.app</a> · Code:{' '}
              <a href={project.repo}>github.com/jothi-pixel/AgriVerseAI</a>
            </p>
          </div>
        </section>

        <section className="mb-7">
          <Heading>Certifications</Heading>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {certifications.map((c) => (
              <li key={c.key}>
                <span className="font-medium">{c.title}</span> — {c.issuer}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-7">
          <Heading>Achievements</Heading>
          <p className="text-sm">
            <span className="font-medium">{achievement.title}</span> — {achievement.description}
          </p>
        </section>

        <section>
          <Heading>Interpersonal Skills</Heading>
          <p className="text-sm">{softSkills.join(' · ')}</p>
        </section>
      </main>
    </div>
  )
}
