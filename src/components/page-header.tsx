import React from "react";

const PageHeader = ({ pageTitle }: { pageTitle: String }) => {
  return (
    <div className="w-screen h-[40vh] border-b bg-amber-400 text-black flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {pageTitle}
      </h1>
    </div>
  );
};

export default PageHeader;
