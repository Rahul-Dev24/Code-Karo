import React from "react";
import { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Project from "./Project";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import UserPrrofileDetails from "../components/UserPrrofileDetails";

const Home = () => {
  const [sideMenu, setsideMenu] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  return (
    <>
      <div
        className={`w-2 ${
          sideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen hidden md:block max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* anchor */}
        <div
          onClick={() => setsideMenu(!sideMenu)}
          className="w-8 h-8 bg-scondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer "
        >
          <HiChevronDoubleLeft className="text-white text-xl" />
        </div>

        <div className="overflow-hidden w-full flex flex-col gap-4">
          {/* logo */}
          <Link to="/home">
            <img
              src="/logo.png"
              alt="logo"
              className="object-contain w-72 h-auto logoImg"
            />
          </Link>
          {/* start coding */}
          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200">
              <p className="text-gray-400 group-hover:text-gray-200 capitalize">
                Start Coding
              </p>
            </div>
          </Link>

          {/* home nav */}
          {user && (
            <Link
              to={"/home/project"}
              className="flex items-center justify-center gap-4"
            >
              <MdHome className="text-primaryText text-xl" />
              <p className="text-lg text-white">Home</p>
            </Link>
          )}
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-10 py-4 md:py-10">
        {/* nav bar */}
        <div className="w-full flex items-center justify-between gap-3">
          {/* search bar */}
          <div className="flex bg-secondary w-full px-4 py-3 rounded-md items-center justify-center gap-3">
            <FaSearchengin className="text-2xl text-primaryText" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600"
              placeholder="Search here..."
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link
              to={"/meeting"}
              className="bg-emerald-300 px-6 py-2 rounded-md text-lg text-[black] cursor-pointer hover:bg-emerald-700"
            >
              Meeting
            </Link>
          </div>

          {/* profile section */}
          {!user && (
            <div className="flex items-center justify-center gap-3">
              <Link
                to={"/home/auth"}
                className="bg-emerald-500 px-6 py-2 rounded-md text-lg text-white cursor-pointer hover:bg-emerald-700"
              >
                SignUp
              </Link>
            </div>
          )}

          {user && <UserPrrofileDetails />}
        </div>
        {/* bottom section */}

        <div className="w-full">
          <Routes>
            <Route path="/*" element={<Project />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
