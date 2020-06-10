import React, { Component } from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import { name, authors } from '../site'
import Layout from '../components/layout'

class Index extends Component {

  render() {
    const { posts } = this.props
    return (
      <Layout title={name}>
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
                  <h1>
                    <Link {...post} passHref><a>{post.data.title}</a></Link>
                  </h1>
                  <p>
                    {author && `Written by ${author.name}`}
                    {author && source && ` ${String.fromCharCode(183)} `}
                    {source && `From ${source.name}`}
                  </p>
                </header>
                <Content {...post} excerpt />
              </article>
            )
          })}
        </section>
        <style jsx>{`
          header {
            margin-top: 32px;
            margin-bottom: 64px;
          }

          header h1 {
            font-size: 48px;
          }
  
          section {
            margin: 40px 0;
          }
          
          article {
            margin-bottom: 40px;
          }

          article header {
            margin-top: 16px;
            margin-bottom: 8px;
          }

          article header h1 {
            font-size: 32px;
            margin: 0;
          }

          article header h1 :global(a) {
            text-decoration: none;
          }
          
          article header p {
            line-height: calc(24/12);
            font-size: 12px;
            color: #444;
            margin: 0;
          }
        `}</style>
      </Layout>
    )
  }
}

export default withPosts(Index)
