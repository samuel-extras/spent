import Image, { StaticImageData } from "next/image";
import React from "react";
interface HeroProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}

const Hero = ({ image, description, title }: HeroProps) => {
  return (
    <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit ">
      <div className="absolute right-0 -top-32 -z-10 hidden md:block">
        <svg
          width={642}
          height={520}
          viewBox="0 0 642 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // {...props}
        >
          <g filter="url(#filter0_d_501_1359)">
            <circle
              cx={388.962}
              cy={112.536}
              r={194}
              transform="rotate(48.5513 388.962 112.536)"
              stroke="#027808"
              shapeRendering="crispEdges"
            />
          </g>
          <circle
            cx={389.058}
            cy={112.657}
            r={159.162}
            transform="rotate(48.5513 389.058 112.657)"
            fill="#34FF3E"
            fillOpacity={0.38}
          />
          <circle
            cx={389.058}
            cy={112.657}
            r={159.162}
            transform="rotate(48.5513 389.058 112.657)"
            stroke="#027808"
          />
          <defs>
            <filter
              id="filter0_d_501_1359"
              x={0.458984}
              y={-249.967}
              width={769.006}
              height={769.006}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius={99}
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_501_1359"
              />
              <feOffset dx={-4} dy={22} />
              <feGaussianBlur stdDeviation={45.5} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.858333 0 0 0 0 1 0 0 0 0 0.865537 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_501_1359"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_501_1359"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col relative w-fit">
        <h1 className="max-w-[28ch] flex text-center md:text-left  text-green-800 text-5xl font-bold font-inter leading-[51.02px]">
          {title}
        </h1>
        <svg
          width="194"
          height="24"
          viewBox="0 0 194 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 -translate-x-1/2 -bottom-6"
        >
          <path
            d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
            stroke="#FEE900"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-14">
        <div className=" w-full md:w-[50%] h-[445px] flex justify-center items-center">
          <Image src={image} alt="blockchain" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#EBFFE7] rounded-[10px] px-4 w-fit">
            <h4 className=" text-black md:text-[22px] text-xl font-semibold font-poppins leading-[39.14px] tracking-tight">
              Build a chain that will control the world
            </h4>
          </div>
          <p className="text-center md:text-right  text-black text-opacity-80 text-lg font-medium font-montserrat leading-[37.96px] tracking-tight max-w-[48ch]">
            {description}
            <br />
          </p>
          <p className="text-orange-600 text-center md:text-right text-4xl  md:text-5xl font-normal font-nothingYouCouldDo leading-[85.39px] tracking-wide">
            wanna learn more?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
