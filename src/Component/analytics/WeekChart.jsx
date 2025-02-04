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

const generateWeekLabels = () => {
  const days = [];
  const date = new Date();

  for (let i = 6; i >= 0; i--) {
    const day = new Date(date);
    day.setDate(date.getDate() - i);
    days.push(day.toLocaleDateString("en-US", { weekday: "short", day: "numeric" }));
  }

  return days;
};

const labels = generateWeekLabels();

const WeekChart = () => {
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
        text: "Weekly Values Chart",
        color: isDarkMode ? "white" : "black",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Day of Week",
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
        label: "Daily Values",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={`p-4 rounded-lg shadow-md w-full h-full ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="w-full h-64">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default WeekChart;
