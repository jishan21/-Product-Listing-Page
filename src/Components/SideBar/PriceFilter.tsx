
function PriceFilter() {
  return (
    <div className="bg-zinc-100 p-6 rounded-lg shadow-sm w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">PRICES</h3>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
        <span>Ranger:</span>
        <span className="font-semibold text-gray-800">$13.99 - $25.99</span>
      </div>
      <div className="relative pt-1">
        <input
          type="range"
          min="13.99"
          max="25.99"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}

export default PriceFilter;