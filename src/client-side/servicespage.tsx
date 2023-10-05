"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "@/components/page-header";
import { Spinner } from "flowbite-react";
import ServiceDetailsRight from "@/components/services-details-right";
import ServiceDetailsLeft from "@/components/services-details-left";

interface Props {
  pageTitle?: string;
}

const ServicesPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {loaded === false && (
        <div className="z-50 bg-[#222222] h-[100vh] w-[100vw] absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
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

      <PageHeader pageTitle="Services" />
      <div className="w-full min-h-[20vh] flex flex-col">
        <div>
          <ServiceDetailsLeft
            scrollId="webdesign"
            serviceTitle="Web Design"
            serviceDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          minima, dolores obcaecati magnam fugiat aliquid recusandae eum
          necessitatibus odit corporis ducimus praesentium possimus temporibus
          aliquam, aut, aspernatur reprehenderit asperiores nostrum"
            serviceImage={"/images/web-design-service.png"}
            serviceAltText={"web-design-infographic"}
            background="slate-400"
            color="slate-950"
          />
        </div>
        <div className="">
          <ServiceDetailsRight
            scrollId="jamstack"
            serviceTitle="JameStack Apps"
            serviceDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          minima, dolores obcaecati magnam fugiat aliquid recusandae eum
          necessitatibus odit corporis ducimus praesentium possimus temporibus
          aliquam, aut, aspernatur reprehenderit asperiores nostrum"
            serviceImage={"/images/jamstack-apps.png"}
            serviceAltText={"text1"}
            background="neutral-100"
            color="black"
          />
        </div>
        <div className="">
          <ServiceDetailsLeft
            scrollId="ecommerce"
            serviceTitle="E-Commerce"
            serviceDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          minima, dolores obcaecati magnam fugiat aliquid recusandae eum
          necessitatibus odit corporis ducimus praesentium possimus temporibus
          aliquam, aut, aspernatur reprehenderit asperiores nostrum"
            serviceImage={"/images/e-commerce-service.png"}
            serviceAltText={"text2"}
            background="gray-900"
            color="neutral-100"
          />
        </div>
        <div>
          <ServiceDetailsRight
            scrollId="online-marketing"
            serviceTitle="Online Marketing"
            serviceDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          minima, dolores obcaecati magnam fugiat aliquid recusandae eum
          necessitatibus odit corporis ducimus praesentium possimus temporibus
          aliquam, aut, aspernatur reprehenderit asperiores nostrum"
            serviceImage={"/images/online-marketing-service.png"}
            serviceAltText={"text1"}
            background="neutral-100"
            color="slate-950"
          />
        </div>
        <div className="">
          <ServiceDetailsLeft
            scrollId="content-mgmt"
            serviceTitle="Content Management"
            serviceDetails="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          minima, dolores obcaecati magnam fugiat aliquid recusandae eum
          necessitatibus odit corporis ducimus praesentium possimus temporibus
          aliquam, aut, aspernatur reprehenderit asperiores nostrum"
            serviceImage={"/images/content-mgmt-service.png"}
            serviceAltText={"text1"}
            background="amber-400"
            color="slate-950"
          />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
