import Image from "next/image";
import React, { ReactNode } from "react";

export interface ServiceCardProps {
  service: string[];
  description: string;
  image: ReactNode;
  color: string;
  bg: string;
  bg2: string;
}

const ServiceCard = ({
  service,
  description,
  image,
  bg,
  color,
  bg2,
}: ServiceCardProps) => {
  return (
    <div
      className={`relative flex flex-col  gap-y-6 rounded-[45px] shadow border-b-4 border border-zinc-900 p-5 pr-8 pb-10 ${bg}`}
    >
      <div className="flex justify-between items-center ">
        <h6 className="text-black text-3xl font-medium font-jost max-w-[12ch]">
          <span className={` rounded-[8px] px-2 ${bg2}`}>{service[0]}</span>{" "}
          <br />
          <span className={` rounded-[8px] px-2 ${bg2} -mt-2`}>
            {service[1]}
          </span>
        </h6>

        {image}
      </div>
      <p className={`text-lg font-medium font-poppins ${color}`}>
        {description}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="float-right"
        >
          <g clipPath="url(#clip0_728_7647)">
            <path
              d="M14.1716 15.7782L8.8076 10.4142L10.2218 9L18 16.7782L10.2218 24.5563L8.8076 23.1421L14.1716 17.7782H2V15.7782H14.1716Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </p>
    </div>
  );
};

export default ServiceCard;
