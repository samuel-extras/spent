import React from "react";

const Newsletter = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit">
      <div className="w-fit">
        <h3 className="text-zinc-800 text-2xl sm:text-5xl font-bold font-jost leading-[51.02px] ">
          Why choose Spent Digital Labs{" "}
        </h3>
        <svg
          width="194"
          height="24"
          viewBox="0 0 194 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="float-right lg:-mr-16"
        >
          <path
            d="M4 20C31.0382 7.92602 106.092 -8.97754 190 20"
            stroke="#FEE900"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 xl:gap-x-20">
        <div className="grid grid-cols-2 gap-7 w-full xl:w-[50%]">
          <div className="space-y-2.5">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#706FE5"
              />
              <path
                d="M30.5625 20.8272C30.5625 18.2883 28.1863 16.2227 25.2656 16.2227C22.3449 16.2227 19.9688 18.2883 19.9688 20.8272C19.9688 23.3662 22.3449 25.4318 25.2656 25.4318C28.1863 25.4318 30.5625 23.3662 30.5625 20.8272Z"
                fill="#54BD95"
              />
              <path
                d="M32.5312 30.5659V17.2412C32.5312 16.0054 31.3747 15 29.9531 15H20.5781C19.1565 15 18 16.0054 18 17.2412V30.5659H32.5312ZM27.1406 28.121H23.3906C23.0023 28.121 22.6875 27.8474 22.6875 27.5098C22.6875 27.1722 23.0023 26.8986 23.3906 26.8986H27.1406C27.5289 26.8986 27.8438 27.1722 27.8438 27.5098C27.8438 27.8474 27.5289 28.121 27.1406 28.121ZM21.5156 20.5825H22.3015C22.3777 20.3037 22.5042 20.0416 22.673 19.8044L22.1168 19.3209C21.8422 19.0822 21.8422 18.6952 22.1168 18.4565C22.3913 18.2178 22.8366 18.2178 23.1112 18.4565L23.6674 18.94C23.9402 18.7932 24.2417 18.6833 24.5625 18.6171V17.9339C24.5625 17.5963 24.8773 17.3227 25.2656 17.3227C25.6539 17.3227 25.9688 17.5963 25.9688 17.9339V18.6171C26.2896 18.6833 26.591 18.7932 26.8639 18.94L27.4201 18.4565C27.6946 18.2178 28.1399 18.2178 28.4145 18.4565C28.689 18.6952 28.689 19.0822 28.4145 19.3209L27.8582 19.8044C28.0271 20.0416 28.1536 20.3037 28.2297 20.5825H29.0156C29.4039 20.5825 29.7188 20.8562 29.7188 21.1938C29.7188 21.5313 29.4039 21.805 29.0156 21.805H28.2297C28.1536 22.0839 28.0271 22.3459 27.8582 22.5831L28.4145 23.0667C28.689 23.3054 28.689 23.6924 28.4145 23.9311C28.2772 24.0504 28.0972 24.1101 27.9173 24.1101C27.7374 24.1101 27.5574 24.0505 27.4201 23.9311L26.8639 23.4475C26.5911 23.5943 26.2896 23.7043 25.9688 23.7705V24.4537C25.9688 24.7912 25.654 25.0649 25.2657 25.0649C24.8774 25.0649 24.5625 24.7912 24.5625 24.4537V23.7705C24.2417 23.7043 23.9403 23.5943 23.6674 23.4475L23.1112 23.9311C22.9739 24.0504 22.794 24.1101 22.614 24.1101C22.4341 24.1101 22.2541 24.0505 22.1169 23.9311C21.8423 23.6924 21.8423 23.3054 22.1169 23.0667L22.6731 22.5831C22.5043 22.3459 22.3778 22.0839 22.3016 21.805H21.5156C21.1273 21.805 20.8125 21.5313 20.8125 21.1938C20.8125 20.8562 21.1273 20.5825 21.5156 20.5825Z"
                fill="#54BD95"
              />
              <path
                d="M18 31.7881V33.6218C18 34.8576 19.1565 35.8629 20.5781 35.8629H29.9531C31.3747 35.8629 32.5312 34.8576 32.5312 33.6218V31.7881H18ZM26.2031 34.4367H24.3281C23.9398 34.4367 23.625 34.1631 23.625 33.8255C23.625 33.488 23.9398 33.2143 24.3281 33.2143H26.2031C26.5914 33.2143 26.9062 33.488 26.9062 33.8255C26.9062 34.1631 26.5914 34.4367 26.2031 34.4367Z"
                fill="#2E3E5C"
              />
            </svg>

            <h6 className="text-indigo-950 text-lg sm:text-xl  font-semibold font-poppins leading-7">
              Expertise
            </h6>
            <p className="max-w-[262px] opacity-80 text-[#2E3E5C] text-sm sm:text-base font-normal font-poppins leading-7">
              Our multidisciplinary team brings a wealth of experience in
              blockchain development, marketing, and academia.
            </p>
          </div>
          <div className="space-y-2.5">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#54BD95"
              />
              <path
                d="M13.9473 27.8975C13.4241 27.8975 13 27.4734 13 26.9502C13 26.427 13.4241 26.0029 13.9473 26.0029H36.0525C36.5757 26.0029 36.9998 26.427 36.9998 26.9502C36.9998 27.4734 36.5757 27.8975 36.0525 27.8975H13.9473Z"
                fill="#54BD95"
              />
              <path
                d="M25.0032 22.8414C22.5617 22.8414 20.5825 20.8622 20.5825 18.4207C20.5825 15.9792 22.5617 14 25.0032 14C27.4447 14 29.4239 15.9792 29.4239 18.4207C29.4239 20.8622 27.4447 22.8414 25.0032 22.8414Z"
                fill="#54BD95"
              />
              <path
                d="M25.0031 19.0521C25.3519 19.0521 25.6346 18.7694 25.6346 18.4206C25.6346 18.0718 25.3519 17.7891 25.0031 17.7891C24.6543 17.7891 24.3716 18.0718 24.3716 18.4206C24.3716 18.7694 24.6543 19.0521 25.0031 19.0521Z"
                fill="#54BD95"
              />
              <path
                d="M22.4761 23.5146C20.8723 26.4335 16.3278 34.7536 16.1141 35.1439C15.9443 35.4542 15.5527 35.5645 15.2458 35.3884C13.101 34.1574 12.3655 31.4287 13.6015 29.3006L19.3622 19.1411C19.6052 21.0634 20.8084 22.6864 22.4761 23.5146Z"
                fill="#2E3E5C"
              />
              <path
                d="M30.6399 19.1362L36.3988 29.2959C37.6363 31.4292 36.9019 34.1572 34.7598 35.3881C34.4527 35.5646 34.0605 35.454 33.8908 35.1431C30.0252 28.0604 28.3135 24.9275 27.5315 23.5114C29.1973 22.6816 30.3985 21.0582 30.6399 19.1362V19.1362Z"
                fill="#2E3E5C"
              />
            </svg>

            <h6 className="text-indigo-950 text-lg sm:text-xl  font-semibold font-poppins leading-7">
              Innovation
            </h6>
            <p className="max-w-[262px] opacity-80 text-[#2E3E5C] text-sm sm:text-base font-normal font-poppins leading-7">
              We stay ahead of the curve, adopting the latest technologies and
              strategies to ensure your success.
            </p>
          </div>
          <div className="space-y-2.5">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#706FE5"
              />
              <path d="M30.143 15V35.8632H25.5715V15H30.143Z" fill="#54BD95" />
              <path
                d="M31.2856 15H32.9999C35.2091 15 36.9999 16.5568 36.9999 18.4772V32.386C36.9999 34.3064 35.2091 35.8632 32.9999 35.8632H31.2856V15Z"
                fill="#2E3E5C"
              />
              <path
                d="M24.4286 15V35.8632H19.8572V15H24.4286Z"
                fill="#2E3E5C"
              />
              <path
                d="M18.7143 15V35.8632H17C14.7909 35.8632 13 34.3064 13 32.386V18.4772C13 16.5568 14.7909 15 17 15H18.7143Z"
                fill="#54BD95"
              />
              <rect
                x="22.5938"
                y="26.6406"
                width="5.39062"
                height="1.45312"
                rx="0.726562"
                fill="#54BD95"
              />
            </svg>

            <h6 className="text-indigo-950 text-lg sm:text-xl  font-semibold font-poppins leading-7">
              Holistic Approach
            </h6>
            <p className="max-w-[262px] opacity-80 text-[#2E3E5C] text-sm sm:text-base font-normal font-poppins leading-7">
              Our integrated services cover all aspects of your blockchain
              journey, from development to market adoption.
            </p>
          </div>
          <div className="space-y-2.5 overflow-hidden">
            <svg
              width="351"
              height="50"
              viewBox="0 0 351 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.6108 30.0217L28.3788 33.3598H29.7998C30.0649 33.3598 30.2798 33.5466 30.2798 33.777C30.2798 34.0075 30.0649 34.1943 29.7998 34.1943H20.1998C19.9347 34.1943 19.7198 34.0075 19.7198 33.777C19.7198 33.5466 19.9347 33.3598 20.1998 33.3598H21.8318L22.5998 30.0217H18.2798C16.5871 30.0217 15.1868 28.9336 14.9539 27.5181H35.0458C34.8129 28.9336 33.4125 30.0217 31.7198 30.0217H27.6108Z"
                fill="#2E3E5C"
              />
              <path
                d="M14.9199 26.6833V17.9207C14.9199 17.2294 15.5646 16.6689 16.3599 16.6689H33.6399C34.4352 16.6689 35.0799 17.2294 35.0799 17.9207V26.6833H14.9199Z"
                fill="#54BD95"
              />
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#706FE5"
              />
              <rect
                x="345.453"
                y="33.0312"
                width="5.39062"
                height="1.45312"
                rx="0.726562"
                fill="#EAE9FB"
              />
            </svg>

            <h6 className="text-indigo-950 text-lg sm:text-xl  font-semibold font-poppins leading-7">
              Global Impact{" "}
            </h6>
            <p className="max-w-[262px] opacity-80 text-[#2E3E5C] text-sm sm:text-base font-normal font-poppins leading-7">
              Our projects have made waves in industries worldwide, establishing
              us as a trusted global partner.
            </p>
          </div>
        </div>
        <div className="max-w-md space-y-6 md:space-y-16">
          <h6 className=" text-indigo-950 text-3xl md:text-[40px] font-bold font-poppins capitalize leading-[52px] tracking-tight">
            How we can help you
            <br />
          </h6>
          <div className="space-y-5">
            <p className=" opacity-75 text-zinc-900 text-base sm:text-xl font-normal font-poppins leading-9 ml-2 ">
              Follow our newsletter. We will regulary update our latest project
              and availability.
            </p>

            <form className="w-full">
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.7">
                      <path
                        d="M12.6942 15.032C12.4675 15.1736 12.2125 15.2303 11.9858 15.2303C11.7591 15.2303 11.5041 15.1736 11.2774 15.032L0 8.14648V17.2988C0 19.2539 1.58678 20.8407 3.54191 20.8407H20.4581C22.4132 20.8407 24 19.2539 24 17.2988V8.14648L12.6942 15.032Z"
                        fill="#2E3E5C"
                      />
                      <path
                        d="M20.458 3.15918H3.54185C1.87007 3.15918 0.453305 4.34926 0.113281 5.93604L12.0141 13.1899L23.8866 5.93604C23.5466 4.34926 22.1298 3.15918 20.458 3.15918Z"
                        fill="#2E3E5C"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  type="email"
                  id="newsletter"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-transparent rounded-lg bg-opacity-10 bg-[#706FE5] focus:ring-[#027808] focus:border-[#027808] font-poppins"
                  placeholder="Enter your email address"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2 bottom-2 bg-[#027808] hover:bg-[#027808] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-xl shadow sm:text-lg px-4 sm:px-10 py-1.5 font-poppins"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
