"use client";
import { RecoredAside } from "@/utils/RecoredAsideMap";
import { Plus } from "../../public/Icons";
import Modal from "./recordModal";
import CategoryModal from "./CategoryModal";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "http://localhost:8010/category/create";

export default function addCat() {
  const [name, setName] = useState("");
  const addCat = async () => {
    try {
      const res = await axios.post(api, { name: name });
      console.log(res.data);
    } catch (err) {
      console.error();
    }
  };

  return (
    <div className="flex flex-col w-[280px]  rounded-xl bg-white py-3 px-3 gap-3">
      <h1 className="font-semibold mb-3 text-xl">Records</h1>
      <div className="flex flex-col gap-6">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="flex bg-blue-600 p-1 rounded-3xl text-white w-full justify-center items-center gap-2"
        >
          <Plus />
          add
        </button>
        <Modal />
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
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-[#9CA3AF]"
          />
          <button
            onClick={addCat}
            className="flex items-center rounded- text-white bg-blue-600 btn gap-3"
          >
            <Plus /> Add Category
            <CategoryModal />
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
