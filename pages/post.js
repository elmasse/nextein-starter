import React from 'react'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'
import Link from 'nextein/link'

import { name, authors } from '../site';

export default withPost(({ post }) => {
  const author = authors[post.data.author]
  const source = authors[post.data.source]
  return (
    <main>
      <Head>
        <title>{name} | {post.data.title}</title>
      </Head>
      <header>
        <nav><Link href="/"><a>{name}</a></Link></nav>
        <h1>{post.data.title}</h1>
        <p>
          {author && `Written by ${author.name}`}
          {author && source && ` ${String.fromCharCode(183)} `}
          {source && `From ${source.name}`}
        </p>
      </header>
      <section>
        <Content {...post} />
        <style jsx>{`
          section { background: #fefefe; }
        `}</style>
      </section>
    </main>
  )
})

