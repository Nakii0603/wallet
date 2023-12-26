import { LogoIcon, LogoText } from "../../Components/Icons";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[384] ">
        <div>
          <LogoIcon />
          <LogoText />
        </div>
        <div>
          <h2>Welcome Back</h2>
          <p>Welcome back, Please enter your details</p>
          <input className="w-full " placeholder="Email" type="text" />
          <input className="w-full ]" placeholder="Password" type="password" />
          <div className="bg-[#0166FF] color-white">Log in</div>
        </div>
      </div>

      <div className="bg-[#0166FF] w-[50%] h-full "></div>
    </div>
  );
}
