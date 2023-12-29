"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import LogoSVGComponent from "./SVG/Logo";
import { Popover, Transition } from "@headlessui/react";
import { Modal } from "./Modal";

const Header = () => {
  return (
    <nav className="w-full sm:shadow-md py-3  px-6 sm:px-8 xl:px-28 sm:bg-white">
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
          <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7">
            <Link href="/about">About us</Link>
          </li>

          <li>
            <Popover className="relative">
              <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7">
                  Services
                </span>{" "}
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-2xl flex-auto overflow-hidden bg-[#027708] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 grid grid-cols-3 py-5 px-8 gap-y-7 gap-x-3">
                    <Link
                      href="/services/content-creation"
                      className="text-white text-[15px] font-semibold font-poppins leading-7"
                    >
                      Content Creation{" "}
                    </Link>
                    <Link
                      href="/services/academy"
                      className="text-white text-[15px] font-semibold font-poppins leading-7"
                    >
                      Academy{" "}
                    </Link>
                    <Link
                      href="/services/blockchain-development"
                      className="text-white text-[15px] font-semibold font-poppins leading-7"
                    >
                      Blockchain Services{" "}
                    </Link>
                    <Link
                      href="/services/media-and-marketing"
                      className="text-white text-[15px] font-semibold font-poppins leading-7"
                    >
                      Media & Marketing{" "}
                    </Link>
                    <Link
                      href="/services/crypto-marketing-and-pr"
                      className="text-white text-[15px] font-semibold font-poppins leading-7"
                    >
                      Crypto Marketing & PR{" "}
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="text-white text-[15px] font-semibold font-poppins leading-7"
                    >
                      Web Development{" "}
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </li>
          <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7">
            <Link href="/portfolio">Portfolio </Link>
          </li>
          <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7">
            <Link href="/contact-us">Contact Us </Link>
          </li>
          <li>
            <Modal />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
