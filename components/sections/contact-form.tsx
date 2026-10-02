'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'

type Fields = { name: string; email: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v: Fields): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

const inputClass =
  'w-full rounded-lg border border-input bg-background/60 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'

export function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [opened, setOpened] = useState(false)

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-2xl p-6 md:p-8">
      {(['name', 'email'] as const).map((key) => (
        <div key={key}>
          <label htmlFor={`contact-${key}`} className="mb-1.5 block text-sm font-medium">
            {key === 'name' ? 'Name' : 'Email'}
          </label>
          <input
            id={`contact-${key}`}
            name={key}
            type={key === 'email' ? 'email' : 'text'}
            autoComplete={key === 'email' ? 'email' : 'name'}
            placeholder={key === 'email' ? 'you@company.com' : 'Your name'}
            value={values[key]}
            onChange={update(key)}
            aria-invalid={!!errors[key]}
            aria-describedby={errors[key] ? `contact-${key}-error` : undefined}
            className={cn(inputClass, errors[key] && 'border-destructive')}
          />
          {errors[key] && (
            <p id={`contact-${key}-error`} className="mt-1.5 text-xs text-destructive">
              {errors[key]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about the internship or role..."
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(inputClass, 'resize-y', errors.message && 'border-destructive')}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Send className="size-4" aria-hidden="true" />
        Send Message
      </button>

      <div aria-live="polite" className="text-xs leading-relaxed text-muted-foreground">
        {opened ? (
          <p className="flex gap-2 rounded-lg border border-primary/25 bg-primary/10 p-3 text-foreground/90">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              Your email app should now open with this message prefilled — just press send there. If nothing opened,
              email me directly at{' '}
              <a href={`mailto:${profile.email}`} className="font-medium text-primary underline-offset-2 hover:underline">
                {profile.email}
              </a>
              .
            </span>
          </p>
        ) : (
          <p>This form opens your email app with the message prefilled. No data is stored on this site.</p>
        )}
      </div>
    </form>
  )
}
