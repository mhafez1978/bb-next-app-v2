"use client";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-amber-400">
      <div className="max-w-7xl mx-auto px-24">
        <div className="container mx-auto flex flex-row">
          <div className="w-1/2 h-[30vh] bg-[url('/images/idea-bg.webp')] bg-center bg-contain bg-no-repeat"></div>
          <div className="w-1/2 h-[30vh] flex flex-col justify-center">
            <h2 className="text-6xl font-extrabold tracking-tight leading-tight text-left mb-4 text-gray-900 dark:text-white md:text-4xl">
              About us
            </h2>
            <p className="text-black text-lg dark:text-gray-400 ">
              Blooming Brands has everything your business needs to launch and
              grow a successful business online. Our data driven services will
              help expand your brand reach locally or globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
