import { useTheme } from "@/hooks/use-theme";  
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import NavButtons from "@/routes/analytics/NavButtons";
import StatsCards from "@/routes/analytics/StatsCards";

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
      text: 'Yesterday\'s Values (2-hour intervals)',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time Intervals',
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

// Generate yesterday's date labels in 2-hour intervals
const generateYesterdayLabels = () => {
  const labels = [];
  const date = new Date();
  date.setDate(date.getDate() - 1); // Get yesterday's date
  
  for(let i = 0; i < 24; i += 2) {
    const startHour = i.toString().padStart(2, '0');
    const endHour = (i + 2).toString().padStart(2, '0');
    labels.push(`${startHour}:00 - ${endHour}:00`);
  }
  
  return labels;
};

const labels = generateYesterdayLabels();

export const data = {
  labels,
  datasets: [
    {
      label: 'Yesterday\'s Values',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(255 99 132)',
      backgroundColor: 'rgb(255 99 132)',
      tension: 0.1,
    },
  ],
};

const YesterdayChart = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="title">Yesterday's Data</h1>

        <div className="flex-1 flex justify-center">
          <StatsCards />
        </div>
        
        <NavButtons />
      </div>
      
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full"> 
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default YesterdayChart;