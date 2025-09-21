interface PriceFilterProps {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
}

function PriceFilter({ min, max, value, onChange }: PriceFilterProps) {
  return (
    <div className="bg-[#f6f7f8] p-6 rounded shadow-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">PRICES</h3>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
        <span>Range:</span>
        <span className="font-semibold text-gray-800">${min} - ${value}</span>
      </div>
      <div className="relative pt-1">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}

export default PriceFilter;