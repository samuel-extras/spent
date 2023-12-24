import React from "react";

const Mission = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-56 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative  2xl:min-h-fit  ">
      <div className="w-fit">
        <h2 className="text-zinc-800 text-5xl font-bold font-jost leading-[51.02px]">
          Our Mission
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
      <p className="text-center text-black text-opacity-50 text-[28px] font-medium font-poppins leading-[51px]">
        At Spent Digital Labs, our mission is to be the catalyst that propels
        businesses and individuals into a blockchain-powered future, driven by
        the belief that blockchain technology holds potential to revolutionize
        industries and reshape the world we live in. Our mission is to guide,
        support, and inspire our clients on their journey to blockchain success.
      </p>
    </section>
  );
};

export default Mission;
