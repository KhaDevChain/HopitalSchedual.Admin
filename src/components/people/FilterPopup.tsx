import { useState } from "react";

const FilterPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    RetailStores: true,
    OnlineRetailers: true,
    Resellers: true,
    MobileApps: true,
    DirectSales: true,
  });

  const handleToggle = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleReset = () => {
    setFilters({
      RetailStores: false,
      OnlineRetailers: false,
      Resellers: false,
      MobileApps: false,
      DirectSales: false,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-lg bg-opacity-50 flex items-center justify-center" 
        style={{zIndex: 9999}}>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Filter</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 w-7 h-7 rounded-2xl">✕</button>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <label className="block text-gray-500 font-semibold text-sm mb-2">Products</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by purchased product"
            className="w-full mt-1 p-4 rounded-md text-sm bg-gray-100 focus:outline-none focus:ring focus:bg-white focus:ring-blue-300"
          />
        </div>

        {/* Purchase Channels */}
        <div className="mb-4">
          <label className="block text-gray-500 font-semibold text-sm mb-7">Purchase Channel</label>
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between mb-4">
              <span className="text-black font-semibold">{key.replace(/([A-Z])/g, " $1")}</span>
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleToggle(key as keyof typeof filters)}
                className="w-5 h-5 text-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6">
          <button onClick={handleReset} className="px-5 py-3 border rounded-2xl font-semibold mr-2">Reset</button>
          <button onClick={onClose} className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-2xl">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
