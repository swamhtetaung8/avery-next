import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navScroll, setNavScroll] = useState("bg-transparent text-white");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90) {
        setNavScroll("bg-slate-200 text-black shadow-md");
      } else {
        setNavScroll("bg-transparent text-white");
      }
    });
  }, []);

  return (
    <nav
      className={` flex items-center py-5 justify-between md:px-20 lg:px-40 px-10 fixed top-0 left-0 z-50 w-full transition-all duration-500 ${navScroll}`}>
      <Link href="/">
        <h1 className=" text-2xl">Avery</h1>
      </Link>
      <ul className=" md:flex gap-8 hidden ">
        <li>
          <Link href="/" className="nav-links">
            Home
          </Link>
        </li>

        <li>
          <Link href="/work" className="nav-links">
            Work
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-links">
            Contact
          </Link>
        </li>
      </ul>
      {menu ? (
        <VscClose
          size={25}
          className="block md:hidden relative z-30 cursor-pointer text-white"
          onClick={() => setMenu(!menu)}
        />
      ) : (
        <CiMenuFries
          size={25}
          className="block md:hidden relative z-30 cursor-pointer"
          onClick={() => setMenu(!menu)}
        />
      )}
      <ul
        className={`flex flex-col text-white gap-20 h-screen absolute top-0 bg-black w-full z-20
      justify-center items-center ease-in md:hidden transition-all duration-[0.3s] ${
        menu ? "right-0" : "right-[-100vw]"
      }`}>
        <li>
          <Link href="/" className="nav-links" onClick={() => setMenu(!menu)}>
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/work"
            className="nav-links"
            onClick={() => setMenu(!menu)}>
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="nav-links"
            onClick={() => setMenu(!menu)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
