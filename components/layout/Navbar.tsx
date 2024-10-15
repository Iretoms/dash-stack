import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white lg:static h-[70px] flex items-center px-5 shadow-sm">
      <nav className="w-full flex justify-between items-center">
        <h1 className="font-bold text-xl lg:hidden">
          <span className="text-primary">Dash</span>Stack
        </h1>
        <div className="items-center gap-6 hidden lg:flex">
          <div className="cursor-pointer">
            <Image
              src="/images/menuBar.svg"
              alt="menu"
              width={30}
              height={30}
            />
          </div>
          <div className="bg-gray-1 flex gap-2 px-4 py-2 items-center border rounded-[25px] w-[300px]">
            <Image
              src="/images/search.svg"
              alt="search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="search"
              className="w-full bg-transparent text-dark-text opacity-80 text-base focus:outline-none"
            />
          </div>
        </div>
        <div className="cursor-pointer lg:hidden">
          <Image src="/images/menuBar.svg" alt="menu" width={30} height={30} />
        </div>
        <div className="lg:flex items-center gap-7 hidden">
          <div className="flex items-center relative">
            <Image src="/images/bell.svg" alt="bell" width={25} height={25} />
            <span className="text-white text-xs bg-noti-red h-5 w-5 rounded-full flex justify-center items-center absolute -top-2 -right-2">
              6
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-md">
              <Image src="/images/flag.svg" alt="flag" width={40} height={40} />
            </div>
            <div className="flex items-center gap-2">
              <span>English</span>
              <span>
                <Image
                  src="/images/arrowDown.svg"
                  alt="down-arrow"
                  width={12}
                  height={12}
                />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/smilingGirl.webp"
              alt="user"
              width={45}
              height={45}
            />
            <div className="flex flex-col text-sm">
              <span className="font-semibold">Moni Roy</span>
              <span>Admin</span>
            </div>
          </div>
          <div className="border rounded-full flex justify-center items-center h-5 w-5">
            <Image
              src="/images/arrowDown.svg"
              alt="down-arrow"
              width={12}
              height={12}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
