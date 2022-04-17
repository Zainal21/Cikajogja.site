import Container from '../components/Atoms/Container'
import PostSection from '../components/Content/PostSection'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Blogs({ allPosts }) {
  const posts = allPosts[0]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home | Cikajogja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
        <Container>
            {posts && (
              <PostSection
                title={posts.title}
                coverImage={posts.metadata.cover_image}
                date={posts.created_at}
                author={posts.metadata.author}
                slug={posts.slug}
                excerpt={posts.metadata.excerpt}
              />
            )}
          </Container>
          <h1 className="text-3xl font-bold">
          Cooming Soon {' '}
            <a className="text-red-600" href="https://nextjs.org">
               New Latest Blog 
            </a>
          </h1>
      </main>
    </div>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}