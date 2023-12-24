import Image, { StaticImageData } from "next/image";
import React from "react";

export interface ProductCardProps {
  image: string | StaticImageData;
  name: string;
  description: string;
  CTA: string;
}

const ProductCard = ({ image, name, description, CTA }: ProductCardProps) => {
  return (
    <div className="bg-[#54BD95] bg-opacity-5 rounded-[10px] border border-[#027808] p-2.5">
      <Image src={image} alt="" />
      <div className="pt-5 pb-2.5 px-5 divide-y-2  divide-[#D9D9D9] ">
        <div className="pb-4 inline-flex flex-col gap-3">
          <h6 className="text-black text-4xl font-semibold font-inter leading-[38.27px]">
            {name}
          </h6>
          <p className="text-black text-xl font-normal font-['Inter'] leading-snug">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center pt-4 gap-6">
          <p className="text-black text-xl font-light font-inter leading-snug">
            {CTA}
          </p>{" "}
          <div className="inline-flex gap-4 xl:gap-6 items-center">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_816_6180)">
                <path
                  d="M16.5 3.79492C0.2838 3.79492 0 5.23702 0 16.4999C0 27.7628 0.2838 29.2049 16.5 29.2049C32.7162 29.2049 33 27.7628 33 16.4999C33 5.23702 32.7162 3.79492 16.5 3.79492ZM21.7882 17.051L14.3798 20.5094C13.7313 20.8097 13.2 20.4731 13.2 19.757V13.2428C13.2 12.5284 13.7313 12.1901 14.3798 12.4904L21.7882 15.9488C22.4367 16.2524 22.4367 16.7474 21.7882 17.051Z"
                  fill="#3F0000"
                />
              </g>
              <defs>
                <clipPath id="clip0_816_6180">
                  <rect width="33" height="33" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.875 11V22C28.875 23.8234 28.1507 25.572 26.8614 26.8614C25.572 28.1507 23.8234 28.875 22 28.875H11C9.17664 28.875 7.42795 28.1507 6.13864 26.8614C4.84933 25.572 4.125 23.8234 4.125 22V11C4.125 9.17664 4.84933 7.42795 6.13864 6.13864C7.42795 4.84933 9.17664 4.125 11 4.125H22C23.8234 4.125 25.572 4.84933 26.8614 6.13864C28.1507 7.42795 28.875 9.17664 28.875 11Z"
                stroke="#3F0000"
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 16.5C12.9342 16.5 12.1366 16.7419 11.4583 17.1952C10.7799 17.6484 10.2512 18.2927 9.939 19.0464C9.62679 19.8002 9.5451 20.6296 9.70426 21.4297C9.86343 22.2299 10.2563 22.9649 10.8332 23.5418C11.4101 24.1187 12.1451 24.5116 12.9453 24.6707C13.7454 24.8299 14.5748 24.7482 15.3286 24.436C16.0823 24.1238 16.7266 23.5951 17.1798 22.9167C17.6331 22.2384 17.875 21.4408 17.875 20.625V8.25C18.3329 9.625 20.075 12.375 23.375 12.375"
                stroke="#3F0000"
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_816_6182)">
                <path
                  d="M10.997 28.6267V18.9842H8.00762V14.5532H10.997V12.6441C10.997 7.70801 13.23 5.42064 18.0755 5.42064C18.56 5.42064 19.2294 5.47139 19.8493 5.5451C20.3136 5.59287 20.7742 5.67159 21.228 5.78072V9.79843C20.9656 9.77396 20.7024 9.75945 20.439 9.75493C20.1438 9.74727 19.8485 9.74364 19.5532 9.74406C18.699 9.74406 18.032 9.86006 17.5293 10.1174C17.1914 10.287 16.9073 10.5472 16.7088 10.869C16.3971 11.3765 16.2569 12.0713 16.2569 12.986V14.5532H20.9924L20.526 17.0943L20.1792 18.9842H16.2569V28.9469C23.4368 28.0793 29 21.9663 29 14.5532C29 6.5456 22.5076 0.0532227 14.5 0.0532227C6.49238 0.0532227 0 6.5456 0 14.5532C0 21.3537 4.68108 27.0595 10.997 28.6267Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_816_6182">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 13.09C15.8256 13.09 15.1663 13.29 14.6055 13.6647C14.0447 14.0394 13.6077 14.572 13.3496 15.195C13.0915 15.8181 13.0239 16.5038 13.1555 17.1653C13.2871 17.8267 13.6119 18.4343 14.0888 18.9112C14.5657 19.3881 15.1733 19.7129 15.8347 19.8445C16.4962 19.9761 17.1819 19.9085 17.805 19.6504C18.428 19.3923 18.9606 18.9553 19.3353 18.3945C19.71 17.8337 19.91 17.1744 19.91 16.5C19.91 16.0522 19.8218 15.6088 19.6504 15.195C19.4791 14.7813 19.2279 14.4054 18.9112 14.0888C18.5946 13.7721 18.2187 13.5209 17.805 13.3496C17.3912 13.1782 16.9478 13.09 16.5 13.09ZM30.1538 9.72125C30.1465 8.65942 29.951 7.60729 29.5763 6.61375C29.3003 5.88673 28.8732 5.2265 28.3234 4.67663C27.7735 4.12676 27.1133 3.69974 26.3863 3.42375C25.3927 3.04901 24.3406 2.85348 23.2788 2.84625C21.505 2.75 20.9825 2.75 16.5 2.75C12.0175 2.75 11.495 2.75 9.72125 2.84625C8.65942 2.85348 7.60729 3.04901 6.61375 3.42375C5.88673 3.69974 5.2265 4.12676 4.67663 4.67663C4.12676 5.2265 3.69974 5.88673 3.42375 6.61375C3.04901 7.60729 2.85348 8.65942 2.84625 9.72125C2.75 11.495 2.75 12.0175 2.75 16.5C2.75 20.9825 2.75 21.505 2.84625 23.2788C2.86105 24.3443 3.05631 25.3997 3.42375 26.4C3.69851 27.1237 4.12518 27.7801 4.675 28.325C5.22252 28.8782 5.88416 29.3052 6.61375 29.5763C7.60729 29.951 8.65942 30.1465 9.72125 30.1538C11.495 30.25 12.0175 30.25 16.5 30.25C20.9825 30.25 21.505 30.25 23.2788 30.1538C24.3406 30.1465 25.3927 29.951 26.3863 29.5763C27.1158 29.3052 27.7775 28.8782 28.325 28.325C28.8748 27.7801 29.3015 27.1237 29.5763 26.4C29.9506 25.4016 30.1461 24.345 30.1538 23.2788C30.25 21.505 30.25 20.9825 30.25 16.5C30.25 12.0175 30.25 11.495 30.1538 9.72125ZM26.6612 20.7212C26.6171 21.5698 26.436 22.4056 26.125 23.1963C25.8581 23.8558 25.4612 24.455 24.9581 24.9581C24.455 25.4612 23.8558 25.8581 23.1963 26.125C22.3981 26.4187 21.5576 26.5812 20.7075 26.6063H12.2925C11.4424 26.5812 10.6019 26.4187 9.80375 26.125C9.12189 25.8716 8.50613 25.4674 8.0025 24.9425C7.50429 24.4492 7.11954 23.8533 6.875 23.1963C6.58014 22.3989 6.42208 21.5575 6.4075 20.7075V12.2925C6.42208 11.4425 6.58014 10.6011 6.875 9.80375C7.12839 9.12189 7.53263 8.50613 8.0575 8.0025C8.55296 7.50698 9.14824 7.12263 9.80375 6.875C10.6019 6.58131 11.4424 6.41879 12.2925 6.39375H20.7075C21.5576 6.41879 22.3981 6.58131 23.1963 6.875C23.8781 7.12839 24.4939 7.53263 24.9975 8.0575C25.4957 8.55078 25.8805 9.14668 26.125 9.80375C26.4187 10.6019 26.5812 11.4424 26.6063 12.2925V16.5C26.6063 19.3325 26.7025 19.6213 26.6612 20.7075V20.7212ZM24.4613 10.4913C24.2975 10.0471 24.0394 9.64376 23.7047 9.30904C23.37 8.97433 22.9666 8.71621 22.5225 8.5525C21.9126 8.34111 21.2703 8.23871 20.625 8.25H12.375C11.7264 8.25634 11.084 8.37737 10.4775 8.6075C10.0402 8.76378 9.64108 9.01135 9.3068 9.33378C8.97253 9.6562 8.71071 10.0461 8.53875 10.4775C8.33907 11.0899 8.24151 11.7309 8.25 12.375V20.625C8.26363 21.2729 8.38443 21.9141 8.6075 22.5225C8.77121 22.9666 9.02933 23.37 9.36404 23.7047C9.69876 24.0394 10.1021 24.2975 10.5463 24.4613C11.1329 24.677 11.7503 24.7977 12.375 24.8187H20.625C21.2736 24.8124 21.916 24.6914 22.5225 24.4613C22.9666 24.2975 23.37 24.0394 23.7047 23.7047C24.0394 23.37 24.2975 22.9666 24.4613 22.5225C24.6914 21.916 24.8124 21.2736 24.8187 20.625V12.375C24.8191 11.7257 24.6979 11.0821 24.4613 10.4775V10.4913ZM16.5 21.7525C15.8109 21.7525 15.1285 21.6165 14.492 21.3524C13.8555 21.0883 13.2774 20.7012 12.7908 20.2132C12.3041 19.7253 11.9185 19.1462 11.6561 18.509C11.3936 17.8718 11.2594 17.1891 11.2612 16.5C11.2613 15.4606 11.5697 14.4445 12.1474 13.5804C12.7252 12.7164 13.5463 12.0432 14.5069 11.646C15.4675 11.2489 16.5243 11.1457 17.5435 11.3495C18.5628 11.5532 19.4987 12.0549 20.2327 12.7908C20.9667 13.5268 21.4659 14.464 21.667 15.4837C21.8681 16.5035 21.7621 17.5601 21.3625 18.5196C20.9628 19.4791 20.2874 20.2985 19.4219 20.874C18.5563 21.4495 17.5394 21.7552 16.5 21.7525ZM22 12.2788C21.696 12.2466 21.4148 12.1031 21.2103 11.8758C21.0059 11.6486 20.8928 11.3538 20.8928 11.0481C20.8928 10.7425 21.0059 10.4476 21.2103 10.2204C21.4148 9.9932 21.696 9.84967 22 9.8175C22.304 9.84967 22.5852 9.9932 22.7897 10.2204C22.9941 10.4476 23.1072 10.7425 23.1072 11.0481C23.1072 11.3538 22.9941 11.6486 22.7897 11.8758C22.5852 12.1031 22.304 12.2466 22 12.2788Z"
                fill="#3F0000"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;