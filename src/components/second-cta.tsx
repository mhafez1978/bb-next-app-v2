"use client";
import React from "react";

const SecondCallToAction = () => {
  return (
    <div className="w-full h-[50vh] mt-36 flex flex-col justify-center items-center bg-[url('/images/blooming-bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
      <h3 className="text-center text-6xl w-1/2 mx-auto mb-8 text-slate-950 font-black mx-32">
        your business will Bloom with us
      </h3>
      <button
        className="border-2 border-amber-400	px-4 py-2 rounded w-[240px] h-[74px] hover:bg-red-500/50 hover:scale-125 transition-all duration-30"
        type="button"
      >
        <a className="text-black font-semibold text-2xl" href="#">
          Let&apos;s Talk
        </a>
      </button>
    </div>
  );
};

export default SecondCallToAction;
