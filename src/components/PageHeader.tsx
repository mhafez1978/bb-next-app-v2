import React from "react";
import BreadCrumbs from "./BreadCrumbs";

const PageHeader = ({ pageTitle }: { pageTitle: String }) => {
  return (
    <div className="z-40 skew-y-1 w-screen min-h-[50vh] mt-[-5vh] pt-20 border-b bg-[url('/images/bg-pageheader.png')] bg-cover bg-center bg-no-repeat text-black flex flex-col justify-center items-center">
      <h1 className="z-50 -skew-y-1 text-4xl font-bold tracking-tight sm:text-6xl">
        {pageTitle}
      </h1>
      <div className="z-50 -skew-y-1">
        <BreadCrumbs />
      </div>
    </div>
  );
};

export default PageHeader;
