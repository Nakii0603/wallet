"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["jul", "jul", "jul", "jul", "jul", "jul", "jul"],
    datasets: [
      {
        label: false,
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(132,204,22)",
      },
      {
        label: false,
        data: [2100000, 2100000, 2100000, 2100000, 2100000, 2100000, 2100000],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(249,115,22)",
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: false, 
        position: "right",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, 
      },
    },
  });

  return (
    <>
      <div className="relative p-1 bg-white">
        <Bar
          data={chartData}
          options={chartOptions}
          width={"588px"}
          height={"226px"}
        />
      </div>
    </>
  );
};

export default BarChart;
