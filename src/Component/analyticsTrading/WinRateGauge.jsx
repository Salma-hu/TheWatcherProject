import React from 'react';

const WinRateGauge = ({ winRate }) => {
  // Gauge parameters
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (winRate / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"  // Tailwind gray-200
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#10b981"  // Tailwind green-500
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
      </svg>
      <div className="mt-2 text-xl font-bold text-gray-800">
        {winRate}%
      </div>
    </div>
  );
};

export default WinRateGauge;
