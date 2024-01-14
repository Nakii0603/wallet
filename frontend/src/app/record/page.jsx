import RecordAside from "@/components/RecordAside";
import { IncomeAndExpend } from "@/utils/IncomeAndExpend";

export default function RecordPage() {
  return (
    <div className="flex justify-center gap-3">
      <div><RecordAside/></div>
      <div>
        <div className="flex flex-col w-[800px] gap-6">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <button className="border-none bg-gray-300 rounded-xl h-10 w-10">
                back
              </button>
              <p>Last 30 Days</p>
              <button className="border-none bg-gray-300 rounded-xl h-10 w-10">
                next
              </button>
            </div>
            <button className="flex gap-5 p-3 bg-white rounded-lg font-medium border">
              Newest First
            </button>
          </div>
          <div className="flex p-2 px-6 justify-between w-full h-12 bg-white rounded-lg border items-center">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p>Select all</p>
            </div>
            <p className="text-gray-400">- 35,500$</p>
          </div>
        </div>
        <h1 className="font-semibold">Today</h1>
        <IncomeAndExpend />
      </div>
    </div>
  );
}
