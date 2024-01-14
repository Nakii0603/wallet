import SignPage from "./sign/signPage";
import LogInPage from "./login/LogInPage";
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
