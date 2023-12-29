import Image from "next/image";
import React from "react";
import teammember from "../../../public/teammember.png";

const Team = () => {
  return (
    <section className="bg-gradient-to-br from-[#027708] to-[#54BE96] relative">
      <svg
        width="1440"
        height="127"
        viewBox="0 0 1440 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto absolute top-0 left-0"
      >
        <path
          d="M1680 0H-240V80C145.5 158 430.053 126.376 788 69C1062.5 25 1339 7 1680 67V0Z"
          fill="white"
        />
      </svg>
      <svg
        width="1440"
        height="173"
        viewBox="0 0 1440 173"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto absolute left-0 bottom-0"
      >
        <path
          d="M-240 173L1680 173V46.4858C1294.5 -31.5142 1009.95 0.110016 652 57.4858C377.5 101.486 101 119.486 -240 59.4858V173Z"
          fill="#F8F9FA"
        />
      </svg>

      <div className="max-w-[90rem] mx-auto pb-20  sm:py-20 px-6 sm:px-8 lg:pt-32 lg:p-20 lg:pb-0  w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative  2xl:min-h-fit  ">
        <div className="sm:hidden w-fit -mt-8">
          <h2 className="text-black text-3xl  font-bold font-jost leading-[51.02px]">
            Our Team{" "}
          </h2>
          <svg
            width="194"
            height="24"
            viewBox="0 0 194 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="float-right w-20 -mt-4"
          >
            <path
              d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
              stroke="#FEE900"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 gap-3 sm:gap-6">
          <div className="hidden sm:block w-fit self-center">
            <h2 className="text-white text-5xl font-bold font-jost leading-[51.02px]">
              Our Team{" "}
            </h2>
            <svg
              width="194"
              height="24"
              viewBox="0 0 194 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="float-right "
            >
              <path
                d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
                stroke="#FEE900"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="sm:bg-white rounded-2xl sm:shadow sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center ">
            <div className="sm:w-[35%] w-full h-full">
              <Image
                src={teammember}
                alt=""
                // width={188}
                // height={188}
                className="rounded-lg border-2 border-emerald-400 sm:border-transparent"
              />
            </div>
            <div className="sm:space-y-[6px] flex-1">
              <p className=" sm:text-slate-800 text-white text-[10px] sm:text-sm lg:text-xl text-center sm:text-left font-semibold font-montserrat">
                William Pearce
              </p>
              <p className="text-[#FF4800] sm:text-cyan-400 text-[10px] sm:text-xs lg:text-base text-center sm:text-left font-semibold font-poppins">
                Spent Manager
              </p>
              <p className="hidden sm:block text-slate-500 text-xs lg:text-base font-normal font-inter leading-relaxed">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </p>
            </div>
          </div>
          <div className="sm:bg-white rounded-2xl sm:shadow sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center ">
            <div className="sm:w-[35%] w-full h-full">
              <Image
                src={teammember}
                alt=""
                // width={188}
                // height={188}
                className="rounded-lg border-2 border-emerald-400 sm:border-transparent"
              />
            </div>
            <div className="sm:space-y-[6px] flex-1">
              <p className=" sm:text-slate-800 text-white text-[10px] sm:text-sm lg:text-xl text-center sm:text-left font-semibold font-montserrat">
                William Pearce
              </p>
              <p className="text-[#FF4800] sm:text-cyan-400 text-[10px] sm:text-xs lg:text-base text-center sm:text-left font-semibold font-poppins">
                Spent Manager
              </p>
              <p className="hidden sm:block text-slate-500 text-xs lg:text-base font-normal font-inter leading-relaxed">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </p>
            </div>
          </div>
          <div className="sm:bg-white rounded-2xl sm:shadow sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center ">
            <div className="sm:w-[35%] w-full h-full">
              <Image
                src={teammember}
                alt=""
                // width={188}
                // height={188}
                className="rounded-lg border-2 border-emerald-400 sm:border-transparent"
              />
            </div>
            <div className="sm:space-y-[6px] flex-1">
              <p className=" sm:text-slate-800 text-white text-[10px] sm:text-sm lg:text-xl text-center sm:text-left font-semibold font-montserrat">
                William Pearce
              </p>
              <p className="text-[#FF4800] sm:text-cyan-400 text-[10px] sm:text-xs lg:text-base text-center sm:text-left font-semibold font-poppins">
                Spent Manager
              </p>
              <p className="hidden sm:block text-slate-500 text-xs lg:text-base font-normal font-inter leading-relaxed">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </p>
            </div>
          </div>
          <div className="sm:bg-white rounded-2xl sm:shadow sm:p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 items-center ">
            <div className="sm:w-[35%] w-full h-full">
              <Image
                src={teammember}
                alt=""
                // width={188}
                // height={188}
                className="rounded-lg border-2 border-emerald-400 sm:border-transparent"
              />
            </div>
            <div className="sm:space-y-[6px] flex-1">
              <p className=" sm:text-slate-800 text-white text-[10px] sm:text-sm lg:text-xl text-center sm:text-left font-semibold font-montserrat">
                William Pearce
              </p>
              <p className="text-[#FF4800] sm:text-cyan-400 text-[10px] sm:text-xs lg:text-base text-center sm:text-left font-semibold font-poppins">
                Spent Manager
              </p>
              <p className="hidden sm:block text-slate-500 text-xs lg:text-base font-normal font-inter leading-relaxed">
                Artist is a term applied to a person who engages in an activity
                deemed to be an art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
