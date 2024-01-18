"use client";

export default function Modal() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="bg-white w-[800px] rounded-3xl p-[24px]  border-box">
        <form className="flex justify-between">
          <h2 className="px-[24px] border-box ">Add Record</h2>
          <button className="">✕</button>
        </form>
        <div className="flex">
          <div className="w-[50%] p-[24px] border-box flex flex-col gap-4 ">
            <div className="flex  gap-[8px]">
              <button className=" bg-blue-600 text-white px-[24px] py-[8px] rounded-3xl  ">
                Expense
              </button>
              <button className="text-black rounded-3xl px-[24px] py-[8px] bg-[#F3F4F6] ">
                Income
              </button>
            </div>
            <div>
              <p>Amount</p>
              <input
                placeholder="$ 000.00"
                className="border-2 rounded-[8px] border-[#9CA3AF]"
              />
            </div>
            <div className="flex flex-col gap-[12px]">
              <p>Category</p>
              <div>
                <label
                  for="price"
                  class="block text-sm font-medium leading-6 text-gray-900"
                ></label>

                <label for="currency" class="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  class="border-2 rounded-[8px] border-[#9CA3AF]  text-gray-500"
                >
                  <option>Choose currency</option>
                  <option>TUG</option>
                  <option>USD</option>
                </select>
              </div>
            </div>
            <input
              type="date"
              className="border-2 border-[#9CA3AF] rounded-[8px]"
            />
            <button className="btn bg-blue-600 text-white rounded-3xl w-full btn-primary">
              Add Record
            </button>
          </div>
          <div className="w-[50%] p-[24px] border-box">
            <p>Peyee</p>
            <input
              type="text"
              className="border-2 w-[100%] h-[35px] rounded-[8px] border-[#9CA3AF]"
            />
            <p>Note</p>
            <input
              type="text"
              className="border-2 w-[100%] h-[250px]  rounded-[8px] border-[#9CA3AF]"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
}
