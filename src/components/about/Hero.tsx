import Image from "next/image";
import React from "react";
import globe from "../../../public/globe.png";

const Hero = () => {
  return (
    <>
      <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col md:flex-row  md:gap-20 md:overflow-hidden relative  2xl:min-h-fit  ">
        <div className="">
          <div className="flex flex-col w-fit">
            <div className="w-[720px] h-[168px]">
              <span className="text-green-800 text-[40px] font-extrabold font-poppins leading-[58.16px] tracking-tight">
                Welcome to <br />
              </span>
              <span className="text-green-800 text-6xl font-normal font-inter leading-[87.24px]">
                SPENT DIGITAL LABS
              </span>
            </div>
          </div>
          <p className="max-w-[691px] text-green-800 text-2xl font-medium font-poppins leading-[45.48px]">
            Your premier partner in blockchain development, education, and
            marketing. With a global team of over 20 talented professionals
            spanning the USA, India, Nigeria, Spain, and Dubai, we bring
            unrivaled expertise and passion to the world of blockchain
            technology.
          </p>
        </div>

        <div className=" w-full md:w-[50%] flex flex-col justify-center items-center ">
          <Image src={globe} alt="blockchain" />
        </div>
      </section>
      <svg
        width={1440}
        height={161}
        viewBox="0 0 1440 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // {...props}
        className="w-full h-auto"
      >
        <path
          opacity={0.3}
          d="M-249 105.17V161L1671 161V61.251C1622.21 71.1762 1508.85 94.1533 1445.71 106.659C1366.78 122.291 1267.77 131.224 1121.4 142.39C975.036 153.556 723.915 105.17 708.13 102.937C692.345 100.704 558.892 64.9729 303.466 56.7846C99.1255 50.2339 -149.987 86.3123 -249 105.17Z"
          fill="white"
        />
        <path
          opacity={0.6}
          d="M-236 49.1703V105L1684 105V5.25095C1635.21 15.1762 1521.85 38.1533 1458.71 50.6591C1379.78 66.2914 1280.77 75.2242 1134.4 86.3901C988.036 97.556 736.915 49.1703 721.13 46.9371C705.345 44.7039 571.892 8.97294 316.466 0.784584C112.126 -5.7661 -136.987 30.3123 -236 49.1703Z"
          fill="#FF4800"
        />
        <path
          d="M-237 65.1703V121L1683 121V21.251C1634.21 31.1762 1520.85 54.1533 1457.71 66.6591C1378.78 82.2914 1279.77 91.2242 1133.4 102.39C987.036 113.556 735.915 65.1703 720.13 62.9371C704.345 60.7039 570.892 24.9729 315.466 16.7846C111.126 10.2339 -137.987 46.3123 -237 65.1703Z"
          fill="#027808"
        />
      </svg>
    </>
  );
};

export default Hero;
