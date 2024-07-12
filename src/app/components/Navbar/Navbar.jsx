"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Inicio",
    href: "#",
    current: true,
    width: "44px",
    height: "20.98px",
  },
  {
    name: "Sobre",
    href: "#",
    current: false,
    width: "47.2px",
    height: "20.98px",
  },
  {
    name: "Soluções",
    href: "#",
    current: false,
    width: "74px",
    height: "20.98px",
  },
  {
    name: "Equipe",
    href: "#",
    current: false,
    width: "55px",
    height: "20.98px",
    marginRight: "20px",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black fixed w-full z-50 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-full">
              <div className="flex-shrink-0">
                <img
                  alt="Logo Codigo Certo"
                  src="/assets/img/logo.webp"
                  className="h-20 w-20"
                  style={{ width: "75px", height: "75px" }}
                />
              </div>
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`
                      text-white
                      px-3
                      py-2
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      hover:text-red
                    `}
                    style={{
                      width: item.width,
                      height: item.height,
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "18px",
                      marginRight:
                        item.marginRight ||
                        (index < navigation.length - 1 ? "10px" : "0"),
                      fontWeight: "400",
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  className="text-white bg-red px-6 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
                  style={{
                    width: "150px",
                    height: "39.96px",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "18px",
                    fontWeight: "400",
                    marginTop: "15px",
                  }}
                >
                  Contato
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black">
            <div className="flex flex-col space-y-4 px-4 py-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="text-white hover:text-red"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="text-white bg-red px-6 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Contato
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
