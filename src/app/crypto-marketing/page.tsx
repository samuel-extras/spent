import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";
import cryptoMarketing from "../../../public/crypto-marketing.png";

const Page = () => {
  return (
    <>
      <Hero
        image={cryptoMarketing}
        title="Crypto Marketing & PR"
        description="We build and manage, and we market! we are a one-stop shop for any crypto project; ranging from the birth of the crypto project ideas, the development stage, then to the peak of successful launch and mooning! We help in Crypto project development, Crypto PR and Marketing."
      />{" "}
      <Portfolio />
    </>
  );
};

export default Page;
