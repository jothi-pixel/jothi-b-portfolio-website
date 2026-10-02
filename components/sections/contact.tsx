import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '../brand-icons'
import { Reveal } from '../reveal'
import { Section } from '../section'
import { ContactForm } from './contact-form'

const items = [
  { label: 'Location', value: profile.location, Icon: MapPin, href: null },
  { label: 'Email', value: profile.email, Icon: Mail, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, Icon: Phone, href: profile.phoneHref },
  { label: 'GitHub', value: `github.com/${profile.githubHandle}`, Icon: GithubIcon, href: profile.github },
  { label: 'LinkedIn', value: `in/${profile.linkedinHandle}`, Icon: LinkedinIcon, href: profile.linkedin },
]

export function Contact() {
  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title="Let's Build Something Together"
      description="I am currently looking for internship and placement opportunities where I can apply my technical skills, learn from experienced professionals, and contribute to real-world projects."
      className="bg-secondary/30"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <Reveal>
          <ul className="space-y-3">
            {items.map(({ label, value, Icon, href }) => {
              const external = href?.startsWith('http')
              const content = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="glass flex items-center gap-4 rounded-xl p-4 transition-all hover:translate-x-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 rounded-xl p-4">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
