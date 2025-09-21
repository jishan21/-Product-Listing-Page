import FilterBar from "./FilterBar"
import Pagination from "./Pagination"
import ProductBanner from "./ProductBanner"
import Products from "./Products"

function ProductsBodySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProductBanner />
      <FilterBar />
      <Products />
      <Pagination />
    </div>
  )
}

export default ProductsBodySection