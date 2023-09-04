import Image from "next/image";
import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Button from "./Button";

import data from "@/config";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  const { identity, navigation } = data;

  return (
    <div className={`relative max-w-[1120px] mx-auto`}>
      <div
        className={`relative flex justify-between items-center bg-white ring-2 ring-black`}
      >
        <div
          className={`md:w-[220px] p-3 lg:p-5 flex lg:justify-center lg:border-r-2 border-black`}
        >
          <Image
            src={identity.logo}
            width={51}
            height={55}
            alt="Panji Saputro Logo Identity"
          />
        </div>
        {/* mobile */}
        <Menu as={`div`} className={`lg:hidden p-3`}>
          {({ open }) => (
            <>
              <Menu.Button>
                <Image
                  src={`/assets/images/${open ? "close" : "menu"}-icon.svg`}
                  width={24}
                  height={24}
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="transform opacity-0 "
                enterTo="transform opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0 "
              >
                <Menu.Items
                  className={`absolute top-[80px] inset-x-0 z-10 w-full bg-white ring-2 ring-black`}
                >
                  {navigation.map((item) => (
                    <Menu.Item
                      as={"div"}
                      key={item.name}
                      className={`py-3 text-center font-semibold leading-none `}
                    >
                      {({ close }) => (
                        <Link
                          spy={true}
                          activeClass="active"
                          smooth={true}
                          duration={500}
                          to={item.href}
                          onClick={close}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
        {/* desktop */}
        <div
          className={`hidden lg:flex justify-center items-center space-x-10`}
        >
          {navigation.map((item) => (
            <Link
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              key={item.name}
              to={item.href}
              className="cursor-pointer py-5 font-semibold leading-none hover:border-b-2 hover:border-primary hover:-mb-0.5"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className={`w-[220px] p-5 hidden lg:flex justify-center items-center border-l-2 border-black`}
        >
          <Button
            href={`mailto:${identity.email.address}?subject=${identity.email.subject}&body=${identity.email.body}`}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
