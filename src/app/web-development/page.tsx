import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";
import web from "../../../public/web-development.png";

const Page = () => {
  return (
    <>
      <Hero
        image={web}
        title="Web Development"
        description="We have competent hands in handling your project the way you want it. Raging from online stores, E-commerce Web, Mobile app intregation, Cooperate Suites, Portfolio Sites, Personal blog and every other web related services."
      />{" "}
      <Portfolio />
    </>
  );
};

export default Page;
