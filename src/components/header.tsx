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
      if (window.scrollY > 6) {
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
          ? "w-full top-0 pb-12 header-scrolled px-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 drop-shadow-sm"
          : "w-full fixed top-0 min-h-[10vh] px-8 py-[20px] z-50 bg-transparent drop-shadow-sm"
      }`}
    >
      <nav
        className="flex items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex flex-row py-2">
            <span className="lg:text-2xl md:text-lg sm:text-md font-black bg-gradient-to-r from-amber-200 via-slate-200/90 to-amber-400 inline-block text-transparent bg-clip-text">
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
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              style={{
                fontSize: ".85rem",
                transition: "transform .6s ease",
                fontWeight: "800",
              }}
              key={item.id}
              href={item.href}
              className={`${
                headerScrolled
                  ? item.href === path
                    ? "text-amber-400"
                    : "text-white hover:text-amber-400"
                  : item.href !== path
                  ? "text-white hover:text-amber-900"
                  : "text-amber-600 hover:text-slate-800"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-white hover:text-amber-400"
            style={{
              fontSize: ".85rem",
              transition: "transform .6s ease",
              fontWeight: "800",
            }}
          >
            Clients <span aria-hidden="true">&rarr;</span>
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
