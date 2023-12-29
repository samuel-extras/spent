import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";
import web from "../../../../public/crypto-marketing.png";
import More, { MoreProps } from "@/components/More";

const more: MoreProps = {
  heading: "MORE ON Crypto Marketing & PR",
  card: [
    {
      heading: "Crypto Project Development",
      description:
        "Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.7497 4.58331H6.24967C5.80765 4.58331 5.38372 4.75891 5.07116 5.07147C4.7586 5.38403 4.58301 5.80795 4.58301 6.24998V33.75C4.58301 34.192 4.7586 34.6159 5.07116 34.9285C5.38372 35.2411 5.80765 35.4166 6.24967 35.4166H33.7497C34.1917 35.4166 34.6156 35.2411 34.9282 34.9285C35.2407 34.6159 35.4163 34.192 35.4163 33.75V6.24998C35.4163 5.80795 35.2407 5.38403 34.9282 5.07147C34.6156 4.75891 34.1917 4.58331 33.7497 4.58331Z"
            stroke="#027808"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8254 35.4167L17.3429 25.9558L18.4904 28.5258L21.3862 20.5033L22.8404 22.4233L24.9354 17.7875L25.8754 18.9792L35.4171 7.61084M11.8937 11.735H10.4629"
            stroke="#027808"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.8936 11.735V15.7733H14.5594C15.0949 15.7733 15.6085 15.5606 15.9872 15.1819C16.3658 14.8033 16.5786 14.2897 16.5786 13.7542C16.5786 13.2186 16.3658 12.7051 15.9872 12.3264C15.6085 11.9477 15.0949 11.735 14.5594 11.735H11.8936Z"
            stroke="#027808"
            stroke-linejoin="round"
          />
          <path
            d="M11.8936 15.7733V20.0775H14.7352C15.0214 20.0831 15.3058 20.0316 15.5719 19.926C15.8379 19.8204 16.0802 19.6627 16.2846 19.4623C16.489 19.2619 16.6513 19.0228 16.7621 18.7589C16.873 18.495 16.9301 18.2116 16.9301 17.9254C16.9301 17.6392 16.873 17.3558 16.7621 17.0919C16.6513 16.828 16.489 16.5888 16.2846 16.3884C16.0802 16.188 15.8379 16.0304 15.5719 15.9248C15.3058 15.8192 15.0214 15.7677 14.7352 15.7733H11.8936Z"
            stroke="#027808"
            stroke-linejoin="round"
          />
          <path
            d="M11.8937 20.075H10.4629M11.8904 20.1017V21.4258M14.2062 20.1017V21.4258M11.8904 10.2767V11.6017M14.2062 10.2767V11.6017"
            stroke="#027808"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      heading: "Crypto PR",
      description:
        "Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.0003 31.6667H38.3337V35H1.66699V31.6667H5.00033V6.66667C5.00033 5.7462 5.74653 5 6.66699 5H23.3337C24.2542 5 25.0003 5.7462 25.0003 6.66667V31.6667H31.667V18.3333H28.3337V15H33.3337C34.2542 15 35.0003 15.7462 35.0003 16.6667V31.6667ZM8.33366 8.33333V31.6667H21.667V8.33333H8.33366ZM11.667 18.3333H18.3337V21.6667H11.667V18.3333ZM11.667 11.6667H18.3337V15H11.667V11.6667Z"
            fill="#027808"
          />
        </svg>
      ),
    },
    {
      heading: "Marketing",
      description:
        "Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.",
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_462_417)">
            <path
              d="M35.625 5.24998C35.1952 4.97194 34.7037 4.80372 34.1937 4.76013C33.6837 4.71654 33.1707 4.7989 32.7 4.99998L17.275 11.075C16.9098 11.2236 16.5193 11.3 16.125 11.3H6.25C5.4212 11.3 4.62634 11.6292 4.04029 12.2153C3.45424 12.8013 3.125 13.5962 3.125 14.425V14.675H0V22.175H3.125V22.5C3.14458 23.3157 3.48245 24.0914 4.06639 24.6614C4.65033 25.2313 5.43403 25.5502 6.25 25.55L10 33.5C10.2539 34.0353 10.6537 34.4882 11.1534 34.8066C11.6531 35.125 12.2325 35.296 12.825 35.3H14.4C15.2245 35.2934 16.0129 34.9612 16.5936 34.3759C17.1742 33.7906 17.5 32.9995 17.5 32.175V25.85L32.7 31.925C33.0739 32.0738 33.4726 32.1501 33.875 32.15C34.4993 32.1399 35.1072 31.9489 35.625 31.6C36.0362 31.3223 36.3754 30.9508 36.6145 30.5161C36.8536 30.0813 36.9857 29.5959 37 29.1V7.82498C36.9977 7.31627 36.8713 6.81581 36.6316 6.36706C36.392 5.91832 36.0465 5.53486 35.625 5.24998ZM14.375 14.425V22.5H6.25V14.425H14.375ZM14.375 32.175H12.8L9.725 25.55H14.375V32.175ZM18.425 22.875C18.1282 22.7233 17.8187 22.5978 17.5 22.5V14.25C17.8156 14.1849 18.1251 14.0929 18.425 13.975L33.875 7.82498V29.025L18.425 22.875ZM37.075 15.3V21.55C37.9038 21.55 38.6987 21.2207 39.2847 20.6347C39.8708 20.0486 40.2 19.2538 40.2 18.425C40.2 17.5962 39.8708 16.8013 39.2847 16.2153C38.6987 15.6292 37.9038 15.3 37.075 15.3Z"
              fill="#027808"
            />
          </g>
          <defs>
            <clipPath id="clip0_462_417">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],
};

const Page = () => {
  return (
    <>
      <Hero
        image={web}
        title="Crypto Marketing & PR"
        description="We build and manage, and we market! we are a one-stop shop for any crypto project; ranging from the birth of the crypto project ideas, the development stage, then to the peak of successful launch and mooning! We help in Crypto project development, Crypto PR and Marketing."
      />{" "}
      <More card={more.card} heading={more.heading} />
    </>
  );
};

export default Page;
