import Cosmic from 'cosmicjs'

const BUCKET_SLUG = "#"
const READ_KEY = "#"

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

const is404 = (error) => /not found/i.test(error.message)

export async function getPreviewPostBySlug(slug) {
  const params = {
    slug,
    props: 'slug',
    status: 'all',
  }

  try {
    const data = await bucket.getObject(params)
    return data.object
  } catch (error) {
    if (is404(error)) return
    throw error
  }
}

export async function getAllPostsWithSlug() {
  const params = {
    type: 'posts',
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllPosts(preview) {
  const data = await bucket.getObjects({
    props: 'slug,title,content,metadata',
    limit: 20
  })
  return data.objects
}

export async function getPostAndMorePosts(slug, preview) {
  const singleObjectParams = {
    slug,
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'all' }),
  }
  const moreObjectParams = {
    type: 'posts',
    limit: 3,
    props: 'title,slug,metadata,created_at',
    ...(preview && { status: 'all' }),
  }
  const object = await bucket.getObject(singleObjectParams).catch((error) => {
    if (is404(error)) return
    throw error
  })
  const moreObjects = await bucket.getObjects(moreObjectParams)
  const morePosts = moreObjects.objects
    ?.filter(({ slug: object_slug }) => object_slug !== slug)
    .slice(0, 2)

  return {
    post: object?.object,
    morePosts,
  }
}