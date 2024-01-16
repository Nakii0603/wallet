"use client";

export default function Modal() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="bg-white w-[700px] rounded-3xl p-[24px]  border-box">
        <form className="flex justify-between">
          <h2>Add Record</h2>
          <button className="">✕</button>
        </form>
        <div className="flex">
          <div className="w-[50%] ">
            <div className="flex w-[325px] gap-[8px]">
              <button className=" bg-blue-600 text-white rounded-3xl w-[170px] h-[40px] ">
                Expense
              </button>
              <button className="text-black rounded-3xl w-[170px] h-[40px] bg-[#F3F4F6] ">
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
                    class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>Choose currency</option>
                      <option>TUG</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>date</div>
            <button className="btn bg-blue-600 text-white rounded-3xl w-full btn-primary">
              Add Record
            </button>
          </div>
          <div>
            <p>Peyee</p>
            <input
              type="text"
              className="border-2 rounded-[8px] border-[#9CA3AF]"
            />
            <p>Note</p>
            <input
              type="text"
              className="border-2 w-full h-full rounded-[8px] border-[#9CA3AF]"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
}
