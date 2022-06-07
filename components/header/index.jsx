import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLinks from "../elements/header-links";
import BottomLinks from "../elements/bottom-links";
import Logo from "../../assets/logo.png";
import { HiHome, HiGlobe, HiBookOpen } from "react-icons/hi";

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const links = [
    {
      name: "Home",
      url: "/",
      icon: <HiHome />,
    },
    {
      name: "Projects",
      url: "/projects",
      icon: <HiGlobe />,
    },
    {
      name: " Blogs",
      url: "/blogs",
      icon: <HiBookOpen />,
    },
  ];

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src={Logo}
              alt="logo"
              width={70}
              height={55}
              className="header-logo"
              priority
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {links.map((item, index) => (
              <HeaderLinks name={item.name} link={item.url} key={index} />
            ))}
          </ul>
        </nav>
      </header>
      <nav className="fixed lg:hidden bg-white shadow  py-5 bottom-0  left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {links.map((item, index) => (
              <BottomLinks
                name={item.name}
                link={item.url}
                icon={item.icon}
                key={index}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
