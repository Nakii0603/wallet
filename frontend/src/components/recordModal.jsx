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
            <div>
              <p>Category</p>
              <div>
                <label
                  for="price"
                  class="block text-sm font-medium leading-6 text-gray-900"
                ></label>
                <div class="relative mt-2 rounded-md shadow-sm">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    class=" w-full  py-1.5 pl-7 pr-20 border-2 border-[#9CA3AF] rounded-[8px] focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    placeholder="0.00"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset sm:text-sm"
                    >
                      <option>Choose currency</option>
                      <option>TUG</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>
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
