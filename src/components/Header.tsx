// Header.tsx
import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { TbFilterCog } from "react-icons/tb";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-3 z-10">
      <div className="">
        <div className=" flex items-center justify-between px-4 py-2">
          <div className="relative flex gap-4">
            <button className="rounded-full p-2 bg-slate-100 hover:bg-white">
              <CiGrid41 />
            </button>
            <button className="rounded-full p-2 bg-slate-100 hover:bg-white">
              <FaRegNoteSticky />
            </button>
            <button className="rounded-full p-2 bg-slate-100 hover:bg-white">
              <TbFilterCog />
            </button>
          </div>
          <div className="relative flex gap-4">
            <div className="rounded-full search-input relative flex justify-between  focus:outline-none bg-white bg-opacity-40 p-[4px]">
              <input
                type="search"
                className="py-1 pl-4 pr-10 bg-transparent w-40 focus:outline-none text-sm"
                placeholder="Search..."
              />
              <button className="absolute h-full px-2 right-0 top-0 flex items-center">
                <FaSearch className="text-gray-400 h-6 w-6 p-1 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
