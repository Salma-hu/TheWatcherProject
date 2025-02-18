import { useRef, useEffect } from 'react'; 
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const PeakTradingHoursChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    // Create labels for each hour (0:00 to 23:00)
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    // Sample data (replace with your actual data)
    const tradingData = {
      labels: labels,
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
              text: 'Time of Day (24h)'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Profitability'
            },
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Peak Trading Hours Analysis'
          }
        }
      }
    });

    // Cleanup the chart on unmount
    return () => chart.destroy();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="relative h-96">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PeakTradingHoursChart;
