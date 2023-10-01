"use client";
import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import PageHeader from "@/components/page-header";

interface Props {
  pageTitle?: string;
}

const LatestNewsPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {loaded === false && (
        <div className="bg-[#222222] h-[100vh] w-[100vw] top-0 left-0 flex flex-col justify-center items-center">
          <span className="sr-only">Loading...</span>
          <Spinner
            aria-label="Warning spinner example"
            color="warning"
            size="xl"
            className="w-[300px] h-[300px]"
          />
        </div>
      )}
      <div>
        <PageHeader pageTitle="Latest News" />
        <div className="min-h-[20vh]">
          <h1 className=" text-red-400">This is Latest News Page!!!</h1>
        </div>
      </div>
    </>
  );
};

export default LatestNewsPage;