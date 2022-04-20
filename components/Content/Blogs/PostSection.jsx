
import Avatar from '../Atoms/AvatarPost'
import Date from '../Atoms/DatePost'
import CoverImage from '../Atoms/ImageCover'
import Link from 'next/link'

export default function PostSection({
  title,
  thumbnail,
  date,
  excerpt,
  author,
  slug,
  AvatarImage
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} url={thumbnail.imgix_url} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            {/* <Date dateString={date} /> */}
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar
            name={author}
            picture={AvatarImage.url}
          />
        </div>
      </div>
    </section>
  )
}