import "./style.css";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="flex flex-col border border-solid border-gray p-[50px] mx-[30px]">
      <img
        className="w-[200px] mx-auto mb-10"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distraction.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[#ffffff24] border border-solid border-gray rounded-[3px] p-3 mb-5 text-[white]"
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="bg-[#ffffff24] border border-solid border-gray rounded-[3px] p-3 mb-5 text-[white]"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button
        onClick={handleLogin}
        className="p-3 rounded-lg border-0 text-white bg-[#0095f6] font-[bolder] hover:cursor-pointer"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
