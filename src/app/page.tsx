import Hero from "@/components/Hero";
import Image from "next/image";
import Portfolio from "@/components/Portfolio";
import Blockchain from "../../public/globe.png";
import Services from "@/components/home/Services";
import ServicePortfolio from "@/components/home/ServicePortfolio";
import Product from "@/components/home/Product";
import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-[90rem] mx-auto py-20 px-4 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col md:flex-row  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit  ">
        <div className="w-full space-y-16 lg:space-y-0">
          <div className="flex flex-col w-fit">
            <h1 className="lg:max-w-[16ch] flex text-center lg:text-left text-5xl  sm:text-[72px] lg:text-6xl xl:text-[72px] font-bold font-inter sm:leading-[60px] lg:leading-[60px] xl:leading-[80px]">
              We’re here to Increase your Productivity{" "}
            </h1>
            <svg
              width="226"
              height="61"
              viewBox="0 0 226 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
            >
              <path
                d="M4.00006 13.5054C39.4788 0.525364 132.722 -9.0245 221.863 56.6166"
                stroke="#027808"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className=" w-full lg:hidden flex flex-col justify-center items-center sm:px-20 md:px-40 lg:px-0 ">
            <Image src={Blockchain} alt="blockchain" />
            <Link
              href="http://t.me/Spentdigitallabs"
              className="text-white text-lg font-bold font-inter bg-[#027808] rounded-[10px] flex text-center justify-between items-center py-3 px-16 w-full"
            >
              Let’s Chat{" "}
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
          <p className="max-w-[562px] text-3xl xl:text-4xl lg:text-3xl text-center lg:text-left  mx-auto lg:mx-0">
            <span className="text-black font-normal font-inter leading-[46.50px] tracking-[3.06px]">
              Welcome to <br />
            </span>
            <span className="text-orange-600 font-extrabold font-inter leading-[46.50px] tracking-[3.06px]">
              S
            </span>
            <span className="text-green-800 font-extrabold font-inter leading-[46.50px] tracking-[3.06px]">
              pent Digital
            </span>
            <span className="text-black font-extrabold font-inter leading-[46.50px] tracking-[3.06px]">
              {" "}
            </span>
            <span className="text-orange-600 font-extrabold font-inter leading-[46.50px] tracking-[3.06px]">
              Labs
            </span>
            <span className="text-black font-extrabold font-inter leading-[46.50px] tracking-[3.06px]">
              , <br />
            </span>
            <span className="text-black font-normal font-inter leading-[46.50px] tracking-[3.06px]">
              your premier partner in blockchain development, Education, and
              Marketing.{" "}
            </span>
          </p>
        </div>

        <div className=" w-full md:w-[70%] hidden lg:flex flex-col justify-center items-center ">
          <Image src={Blockchain} alt="blockchain" />
          <Link
            href="http://t.me/Spentdigitallabs"
            className="text-white hover:text-[#027808] text-lg font-bold font-inter bg-[#027808] rounded-[10px] flex text-center justify-between items-center py-3 px-16 w-full hover:bg-transparent hover:border-2 border-[#027808]"
          >
            Let’s Chat{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </section>
      <Services />
      <ServicePortfolio />
      <Product />
      <Newsletter />
    </>
  );
}
