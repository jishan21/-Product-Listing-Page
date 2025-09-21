import { useState } from "react";
import ProductBanner from "./ProductBanner";
import Products from "./Products";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";

function ProductsBodySection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex lg:gap-8">
        <SideBar isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        <main className="w-full">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden mb-4 p-2 rounded-md border text-gray-600"
            aria-label="Open filters"
          >
            <FaBars size={20} />
          </button>

          <ProductBanner />
          <Products />
        </main>
      </div>
    </div>
  );
}

export default ProductsBodySection;
