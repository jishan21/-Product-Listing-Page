
const deals = [
  { name: 'Nike', count: 2 },
  { name: 'Airmax', count: 48, active: true },
  { name: 'Nike', count: 14 },
  { name: 'Adidas', count: 15 },
  { name: 'Vans', count: 23 },
  { name: 'All Stars', count: 1 },
  { name: 'Adidas', count: 95 },
];

function HotDeals() {
  return (
    <div className="bg-[#f6f7f8] p-6 rounded shadow-sm w-full max-w-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Hot Deals</h3>
      <ul className="space-y-5">
        {deals.map((deal, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <a  className={`hover:text-blue-500 ${deal.active ? 'text-blue-500 font-semibold' : 'text-gray-600'} hover:cursor-pointer`}>
              {deal.name}
            </a>
            <span className="text-gray-400 font-medium ">
              {deal.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotDeals;