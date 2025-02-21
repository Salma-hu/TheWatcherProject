import { Bar } from 'react-chartjs-2';
import { useTheme } from '@/hooks/use-theme';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const FailedTransactions = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const data = {
    labels: ['Slippage', 'Liquidity Issues', 'Network Failure'],
    datasets: [
      {
        data: [45, 30, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to scale freely
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? 'white' : 'black',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode ? 'white' : 'black',
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className={`w-full h-[50vh] max-w-3xl mx-auto p-4 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      } shadow-lg rounded-lg`}
    >
      <h2
        className={`text-xl font-bold text-center mb-4 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}
      >
        Failed Transactions by Reason
      </h2>
      <div className="h-[90%]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default FailedTransactions;
