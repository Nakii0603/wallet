"use client";
import axios from "axios";
import Geld from "../../../Components/Geld";

export default function () {
  const hundlePushData = async () => {
    try {

      let data = JSON.parse(window.localStorage.getItem("data"));

      const response = await axios.post("http://localhost:8002/users", {
        name,
        email,
        password,
        currency,
      });

    } catch (error) {
      console.log("data PUSH " + error);
    }
  };
  return (
    <div className="flex flex-col mx-auto w-[400px] gap-36 h-[100vh] mt-20">
      <div className="flex flex-col w-3/5 mx-auto gap-3 justify-start">
        <Geld />
        <div className="steps">
          <div className="step step-primary">Currency</div>
          <div className="step step-primary">Finish</div>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto gap-7">
        <div className="flex flex-col mx-auto gap-7">
          <h1>Good Job!</h1>
        </div>
        <div className="flex flex-col mx-auto gap-10 text-center">
          <p className="text-[#475569]">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
          <button
            onClick={hundlePushData}
            className="btn bg-blue-600 text-white rounded-3xl"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
