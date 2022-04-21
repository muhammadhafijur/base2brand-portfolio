import Image from "next/image";
import Link from "next/link";
import React from "react";
import czurAnalytics from "./czuranalytics.png";
import czurBanner from "./czurbanner.png";
import czurTech from "./czurTech.png";
import czurUltraPro from "./czurultrapro.png";
import insightImg from "./insgihtimg.png";

const CzurDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="static">
        <Image
          alt="Mountains"
          src={czurBanner}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="w-full absolute top-0 flex justify-center items-center mt-2 md:mt-4">
        <div className="w-[93%] text-[12px] lg:text-[20px] font-semibold font-poppins flex items-center text-black">
          <Link href="/webdesign/webdesigncasestudy">
            <a>
              <h1 className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 lg:h-6 lg:w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>{" "}
                BACK TO HOME
              </h1>
            </a>
          </Link>
          <h1 className="ml-auto">ABOUT</h1>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="w-8 h-8 mx-auto mt-12 animate animate-bounce flex justify-center items-center bg-gray-800 rounded-full text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <div className="w-[93%] mx-auto mt-12 ">
        <h1 className="text-[20px] text-[#646464] font-poppins">
          ABOUT THE PROJECT
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-x-16">
          <div className="md:w-3/4 ">
            <h1 className="overview-title text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
              Overview Of The Project <br /> And Challenges
            </h1>
            <div className="text-[20px] text-[#646464] 2xl:text-[24px]">
              <p className="mb-4">
                CZUR is a big brand in the digital world; strengthening its
                online presence among the target audience was a great challenge
                for Base 2 Brand. We handled the digital marketing operations of
                CZUR, specifically SEO.
              </p>
              <p className="mb-4">
                We manage link building, content marketing, and local search
                engine optimization for the brand. The CZUR&apos;s official
                blogs now rank on the first page of Google for almost every
                targeted keyword.
              </p>
              <p className="mb-4">
                Thanks to our SEO experts&apos; efforts, our client&apos;s
                website is receiving more traffic and generating higher ROI
                through our white hat SEO techniques.
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="mb-8">
              <h1 className="project-title text-[21px]">PROJECTS</h1>
              <h1 className="seo-title text-[17px]">SEO</h1>
            </div>
            <div className="">
              <h1 className="project-title text-[21px]">CLIENT</h1>
              <h1 className="czur-subtitle text-[17px]">U Nutrients</h1>
            </div>
          </div>
        </div>
      </div>

      {/* ******** */}
      <div className="w-[93%] mx-auto my-16">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/5">
            <h1 className="czur-details-title text-[40px] lg:text-[60px] 2xl:text-[78px]">
              CZUR
            </h1>
          </div>
          <div className="md:w-3/5">
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8">
              CZUR offers portable document scanners for businesses and
              organizations to digitize their hardcopy documents.
            </p>
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464]">
              CZUR’s products have now been sold around the globe with a strong
              acceptance among users across all demographics. Professionals in
              the book scanning industry have also given it glowing reviews.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* CZUR Analytics */}
      <div className="w-[60%] mx-auto my-32">
        <Image alt="czurAnalytics" src={czurAnalytics} layout="responsive" />
      </div>
      {/* CZUR Tech */}
      <div className="w-[90%] mx-auto my-16">
        <Image alt="czur" src={czurTech} layout="responsive" />
      </div>
      {/* Czur ultra pro */}
      <div className=" mx-auto my-16">
        <Image alt="czur" src={czurUltraPro} layout="responsive" />
      </div>
      {/* Insights */}
      <div className="">
        <h1 className="text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
          View Next Project
        </h1>
        <div className=" ">
          <Image alt="czur" src={insightImg} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default CzurDetails;
