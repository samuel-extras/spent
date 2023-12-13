import Hero from "@/components/Hero";
import Image from "next/image";
import Portfolio from "@/components/Portfolio";
import Blockchain from "../../public/blockchain.png";

export default function Home() {
  return (
    <>
      <Hero
        image={Blockchain}
        title="Our Blockchain Development use cases"
        description="We're pioneers in creating bespoke blockchain solutions tailored to meet the unique needs of businesses of all sizes. From decentralized applications (dApps) and smart contracts to blockchain-based supply chains and marketplaces, our experienced team will bring your vision to life.
"
      />
      <Portfolio />
    </>
  );
}
