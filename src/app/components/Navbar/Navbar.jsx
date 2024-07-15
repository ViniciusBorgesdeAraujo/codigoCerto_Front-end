"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "#", current: true },
  { name: "Sobre", href: "#", current: false },
  { name: "Soluções", href: "#", current: false },
  { name: "Equipe", href: "#", current: false },
];

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-secondary fixed w-full z-50 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-18">
              <div className="flex-shrink-0 ml-4">
                {" "}
                {/* Adicionei margem à esquerda */}
                <img
                  src="/assets/img/logo.webp"
                  alt="Logo Codigo Certo"
                  className="h-20 w-20"
                />
              </div>
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-tertiary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tertiary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className="text-tertiary px-3 py-2 text-18px font-roboto font-medium transition-colors duration-300 hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-primary text-tertiary w-[150px] h-[39.96px] rounded-md transition-colors duration-300 hover:bg-tertiary hover:text-secondary">
                  Contato
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-secondary">
            <div className="flex flex-col space-y-4 px-4 py-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="text-tertiary text-18px font-roboto hover:text-primary px-3 py-2 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button className="text-tertiary bg-primary w-[150px] h-[39.96px] rounded-md transition-colors duration-300 hover:bg-tertiary hover:text-secondary">
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
