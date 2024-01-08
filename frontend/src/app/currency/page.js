import Geld from "../../../Components/Geld";


export default function currency() {
  return (
    <div className="flex flex-col mx-auto  w-[400px] h-[100vh] justify-center">
      <div className="flex flex-col mb-[140px]  w-3/5 mx-auto gap-3">
        <Geld/>
        <div className="steps">
          <div className="step step-neutral">Currency</div>
          <div className="step">Finish</div>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto gap-7">
        <div className="flex flex-col items-center mx-auto">
          <div className="bg-[#0166FF] justify-center flex w-[34px] rounded-[20px]">
            <Dollar />
          </div>
          <h1>Select base currency</h1>
        </div>
        <div className="flex flex-col mx-auto gap-6">
          <div className="flex flex-col gap-3">
            <select
              className="p-3 rounded-xl border-gray-800 border bg-[#D1D5DB]"
              name=""
              id=""
            >
              <option value="">MNT - Mongolian Tugrik</option>
              <option value="">USD - US dollar</option>
            </select>
            <p className="text-[#475569]">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
            </p>
          </div>
          <button className="btn bg-blue-600 text-white rounded-3xl w-full btn-primary">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
