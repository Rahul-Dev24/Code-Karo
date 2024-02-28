import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserAuthInput = ({
  lable,
  placeholder,
  isPass,
  setStateFunction,
  Icon,
  setgetEmailValidationStatus,
}) => {
  const [value, setvalue] = useState("");
  const [showPass, setshowPass] = useState(true);
  const [isEamilValid, setisEamilValid] = useState(false);

  const handleTextChange = (e) => {
    setvalue(e.target.value);
    setStateFunction(e.target.value);

    if (placeholder === "Email") {
      const emailRegex = /^[^\$@]+@[^\s@]+\.[^\$@]+$/;
      const status = emailRegex.test(value);
      setisEamilValid(status);
      setgetEmailValidationStatus(status);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{lable}</label>
      <div
        className={`flex items-center rounded-md justify-center gap-3 w-full md:w-96 px-4 py-1 bg-gray-200 ${
          !isEamilValid &&
          placeholder === "Email" &&
          value.length > 0 &&
          "border-4 border-red-700"
        } `}
      >
        <Icon className="text-text555 text-2xl" />
        <input
          type={isPass && showPass ? "password" : "text"}
          placeholder={placeholder}
          className="flex-1 w-full h-full py-2 outline-none borderr-none bg-transparent text-text555 text-lg "
          // value={value}
          onChange={handleTextChange}
        />

        {isPass && (
          <div
            className="cursor-pointer"
            onClick={() => setshowPass(!showPass)}
          >
            {showPass ? (
              <FaEyeSlash className="text-text555 text-2xl" />
            ) : (
              <FaEye className="text-text555 text-2xl" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
