import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PnLChart = () => {
  const [timeframe, setTimeframe] = useState("day");

  // Example P&L trades data
  const trades = [
    { date: "2025-01-01T10:00:00Z", pnl: 100 },
    { date: "2025-01-01T15:30:00Z", pnl: -50 },
    { date: "2025-01-02T09:00:00Z", pnl: 200 },
    { date: "2025-01-08T12:00:00Z", pnl: -30 },
    { date: "2025-01-09T14:00:00Z", pnl: 150 },
    { date: "2025-01-15T16:00:00Z", pnl: -70 },
  ];

  // Function to aggregate trades by day/week/month
  const aggregateTrades = (trades, timeframe) => {
    const aggregated = {};

    trades.forEach(trade => {
      const dateObj = new Date(trade.date);
      let dateKey = "";

      if (timeframe === "day") {
        dateKey = dateObj.toISOString().split("T")[0];
      } else if (timeframe === "week") {
        const startOfWeek = new Date(dateObj);
        startOfWeek.setDate(dateObj.getDate() - dateObj.getDay());
        dateKey = startOfWeek.toISOString().split("T")[0];
      } else if (timeframe === "month") {
        const year = dateObj.getFullYear();
        const month = (`0${dateObj.getMonth() + 1}`).slice(-2);
        dateKey = `${year}-${month}`;
      }

      aggregated[dateKey] = (aggregated[dateKey] || 0) + trade.pnl;
    });

    return Object.keys(aggregated)
      .sort()
      .map(date => ({ date, pnl: aggregated[date] }));
  };

  // Get aggregated P&L data
  const aggregatedData = aggregateTrades(trades, timeframe);

  // Simulate previous period for comparison
  const previousData = aggregatedData.map(item => ({
    date: item.date,
    pnl: item.pnl * (Math.random() * 0.5 + 0.75),
  }));

  // Chart data configuration
  const chartData = {
    labels: aggregatedData.map(item => item.date),
    datasets: [
      {
        label: "Current Period",
        data: aggregatedData.map(item => item.pnl),
        fill: false,
        borderColor: "#003366",
        backgroundColor: "#003366",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#003366",
      },
      {
        label: "Previous Period",
        data: previousData.map(item => item.pnl),
        fill: false,
        borderColor: "#60A5FA",
        backgroundColor: "#60A5FA",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#60A5FA",
      },
    ],
  };

  // Chart options - updated to allow resizing like an image
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable the default aspect ratio
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 20,
          font: { size: 14, weight: "bold" },
        },
      },
      title: { display: true, text: "Profit & Loss Trend", font: { size: 16 } },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        title: { display: true, text: "Date / Period", font: { size: 14 } },
        grid: { display: false },
      },
      y: {
        title: { display: true, text: "Profit / Loss ($)", font: { size: 14 } },
        grid: { color: "#ddd" },
      },
    },
  };

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Chart Container */}
        <div
          className="p-6 bg-white shadow-lg rounded-xl relative"
          style={{ height: "400px" }}  // Set a fixed height for the container
        >
          {/* Buttons inside the card, aligned to the right with a higher z-index */}
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            {["day", "week", "month"].map(frame => (
              <button
                key={frame}
                onClick={() => setTimeframe(frame)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  timeframe === frame
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {frame.charAt(0).toUpperCase() + frame.slice(1)}
              </button>
            ))}
          </div>

          {/* Chart Component wrapped in a container that fills its parent */}
          <div style={{ position: "relative", height: "100%" }}>
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PnLChart;
