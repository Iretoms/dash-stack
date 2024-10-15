"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Rows3 } from "lucide-react";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="w-[18%] h-full overflow-y-auto hidden lg:block lg:px-4 xl:px-7 py-6">
      <h1 className="font-bold text-xl text-center mb-10">
        <span className="text-primary">Dash</span>Stack
      </h1>
      <p className="font-semibold text-dark-text text-sm text-center">
        Dashboard
      </p>
      <nav className="mt-7">
        <ul className="flex flex-col gap-2">
          <li className="relative">
            <Link
              href="/dashboard"
              className={`flex items-center lg:gap-2 xl:gap-4 rounded-md transition-colors duration-200 px-4 py-4 text-dark-text text-sm font-semibold hover:text-white hover:bg-primary ${
                pathName === "/dashboard"
                  ? "bg-primary text-white"
                  : "transparent"
              }`}
            >
              <Heart className="h-5 w-5" /> <span>Favorites</span>
            </Link>
            <div
              className={`absolute rounded-xl h-full w-[7px] lg:-left-[1.2rem] lg:top-0 xl:-left-[1.9rem] xl:top-0 ${
                pathName === "/dashboard" ? "bg-primary" : "transparent"
              }`}
            ></div>
          </li>
          <li className="relative">
            <Link
              href="/dashboard/product-stock"
              className={`flex items-center lg:gap-2 xl:gap-4 rounded-md transition-colors duration-200 px-4 py-4 text-dark-text text-sm font-semibold hover:text-white hover:bg-primary ${
                pathName === "/dashboard/product-stock"
                  ? "bg-primary text-white"
                  : "transparent"
              }`}
            >
              <Rows3 className="h-5 w-5" />
              <span>Product Stock</span>
            </Link>
            <div
              className={`absolute rounded-xl h-full w-[7px] lg:-left-[1.2rem] lg:top-0 xl:-left-[1.9rem] xl:top-0 ${
                pathName === "/dashboard/product-stock"
                  ? "bg-primary"
                  : "transparent"
              }`}
            ></div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
