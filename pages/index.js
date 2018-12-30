import React, { Component } from 'react'
import Head from 'next/head'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import { name, authors } from '../site';

class Index extends Component {

  render() {
    const { posts } = this.props
    return (
      <main>
        <Head>
          <title>{name}</title>
        </Head>
        <header>
          <h1>{name}</h1>
        </header>
        <section>
          {posts.map(post => {
            const author = authors[post.data.author]
            const source = authors[post.data.source]
            return (
              <article key={post.data.url}>
                <header>
                  <h2><Link {...post}><a>{post.data.title}</a></Link></h2>
                  <p>
                  {author && `Written by ${author.name}`}
                  {author && source && ` ${String.fromCharCode(183)} `}
                  {source && `From ${source.name}`}
                  </p>
                </header>
                <Content {...post} excerpt/>
              </article>
            )
          })}
        </section>
      </main>
    )
  }
}

export default withPosts(Index)
