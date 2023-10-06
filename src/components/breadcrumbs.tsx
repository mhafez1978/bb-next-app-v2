"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const path = usePathname();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    // if (path === "/") {
    //   setCurrentPage("Home");
    // } else if (path === "/about") {
    //   setCurrentPage("About");
    // } else if (path === "/services") {
    //   setCurrentPage("Services");
    // } else if (path === "/portfolio") {
    //   setCurrentPage("Portfolio");
    // } else if (path === "/latest-news") {
    //   setCurrentPage("Latest News");
    // } else if (path === "/contact") {
    //   setCurrentPage("Contact");
    // }

    switch (path) {
      case "/":
        setCurrentPage("Home");
        break;
      case "/about":
        setCurrentPage("About");
        break;
      case "/services":
        setCurrentPage("Services");
        break;
      case "/portfolio":
        setCurrentPage("Portfolio");
        break;
      case "/latest-news":
        setCurrentPage("Latest News");
        break;
      case "/contact":
        setCurrentPage("contact");
        break;
      default:
        break;
    }
  }, [path]);

  return (
    <div className="min-w-[15vw] flex flex-row mx-auto mt-4 gap-2 justify-center items-center rounded border-2 border-white py-1 px-4">
      <span>You&apos;re here: </span>
      <a className="hover:text-white" href="/">
        Home
      </a>
      <span>&gt;</span>
      <a className="hover:text-white" href={`//localhost:3000/${path}`}>
        {currentPage}
      </a>
    </div>
  );
};

export default BreadCrumbs;
