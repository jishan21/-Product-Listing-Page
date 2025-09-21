import { ProductData } from "../../ProductData";
const uniqueColors = [...new Set(ProductData.flatMap(p => p.colors))];

interface ColorFilterProps {
  selectedColor: string | null;
  onColorChange: (color: string | null) => void;
}

function ColorFilter({ selectedColor, onColorChange }: ColorFilterProps) {
  return (
    <div className="bg-[#f6f7f8] p-6 rounded shadow-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">COLOR</h3>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => onColorChange(null)}
          className={`px-3 py-1 text-sm rounded-full border-2 transition-colors ${
            !selectedColor
              ? 'bg-blue-500 text-white border-blue-500 font-semibold'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
          }`}
        >
          All
        </button>
        {uniqueColors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`w-6 h-6 rounded-full border border-gray-300 transition-transform transform hover:scale-110 focus:outline-none ${
                selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Color ${color}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorFilter;