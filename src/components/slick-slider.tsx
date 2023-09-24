"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const [settings] = useState({
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  });

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        <div className="mr-2">
          <Image
            src="/images/cpanel-logo.png"
            width={180}
            height={54}
            alt="cPanel"
          />
        </div>
        <div className="mr-2">
          <Image
            src="/images/azure-logo.png"
            width={180}
            height={54}
            alt="azure"
          />
        </div>
        <div className="mr-2">
          <Image src="/images/aws-logo.png" width={200} height={64} alt="aws" />
        </div>
        <div className="mr-2">
          <Image
            src="/images/do-logo.png"
            width={180}
            height={54}
            alt="digital ocean"
          />
        </div>
        <div className="mr-2">
          <Image
            src="/images/netlify-logo.png"
            width={180}
            height={54}
            alt="Netlify"
          />
        </div>
        <div className="mr-2">
          <Image
            src="/images/heroku-logo.png"
            width={180}
            height={54}
            alt="Heroku"
          />
        </div>
        <div className="mr-2">
          <Image
            src="/images/google-ads-logo2.png"
            width={180}
            height={54}
            alt="Google Ads"
          />
        </div>
        <div className="mr-2">
          <Image
            src="/images/ms-ads-logo.png"
            width={180}
            height={54}
            alt="Microsoft Advertisement"
          />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
