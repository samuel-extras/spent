import Image from "next/image";
import React from "react";
import Card from "./Card";
import image from "../../public/basketball.png";
import uefa from "../../public/uefa.png";
import ryan from "../../public/ryan.png";
import planet from "../../public/planet.png";
import girl from "../../public/girl.png";
import nigga from "../../public/nigga.png";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="bg-neutral-50">
      {/* <div className="relative h-fit ">
        <div className="bg-[#027808] py-6 w-full md:w-3/4">
          <h3 className="text-[#027808] text-4xl font-bold font-inter leading-7 max-w-[90rem] mx-auto px-6">
            CHECKOUT OUR PORTFOLIO{" "}
          </h3>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 max-w-[90rem] mx-auto px-6 lg:px-20 ">
          <h3 className="text-white text-4xl font-bold font-inter leading-7">
            CHECKOUT OUR PORTFOLIO{" "}
          </h3>
        </div>
      </div> */}
      <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit">
        <div className="flex overflow-x-auto gap-7 no-scrollbar py-4">
          <Link
            href="/"
            className=" px-8 py-4 bg-[#027808] rounded-md  text-center text-white text-2xl font-bold font-inter"
          >
            All
          </Link>
          <Link
            className=" px-8 py-4 bg-[#C9E4CA] rounded-md whitespace-nowrap  text-center text-[#027808] text-2xl font-bold font-inter"
            href="/blockchain"
          >
            Blockchain Development
          </Link>
          <Link
            className=" px-8 py-4 bg-[#C9E4CA] rounded-md whitespace-nowrap  text-center text-[#027808] text-2xl font-bold font-inter"
            href="/web-development"
          >
            Web Development
          </Link>
          <Link
            className=" px-8 py-4 bg-[#C9E4CA] rounded-md whitespace-nowrap  text-center text-[#027808] text-2xl font-bold font-inter"
            href="/crypto-marketing"
          >
            Crypto Marketing & PR
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-10 py-4 ">
          <Card image={image} />
          <Card image={uefa} />
          <Card image={ryan} />
          <Card image={planet} />
          <Card image={girl} />
          <Card image={nigga} />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
