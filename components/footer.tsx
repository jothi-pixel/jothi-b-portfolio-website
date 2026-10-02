import { Mail } from 'lucide-react'
import { profile } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const links = [
  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <p>© 2026 Jothi B. All rights reserved.</p>
          <p className="mt-1 font-mono text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
        <ul className="flex items-center gap-2" aria-label="Footer social links">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
