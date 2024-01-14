import { Home } from "../../public/Icons";

let arr = [
  {
    title: "Lending & Renting",
    income: "4300",
    date: "12:47",
  },
  {
    title: "Lending & Renting",
    income: "4300",
    date: "12:47",
  },
  {
    title: "Lending & Renting",
    income: "4300",
    date: "12:47",
  },
  {
    title: "Lending & Renting",
    income: "4300",
    date: "12:47",
  },
  {
    title: "Lending & Renting",
    income: "4300",
    date: "12:47",
  },
];

export function IncomeAndExpend(e) {
  return arr.map((e) => {
    return (
      <div className="flex p-2 px-6 justify-between  h-14 bg-white rounded-lg border items-center">
        <div className="flex gap-4">
          <input type="checkbox" />
          <Home />
          <div>
            <p>{e.title}</p>
            <p className="text-gray-500 text-sm">{e.date}</p>
          </div>
        </div>
        <p className="text-yellow-400">{e.income}</p>
      </div>
    );
  });
}
