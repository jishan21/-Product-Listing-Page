import  { useState, useMemo, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import type { ProductType } from "../Types";
import { ProductData } from "../ProductData";

import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

function Product({ product }: { product: ProductType }) {
  const totalStars = 5;
  const fullStars = Math.round(product.ratingValue);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-sm flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative bg-gray-100 h-52 w-full">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isHot && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            HOT
          </span>
        )}
      </div>
      <div className="p-4 text-center flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">
          {product.name}
        </h3>
        <div className="flex justify-center items-center mb-2 text-sm">
          {[...Array(totalStars)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < fullStars ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
        <div className="flex justify-center items-baseline gap-2 mt-auto">
          <p className="text-lg font-bold text-blue-500">
            ${(product.discountPrice ?? product.price).toFixed(2)}
          </p>
          {product.discountPrice && (
            <p className="text-xs text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </p>
          )}
          {product.discountPercent && (
            <p className="text-xs font-semibold text-red-500">
              {product.discountPercent}% Off
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [sortBy, setSortBy] = useState("name-asc");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(() => {
    const sorted = [...ProductData].sort((a, b) => {
      const priceA = a.discountPrice ?? a.price;
      const priceB = b.discountPrice ?? b.price;

      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        default:
          return 0;
      }
    });
    return sorted;
  }, [sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, itemsPerPage]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="container mx-auto px-4">
      <FilterBar
        totalItems={ProductData.length}
        onSortChange={setSortBy}
        onShowChange={setItemsPerPage}
      />

      <div className="py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {currentProducts.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Products;
