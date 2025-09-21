import BrandFilter from "./SideBar/BrandFilter";
import ColorFilter from "./SideBar/ColorFilter";
import HotDeals from "./SideBar/HotDeals";
import PriceFilter from "./SideBar/PriceFilter";
import { FaTimes } from "react-icons/fa";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColor: string | null;
  onColorChange: (color: string | null) => void;
  minPrice: number;
  maxPrice: number;
  priceValue: number;
  onPriceChange: (value: number) => void;
}

interface FilterContentProps {
  selectedColor: string | null;
  onColorChange: (color: string | null) => void;
  minPrice: number;
  maxPrice: number;
  priceValue: number;
  onPriceChange: (value: number) => void;
}

function SideBar({ 
  isOpen, 
  onClose, 
  selectedColor,
  onColorChange,
  minPrice,
  maxPrice,
  priceValue,
  onPriceChange
}: SideBarProps) {

  const FilterContent = ({
    selectedColor,
    onColorChange,
    minPrice,
    maxPrice,
    priceValue,
    onPriceChange,
  }: FilterContentProps) => (
    <>
      <HotDeals />
      <PriceFilter 
        min={minPrice}
        max={maxPrice}
        value={priceValue}
        onChange={onPriceChange}
      />
      <ColorFilter 
        selectedColor={selectedColor}
        onColorChange={onColorChange}
      />
      <BrandFilter />
      <button className="w-full py-2 text-sm font-semibold text-gray-700 bg-[#F6F7F8] rounded shadow-sm hover:bg-gray-100">
        MORE
      </button>
    </>
  );

  const filterProps = {
    selectedColor,
    onColorChange,
    minPrice,
    maxPrice,
    priceValue,
    onPriceChange,
  };

  return (
    <>
      <aside className="hidden lg:block w-full lg:w-64 space-y-7 my-3">
        <FilterContent {...filterProps} />
      </aside>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 p-4 space-y-7 my-0 transform transition-transform lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose} className="p-2" aria-label="Close filters">
            <FaTimes />
          </button>
        </div>
        <FilterContent {...filterProps} />
      </aside>
    </>
  );
}

export default SideBar;