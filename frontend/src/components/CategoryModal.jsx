"use client";

import { data } from "autoprefixer";
import { useState } from "react";

export default function CategoryModal() {
  const [category, setCategory] = useState("");

  function a() {
    console.log(category);
  }
  return (
    <dialog id="my_modal_5" className="modal">
      <div className="bg-white flex flex-col gap-4  rounded-3xl p-[24px] border-box">
        <form className="flex justify-between">
          <h2 className="px-[24px] border-box text-black ">Add Record</h2>
          <button className="text-black">✕</button>
        </form>
        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="text-black border-2 border-[#9CA3AF]"
            placeholder="yuch hamaguu bich"
          />
          <button onClick={a} className="btn bg-blue-600 text-white">
            Add Category
          </button>
        </div>
      </div>
    </dialog>
  );
}
