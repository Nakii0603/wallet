"use client";
import { GeldLogo, LogoText } from "../../../Components/Icons";
import axios from "axios";
import { useState } from "react";

export default function createPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:8002/users", {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log("sign up" + error);
    }
  };
  return (
    <div className="flex justify-between w-full h-[100vh]">
      <div className="flex flex-col gap-4 justify-center text-center mx-auto">
        <div className=" flex justify-center gap-[10px] items-center">
          <GeldLogo />
          <LogoText />
        </div>
        <h1>Create Geld account</h1>
        <p>Sign up below to create your Wallet account</p>
        <div className="flex flex-col gap-3">
          <input
            className="border-2 rounded-xl border-gray-300 p-2"
            type="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 rounded-xl border-gray-300 p-2"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            className="border-2 rounded-xl border-gray-300 p-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            value={rePassword}
            className="border-2 rounded-xl border-gray-300 p-2"
            type="password"
            placeholder="Re-Password"
            onChange={(e) => setRePassword(e.target.value)}
          /> */}
        </div>
        <button onClick={handleSignUp} className="btn text-white bg-blue-600 rounded-3xl">
          Sign up
        </button>
        <div className="flex gap-3" >
          <p>Already have account?</p>
          <button className="text-blue-500">Log in</button>
        </div>
      </div>
      <div className="bg-blue-600 w-1/2"></div>
    </div>
  );
}
