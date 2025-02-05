import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useTheme } from "@/hooks/use-theme"; // adjust the import path as needed

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const RejectionChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dataSet = [
    { criterion: "Market Cap", count: 10 },
    { criterion: "Liquidity Not Locked", count: 5 },
    { criterion: "Non-burned SOL", count: 7 },
    { criterion: "Freezable Token", count: 3 },
  ];

  const chartData = {
    labels: dataSet.map((d) => `Rejections by ${d.criterion}`),
    datasets: [
      {
        label: "Rejection Count",
        data: dataSet.map((d) => d.count),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const commonColor = isDark ? "white" : "black";

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Rejections by Criteria Breakdown",
        color: commonColor,
      },
      legend: {
        labels: { color: commonColor },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label || ""}: ${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Count", color: commonColor },
        ticks: { color: commonColor },
      },
      x: {
        title: { display: true, text: "Criteria", color: commonColor },
        ticks: { color: commonColor },
      },
    },
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${isDark ? "bg-gray-900" : "bg-white"} w-full h-full flex flex-col`}
    >
      <div className="w-full" style={{ height: "320px" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RejectionChart;
