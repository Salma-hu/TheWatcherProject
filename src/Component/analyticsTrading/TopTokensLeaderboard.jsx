import React from 'react';
import { useTheme } from '@/hooks/use-theme';

const TopTokensLeaderboard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`p-6 shadow rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Top Tokens by ROI
      </h2>
      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Timeframe: Last 30 Days
      </p>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className={`px-4 py-2 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Rank
            </th>
            <th className={`px-4 py-2 text-left text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Token Name
            </th>
            <th className={`px-4 py-2 text-right text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              ROI (%)
            </th>
          </tr>
        </thead>
        <tbody className={`${isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
          {[
            { name: 'Token A', roi: 125.45 },
            { name: 'Token B', roi: 98.76 },
            { name: 'Token C', roi: 87.65 },
            { name: 'Token D', roi: 75.32 },
            { name: 'Token E', roi: 75.32 }
          ].map((token, index) => (
            <tr key={token.name}>
              <td className={`px-4 py-2 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {index + 1}
              </td>
              <td className={`px-4 py-2 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                {token.name}
              </td>
              <td className={`px-4 py-2 whitespace-nowrap text-sm text-right ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                {token.roi.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopTokensLeaderboard;
