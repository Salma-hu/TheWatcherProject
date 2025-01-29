
import { useTheme } from "@/hooks/use-theme";  
import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import NavButtons from "@/routes/analytics/NavButtons";

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
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 


export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};


const ChartDay = () => {
    const { theme } = useTheme();

    return (
      <div>
      <div className="flex justify-end">
        <NavButtons/>
      </div>
      <div className="flex justify-left">
        <h1 className="title">Chart day</h1>
      </div>
      
      <div className="flex flex-col gap-y-4">
          {/* Modified chart container */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full"> 
            <Line options={options} data={data} />
          </div>
      </div>
     </div>

    );
};

export default ChartDay;