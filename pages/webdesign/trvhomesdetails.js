import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoAndAlternateOne from "./logoandalternateone.png";
import logoAndAlternateTwo from "./logoandalternatetwo.png";
import propertiesListedImg from "./propertieslisted.png";
import trvBanner from "./trvbanner.jpg";
import trvHomesOverlay from "./trvhomes.png";
import trvHomesConcept from "./trvhomesconcept.png";
import trvLandingPage from "./trvlandingpage.png";
import trvLot from "./trvlot.png";
import trvNextProject from "./trvnextproject.png";
import trvSelectionBooklet from "./trvSelectionBooklet.png";
import typographyImg from "./typography.png";

const TrvHomesDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="pt-10 md:pt-0">
        <Image
          alt="Mountains"
          src={trvBanner}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="w-full absolute top-0 flex justify-center items-center mt-2 md:mt-4">
        <div className="w-[93%] text-[12px] lg:text-[20px] font-poppins flex items-center text-black font-semibold font-poppins md:text-white">
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
        <h1 className="text-[20px] text-center md:text-left text-[#646464] font-poppins font-medium">
          ABOUT THE PROJECT
        </h1>
        <div className="">
          <div className=" ">
            <h1 className="overview-title mt-4 md:mt-0 text-[24px] text-center md:text-left md:text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
              Overview Of The Project <br />
              And Challenges
            </h1>
            <div className="flex order-last flex-col md:flex-row gap-x-16">
              <div className="md:w-3/4 text-[16px] lg:text-[20px] text-[#646464] 2xl:text-[24px] font-poppins font-medium leading-[24px] md:leading-[30px] text-center md:text-left lg:leading-[43px]">
                <p className="mb-4">
                  TRV Homes&apos; website was an exciting and challenging
                  project for our web development and design teams. The client
                  wanted us to create an image gallery to highlight residential
                  projects’ work on the website.
                </p>
                <p className="mb-4">
                  Although TRV Homes provided us with images of each custom
                  designed home that they have built, it was difficult for us to
                  combine them into an outdated website. Our developers updated
                  the site with the latest plugins and technologies to create a
                  visually appealing corporate platform with stunning photo
                  galleries of client projects.
                </p>
                <p className="mb-4">
                  Along with a good desktop view, we also made this website
                  mobile friendly. Additionally, lead generation forms were
                  added to all important pages in order to automatically
                  transfer qualified leads to the company&apos;s email address.
                  In the end, we created a website with an excellent user
                  experience and greater navigational features.
                </p>
              </div>
              <div className="md:w-1/4 order-first md:order-none flex gap-x-8 justify-between md:justify-start md:flex-col text-center md:text-left">
                <div className="w-1/2 md:w-full mb-8">
                  <h1 className="project-title text-[16px] md:text-[21px]">
                    PROJECTS
                  </h1>
                  <h1 className="seo-title text-[13px] md:text-[17px]">
                    Web designing and Development
                  </h1>
                </div>
                <div className="w-1/2 md:w-full">
                  <h1 className="project-title text-[16px] md:text-[21px]">
                    CLIENT
                  </h1>
                  <h1 className="czur-subtitle text-[13px] md:text-[17px]">
                    TRV HOMES
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******** */}

      {/* Typography and colors */}
      <div className="w-[95%] mt-8 md:mt-0 mx-auto flex">
        <div className="w-2/3">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-montserrat font-bold mb-4">
            TYPOGRAPHY
          </h1>
          <div className="text-[30px] md:text-[40px] 2xl:text-[78px]">
            <h1 className="font-bold">Open Sans 123</h1>
            <h1 className="">Open Sans 123</h1>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-poppins font-bold mb-4">
            COLORS
          </h1>
          <div className="">
            <h1 className="bg-[#FFCF45] px-2 py-3 rounded mb-4">#FFCF45</h1>
            <h1 className="bg-[#0D2D4B] px-2 py-3 rounded mb-4 text-white">
              #0D2D4B
            </h1>
            <h1 className="bg-[#F1CD3F] px-2 py-3 rounded mb-4">#F1CD3F</h1>
            <h1 className="bg-[#6D8F5A] px-2 py-3 rounded mb-4 text-white">
              #6D8F5A
            </h1>
          </div>
        </div>
      </div>
      {/* Unutrients */}
      <div className="mt-24">
        <Image
          alt="trvHomesOverlay"
          src={trvHomesOverlay}
          layout="responsive"
        />
      </div>
      {/* Logo and Alternate */}
      <div className="bg-[#F1F8FF]">
        <div className="w-[95%] mx-auto ">
          <h1 className="text-[#004681] pt-8 px-4 lg:p-8 text-[12px] sm:text-[20px] xl:text-[40px] 2xl:text-[45px] font-bold font-nanummy">
            Logo & Alternates
          </h1>
          <div className="flex justify-between items-center">
            <div className="w-1/3">
              <Image
                alt="logoAndAlternateOne"
                src={logoAndAlternateOne}
                layout="responsive"
              />
            </div>
            <div className="w-1/3">
              <Image
                alt="logoAndAlternateTwo"
                src={logoAndAlternateTwo}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      {/* typographyImg */}
      <div className="">
        <Image alt="typographyImg" src={typographyImg} layout="responsive" />
      </div>
      {/* trvHomesConcept */}
      <div className="">
        <Image
          alt="trvHomesConcept"
          src={trvHomesConcept}
          layout="responsive"
        />
      </div>
      {/* Signature Colours */}
      <div className="bg-[#F1F8FF]">
        <div className="w-[95%] pb-8 mx-auto ">
          <h1 className="text-[#004681] py-8 px-4 lg:p-8 text-[12px] sm:text-[20px] xl:text-[40px] 2xl:text-[45px] font-bold font-nanummy ">
            Signature Colours
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="">
              <div className="py-8 bg-[#AAC5E4]"></div>
              <div className="py-8 bg-[#57779C]"></div>
              <div className="py-8 bg-[#253E5B]"></div>
            </div>
            <div className="">
              <div className="py-8 bg-[#FFB594]"></div>
              <div className="py-8 bg-[#EA8052]"></div>
              <div className="py-8 bg-[#DD591F]"></div>
            </div>
            <div className="">
              <div className="py-8 bg-[#8A8A8A]"></div>
              <div className="py-8 bg-[#292B34]"></div>
              <div className="py-8 bg-[#0E101A]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* The Pouch */}
      <div className="bg-[#F1F8FF] ">
        <div className="mx-auto">
          <Image
            alt="trvLandingPage"
            src={trvLandingPage}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 py-12">
          <Image alt="trvLot" src={trvLot} layout="responsive" />
        </div>
        <div className="w-2/3 ml-auto">
          <Image
            alt="propertiesListedImg"
            src={propertiesListedImg}
            layout="responsive"
          />
        </div>
        <div className="w-4/5 py-12">
          <Image
            alt="trvSelectionBooklet"
            src={trvSelectionBooklet}
            layout="responsive"
          />
        </div>
      </div>
      {/* Plants */}
      <div className="bg-[#F1F8FF] ">
        <h1 className="text-[30px] lg:text-[45px] text-[#253E5B] mb-12 font-poppins font-bold text-center view-next-title">
          View Next Project
        </h1>
        <div className=" ">
          <Image
            alt="trvNextProject"
            src={trvNextProject}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default TrvHomesDetails;
