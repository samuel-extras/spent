import Image from "next/image";
import React from "react";
import drippa from "../../../public/drippa.png";
import pepito from "../../../public/pepito.png";
import drop from "../../../public/drop.png";
import solar from "../../../public/solar.png";
import swift from "../../../public/swift.png";
import cart from "../../../public/cart.png";
import verysol from "../../../public/verysol.png";

const ServicePortfolio = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-10 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit ">
      <div className="md:rounded-[60px] rounded-3xl bg-[#F1F9F6] px-4 py-10 md:px-20 md:py-[86px]">
        <div className="w-fit pb-16">
          <h2 className="text-zinc-800 text-4xl sm:text-5xl font-bold font-jost leading-[51.02px]">
            Service Portfolio
          </h2>
          <svg
            width="194"
            height="24"
            viewBox="0 0 194 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="float-right"
          >
            <path
              d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
              stroke="#FEE900"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-black  md:text-xl text-sm font-medium md:font-semibold font-inter leading-loose">
          We&apos;re proud to have partnered with an impressive roster of
          clients, including companies, groundbreaking startups, and
          forward-thinking government agencies. Our track record speaks for it
          self, as we&apos;ve consistently helped our clients achieve their
          goals and surpass their expectations. We&apos;ve helped shape numerous
          success stories, propelling our clients to new heights in the
          blockchain space. <br />
          We have also created ground breaking contents in designs and videos
          for Startups, in different firms and companies across the globe. Our
          expertise fueled the creation of an immersive educational program for
          an arcade, educating aspiring blockchain enthusiasts. This program
          served as a launching pad for several innovative crypto startups,
          making a significant impact in the industry.
        </p>
        <div className=" flex justify-between pt-28 flex-wrap gap-4">
          <Image width={135} height={129} src={pepito} alt="pepito" />
          <Image width={135} height={129} src={drop} alt="drop" />
          <Image width={135} height={129} src={swift} alt="swift" />
          <Image width={135} height={129} src={drippa} alt="drippa" />
          <Image width={135} height={129} src={solar} alt="solar" />
          <Image width={135} height={129} src={cart} alt="cart" />
          <Image width={135} height={129} src={verysol} alt="verysol" />
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
