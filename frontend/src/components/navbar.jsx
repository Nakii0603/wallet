"use client";
import { useRouter } from "next/navigation.js";
import Pro from "../../public/Pro.jsx";
import { GeldLogo } from "./Icons.jsx";

export default function Navbar() {
  const router = useRouter();
  const jump = () => {
    router.push("record");
  };
  return (
    <div className="flex flex-col w-full py-5 ">
      <div className="flex max-w-screen-xl justify-between mx-auto w-full">
        <div className="flex gap-[12px]">
          <button>
            <GeldLogo />
          </button>
          <button className="font-semibold">Dashboard</button>
          <button onClick={jump}>Records</button>
        </div>
        <div className="flex ledaing-none gap-9 items-center">
          <button className="flex items-center border-box px-2 bg-blue-600 text-white rounded-3xl">
            + Record
          </button>
          <Pro />
        </div>
      </div>
    </div>
  );
}
