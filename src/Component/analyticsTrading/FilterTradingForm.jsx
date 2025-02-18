import React, { useState } from 'react';
import { FiPercent, FiDollarSign, FiFilter, FiTrash2, FiAlertCircle } from 'react-icons/fi';

const FilterTradingForm = () => {
  const initialFormData = {
    slippageFrom: '',
    slippageTo: '',
    gasFeesFrom: '',
    gasFeesTo: '',
    takeProfit: '',
    stopLoss: '',
    priority: false,
  };

  const requiredFields = ['slippageFrom', 'slippageTo', 'gasFeesFrom', 'gasFeesTo', 'takeProfit', 'stopLoss'];

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    if (requiredFields.includes(name)) {
      if (value === '') {
        error = 'This field is required';
      } else {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
          error = 'Please enter a valid number';
        } else if (name === 'slippageFrom' && formData.slippageTo && numValue > parseFloat(formData.slippageTo)) {
          error = 'From value cannot be greater than To value';
        } else if (name === 'slippageTo' && formData.slippageFrom && numValue < parseFloat(formData.slippageFrom)) {
          error = 'To value cannot be less than From value';
        } else if (name === 'gasFeesFrom' && formData.gasFeesTo && numValue > parseFloat(formData.gasFeesTo)) {
          error = 'From value cannot be greater than To value';
        } else if (name === 'gasFeesTo' && formData.gasFeesFrom && numValue < parseFloat(formData.gasFeesFrom)) {
          error = 'To value cannot be less than From value';
        }
      }
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (type !== 'checkbox') validateField(name, newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = {};

    // Check required fields are filled
    requiredFields.forEach((key) => {
      if (formData[key] === '') {
        newErrors[key] = 'This field is required';
        formValid = false;
      }
    });

    // Check if filled fields are valid numbers
    requiredFields.forEach((key) => {
      const value = formData[key];
      if (value !== '') {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
          newErrors[key] = 'Please enter a valid number';
          formValid = false;
        }
      }
    });

    // Check From <= To for slippage and gas fees
    if (formData.slippageFrom && formData.slippageTo) {
      const from = parseFloat(formData.slippageFrom);
      const to = parseFloat(formData.slippageTo);
      if (from > to) {
        newErrors.slippageFrom = 'From value cannot be greater than To value';
        formValid = false;
      }
    }

    if (formData.gasFeesFrom && formData.gasFeesTo) {
      const from = parseFloat(formData.gasFeesFrom);
      const to = parseFloat(formData.gasFeesTo);
      if (from > to) {
        newErrors.gasFeesFrom = 'From value cannot be greater than To value';
        formValid = false;
      }
    }

    setErrors(newErrors);
    if (!formValid) return;

    console.log('Form Data:', formData);
    // Process filter logic here
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5"
    >
      <div className="flex items-center mb-4">
        <FiFilter className="w-5 h-5 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Trading Filters</h2>
      </div>

      {/* Slippage Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FiPercent className="mr-1 w-4 h-4" />
          Slippage (%)
        </label>
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                name="slippageFrom"
                placeholder="From"
                value={formData.slippageFrom}
                onChange={handleChange}
                min="0"
                className="w-full pl-8 pr-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute left-2 top-3 text-gray-400 text-sm">%</span>
            </div>
            {errors.slippageFrom && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.slippageFrom}
              </p>
            )}
          </div>
          <span className="text-gray-400">–</span>
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                name="slippageTo"
                placeholder="To"
                value={formData.slippageTo}
                onChange={handleChange}
                min="0"
                className="w-full pl-8 pr-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute left-2 top-3 text-gray-400 text-sm">%</span>
            </div>
            {errors.slippageTo && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.slippageTo}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Gas Fees Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FiDollarSign className="mr-1 w-4 h-4" />
          Gas Fees
        </label>
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                name="gasFeesFrom"
                placeholder="From"
                value={formData.gasFeesFrom}
                onChange={handleChange}
                min="0"
                className="w-full pl-8 pr-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute left-2 top-3 text-gray-400 text-sm">$</span>
            </div>
            {errors.gasFeesFrom && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.gasFeesFrom}
              </p>
            )}
          </div>
          <span className="text-gray-400">–</span>
          <div className="flex-1">
            <div className="relative">
              <input
                type="number"
                name="gasFeesTo"
                placeholder="To"
                value={formData.gasFeesTo}
                onChange={handleChange}
                min="0"
                className="w-full pl-8 pr-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute left-2 top-3 text-gray-400 text-sm">$</span>
            </div>
            {errors.gasFeesTo && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <FiAlertCircle className="mr-1" /> {errors.gasFeesTo}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Take Profit */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FiPercent className="mr-1 w-4 h-4" />
          Take Profit
        </label>
        <div className="relative">
          <input
            type="number"
            name="takeProfit"
            placeholder="Enter target percentage"
            value={formData.takeProfit}
            onChange={handleChange}
            min="0"
            className="w-full pl-8 pr-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="absolute left-2 top-3 text-gray-400 text-sm">%</span>
        </div>
        {errors.takeProfit && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <FiAlertCircle className="mr-1" /> {errors.takeProfit}
          </p>
        )}
      </div>

      {/* Stop Loss */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FiPercent className="mr-1 w-4 h-4" />
          Stop Loss
        </label>
        <div className="relative">
          <input
            type="number"
            name="stopLoss"
            placeholder="Enter stop loss percentage"
            value={formData.stopLoss}
            onChange={handleChange}
            min="0"
            className="w-full pl-8 pr-3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="absolute left-2 top-3 text-gray-400 text-sm">%</span>
        </div>
        {errors.stopLoss && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <FiAlertCircle className="mr-1" /> {errors.stopLoss}
          </p>
        )}
      </div>

      {/* Priority Toggle */}
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center">
          <FiAlertCircle className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-gray-700">Priority Transaction</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="priority"
            checked={formData.priority}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex space-x-3 pt-4">
        <button
          type="submit"
          className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FiFilter className="mr-2" /> Apply Filters
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          <FiTrash2 className="mr-2" /> Clear
        </button>
      </div>
    </form>
  );
};

export default FilterTradingForm;