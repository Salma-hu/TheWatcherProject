import { useTheme } from "@/hooks/use-theme";
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

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
  maintainAspectRatio: false, // Important for container-based sizing
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly Values Chart',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Day of Week',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Value',
      },
    },
  },
};

// Generate last 7 days labels
const generateWeekLabels = () => {
  const days = [];
  const date = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const day = new Date(date);
    day.setDate(date.getDate() - i);
    days.push(day.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }));
  }
  
  return days;
};

const labels = generateWeekLabels();

export const data = {
  labels,
  datasets: [
    {
      label: 'Daily Values',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(54, 162, 235)',            // Blue border
      backgroundColor: 'rgba(54, 162, 235, 0.5)',    // Blue background with transparency
      tension: 0.1,
    },
  ],
};

const WeekChart = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full w-full">
      {/* Container with specific dimensions */}
      <div className="w-full h-64"> {/* Adjust height here as needed */}
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default WeekChart;
