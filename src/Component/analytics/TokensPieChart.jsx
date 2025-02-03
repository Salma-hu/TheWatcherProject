import { useTheme } from "@/hooks/use-theme";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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
  maintainAspectRatio: false, // Ensures the chart fills the container
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
        label: function (context) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.raw !== null) {
            label += context.raw + '%';
          }
          return label;
        },
      },
    },
  },
};

const TokensPieChartCard = () => {
  const { theme } = useTheme(); // Use theme if needed for dynamic styling

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full w-full">
      {/* Chart container with fixed height */}
      <div className="w-full h-64">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default TokensPieChartCard;
