import React from 'react'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => (
  <main>
    <Head>
      <link type="text/css" rel="stylesheet" href="/static/stylesheet.css" />
    </Head>
    <header>
      <h1>{post.data.title}</h1>
    </header>
    <section>
      <Content {...post} />
    </section>
  </main>
))

