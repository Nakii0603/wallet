import { Geld } from "../../../Components/Icons";

export default function () {
  return (
    <div className="flex justify-between w-full h-[100vh]">
      <div className="flex flex-col gap-4 justify-center text-center mx-auto">
        <Geld />
        <h1>Create Geld account</h1>
        <p>Sign up below to create your Wallet account</p>
        <div className="flex flex-col gap-3">
          <input
            className="border-2 rounded-xl border-gray-300 p-2"
            type="name"
            placeholder="Name"
          />
          <input
            className="border-2 rounded-xl border-gray-300 p-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-2 rounded-xl border-gray-300 p-2"
            type="password"
            placeholder="Password"
          />
          <input
            className="border-2 rounded-xl border-gray-300 p-2"
            type="password"
            placeholder="Re-Password"
          />
        </div>
        <button className="btn bg-blue-600 rounded-3xl">Sign up</button>
        <div className="flex">
          <p>Already have account?</p>
          <button className="text-blue-500">Log in</button>
        </div>
      </div>
      <div className="bg-blue-600 w-1/2"></div>
    </div>
  )
}
