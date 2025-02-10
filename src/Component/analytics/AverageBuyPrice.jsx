import React, { useEffect, useState } from 'react';

function AverageBuyPrice() {
  const [tradesExecuted, setTradesExecuted] = useState(0);
  const [avgBuyPrice, setAvgBuyPrice] = useState(0);
  const [buyTrades, setBuyTrades] = useState(0);
  const [sellTrades, setSellTrades] = useState(0);

  useEffect(() => {
    async function fetchMetrics() {
      const data = await new Promise(resolve => {
        setTimeout(() => {
          resolve({ tradesExecuted: 37, avgBuyPrice: 52.34, buyTrades: 0, sellTrades: 0 });
        }, 1000);
      });
      setTradesExecuted(data.tradesExecuted);
      setAvgBuyPrice(data.avgBuyPrice);
      setBuyTrades(data.buyTrades);
      setSellTrades(data.sellTrades);
    }
    fetchMetrics();
  }, []);

  return (
    <div className="flex gap-2">
      <MetricCard title="Trades Executed" value={tradesExecuted} buyTrades={buyTrades} sellTrades={sellTrades} />
      <MetricCard title="Average Buy Price" value={`$${avgBuyPrice.toFixed(2)}`} />
    </div>
  );
}

function MetricCard({ title, value, buyTrades, sellTrades }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 w-36 text-center border border-gray-300">
      <h2 className="text-xs text-gray-500">{title}</h2>
      <p className="text-lg font-semibold text-blue-600">{value}</p>
      {buyTrades !== undefined && sellTrades !== undefined && (
        <div className="flex justify-between text-xs mt-1">
          <p className="text-green-500">Buy Trades: {buyTrades}</p>
          <p className="text-red-500">Sell Trades: {sellTrades}</p>
        </div>
      )}
    </div>
  );
}

export default AverageBuyPrice;
