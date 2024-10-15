import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/" className="btn" >Home</Link>
    </section>
  )
}
