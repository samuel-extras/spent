"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import LogoSVGComponent from "./SVG/Logo";
import { Popover, Transition } from "@headlessui/react";
import { Modal } from "./Modal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  return (
    <nav className="w-full sm:shadow-md py-3  px-6 sm:px-8 xl:px-28 sm:bg-white">
      <div className="w-full max-w-[90rem] mx-auto flex justify-between items-center overflow-hidden">
        {/* <Image
        alt="logo"
        src="/logo.png"
        width={120}
        height={35}
        className="h-6 md:h-10 w-auto "
      /> */}

        <Link href="/" className="flex-1">
          <LogoSVGComponent />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block w-fit lg:hidden cursor-pointer"
              >
                <path
                  d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                  fill="black"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle className="hidden">spent digital lab</SheetTitle>
              <Link href="/" className="flex-1">
                <LogoSVGComponent />
              </Link>{" "}
            </SheetHeader>
            <ul className="py-10 space-y-6">
              <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Collapsible>
                  <CollapsibleTrigger className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                    Services
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className=" max-w-xs flex-auto overflow-hidden bg-[#027708] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 grid py-5 px-8 gap-y-7 gap-x-3">
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
                  </CollapsibleContent>
                </Collapsible>
              </li>
              <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                <Modal />
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        <NavigationMenu>
          <NavigationMenuList className="lg:flex gap-4 items-center hidden ">
            <NavigationMenuItem className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
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
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-black text-lg xl:text-xl font-normal font-montserrat leading-7 whitespace-nowrap">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <div className="pl-3">
              <Modal />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Header;
