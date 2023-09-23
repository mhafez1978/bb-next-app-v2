import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className="w-[100vw] h-[90vh] pt-10 bg-white text-black"
    >
      <div className="w-full mx-auto">
        <div className="max-w-screen-lg  mx-auto text-center">
          <h2 className="text-7xl font-bold tracking-tight text-semibold text-black dark:text-white">
            What We Do ?
          </h2>
          <p className="text-black text-3xl mt-4 dark:text-gray-400 ">
            Blooming Brands has everything your business needs to launch and
            grow a successful business online. Our data driven services will
            help expand your brand reach locally or globally.
          </p>
        </div>
        <div className="w-full md:grid md:grid-cols-2 mt-10 lg:grid-cols-3 text-white">
          <div className="h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/web-design.png')] bg-cover bg-center bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-4xl font-bold hover:scale-125 transition-all duration-500">
              Website Web Design
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/full-stack-apps.png')] bg-cover bg-center bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-4xl font-bold dark:text-white hover:scale-125 transition-all duration-500">
              Jamstack Applications
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/e-commerce.png')] bg-cover bg-center bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-4xl font-bold dark:text-white hover:scale-125 transition-all duration-500">
              e-Commerce Solutions
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-lime-700 hover:bg-red-200">
            <h3 className="mb-2 text-4xl font-bold dark:text-white hover:scale-125 transition-all duration-500">
              Online Marketing
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-green-500 hover:bg-red-200">
            <h3 className="mb-2 text-4xl font-bold dark:text-white hover:scale-125 transition-all duration-500">
              Content Management
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-green-700 hover:bg-red-200">
            <h3 className="mb-2 text-4xl font-bold dark:text-white hover:scale-125 transition-all duration-500">
              Website Maintenance
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
