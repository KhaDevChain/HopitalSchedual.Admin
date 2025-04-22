import { Phone, ShoppingCart, Store } from "lucide-react";
import React from "react";

const ChannelRevenue: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-xl text-gray-800">Channel revenue</h1>
      </div>

      {/* Growth Rate */}
      <div className="text-2xl font-bold">3.4%</div>
      <p className="text-sm text-gray-500 mb-4">Growth Rate</p>

      {/* Progress Bar */}
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex-1 h-1.5 bg-blue-400 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-green-400 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-orange-400 rounded-full"></div>
      </div>

      {/* Percentages */}
      <div className="flex justify-between text-xs text-gray-600 mb-4">
        <span>28%</span>
        <span>32%</span>
        <span>40%</span>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
        <div className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <ShoppingCart size={18} />
          </div>
          <p className="font-bold text-gray-700">$2.9K</p>
          <p className="text-xs text-gray-500">Online store</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <Store size={18} />
          </div>
          <p className="font-bold text-gray-700">$2.6K</p>
          <p className="text-xs text-gray-500">Physical store</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 rounded-full bg-orange-100 text-orange-600">
            <Phone size={18} />
          </div>
          <p className="font-bold text-gray-700">$2.1K</p>
          <p className="text-xs text-gray-500">Social Media</p>
        </div>
      </div>
    </>
  );
};

export default ChannelRevenue;
