import React from 'react'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => (
  <main>
    <Head>
      <title>Nextein Starter | {post.data.title}</title>
    </Head>
    <header>
      <h1>{post.data.title}</h1>
    </header>
    <section>
      <Content {...post} />
    </section>
  </main>
))

