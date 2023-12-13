import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Nothing_You_Could_Do,
  Poppins,
  Jost,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nothing-you-could-do",
  weight: ["400"],
});
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Spent Digital lab",
  description: "Build a chain that will control the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jost.variable} ${poppins.variable} ${nothingYouCouldDo.variable} ${montserrat.variable} ${josefin_sans.variable} `}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
