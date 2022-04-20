import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/Atoms/Container'
import PostHeader from '../../components/Atoms/PostHeader'
import PostTitle from '../../components/Atoms/PostTitle'
import PostBody from '../../components/Atoms/PostBody'
import markdownToHtml from '../../lib/markdownToHtml'
import { getAllPostsWithSlug } from '../../lib/api'

export default function Posts({ post, preview }) {
   const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
   <h1>Hellow</h1>
  )
}

export async function getStaticPaths() {
   const allPosts = (await getAllPostsWithSlug()) || []
   return {
     paths: allPosts.map((post) => `/posts/${post.slug}`),
     fallback: true,
   }
}  

