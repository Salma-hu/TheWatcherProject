    import React from 'react';

    const GasFeesCard = ({ totalGasFees }) => (
    <div className="p-6 bg-white shadow rounded-lg flex flex-col items-center">
        <span className="text-sm text-gray-500">Total Gas Fees Spent</span>
        <span className="text-3xl font-bold text-green-600">{totalGasFees} ETH</span>
    </div>
    );

    export default GasFeesCard;
