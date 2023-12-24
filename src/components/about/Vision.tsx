import React from "react";

const Vision = () => {
  return (
    <section className="bg-[#027808] px-6 relative">
      <div className="bg-[#D9FFDB] rounded-[40px] flex justify-center gap-5 py-10 absolute -top-40 left-1/2 -translate-x-1/2 w-[96%] px-5">
        <div>
          <h4 className=" text-center text-cyan-400 text-[64px] font-bold font-montserrat">
            5
          </h4>
          <p className="text-center text-red-600 text-[32px] font-semibold font-inter">
            Years of Operation
          </p>
          <p className="max-w-sm text-center text-black text-2xl font-normal font-inter leading-[37.50px]">
            Of “high-performing” level by a certified project manager
          </p>{" "}
        </div>
        <div>
          <h4 className=" text-center text-cyan-400 text-[64px] font-bold font-montserrat">
            36+
          </h4>
          <p className="text-center text-red-600 text-[32px] font-semibold font-inter">
            Projects Delivered{" "}
          </p>
          <p className="max-w-sm text-center text-black text-2xl font-normal font-inter leading-[37.50px]">
            That meets quality standards required by our users{" "}
          </p>{" "}
        </div>
        <div>
          <h4 className=" text-center text-cyan-400 text-[64px] font-bold font-montserrat">
            20+{" "}
          </h4>
          <p className="text-center text-red-600 text-[32px] font-semibold font-inter">
            Specialist{" "}
          </p>
          <p className="max-w-sm text-center text-black text-2xl font-normal font-inter leading-[37.50px]">
            Actively engage team members that finishes on time{" "}
          </p>{" "}
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-56 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative  2xl:min-h-fit  ">
        <div className="w-fit">
          <h2 className="text-white text-5xl font-bold font-jost leading-[51.02px]">
            Our Vision{" "}
          </h2>
          <svg
            width="194"
            height="24"
            viewBox="0 0 194 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="float-right -mr-6"
          >
            <path
              d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
              stroke="#FEE900"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-center text-white text-opacity-80 text-[28px] font-medium font-poppins leading-[51px]">
          We envision a world where blockchain technology transforms the way we
          interact, transact, and trust. From enhancing transparency and
          efficiency to bolstering security and fostering decentralized
          ecosystems. Our vision is to drive this transformation, hand in hand
          with our clients, and create a brighter, more connected future.
        </p>
      </div>
    </section>
  );
};

export default Vision;
