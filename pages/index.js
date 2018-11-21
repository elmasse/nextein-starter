import React, { Component } from 'react'
import Head from 'next/head'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'


const dashes = (str) => (str.toLowerCase().replace(' ', '-'))

class Index extends Component {

  render() {
    const { posts } = this.props
    return (
      <main>
        <Head>
          <title>Nextein Starter</title>
        </Head>
        <header>
          <h1 className="brand">Nextein</h1>
          <p className="welcome">Welcome to your Nextein Blog Site!</p>
        </header>
        <section>
          {
            posts.map(post => (
              <article key={`post-${dashes(post.data.title)}`}>
                <header>
                  <h2><Link {...post}><a>{post.data.title}</a></Link></h2>
                </header>
                <Content {...post} />
              </article>
            ))
          }
        </section>
      </main>
    )
  }
}

export default withPosts(Index)
