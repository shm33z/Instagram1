import "./style.css";
import React, { useState } from "react";
import Login from "./login.tsx";
import Signup from "./signup.tsx";

function Authentication() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="flex flex-row items-center mx-[50px] my-[0px]">
      <div className="flex-[0.5] mx-auto">
        {active === "login" ? <Login /> : <Signup />}
        <div className="border border-solid border-gray p-5 mx-[30px] mt-[15px]">
          <span className="font-medium text-sm text-white">
            {active === "login" ? (
              <>
                Don't have an account?
                <button
                  onClick={handleChange}
                  className="text-[#0095f6] font-[bolder] border-0 hover:cursor-pointer "
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Have an account?
                <button
                  onClick={handleChange}
                  className="text-[#0095f6] font-[bolder] border-0 hover:cursor-pointer"
                >
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
