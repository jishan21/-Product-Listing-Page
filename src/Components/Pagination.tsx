interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center space-x-1 sm:space-x-2 p-4 my-8">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 sm:px-4 py-2 rounded-md text-sm font-medium ${
            currentPage === number
              ? "bg-sky-500 text-white shadow-md"
              : "bg-transparent text-gray-600 hover:bg-gray-200"
          }`}
        >
          {number}
        </button>
      ))}
    </nav>
  );
}

export default Pagination;
