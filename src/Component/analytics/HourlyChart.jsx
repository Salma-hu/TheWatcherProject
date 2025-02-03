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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "black",
      },
    },
    title: {
      display: true,
      text: "Hourly Values Chart (Today & Yesterday)",
      color: "black",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Hour of Day",
        color: "black",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Value",
        color: "black",
      },
    },
  },
};

const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const data = {
  labels,
  datasets: [
    {
      label: "Today's Values",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      tension: 0.1,
    },
    {
      label: "Yesterday's Values",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(0, 128, 0)",
      backgroundColor: "rgba(0, 128, 0, 0.5)",
      tension: 0.1,
    },
  ],
};

const HourlyChart = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1">
      <div className="h-64 w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default HourlyChart;
