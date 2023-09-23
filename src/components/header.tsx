"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
  { id: 0, name: "Home", href: "/" },
  { id: 1, name: "About", href: "/about" },
  { id: 2, name: "Services", href: "/services" },
  { id: 3, name: "Portfolio", href: "/portfolio" },
  { id: 4, name: "Latest News", href: "/latest-news" },
  { id: 5, name: "Contact", href: "/contact" },
];

const Header = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        headerScrolled
          ? "header-scrolled bg-gradient-to-r from-gray-900 via-black to-gray-900 drop-shadow-sm"
          : "header h-[10vh] w-screen fixed top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 drop-shadow-sm"
      }`}
    >
      <nav
        className="flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex flex-row py-2">
            {/* <img
              className="h-8 w-auto mr-4"
              src="https://tailwindui.com/img/logos/mark.svg"
              alt=""
            /> */}
            <span className="text-2xl font-black bg-gradient-to-r from-amber-400 via-red-700 to-amber-300 inline-block text-transparent bg-clip-text">
              blooming brands
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" color="#fff" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${
                item.href === path
                  ? headerScrolled
                    ? "text-md font-semibold leading-6 uppercase text-amber-400 py-2 border-b-2"
                    : "text-md font-semibold leading-6 uppercase text-amber-400 py-2"
                  : headerScrolled
                  ? "text-md font-semibold leading-6 uppercase text-white py-2"
                  : "text-md font-semibold leading-6 uppercase text-white py-2"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Toggle Dark / Light <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Blooming Brands</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
