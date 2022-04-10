import Link from 'next/link'

export default function HeaderLinks({link,name}) {
   return (
      <li className="relative group">
         <Link passHref href={link}>
            <a
               className="
                  ud-menu-scroll
                  text-base text-dark
                  lg:text-gray-800
                  lg:group-hover:opacity-70
                  lg:group-hover:text-gray-800
                  group-hover:text-primary
                  py-2
                  lg:py-6 lg:inline-flex lg:px-0
                  flex
                  mx-8
                  lg:mr-0 lg:ml-7
                  xl:ml-12
                  ">
               {name}
            </a>
         </Link>
      </li>
   )
}