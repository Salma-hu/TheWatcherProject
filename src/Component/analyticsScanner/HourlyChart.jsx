import { useTheme } from "@/hooks/use-theme";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const generateData = () =>
  labels.map(() => faker.datatype.number({ min: 0, max: 900 }));

const HourlyChart = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

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
        text: "Hourly Values Chart (Today & Yesterday)",
        color: isDarkMode ? "white" : "black",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hour of Day",
          color: isDarkMode ? "white" : "black",
        },
        ticks: {
          color: isDarkMode ? "white" : "black",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
          color: isDarkMode ? "white" : "black",
        },
        ticks: {
          color: isDarkMode ? "white" : "black",
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Today's Values",
        data: generateData(),
        borderColor: "rgb(0, 51, 153)",  // Dark Blue
        backgroundColor: "rgba(0, 51, 153, 0.5)",
        tension: 0.3,
      },
      {
        label: "Yesterday's Values",
        data: generateData(),
        borderColor: "rgb(102, 178, 255)", // Light Blue
        backgroundColor: "rgba(102, 178, 255, 0.5)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={`p-4 rounded-lg shadow-md flex-1 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="h-64 w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default HourlyChart;
