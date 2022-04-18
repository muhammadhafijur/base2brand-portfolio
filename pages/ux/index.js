import Image from "next/image";
import React from "react";
import circle from "./circle.png";
import logo from "./logo.png";
import uxgif from "./ux.gif";
import workContact from "./work-contact.png";

const Ux = () => {
  return (
    <div>
      <div className="overlay bg-gray-800 relative overflow-hidden w-screen h-screen">
        <header className="text-gray-600 relative z-10 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={logo} alt="Picture of the logo" />
            </a>

            <button className="md:ml-auto flex flex-wrap items-center text-base justify-center border-0 py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">
              <div className="w-32">
                <Image
                  src={workContact}
                  alt="Picture of the work contact logo"
                />
              </div>
            </button>
          </div>
        </header>
        <div className="container">
          <Image
            src={uxgif}
            alt="Picture of the banner"
            layout="fill"
            objectFit="cover"
            // quality={100}
          />
        </div>
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center ">
          <div className="w-full font-mono flex flex-col items-center relative z-10">
            <Image
              width={400}
              height={400}
              src={circle}
              alt="Picture of the banner"
            />
            <h1
              style={{ color: "#06C3B8" }}
              className="font-extrabold absolute top-32 bottom-0 align-center  text-7xl text-center web-font leading-tight mt-4"
            >
              UX/UI
            </h1>
            <button className="absolute top-[250px] bg-yellow-500 px-12 py-2">
              EXPLORE
            </button>
            <p className="font-extrabold  text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ux;