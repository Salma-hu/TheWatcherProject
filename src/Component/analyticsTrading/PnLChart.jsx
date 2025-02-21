import React, { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
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
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
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
        borderColor: "#6b9d9d",
        backgroundColor: "#6b9d9d",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#6b9d9d",
      },
      {
        label: "Previous Period",
        data: previousData.map(item => item.pnl),
        fill: false,
        borderColor: "#4888d9",
        backgroundColor: "#4888d9",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#4888d9",
      },
    ],
  };

  // Chart options adjusted for dark/light mode
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 20,
          font: { size: 14, weight: "bold" },
          color: isDarkMode ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "Profit & Loss Trend",
        font: { size: 16 },
        color: isDarkMode ? "white" : "black",
      },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date / Period",
          font: { size: 14 },
          color: isDarkMode ? "white" : "black",
        },
        grid: { display: false },
        ticks: { color: isDarkMode ? "white" : "black" },
      },
      y: {
        title: {
          display: true,
          text: "Profit / Loss ($)",
          font: { size: 14 },
          color: isDarkMode ? "white" : "black",
        },
        grid: { color: isDarkMode ? "#444" : "#ddd" },
        ticks: { color: isDarkMode ? "white" : "black" },
      },
    },
  };

  return (
    <div className={`flex justify-center ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="w-full max-w-4xl">
        {/* Chart Container */}
        <div
          className={`p-6 shadow-lg rounded-xl relative ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          style={{ height: "400px" }}
        >
          {/* Timeframe selection buttons */}
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
          {/* Chart Component */}
          <div style={{ position: "relative", height: "100%" }}>
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PnLChart;
