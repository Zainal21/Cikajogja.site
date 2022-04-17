import { getPreviewPostBySlug } from './api'

export default async function preview(req, res) {
  if (
    req.query.secret !== process.env.COSMIC_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  const post = await getPreviewPostBySlug(req.query.slug)
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }
  res.setPreviewData({})
  res.writeHead(307, { Location: `/posts/${post.slug}` })
  res.end()
}