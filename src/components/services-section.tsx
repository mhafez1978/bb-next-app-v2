import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className="w-[100vw] h-[80vh] pt-10 bg-white text-black"
    >
      <div className="w-full mx-auto">
        <div className="max-w-7xl mx-auto px-24">
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight  text-black dark:text-white">
            What We Do ?
          </h2>
          <p className="text-black text-lg mt-4 dark:text-gray-400 ">
            Blooming Brands has everything your business needs to launch and
            grow a successful business online. Our data driven services will
            help expand your brand reach locally or globally.
          </p>
        </div>
        <div className="w-full md:grid md:grid-cols-2 mt-10 lg:grid-cols-3 text-white">
          <div className="h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/web-design.png')] bg-cover bg-center bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-2xl font-bold hover:scale-125 transition-all duration-100">
              Website Web Design
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/full-stack-apps.png')] bg-cover bg-center bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-2xl font-bold dark:text-white hover:scale-125 transition-all duration-100">
              Jamstack Applications
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/e-commerce.png')] bg-cover bg-center bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-2xl font-bold dark:text-white hover:scale-125 transition-all duration-100">
              e-Commerce Solutions
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/online-marketing.png')] bg-cover bg-top bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-2xl font-bold dark:text-white hover:scale-125 transition-all duration-100">
              Online Marketing
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-center text-center bg-[url('/images/creative-content.png')] bg-cover bg-top bg-no-repeat cursor-pointer">
            <h3 className="mb-2 text-2xl font-bold dark:text-white hover:scale-125 transition-all duration-100">
              Content Management
            </h3>
          </div>
          <div className=" h-[33vh] flex flex-col justify-center items-start px-8 bg-amber-400">
            <form>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Subscribe to our newsletter:
                </label>
                <input
                  style={{ width: "80%" }}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="true"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5 mt-2.5">
                  <input
                    id="optin"
                    aria-describedby="optin"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required="true"
                  />
                </div>
                <div className="ml-3 text-md mt-2" style={{ width: "74%" }}>
                  <label
                    for="optin"
                    className="font-light text-gray-800 dark:text-gray-300"
                  >
                    Opt-in to receive marketing communications. We do not sell
                    your email to third parties.
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-primary-600 hover:bg-primary-700 outline mt-4 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
