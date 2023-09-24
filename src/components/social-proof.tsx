"use client";

import MySlider from "./slick-slider";

const SocialProof = () => {
  return (
    <div className="h-[30vh] flex flex-col justify-center items-center bg-white text-black pb-4 pt-6">
      <div className="w-full h-full mx-auto max-w-7xl px-24 py-10">
        <div className="w-full h-full mx-auto text-center">
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            We&apos;ve partnerd with the best in the industry.
          </h2>
          <div className="px-3">
            <MySlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
