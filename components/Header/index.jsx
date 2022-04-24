import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLinks from "../Atoms/HeaderLink";
import BottomLinks from "../Atoms/BottomLinks";
import links from "../../data/links.json";
import Logo from "../../assets/logo.png";

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
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
              layout="fixed"
              className="header-logo"
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {links.map((item) => (
              <HeaderLinks name={item.name} link={item.url} key={item.id} />
            ))}
          </ul>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {links.map((item) => (
              <BottomLinks
                name={item.name}
                link={item.url}
                key={item.id}
                Children={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
