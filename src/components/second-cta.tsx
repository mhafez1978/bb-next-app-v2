"use client";
import React from "react";

const SecondCallToAction = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center gap-10 bg-[url('/images/blooming-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <h3 className="text-center text-9xl text-slate-950 font-black mx-32">
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
