import "./style.css";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.js";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, { displayName: username })
        )
      )
      .catch((err) => {
        alert(err);
      });
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
        onChange={(e) => setUsername(e.target.value)}
        className="bg-[#ffffff24] border border-solid border-gray rounded-[3px] p-3 mb-5 text-[white]"
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="bg-[#ffffff24] border border-solid border-gray rounded-[3px] p-3 mb-5 text-[white]"
        type="password"
        placeholder="Password"
        value={password}
      />
      <button
        onClick={handleSignup}
        className="p-3 rounded-lg border-0 text-white bg-[#0095f6] font-[bolder] hover:cursor-pointer"
      >
        Sign up
      </button>
    </div>
  );
}

export default Signup;
