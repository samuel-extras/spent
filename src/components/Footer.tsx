import Image from "next/image";
import React from "react";
import LogoSVGComponent from "./SVG/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <>
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
      <footer className="bg-gray-50 w-full">
        <div className="w-full max-w-[92rem]  px-4 sm:px-6 lg:px-24  mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-10 lg:py-16">
            <div className=" space-y-6">
              <LogoSVGComponent />
              <p className="text-black text-lg font-normal font-jost leading-[30px]">
                Welcome to Spent Digital Labs, your premier partner in
                blockchain development, education, and marketing.{" "}
              </p>
              <div className="space-y-4 pt-3">
                <p className="text-[#027808] text-2xl font-normal font-josefinSans">
                  Follow us on all socials
                </p>
                <ul className="flex gap-6 flex-wrap">
                  <li>
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0007 2.33398C7.55733 2.33398 2.33398 7.55733 2.33398 14.0007C2.33398 19.8238 6.60031 24.6503 12.1778 25.5256V17.373H9.21549V14.0007H12.1778V11.4303C12.1778 8.50639 13.9195 6.89128 16.5844 6.89128C17.8608 6.89128 19.196 7.11914 19.196 7.11914V9.99023H17.7248C16.2756 9.99023 15.8236 10.8895 15.8236 11.8122V14.0007H19.0592L18.542 17.373H15.8236V25.5256C21.401 24.6503 25.6673 19.8238 25.6673 14.0007C25.6673 7.55733 20.4439 2.33398 14.0007 2.33398Z"
                        fill="#027808"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33268 2.33398H1.16602L10.8037 15.1842L1.69096 25.6672H4.78266L12.2357 17.0935L18.666 25.6673H26.8327L16.7897 12.2767L25.4328 2.33398H22.3411L15.3577 10.3674L9.33268 2.33398ZM19.8327 23.334L5.83268 4.66732H8.16602L22.166 23.334H19.8327Z"
                        fill="#027808"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.199 2.33398C16.5119 2.33615 17.1773 2.3431 17.7522 2.36021L17.9787 2.36762C18.2402 2.37692 18.4983 2.38858 18.8094 2.40317C20.0509 2.46052 20.8978 2.65692 21.6415 2.94567C22.4105 3.24219 23.06 3.64275 23.7084 4.29122C24.3559 4.93969 24.7565 5.59108 25.054 6.35817C25.3417 7.10094 25.5382 7.94872 25.5965 9.19025C25.6104 9.50136 25.6216 9.75942 25.6308 10.021L25.6382 10.2475C25.6552 10.8223 25.663 11.4878 25.6655 12.8008L25.6664 13.6707C25.6665 13.777 25.6665 13.8867 25.6665 13.9999L25.6664 14.329L25.6657 15.199C25.6635 16.5119 25.6566 17.1773 25.6395 17.7522L25.632 17.9787C25.6228 18.2402 25.6111 18.4983 25.5965 18.8094C25.5391 20.0509 25.3417 20.8978 25.054 21.6415C24.7575 22.4105 24.3559 23.06 23.7084 23.7084C23.06 24.3559 22.4076 24.7565 21.6415 25.054C20.8978 25.3417 20.0509 25.5382 18.8094 25.5965C18.4983 25.6104 18.2402 25.6216 17.9787 25.6308L17.7522 25.6382C17.1773 25.6552 16.5119 25.663 15.199 25.6655L14.329 25.6664C14.2227 25.6665 14.113 25.6665 13.9999 25.6665L13.6707 25.6664L12.8008 25.6657C11.4878 25.6635 10.8223 25.6566 10.2475 25.6395L10.021 25.632C9.75942 25.6228 9.50136 25.6111 9.19025 25.5965C7.94872 25.5391 7.10289 25.3417 6.35817 25.054C5.59011 24.7575 4.93969 24.3559 4.29122 23.7084C3.64275 23.06 3.24317 22.4076 2.94567 21.6415C2.65692 20.8978 2.4615 20.0509 2.40317 18.8094C2.38931 18.4983 2.378 18.2402 2.36884 17.9787L2.36151 17.7522C2.34444 17.1773 2.33666 16.5119 2.33414 15.199L2.33398 12.8008C2.33615 11.4878 2.3431 10.8223 2.36021 10.2475L2.36762 10.021C2.37692 9.75942 2.38858 9.50136 2.40317 9.19025C2.46052 7.94775 2.65692 7.10192 2.94567 6.35817C3.24219 5.59011 3.64275 4.93969 4.29122 4.29122C4.93969 3.64275 5.59108 3.24317 6.35817 2.94567C7.10192 2.65692 7.94775 2.4615 9.19025 2.40317C9.50136 2.38931 9.75942 2.378 10.021 2.36884L10.2475 2.36151C10.8223 2.34444 11.4878 2.33666 12.8008 2.33414L15.199 2.33398ZM13.9999 8.1665C10.7765 8.1665 8.1665 10.7793 8.1665 13.9999C8.1665 17.2232 10.7793 19.8332 13.9999 19.8332C17.2232 19.8332 19.8332 17.2203 19.8332 13.9999C19.8332 10.7765 17.2203 8.1665 13.9999 8.1665ZM13.9999 10.4998C15.9329 10.4998 17.4999 12.0662 17.4999 13.9999C17.4999 15.9329 15.9334 17.4999 13.9999 17.4999C12.0668 17.4999 10.4998 15.9334 10.4998 13.9999C10.4998 12.0668 12.0662 10.4998 13.9999 10.4998ZM20.1249 6.4165C19.3207 6.4165 18.6665 7.06972 18.6665 7.87384C18.6665 8.67796 19.3197 9.33219 20.1249 9.33219C20.9289 9.33219 21.5832 8.67897 21.5832 7.87384C21.5832 7.06972 20.9279 6.41549 20.1249 6.4165Z"
                        fill="#027808"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.393 21.3955H18.2833V16.5226C18.2833 15.3606 18.2597 13.8652 16.6628 13.8652C15.0415 13.8652 14.7938 15.1297 14.7938 16.4368V21.3955H11.684V11.375H14.6713V12.7408H14.7115C15.129 11.9533 16.144 11.1221 17.6603 11.1221C20.8112 11.1221 21.394 13.1959 21.394 15.8953L21.393 21.3955ZM8.17183 10.0039C7.17083 10.0039 6.3667 9.19362 6.3667 8.197C6.3667 7.20125 7.1717 6.39188 8.17183 6.39188C9.16933 6.39188 9.97783 7.20125 9.97783 8.197C9.97783 9.19362 9.16845 10.0039 8.17183 10.0039ZM9.73108 21.3955H6.61258V11.375H9.73108V21.3955ZM22.9488 3.5H5.05158C4.19495 3.5 3.50195 4.17725 3.50195 5.01288V22.9872C3.50195 23.8236 4.19495 24.5 5.05158 24.5H22.9462C23.802 24.5 24.502 23.8236 24.502 22.9872V5.01288C24.502 4.17725 23.802 3.5 22.9462 3.5H22.9488Z"
                        fill="#027808"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0007 25.6673C7.55733 25.6673 2.33398 20.4439 2.33398 14.0007C2.33398 7.55733 7.55733 2.33398 14.0007 2.33398C20.4439 2.33398 25.6673 7.55733 25.6673 14.0007C25.6673 20.4439 20.4439 25.6673 14.0007 25.6673ZM10.3725 15.3666L10.3873 15.3573C11.0636 17.5901 11.4018 18.7066 11.4018 18.7066C11.5328 19.0689 11.7128 19.1335 11.9314 19.104C12.1498 19.0744 12.2657 18.9562 12.4083 18.8186C12.4083 18.8186 12.8706 18.3724 13.7953 17.48L16.7714 19.6821C17.3137 19.9817 17.7052 19.8271 17.8398 19.178L19.7739 10.0531C19.9874 9.20381 19.6129 8.86316 18.9543 9.13278L7.59914 13.5189C6.82446 13.8303 6.82821 14.2637 7.4581 14.4569L10.3725 15.3666Z"
                        fill="#027808"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 lg:pl-8">
              <h4 className=" text-neutral-400 text-lg font-semibold font-jost leading-normal tracking-tight">
                Services
              </h4>
              <div className="mt-3 grid space-y-3">
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Blockchain
                </p>
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Web Development
                </p>
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Mobile App Development
                </p>
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Game Development
                </p>
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Media Marketing
                </p>
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Content Creation
                </p>
                <p className=" text-black text-opacity-90 text-base font-normal font-jost leading-[44.50px] tracking-wide">
                  Digital Skill Training
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className=" text-neutral-400 text-lg font-semibold font-jost leading-normal tracking-tight">
                Contact Us{" "}
              </h4>
              <div className="mt-3 grid space-y-3">
                <Link
                  href="/"
                  className="bg-[#027808] rounded-[5px] text-white text-base font-medium font-jost leading-normal tracking-tight py-3 px-8"
                >
                  BOOK A MEETING WITH US
                </Link>
                <Link
                  href="/"
                  className="bg-[#027808] rounded-[5px] text-white text-base font-medium font-jost leading-normal tracking-tight py-3 px-8 inline-flex items-center gap-2"
                >
                  DROP A MESSAGE RIGHT AWAY{" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9991 16.1716L18.3631 10.8076L19.7773 12.2218L11.9991 20L4.22102 12.2218L5.63522 10.8076L10.9991 16.1716V4H12.9991V16.1716Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <div>
                  <h3 className="text-black text-xl font-bold font-josefinSans">
                    HEAD OFFICE ADDRESS
                  </h3>
                  <address className=" text-black text-base font-normal font-josefinSans">
                    14, owoeye street, ayeyemi, Ondo City, Ondo State,Nigeria.
                  </address>
                </div>
                <div>
                  <h3 className="text-black text-xl font-bold font-josefinSans">
                    BRAND OFFICE ADDRESS{" "}
                  </h3>
                  <address className=" text-black text-base font-normal font-josefinSans">
                    750 S 43rd street, Grand Forks, North Dakota, 58201{" "}
                  </address>
                </div>
                <div>
                  <h3 className="text-black text-xl font-bold font-josefinSans">
                    ACADEMY HEAD OFFICE ADDRESS{" "}
                  </h3>
                  <address className=" text-black text-base font-normal font-josefinSans">
                    FCT Technology Incubation Centre, FCT Solarhub, ] FCTA
                    Education Secreatriat, Karu Site, FCT-Abuja{" "}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-green-100 w-full mx-auto py-4">
          <p className="text-black text-2xl text-center font-normal font-josefinSans ">
            Copyright ©2023 Spent Digital Labs. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
