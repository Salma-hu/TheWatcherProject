import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import NavButtons from "@/routes/analytics/NavButtons";
import StatsCards from "@/routes/analytics/StatsCards";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Tokens Passing Filters', 'Tokens Not Passing Filters'],
  datasets: [
    {
      label: 'Percentage',
      data: [75, 25], // Example data: 75% passing, 25% not passing
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)', // Color for tokens passing filters
        'rgba(255, 99, 132, 0.2)', // Color for tokens not passing filters
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)', // Border color for tokens passing filters
        'rgba(255, 99, 132, 1)', // Border color for tokens not passing filters
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Tokens Passing Filters',
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.raw !== null) {
            label += context.raw + '%';
          }
          return label;
        }
      }
    }
  },
};

const TokensPieChart = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-10">
          <h1 className="title">Tokens Chart</h1>

          <div className="flex-1 flex justify-center">
            <StatsCards />
          </div>
        
          <NavButtons />
        </div>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Pie data={data} options={options} />
        </div>
    </div>
  );
};

export default TokensPieChart;