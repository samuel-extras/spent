import Image from "next/image";
import React, { ReactNode } from "react";
import Card from "./Card";
import image from "../../public/basketball.png";
import uefa from "../../public/uefa.png";
import ryan from "../../public/ryan.png";
import planet from "../../public/planet.png";
import girl from "../../public/girl.png";
import nigga from "../../public/nigga.png";
import Link from "next/link";

export interface MoreProps {
  heading: string;
  card: MoreCardProps[];
}
interface MoreCardProps {
  heading: string;
  description: string;
  svg: ReactNode;
}

const More = ({ heading, card }: MoreProps) => {
  return (
    <div className="bg-neutral-50">
      <div className="relative h-fit ">
        <div className="bg-[#027808] py-6 w-full md:w-3/4">
          <h3 className="text-[#027808] text-4xl font-bold font-inter leading-7 max-w-[90rem] mx-auto px-6">
            {heading}
          </h3>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 max-w-[90rem] mx-auto px-6 lg:px-20 ">
          <h3 className="text-white text-4xl font-bold font-inter leading-7">
            {heading}
          </h3>
        </div>
      </div>
      <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit">
        <div className="grid  sm:grid-cols-2  md:grid-cols-3 gap-x-10 gap-y-20 py-4 ">
          {card.map((x) => (
            <div key={x.heading} className="space-y-8 ">
              <div className="flex gap-4">
                {x.svg}
                <h3 className="text-green-800 text-xl font-bold font-inter max-w-[24ch]">
                  {x.heading}
                </h3>
              </div>
              <p className="text-black text-opacity-60 text-[17px] font-normal font-inter">
                {x.description}
              </p>
              <Link
                href={"/"}
                className="bg-[#027808] rounded-[11px] p-3 gap-4 flex justify-center"
              >
                <p className="text-white text-xl font-bold font-inter">
                  VIEW EXAMPLES
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default More;
