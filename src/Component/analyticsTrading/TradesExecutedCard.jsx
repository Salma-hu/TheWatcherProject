import React, { useEffect, useState } from 'react';

function TradesExecutedCard() {
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
    <div className="bg-white rounded-lg shadow-sm p-2 w-40 text-center border border-gray-300">
      <h2 className="text-xs text-gray-500">Trades Executed</h2>
      <p className="text-lg font-semibold text-blue-600">{tradesExecuted}</p>
      <div className="flex justify-between text-xs mt-1">
        <p className="text-green-500">Buy Trades: {buyTrades}</p>
        <p className="text-red-500">Sell Trades: {sellTrades}</p>
      </div>
    </div>
  );
}

export default TradesExecutedCard;
