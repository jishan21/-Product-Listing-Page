
const brands = [
  { name: 'Nike', count: 99 },
  { name: 'Nike', count: 99, active: true },
  { name: 'Adidas', count: 99 },
  { name: 'Siemens', count: 99 },
];

function BrandFilter() {
  return (
    <div className="bg-[#f6f7f8] p-6 rounded shadow-sm w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">BRAND</h3>
      <ul className="space-y-5">
        {brands.map((brand, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <a  className={`hover:text-blue-500 ${brand.active ? 'text-blue-500 font-semibold' : 'text-gray-600'} hover:cursor-pointer`}>
              {brand.name}
            </a>
            <span className="text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-md">
              {brand.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandFilter;