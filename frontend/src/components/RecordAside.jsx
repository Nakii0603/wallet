import { RecoredAside } from "@/utils/RecoredAside";
import { Plus } from "../../public/Icons";
import Modal from "./recordModal";

export default function () {
  return (
    <div className="flex flex-col w-[250px]  rounded-xl bg-white py-3 px-3 gap-3">
      <h1 className="font-semibold mb-3 text-xl">Records</h1>
      <div className="flex flex-col gap-6">
        <button  className="flex bg-blue-600 p-1 rounded-3xl text-white w-full justify-center items-center gap-2">
          <Plus /> Add
        </button>
        <input
          type="search"
          className="border-2 border-gray-400 p-1 rounded-lg"
          placeholder=" Search"
        />
      </div>
      <div className="flex flex-col my-3 gap-4">
        <h1 className="font-semibold text-lg">Types</h1>
        <div className="flex flex-col gap-3 pl-4">
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-3xl border" />
            <p>All</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-3xl" />
            <p>Income</p>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="rounded-3xl" />
            <p>Expense</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg">Category</h1>
          <button className="text-gray-400 hover:text-blue-600">Clear</button>
        </div>
        <div className="flex flex-col gap-4 pl-4">
          <RecoredAside />
          <button className="flex items-center gap-3">
            <Plus /> Add Category
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-lg">Amount Range</h1>
        <input
          type="range"
          min="0"
          max="1000"
          value="40"
          class="range range-xs"
        />
      </div>
    </div>

  );
}
