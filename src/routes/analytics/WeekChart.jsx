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
  
  for(let i = 6; i >= 0; i--) {
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
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      tension: 0.1,
    },
  ],
};

const WeekChart = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
          <h1 className="title">Weekly Data</h1>
  
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

export default WeekChart;