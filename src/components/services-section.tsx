"use client";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <section id="services-section" className="w-[100vw] h-[80vh]">
      <div className="w-full mx-auto">
        <div className="w-full sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 text-white">
          <div className="services relative h-[50vh] overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer">
            <a
              href="/services/#webdesign"
              className="w-full h-full z-20 overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer"
            >
              <Image
                className="absolute z-20"
                src="/images/web-design.webp"
                alt=""
                width={600}
                height={400}
              />
              <h3 className="z-40 mb-2 text-2xl font-bold">
                Website Web Design
              </h3>
            </a>
          </div>
          <div className="services relative h-[50vh] overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer">
            <a
              href="/services/#jamstack"
              className="w-full h-full z-20 overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer"
            >
              <Image
                className="absolute z-20"
                src="/images/full-stack-apps.webp"
                alt=""
                width={600}
                height={400}
              />
              <h3 className="z-40 mb-2 text-2xl font-bold dark:text-white">
                Jamstack Applications
              </h3>
            </a>
          </div>
          <div className="services relative h-[50vh] overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer">
            <a
              href="/services/#ecommerce"
              className="w-full h-full z-20 overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer"
            >
              <Image
                className="absolute z-20"
                src="/images/e-commerce.webp"
                alt=""
                width={600}
                height={400}
              />
              <h3 className="z-40 mb-2 text-2xl font-bold dark:text-white">
                e-Commerce Solutions
              </h3>
            </a>
          </div>
          <div className="services relative h-[50vh] overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer">
            <a
              href="/services/#online-marketing"
              className="w-full h-full z-20 overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer"
            >
              <Image
                className="absolute z-20"
                src="/images/online-marketing.webp"
                alt=""
                width={600}
                height={400}
              />
              <h3 className="z-40 mb-2 text-2xl font-bold dark:text-white">
                Online Marketing
              </h3>
            </a>
          </div>
          <div className="services relative h-[50vh] overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer">
            <a
              href="/services/#content-management"
              className="w-full h-full z-20 overflow-hidden flex flex-col justify-center items-center text-center cursor-pointer"
            >
              <Image
                className="absolute z-20"
                src="/images/creative-content.webp"
                alt=""
                width={600}
                height={400}
              />
              <h3 className="z-40 mb-2 text-2xl font-bold dark:text-white">
                Content Management
              </h3>
            </a>
          </div>
          <div className="z-30 h-[50vh] flex flex-col justify-center items-start px-8 bg-amber-400">
            <form>
              <div
                className="z-40 h-full"
                style={{
                  border: "1px solid #fff",
                  padding: "1rem 1rem",
                  borderRadius: "15px",
                  backgroundImage: "url('/images/newsletter-bg.webp')",
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "300px",
                  backgroundPositionY: "-100px",
                }}
              >
                <div>
                  <h3 className="flex flex-row gap-4 mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    <span>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 24V9H24H4V24V39H24"
                          stroke="#333"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M44 34L30 34"
                          stroke="#333"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M39 29L44 34L39 39"
                          stroke="#333"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 9L24 24L44 9"
                          stroke="#333"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Stay Connected
                  </h3>
                  <p
                    className="mb-2 text-black text-sm"
                    style={{ width: "60%", fontSize: "50%", lineHeight: 1 }}
                  >
                    Subscribe to our monthly newsletter to receieve our latest
                    updates, news, and business online marketing deals and
                    promotions.
                  </p>
                  <input
                    style={{ width: "80%" }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@email.com"
                    required
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-2.5">
                    <input
                      id="optin"
                      aria-describedby="optin"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div
                    className="ml-3 text-md mt-2"
                    style={{ width: "74%", fontSize: "40%" }}
                  >
                    <p className="text-gray-900">
                      I agree to opt-in and receive Blooming Brands LLC
                      newsletter, and other marketing communications. We do not
                      sell your email to third parties.
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-[80%] text-white hover:bg-red-500/50 outline mt-4 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
