function Pagination() {
  return (
    <nav className="flex justify-center items-center space-x-1 sm:space-x-2 p-4 my-8">
      <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-transparent text-gray-600 hover:bg-gray-200">
        1
      </button>

      <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-transparent text-gray-600 hover:bg-gray-200">
        2
      </button>

      <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-sky-500 text-white shadow-md">
        3
      </button>

      <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-transparent text-gray-600 hover:bg-gray-200">
        4
      </button>

      <button className="px-3 sm:px-4 py-2 rounded-md text-sm font-medium bg-transparent text-gray-600 hover:bg-gray-200">
        5
      </button>
    </nav>
  );
}

export default Pagination;