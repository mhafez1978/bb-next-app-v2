"use client";
import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contactForm";
import Image from "next/image";

interface Props {
  pageTitle?: string;
}

const ContactPage = () => {
  const [loaded, setLoaded] = useState(false);
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
        <PageHeader pageTitle="Contact" />
        <div className="min-h-[20vh] w-full">
          <div className="flex flex-col">
            <div className="w-full h-[320px] flex flex-col bg-[url('/images/g-map.png')] -mt-4 bg-stretch  bg-center bg-no-repeat"></div>
            <div className="w-full flex flex-col justify-center items-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
