import React from "react";

const PageHeader = ({ pageTitle }) => {
  return (
    <div className="w-screen h-[40vh] border-b bg-sky-950 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {pageTitle}
      </h1>
    </div>
  );
};

export default PageHeader;
