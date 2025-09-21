import { useState, useMemo } from "react";
import type { ProductType } from "../Types";
import { ProductData } from "../ProductData";

import ProductBanner from "./ProductBanner";
import Products from "./Products";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";

const getPriceRange = (products: ProductType[]) => {
  if (products.length === 0) {
    return { min: 0, max: 100 };
  }
  const prices = products.map(p => p.discountPrice ?? p.price);
  return {
    min: Math.floor(Math.min(...prices)),
    max: Math.ceil(Math.max(...prices)),
  };
};

function ProductsBodySection() {
  // State for mobile drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { min: minPrice, max: maxPrice } = useMemo(() => getPriceRange(ProductData), []);
  const [priceValue, setPriceValue] = useState<number>(maxPrice);

  const [sortBy, setSortBy] = useState("name-asc");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let products = [...ProductData];

    if (selectedColor) {
      products = products.filter(product => product.colors.includes(selectedColor));
    }

    products = products.filter(product => {
        const productPrice = product.discountPrice ?? product.price;
        return productPrice <= priceValue;
    });

    products.sort((a, b) => {
      const priceA = a.discountPrice ?? a.price;
      const priceB = b.discountPrice ?? b.price;
      switch (sortBy) {
        case "name-asc":  return a.name.localeCompare(b.name);
        case "name-desc": return b.name.localeCompare(a.name);
        case "price-asc": return priceA - priceB;
        case "price-desc":return priceB - priceA;
        default: return 0;
      }
    });
    
    setCurrentPage(1);
    
    return products;
  }, [selectedColor, priceValue, sortBy]);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex lg:gap-8">
        <SideBar
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          minPrice={minPrice}
          maxPrice={maxPrice}
          priceValue={priceValue}
          onPriceChange={setPriceValue}
        />

        <main className="w-full">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden mb-4 p-2 rounded-md border text-gray-600"
            aria-label="Open filters"
          >
            <FaBars size={20} />
          </button>

          <ProductBanner />
          <Products
            products={currentProducts}
            totalItems={filteredProducts.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
            itemsPerPage={itemsPerPage}
            onShowChange={setItemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
}

export default ProductsBodySection;