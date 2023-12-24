import Image from "next/image";
import React from "react";
import spentAcademy from "../../../public/spentAcademy.png";
import spactv from "../../../public/spactv.png";
import webstant from "../../../public/webstant.png";
import goviral from "../../../public/goviral.png";
import ProductCard, { ProductCardProps } from "../ProductCard";

const products: ProductCardProps[] = [
  {
    name: "SpentAcademy",
    CTA: "Visit Main site",
    description: "We Build, We Brand, We Educate and Onboard crypto newbies",
    image: spentAcademy,
  },
  {
    name: "SpacTV",
    CTA: "Subscribe to us",
    description: "Blockchain, AI and Tech shows and podcasts",
    image: spactv,
  },
  {
    name: "My ViralPlug",
    CTA: "Services Provided",
    description: "Go viral with myviralplug SMM web tools",
    image: goviral,
  },
  {
    name: "Webstant",
    CTA: "Services Provided",
    description: "One click storebuilder",
    image: webstant,
  },
  {
    name: "My ViralPlug",
    CTA: "Services Provided",
    description: "Go viral with myviralplug SMM web tools",
    image: goviral,
  },
  {
    name: "Webstant",
    CTA: "Services Provided",
    description: "One click storebuilder",
    image: webstant,
  },
];

const Ecosystem = () => {
  return (
    <section className="max-w-[90rem] mx-auto py-20 px-6 sm:px-8 lg:pt-20 lg:p-20 lg:pb-20 w-full grow flex flex-col  md:gap-20 md:overflow-hidden relative min-h-screen 2xl:min-h-fit ">
      <div className="w-fit">
        <p className="text-zinc-800 text-5xl font-bold font-jost leading-[51.02px] ">
          Our Ecosystem{" "}
        </p>
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
      <div className="grid md:grid-cols-2 gap-10 py-4 ">
        {products.map((product, i) => (
          <ProductCard key={product.name + i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Ecosystem;
