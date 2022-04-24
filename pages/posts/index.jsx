import Container from '../../components/Atoms/Container'
import PostSection from '../../components/Content/Blogs/PostSection'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'

export default function Blogs({ allPosts }) {
  const posts = allPosts
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blogs | Cikajogja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 ">
        <Container>
            {posts && (
              posts.map(item => ((
                <PostSection
                title={item.title}
                thumbnail={item.metadata.cover_image}
                date={item.created_at}
                author={item.metadata.authors}
                AvatarImage={item.metadata.avatar}
                slug={item.slug}
                excerpt={item.metadata.excerpt}
              />
              )))
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
  const allPosts = (await getAllPosts(preview)) || []
  console.log(allPosts);
  return {
    props: { allPosts },
  }
}