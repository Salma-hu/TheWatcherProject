import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/use-theme';

function TradesExecutedCard() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [tradesExecuted, setTradesExecuted] = useState(0);
  const [buyTrades, setBuyTrades] = useState(0);
  const [sellTrades, setSellTrades] = useState(0);

  useEffect(() => {
    // Simulating a fetch to get metrics
    async function fetchMetrics() {
      const data = await new Promise(resolve => {
        setTimeout(() => {
          resolve({ tradesExecuted: 37, buyTrades: 0, sellTrades: 0 });
        }, 1000);
      });
      setTradesExecuted(data.tradesExecuted);
      setBuyTrades(data.buyTrades);
      setSellTrades(data.sellTrades);
    }
    fetchMetrics();
  }, []);

  return (
    <div 
      className={`rounded-lg shadow-sm p-2 w-40 text-center border 
        ${isDarkMode ? "bg-gray-900 text-gray-300 border-gray-700" : "bg-white text-gray-800 border-gray-300"}`}
    >
      <h2 className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        Trades Executed
      </h2>
      <p className={`text-lg font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
        {tradesExecuted}
      </p>
      <div className="flex justify-between text-xs mt-1">
        <p className={`text-green-500 ${isDarkMode ? "text-green-400" : "text-green-500"}`}>
          Buy Trades: {buyTrades}
        </p>
        <p className={`text-red-500 ${isDarkMode ? "text-red-400" : "text-red-500"}`}>
          Sell Trades: {sellTrades}
        </p>
      </div>
    </div>
  );
}

export default TradesExecutedCard;
