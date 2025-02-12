import { useTheme } from "@/hooks/use-theme";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokensPieChartCard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const data = {
    labels: ["Tokens Passing Filters", "Tokens Not Passing Filters"],
    datasets: [
      {
        label: "Percentage",
        data: [75, 25],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)", // Tokens passing
          "rgba(255, 99, 132, 0.5)", // Tokens not passing
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDarkMode ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "Tokens Passing Filters",
        color: isDarkMode ? "white" : "black",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) label += ": ";
            if (context.raw !== null) label += context.raw + "%";
            return label;
          },
        },
      },
    },
  };

  return (
    <div className={`p-4 rounded-lg shadow-md w-full h-full ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="w-full h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default TokensPieChartCard;
