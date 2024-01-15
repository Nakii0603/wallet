"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Geld from "../../components/Geld";

export default function createPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const keys = { name, email, password };
  const router = useRouter();

  const jumpLogin = () => {
    router.push("login");
  };

  const jumpCurrency = () => {
    router.push("currency");
    localStorage.setItem("data", JSON.stringify(keys));
    console.log(keys);
  };

  return (
    <div className="flex justify-between w-full h-[100vh]">
      <div className="flex flex-col gap-4 justify-center text-center mx-auto">
        <Geld />
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
        </div>
        <button
          onClick={jumpCurrency}
          className="btn text-white bg-blue-600 rounded-3xl"
        >
          Sign up
        </button>
        <div className="flex gap-3 justify-center">
          <p>Already have account?</p>
          <button onClick={jumpLogin} className="text-blue-500">
            Log in
          </button>
        </div>
      </div>
      <div className="bg-blue-600 w-1/2"></div>
    </div>
  );
}
