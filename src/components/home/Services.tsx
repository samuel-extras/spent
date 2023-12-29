import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard";
import Image from "next/image";
import React from "react";
import web from "../../../public/web.png";
import block from "../../../public/block.png";
import crypto from "../../../public/crypto.png";
import marketing from "../../../public/marketing.png";
import content from "../../../public/content.png";
import academy from "../../../public/academy.png";

const services: ServiceCardProps[] = [
  {
    description:
      "Unlock the Power of Web3 with our Blockchain Development! Let us help you to expand your dreams and capabilities in the blockchain ecosystem to be accessible and easy to use. Our Blockchain Development team makes blockchain technology a reality. ",
    service: ["Blockchain", "Development"],
    image: <Image alt="" src={block} width={92} height={103.4} />,

    bg: "bg-[#017707]",
    bg2: "bg-white",
    color: "text-white",
    href: "/services/blockchain-development",
  },
  {
    description:
      "We can quickly and easily develop stunning websites that will take your business to the next level. Create responsive layouts, incorporate the latest technologies, and create a custom website that meets your needs. We are  ready to unleash the power of your ideas or institutions ",
    service: ["Web", "Development"],
    image: <Image alt="" src={web} width={125} height={91.8} />,

    bg: "bg-[#FC5008]",
    bg2: "bg-white",

    color: "text-white",
    href: "/services/web-development",
  },
  {
    description:
      "Gain a competitive edge in the blockchain space with our strategic marketing expertise. Our seasoned marketers will craft innovative campaigns to showcase your blockchain products and services, ensuring maximum  visibility and engagement.",
    service: ["Crypto", "Marketing & PR"],
    image: <Image alt="" src={crypto} width={125} height={91.133} />,

    bg: "bg-white",
    bg2: "bg-[#FEE900]",

    color: "text-black",
    href: "/services/crypto-marketing-and-pr",
  },
  {
    description:
      "Communicating with your preferred audience through the social media platforms they frequently use, to get more traction for your project. We will help you build an outstanding community that allows for social exchange, engagement, and support",
    service: ["Media &", "Marketing"],
    image: <Image alt="" src={marketing} width={92} height={103.4} />,

    bg: "bg-[#000000]",
    bg2: "bg-[#9EFF00]",

    color: "text-white",
    href: "/services/media-and-marketing",
  },
  {
    description:
      "Developing visual and written content that will be integrated into various promotional activities. Gain loyal followers and engage your audience with educational, newsworthy, and fun content",
    service: ["Content", "Creation  "],
    image: <Image alt="" src={content} width={95} height={104.4} />,

    bg: "bg-[#FF4800]",
    bg2: "bg-white",

    color: "text-white",
    href: "/services/content-creation",
  },
  {
    description:
      "Spent Academy is a fully-featured educational platform that helps instructors to create and publish video courses, live classes, and text courses and earn money, and helps students to learn in the easiest way building community of like minds in different digital strata.",
    service: ["Spent", "Academy"],
    image: <Image alt="" src={academy} width={140} height={95} />,

    bg: "bg-[#027808]",
    bg2: "bg-lime-300",
    color: "text-white",
    href: "/services/academy",
  },
];

const Services = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit">
      <h2 className="text-zinc-800 text-4xl sm:text-5xl font-bold font-inter leading-[51.02px]">
        By our expertise we offer:
        <svg
          width="193"
          height="41"
          viewBox="0 0 193 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.27737 36.3116C29.3217 20.512 101.205 -6.90223 188.384 9.83712"
            stroke="#FEE900"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </h2>
      <div className="grid md:grid-cols-2 gap-10 py-4 ">
        {services.map((service) => (
          <ServiceCard key={service.description} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
