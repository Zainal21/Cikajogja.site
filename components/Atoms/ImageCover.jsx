
import cn from 'classnames'
import Link from 'next/link'
import Imgix from 'react-imgix'

export default function imageCover({ title, url, slug }) {

  return (
    <div className="sm:mx-0">
      {/* {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{title}</a>
        </Link>
      ) : ( */}
        <Imgix
          src={url}
          alt={`Cover Image for ${title}`}
          className={cn('lazyload shadow-small w-full', {
            'hover:shadow-medium transition-shadow duration-200': slug,
          })}
          sizes="100vw"
          attributeConfig={{
            src: 'data-src',
            srcSet: 'data-srcset',
            sizes: 'data-sizes',
          }}
          htmlAttributes={{
            src: `${url}?auto=format,compress&q=1&w=auto`,
          }}
        />
      {/* )} */}
    </div>
  )
}