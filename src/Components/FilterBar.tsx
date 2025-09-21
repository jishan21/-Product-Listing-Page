import { BsGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';

interface FilterBarProps {
  totalItems: number;
  onSortChange: (value: string) => void;
  onShowChange: (value: number) => void;
}

function FilterBar({ totalItems, onSortChange, onShowChange }: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 my-8 bg-gray-50 rounded-lg gap-4">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <span className="text-gray-600 text-nowrap">{totalItems} items</span>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-by" className="text-gray-600 text-sm">Sort By</label>
          <select
            id="sort-by"
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="price-asc">Price Low-High</option>
            <option value="price-desc">Price High-Low</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="show" className="text-gray-600 text-sm">Show</label>
          <select
            id="show"
            onChange={(e) => onShowChange(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md text-blue-500 hover:bg-gray-200" aria-label="Grid View">
          <BsGridFill size={20} />
        </button>
        <button className="p-2 rounded-md text-gray-400 hover:bg-gray-200" aria-label="List View">
          <FaList size={20} />
        </button>
      </div>
    </div>
  );
}

export default FilterBar;