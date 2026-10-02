'use client'

import { motion } from 'framer-motion'
import { Coffee, GitBranch, Terminal } from 'lucide-react'

type Token = { t: string; c?: 'kw' | 'str' | 'num' | 'fn' | 'cm' | 'var' }

const lines: Token[][] = [
  [{ t: '# about_me.py', c: 'cm' }],
  [],
  [{ t: 'class ', c: 'kw' }, { t: 'Student', c: 'fn' }, { t: ':' }],
  [{ t: '    name ', c: 'var' }, { t: '= ' }, { t: '"Jothi B"', c: 'str' }],
  [{ t: '    degree ', c: 'var' }, { t: '= ' }, { t: '"B.E. CSE"', c: 'str' }],
  [{ t: '    graduating ', c: 'var' }, { t: '= ' }, { t: '2027', c: 'num' }],
  [{ t: '    cgpa ', c: 'var' }, { t: '= ' }, { t: '8.37', c: 'num' }],
  [{ t: '    languages ', c: 'var' }, { t: '= [' }, { t: '"Python"', c: 'str' }, { t: ', ' }, { t: '"Java"', c: 'str' }, { t: ']' }],
  [{ t: '    tools ', c: 'var' }, { t: '= [' }, { t: '"Git"', c: 'str' }, { t: ', ' }, { t: '"Linux"', c: 'str' }, { t: ']' }],
  [],
  [{ t: '    def ', c: 'kw' }, { t: 'status', c: 'fn' }, { t: '(self):' }],
  [{ t: '        return ', c: 'kw' }, { t: '"Open to internships"', c: 'str' }],
]

const color: Record<NonNullable<Token['c']>, string> = {
  kw: 'text-[oklch(0.72_0.14_300)]',
  str: 'text-[oklch(0.78_0.13_150)]',
  num: 'text-highlight',
  fn: 'text-primary',
  cm: 'text-muted-foreground/70 italic',
  var: 'text-foreground',
}

export function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-primary/5 to-highlight/15 blur-3xl"
        aria-hidden="true"
      />
      <motion.figure
        initial={{ opacity: 0, y: 24, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/20"
        aria-label="Code editor showing a Python class describing Jothi B"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-3 rounded-full bg-[oklch(0.68_0.18_25)]" aria-hidden="true" />
          <span className="size-3 rounded-full bg-highlight" aria-hidden="true" />
          <span className="size-3 rounded-full bg-[oklch(0.72_0.15_150)]" aria-hidden="true" />
          <span className="ml-3 rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
            about_me.py
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
          <code>
            {lines.map((line, i) => (
              <span key={i} className="block">
                <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/40">{i + 1}</span>
                {line.map((tok, j) => (
                  <span key={j} className={tok.c ? color[tok.c] : 'text-muted-foreground'}>
                    {tok.t}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
        <div className="flex items-center gap-2 border-t border-border bg-secondary/50 px-4 py-2.5 font-mono text-xs text-muted-foreground">
          <Terminal className="size-3.5 text-primary" aria-hidden="true" />
          <span className="text-primary">$</span> python about_me.py
          <span className="ml-auto inline-block h-3.5 w-1.5 animate-pulse bg-primary" aria-hidden="true" />
        </div>
      </motion.figure>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl px-3 py-2 text-xs shadow-lg sm:flex"
        aria-hidden="true"
      >
        <Coffee className="size-4 text-highlight" />
        <span className="font-medium">Java</span>
        <span className="text-muted-foreground">+ Python</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="glass absolute -right-3 -top-4 hidden items-center gap-2 rounded-xl px-3 py-2 text-xs shadow-lg sm:flex"
        aria-hidden="true"
      >
        <GitBranch className="size-4 text-primary" />
        <span className="font-medium">main</span>
        <span className="text-muted-foreground">github.com/jothi-pixel</span>
      </motion.div>
    </div>
  )
}
