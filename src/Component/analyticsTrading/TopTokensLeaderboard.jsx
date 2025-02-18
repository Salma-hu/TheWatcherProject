import React from 'react';

const TopTokensLeaderboard = () => (
  <div className="p-6 bg-white shadow rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Top Tokens by ROI</h2>
    <p className="text-sm text-gray-500 mb-4">Timeframe: Last 30 Days</p>
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Rank</th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Token Name</th>
          <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">ROI (%)</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {[
          { name: 'Token A', roi: 125.45 },
          { name: 'Token B', roi: 98.76 },
          { name: 'Token C', roi: 87.65 },
          { name: 'Token D', roi: 75.32 },
          { name: 'Token E', roi: 75.32 }
        ].map((token, index) => (
          <tr key={token.name}>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
              {index + 1}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
              {token.name}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 text-right">
              {token.roi.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TopTokensLeaderboard;
