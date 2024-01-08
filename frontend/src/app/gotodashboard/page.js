import Geld from "../../../Components/Geld";

export default function Finish() {
  return (
    <div className="flex flex-col mx-auto w-[400px] gap-16 h-[100vh] justify-center">
      <div className="flex flex-col w-3/5 mx-auto gap-3">
        <Geld/>
        <div className="steps">
          <div className="step step-neutral">Currency</div>
          <div className="step step-neutral">Finish</div>
        </div>
      </div>
    </div>
  );
}
