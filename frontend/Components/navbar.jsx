import Pro from "../public/Pro.jsx";
import { GeldLogo } from "./Icons";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full py-5 bg-white">
      <div className="flex max-w-screen-xl justify-between mx-auto w-full">
        <div className="flex gap-9">
          <button>
            <GeldLogo />
          </button>
          <button className="font-semibold">Dashboard</button>
          <button>Records</button>
        </div>
        <div className="flex ledaing-none gap-9 items-center">
          <button className="flex items-center w-fit px-4 h-8 bg-blue-600 text-white rounded-3xl">+ Record</button>
          <Pro/>
        </div>
      </div>
    </div>
  );
}
