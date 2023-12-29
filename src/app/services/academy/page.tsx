import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";
import web from "../../../../public/graduation-cap.png";
import lms from "../../../../public/lms.png";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-12 lg:pb-44 w-full grow flex flex-col  md:overflow-hidden relative">
        <div className="flex justify-between items-center px-6">
          <div className=" w-fit">
            <h1 className="max-w-[28ch] mb-2 flex text-center md:text-left  text-green-800 text-5xl font-bold font-inter leading-[51.02px]">
              Academy
            </h1>
            <svg
              width="194"
              height="24"
              viewBox="0 0 194 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="float-right -mr-3"
            >
              <path
                d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
                stroke="#FEE900"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="w-1/5">
            <Image src={web} alt="academy" />
          </div>
        </div>
        <p className=" text-center text-black text-opacity-80 text-[28px] font-medium font-montserrat leading-[51px]">
          We have a well equipped resource center both on site and online to
          train equip and develop anyone in any area of interest of all the
          services we do provide and more.
          <br />
          We have a well equipped resource center both on site and online to
          train equip and develop anyone in any area of interest of all the
          services we do provide and more.
        </p>
      </section>
      <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-44 lg:p-60 lg:pb-20 w-full grow flex flex-col  md:gap-20 gap-10  relative bg-gradient-to-tr from-white via-white to-emerald-100 ">
        <div className="bg-[#D9FFDB] rounded-[40px] flex justify-between gap-10 py-16 absolute -top-24 left-1/2 -translate-x-1/2 w-[96%] px-16">
          <div>
            <h4 className=" text-center text-cyan-400 text-5xl font-bold font-montserrat">
              14
            </h4>
            <p className="text-center text-red-600 text-xl font-semibold font-inter">
              Skillful Instructor{" "}
            </p>
          </div>
          <div>
            <h4 className=" text-center text-cyan-400 text-5xl font-bold font-montserrat">
              50+
            </h4>
            <p className="text-center text-red-600 text-xl font-semibold font-inter">
              Happy Student{" "}
            </p>
          </div>
          <div>
            <h4 className=" text-center text-cyan-400 text-5xl font-bold font-montserrat">
              3{" "}
            </h4>
            <p className="text-center text-red-600 text-xl font-semibold font-inter">
              Physical Training Centre{" "}
            </p>
          </div>
          <div>
            <h4 className=" text-center text-cyan-400 text-5xl font-bold font-montserrat">
              10k+{" "}
            </h4>
            <p className="text-center text-red-600 text-xl font-semibold font-inter">
              Video Course Lbrary{" "}
            </p>
          </div>
        </div>
        <Image src={lms} alt="lms" />
        <div className="md:px-10 w-full">
          <button className="text-white text-lg font-bold font-inter bg-[#027808] flex text-center justify-center items-center py-3 px-16 w-full">
            Visit SPENT ACADEMY WEBSITE{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Page;
