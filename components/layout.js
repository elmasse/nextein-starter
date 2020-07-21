import React from 'react'
import Head from 'next/head'
import Link from 'nextein/link'

import { name } from '../site';

export default function Layout({ title, showNav = false, children }) {
  return (
    <div className="root">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
      </Head>
      <main>
        {showNav && (<nav><Link href="/" passHref><a>{name}</a></Link></nav>)}
        {children}
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} - Built with ♥︎ and
          {` `}
          <a href="https://nextein.elmasse.io">Nextein</a>
        </p>
      </footer>
      <style jsx>{`
        .root {
          margin: 0 auto;
          padding: 8px;
          max-width: 672px;
        }

        nav :global(a) {
          text-decoration: none;
        }

        main {
          display: flex;
          flex-direction: column;
        }

        footer {
          padding-top: 64px;
        }
      `}</style>
  </div>
  )
}