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
    </>
  );
};

export default Page;
