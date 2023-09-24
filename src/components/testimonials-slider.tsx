"use client";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TestimonialSlider = () => {
  const [settings] = useState({
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 9000,
    centerMode: true,
    easing: "ease-in-out",
  });

  return (
    <div className="w-[60vw] min-h-[30vh] mx-auto p-12">
      <h3 className="text-center text-3xl text-black font-semibold mb-8">
        What our customers are saying
      </h3>
      <Slider {...settings} className="h-full">
        <div>
          <figure className="max-w-screen-md mx-auto text-center">
            <center>
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 7H4V37H11V42L21 37H44V7Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 16V17"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 16V17"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </center>

            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                &quot;Blooming Brands are experts in everything web and
                delivered on their promise. We&apos;ll be coming back with more
                projects&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <Image
                width={50}
                height={50}
                className="w-6 h-6 rounded-full"
                src="/images/michael-gouch.png"
                alt="profile picture"
              /> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Frank vituttie
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  PWWL Owner
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="max-w-screen-md mx-auto text-center">
            <center>
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 7H4V37H11V42L21 37H44V7Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 16V17"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 16V17"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </center>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                &quot;Very professional, on-time, and on-budget. I would
                recommend Blooming Brands for any project&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <Image
                width={50}
                height={50}
                className="w-6 h-6 rounded-full"
                src="/images/michael-gouch.png"
                alt="profile picture"
              /> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Nic Smits
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  Engineer at WorldCom
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="max-w-screen-md mx-auto text-center">
            <center>
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 7H4V37H11V42L21 37H44V7Z"
                  fill="none"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 16V17"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 16V17"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25"
                  stroke="#333"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </center>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                &quot;Blooming Brands software team was able to collaborate with
                our in-house team, together we created a modern intranet website
                for internal use&quot;
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <Image
                width={50}
                height={50}
                className="w-6 h-6 rounded-full"
                src="/images/michael-gouch.png"
                alt="profile picture"
              /> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Ramesh Akbar
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  Foudner DynamicConnections
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
