import { GeldLogo, LogoText } from "./Icons";

export default function Geld(params) {
  return (
    <div className=" flex mx-auto gap-4 items-center ">
      <div>
        <GeldLogo />
      </div>
      <div>
        <LogoText />
      </div>
    </div>
  );
}
