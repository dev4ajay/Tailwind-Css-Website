import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
function HeaderMain() {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-2*1 text-center pb-4 sm:pb-0 text-blackish">
          Logo
        </div>
        <div className="w-[60%]  relative">
          <input
            type="text "
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            placeholder="Enter any product name..."
          />
          <BsSearch
            className="absolute right-0 top-2 mr-3 text-gray-300"
            size={20}
          />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative flex gap-4">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute bottom-4 left-2 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-y-1 translate-x-1"></div>

            <div className="relative flex gap-4">
              <HiOutlineShoppingBag />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-y-1 translate-x-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
