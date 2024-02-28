import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./container/Home";
import { auth, db } from "./config/firebase.config";
import { Toaster } from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import Spinner from "./components/Spinner";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/userActions";
import NewProject from "./container/NewProject";
import Meeting from "./container/Meeting";

const App = () => {
  const [isLoading, setisLoading] = useState(true);
  const disPatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "user", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            //dispatch the action store
            disPatch(SET_USER(userCred?.providerData[0]));
            // Navigate("home/project");
          }
        );
      } else {
        // navigate("/home/auth");
      }

      setInterval(() => {
        setisLoading(false);
      }, 1000);
    });

    //clean up the listener event

    return () => unSubscribe();
  }, []);

  return (
    <>
      <div>
        <Toaster
          position="center-top"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>

      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner />
        </div>
      ) : (
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/home/*" element={<Home />} />
              <Route path="/newProject" element={<NewProject />} />
              <Route path="/meeting" element={<Meeting />} />

              {/* if routing is not matching  */}

              <Route path="*" element={<Navigate to={"/home"} />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
