"use client";
import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Spinner } from "flowbite-react";
import PageHeader from "../components/PageHeader";

interface Props {
  pageTitle?: string;
}

const PortfolioPage = () => {
  const [loaded, setLoaded] = useState(false);
  const Folio = [
    {
      id: 0,
      company: "Prestige Worldwide Limos",
      short: "PWWL",
      src: "/images/PWWL.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 1,
      company: "Being Mohamed Hafez",
      short: "BeingMH",
      src: "/images/BeingMohamedHafez.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 2,
      company: "Captain Ehab Design Studio",
      short: "CEDS",
      src: "/images/CaptianEhabDesignStudio.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 3,
      company: "Thackston Realty Group",
      short: "TRG",
      src: "/images/ThackstonRealty.png",
      w: "100%",
      h: "100%",
    },
    // {
    //   id: 4,
    //   company: "Thackston Realty Group",
    //   short: "TRG",
    //   src: "/images/ThackstonRealty.png",
    //   w: "100%",
    //   h: "100%",
    // },
    // {
    //   id: 5,
    //   company: "Thackston Realty Group",
    //   short: "TRG",
    //   src: "/images/ThackstonRealty.png",
    //   w: "100%",
    //   h: "100%",
    // },
    // {
    //   id: 6,
    //   company: "Thackston Realty Group",
    //   short: "TRG",
    //   src: "/images/ThackstonRealty.png",
    //   w: "100%",
    //   h: "100%",
    // },
    // {
    //   id: 7,
    //   company: "Thackston Realty Group",
    //   short: "TRG",
    //   src: "/images/ThackstonRealty.png",
    //   w: "100%",
    //   h: "100%",
    // },
    // {
    //   id: 8,
    //   company: "Thackston Realty Group",
    //   short: "TRG",
    //   src: "/images/ThackstonRealty.png",
    //   w: "100%",
    //   h: "100%",
    // },
    {
      id: 9,
      company: "Carolina Recycles",
      short: "CR",
      src: "/images/carolina-recycles.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 10,
      company: "Nodes Unlimited",
      short: "NU",
      src: "/images/nodes-unlimited.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 11,
      company: "JL Auto Repairs",
      short: "JLAuto",
      src: "/images/charlotte-auto-wiz.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 12,
      company: "PWWL",
      short: "PWWL",
      src: "/images/old-pwwl.png",
      w: "100%",
      h: "100%",
    },
    {
      id: 13,
      company: "placeholder",
      short: "",
      src: "/images/placeholder.png",
      w: "100%",
      h: "100%",
    },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded === false && (
        <div className="z-50 absolute right-0 bottom-0 bg-[#222222] h-[100vh] w-[100vw] top-0 left-0 flex flex-col justify-center items-center">
          <span className="sr-only">Loading...</span>
          <Spinner
            aria-label="Warning spinner example"
            color="warning"
            size="xl"
            className="w-[300px] h-[300px]"
          />
          <h1 className="py-8 text-center text-white text-3xl">Loading ...</h1>
        </div>
      )}
      <div>
        <PageHeader pageTitle="Portfolio" />
        <div className=" max-w-10xl py-10 px-[90px]">
          <div className="overflow-y-scroll lg:w-[80vw] md:w-[100vw] h-[80vh] scroll-m-0 mx-auto z-20">
            <ResponsiveMasonry
            // columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
            >
              <Masonry gutter="20px" columnsCount={2}>
                {Folio.map((each) => (
                  <div
                    key={each.id}
                    className="mr-2 mb-2 rounded border-1 border-slate-300"
                  >
                    <img
                      width="960px"
                      height="500px"
                      src={each.src}
                      alt={each.company}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
