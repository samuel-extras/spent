import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoSVGComponent from "./SVG/Logo";

const Header = () => {
  return (
    <nav className="w-full shadow-md py-3  px-6 sm:px-8 xl:px-28 bg-white">
      <div className="w-full max-w-[90rem] mx-auto flex justify-between items-center">
        {/* <Image
        alt="logo"
        src="/logo.png"
        width={120}
        height={35}
        className="h-6 md:h-10 w-auto "
      /> */}
        <LogoSVGComponent />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block lg:hidden cursor-pointer"
        >
          <path
            d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
            fill="black"
          />
        </svg>

        <ul className="lg:flex gap-10 items-center hidden ">
          <li className="text-black text-xl font-normal font-montserrat leading-7">
            <Link href="/">About us</Link>
          </li>
          <li className="text-black text-xl font-normal font-montserrat leading-7">
            <Link href="/">Services </Link>
          </li>
          <li className="text-black text-xl font-normal font-montserrat leading-7">
            <Link href="/">Portfolio </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" px-[35px] py-4 rounded-[14px] border border-zinc-900 justify-start items-start inline-flex text-center text-black text-xl font-normal font-montserrat leading-7"
            >
              Request a quote{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
