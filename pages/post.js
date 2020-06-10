import React from 'react'
import withPost, { Content } from 'nextein/post'

import { name, authors } from '../site';
import Layout from '../components/layout'

export default withPost(({ post }) => {
  const author = authors[post.data.author]
  const source = authors[post.data.source]
  return (
    <Layout title={`${name} - ${post.data.title}`} showNav>
      <header>
        <h1>{post.data.title}</h1>
        <p>
          {author && `Written by ${author.name}`}
          {author && source && ` ${String.fromCharCode(183)} `}
          {source && `From ${source.name}`}
        </p>
      </header>
      <section>
        <Content {...post} />
      </section>
      <style jsx>{`
        header {
          margin: 64px 0;
        }

        header h1 {
          font-size: 48px;
        }

      `}</style>
    </Layout>
  )
})

