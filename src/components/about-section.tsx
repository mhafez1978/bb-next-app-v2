"use client";

import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-amber-400">
      <div className="max-w-7xl mx-auto px-24">
        <div className="container mx-auto flex flex-row justify-center lg:h-[40vh] md:min-h-[30vh] sm:min-h-[30vh]">
          <div className="w-1/2 min-h-[30vh] bg-[url('/images/idea-bg.webp')] bg-top bg-cover bg-no-repeat border-1 border-red-900"></div>
          <div className="w-1/2 min-h-[30vh] flex flex-col justify-center md:p-4 sm:py-2">
            <h2 className="text-6xl font-extrabold tracking-tight leading-tight text-left mb-4 text-gray-900 dark:text-white md:text-4xl">
              Our Approach To Success
            </h2>
            <p className="text-black text-lg dark:text-gray-400 ">
              Partnering with Blooming Brands will get you the right blend of
              strategic expertise, quality work, cutting-edge tech stack, and
              effective data driven online marketing promotions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
