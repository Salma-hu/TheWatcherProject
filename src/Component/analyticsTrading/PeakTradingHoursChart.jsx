import { useRef, useEffect } from 'react';
import { useTheme } from '@/hooks/use-theme';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const PeakTradingHoursChart = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Create labels for each hour (0:00 to 23:00)
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    // Sample data (replace with your actual data)
    const tradingData = {
      labels,
      datasets: [{
        label: 'Profitability Index',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barPercentage: 0.8,
        categoryPercentage: 0.9
      }]
    };

    const chart = new Chart(ctx, {
      type: 'bar',
      data: tradingData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time of Day (24h)',
              color: isDarkMode ? 'white' : 'black'
            },
            ticks: {
              color: isDarkMode ? 'white' : 'black'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Profitability',
              color: isDarkMode ? 'white' : 'black'
            },
            ticks: {
              color: isDarkMode ? 'white' : 'black'
            },
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: isDarkMode ? 'white' : 'black'
            },
          },
          title: {
            display: true,
            text: 'Peak Trading Hours Analysis',
            color: isDarkMode ? 'white' : 'black'
          }
        }
      }
    });

    // Cleanup the chart on unmount or when theme changes
    return () => chart.destroy();
  }, [isDarkMode]);

  return (
    <div className={`w-full max-w-4xl mx-auto p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-md`}>
      <div className="relative h-96">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PeakTradingHoursChart;
