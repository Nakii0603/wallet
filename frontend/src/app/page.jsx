import SignPage from "./sign/page";
import LogInPage from "./login/page";
import Dashboard from "./dashboard/page";
import { GeldLogo } from "../components/Icons";
import Navbar from "../components/navbar";
import { IncomeAndExpend } from "@/utils/IncomeAndExpend";
import RecordPage from "./record/page";
import { Sigmar } from "next/font/google";
export default function home() {
  return (
    <div className="">
      <SignPage/>
    </div>
  );
}
