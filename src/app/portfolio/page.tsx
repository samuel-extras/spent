import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";
import Blockchain from "../../../public/portfolio.png";

const Page = () => {
  return (
    <>
      <Hero
        image={Blockchain}
        title="Delve into The Expansive Realm of Our Company Portfolio"
        description="Dive into the comprehensive showcase of our company's diverse portfolio, where innovation meets excellence across a spectrum of industries. From cutting-edge technology solutions to impactful marketing campaigns, our portfolio reflects a commitment to delivering quality and value."
      />{" "}
      <Portfolio />
      <div className="flex flex-wrap justify-center items-center w-full  px-4 sm:px-6 lg:px-24  mx-auto gap-10 py-10">
        {" "}
        <p className="text-black text-xl font-medium font-jost leading-normal tracking-tight">
          Ready to get started?
        </p>
        <button className="text-white text-lg font-bold font-inter bg-[#027808] rounded-[10px] flex px-24 text-center justify-center items-center py-3 gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.95 21C17.8667 21 15.8083 20.5457 13.775 19.637C11.7417 18.7283 9.89167 17.441 8.225 15.775C6.55833 14.1083 5.271 12.2583 4.363 10.225C3.455 8.19167 3.00067 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3873 16.038 14.312C16.28 14.2367 16.5173 14.216 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
              fill="white"
            />
          </svg>
          Call Us{" "}
        </button>
        <button className="text-white text-lg font-bold font-inter bg-[#027808] rounded-[10px] flex text-center justify-center items-center py-3 px-16">
          BOOK A MEETING WITH US{" "}
        </button>
      </div>
    </>
  );
};

export default Page;
