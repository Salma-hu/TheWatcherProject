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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Hourly Values Chart',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Hour of Day',
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

const labels = Array.from({length: 24}, (_, i) => `${i}:00`);

export const data = {
  labels,
  datasets: [
    {
      label: 'Hourly Values',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.1,
    },
  ],
};

const HourlyChart = () => {
  const { theme } = useTheme();

  return (
    <div>
     <div className="flex justify-between items-center mb-10">
        <h1 className="title">Chart by Hour</h1>
      </div>
      
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full"> 
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default HourlyChart;