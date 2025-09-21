import { FaStar } from "react-icons/fa";
import type { ProductType } from "../Types";

import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

interface ProductsProps {
  products: ProductType[];
  totalItems: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  itemsPerPage: number;
  onShowChange: (value: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Product({ product }: { product: ProductType }) {
    const totalStars = 5;
    const fullStars = Math.round(product.ratingValue);
  
    return (
      <div className="bg-white   border-gray-300 rounded-lg shadow-sm w-full max-w-sm flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative bg-gray-300 h-52 w-full">
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
        <div className="p-4    text-center flex flex-col flex-grow">
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
              <p className="text-xs font-semibold text-[#FB7181]">
                {product.discountPercent}% Off
              </p>
            )}
          </div>
        </div>
      </div>
    );
}
  
function Products({
  products,
  totalItems,
  onSortChange,
  onShowChange,
  currentPage,
  totalPages,
  onPageChange,
}: ProductsProps) {
  return (
    <div className="container mx-auto px-4 w-full">
      <FilterBar
        totalItems={totalItems}
        onSortChange={onSortChange}
        onShowChange={onShowChange}
      />

      <div className="py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Products;