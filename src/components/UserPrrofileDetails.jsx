import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutAction, Menu } from "../utils/helpers";
import { useState } from "react";

const UserPrrofileDetails = () => {
  const user = useSelector((state) => state.user?.user);
  const [isMenu, setisMenu] = useState(false);
  return (
    <div className="flex items-center justify-center gap-4 relative">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden bg-emerald-500 cursor-pointer">
        {user?.photoURL ? (
          <>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
              className="w-4 h-4 object-cover"
            />
          </>
        ) : (
          <p className="text-xl text-white font-semibold capitalize">
            {user?.email[0]}
          </p>
        )}
      </div>
      <div
        onClick={() => setisMenu(!isMenu)}
        className="p-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
      >
        <FaChevronDown className="text-primaryText" />
      </div>
      {isMenu && (
        <div className="bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-center justiify-center gap-4 min-w-[225px]">
          {Menu.map((item) => (
            <Link
              to={item.uri}
              key={item.id}
              onClick={() => setisMenu(!isMenu)}
              className="text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
            >
              {item.name}
            </Link>
          ))}

          <p
            onClick={logOutAction}
            className="text-primaryText text-lg cursor-pointer hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
          >
            Log-Out
          </p>
        </div>
      )}
    </div>
  );
};

export default UserPrrofileDetails;
