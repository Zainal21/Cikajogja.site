import links from '../../data/links.json'
import HeaderLinks from '../Atoms/HeaderLink'
export default function Header() {
   return (
      <div
        className="
          ud-header
          bg-transparent
          absolute
          top-0
          left-0
          z-40
          w-full
          flex
          items-center
        ">
        <div className="container mx-auto">
          <div className="flex mx-4 items-center justify-between relative">
            <div className="px-4 w-60 max-w-full">
              <a href="index.html" className="navbar-logo w-full block py-5">
                <img
                  src="logo.png"
                  alt="logo"
                  width={80}
                  className="header-logo"
                />
              </a>
            </div>
            <div className="flex px-4 justify-between items-end ml-auto">
              <div>
                <button
                  id="navbarToggler"
                  className="
                    block
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    lg:hidden
                    focus:ring-2
                    ring-primary
                    px-3
                    py-[6px]
                    rounded-lg
                  ">
                  <span
                    className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                  <span
                    className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                  <span
                    className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="
                    absolute
                    py-5
                    lg:py-0 lg:px-4
                    xl:px-6
                    bg-white
                    lg:bg-transparent
                    shadow-lg
                    rounded-lg
                    max-w-[250px]
                    w-full
                    lg:max-w-full lg:w-full
                    right-4
                    top-full
                    hidden
                    lg:block lg:static lg:shadow-none
                    text-left
                  ">
                  <ul className="blcok lg:flex">
                     {
                        links.map((item) => (
                           <HeaderLinks
                           name={item.name}
                           link={item.url}
                           key={item.id}/>
                        ))
                     }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
   )
}