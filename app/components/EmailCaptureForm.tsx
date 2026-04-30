'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-8 md:mt-10">
        <p className="text-sm tracking-[0.2em] uppercase text-ink">You&rsquo;re in.</p>
        <p className="text-xs text-muted mt-2 tracking-wide">
          Check your inbox for your 15% off code.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8 md:mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center"
        aria-label="Email signup for 15% off"
      >
        <input
          type="email"
          placeholder="Your email address"
          required
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="border border-line bg-cream px-5 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-ink transition-colors duration-200 w-full sm:w-64 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-ink text-cream text-xs tracking-[0.25em] uppercase px-7 py-3 hover:opacity-75 transition-opacity duration-200 whitespace-nowrap disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Unlock 15%'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-muted mt-3 tracking-wide">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}
