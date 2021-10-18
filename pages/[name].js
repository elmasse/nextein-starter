

import { getData, getPost }  from 'nextein/fetcher'

import Content from 'nextein/content'

import site from '../site'
import Layout from '../components/layout'

export async function getStaticPaths () {
  const data = await getData()
  return {
    paths: data.map(({ name, __id }) => ({ params: { name, __id } })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = await getPost(params)  
  return { props: { post } }
}

export default function Post ({ post }) {
  const author = site.authors[post.data.author]
  const source = site.authors[post.data.source]
  return (
    <Layout title={`${site.name} - ${post.data.title}`} showNav>
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
}

