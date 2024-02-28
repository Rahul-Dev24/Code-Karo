import React, { useState } from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import UserAuthInput from "../components/UserAuthInput";
import { signInWithGitHub, signInWithGoogle } from "../utils/helpers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [getEmailValidationStatus, setgetEmailValidationStatus] =
    useState(false);
  const [isLogin, setisLogin] = useState(false);

  const [alert, setalert] = useState(false);
  const [alertMsg, setalertMsg] = useState("");

  const createNewUser = async () => {
    if (getEmailValidationStatus) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log(userCred);
            toast.success("Sign-Up Secessfully...");
          }
        })
        .catch((err) => {
          toast.error("Email & Password is Already Regester");
        });
    }
  };

  const loginWithEmailPassword = async () => {
    if (getEmailValidationStatus) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log(userCred);
            toast.success("Login Secessfully...");
          }
        })
        .catch((err) => {
          if (err.message.includes("user-not-found")) {
            toast.error("user-not-found");
            setalert(true);
            setalertMsg("Invalid Id : User Not Found");
          } else if (err.message.includes("wrong-password")) {
            toast.error("Plz Enter vaild Password");
            setalert(true);
            setalertMsg("Password Mismatch");
          } else {
            toast.error("Plz Enter vaild Password 😥");
            setalert(true);
            setalertMsg("Plz try Again 3 hours 😥");
          }
        });
    }
  };
  setInterval(() => {
    setalert(false);
  }, 1000);

  return (
    <div className="w-full py-4">
      {/* <img
        src="/logo.png"
        alt="logo"
        className="object-contain w-32 opacity-50 h-auto"
      /> */}

      <div className="w-full flex flex-col items-center justify-center">
        <p className="py-8 text-2xl text-primaryText">Join With Us ☺ </p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
          {/* email */}
          <UserAuthInput
            lable="Email"
            placeholder="Email"
            isPass={false}
            setStateFunction={setemail}
            Icon={FaEnvelope}
            setgetEmailValidationStatus={setgetEmailValidationStatus}
          />

          {/* password */}
          <UserAuthInput
            lable="Password"
            placeholder="Password"
            isPass={true}
            setStateFunction={setpassword}
            Icon={MdPassword}
          />
          {/* aleart section */}

          {alert && <p className="text-red-500"> {alertMsg}</p>}

          {/* login btn */}

          {!isLogin ? (
            <div
              onClick={createNewUser}
              className="bg-emerald-500 w-full px-6 py-2 rounded-md text-lg text-white cursor-pointer hover:bg-emerald-700"
            >
              <p className="text-xl text-white text-center ">Sign Up</p>
            </div>
          ) : (
            <div
              onClick={loginWithEmailPassword}
              className="bg-emerald-500 w-full px-6 py-2 rounded-md text-lg text-white cursor-pointer hover:bg-emerald-700"
            >
              <p className="text-xl text-white text-center ">Log-in</p>
            </div>
          )}
          {/* account text section */}

          {!isLogin ? (
            <p className="text-sm text-primaryText flex item-center justify-center gap-3">
              Already Have an account ?{" "}
              <span
                onClick={() => setisLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-primaryText flex item-center justify-center gap-3">
              Doesn't Have an account ?{" "}
              <span
                onClick={() => setisLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer"
              >
                Create Account Here
              </span>
            </p>
          )}

          {/* or section */}

          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p className="text-sm text-[rgba(256,256,256,0.2)] ">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          {/* sign up with google */}

          <div
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full  py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          >
            <FcGoogle className="text-3xl " />
            <p className="text-xl text-white">Sign in with Google</p>
          </div>

          {/* or section */}

          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p className="text-sm text-[rgba(256,256,256,0.2)] ">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          {/* signup with github */}
          <div
            onClick={signInWithGitHub}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full  py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          >
            <FaGithub className="text-3xl text-white " />
            <p className="text-xl text-white">Sign in with Git Hub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
