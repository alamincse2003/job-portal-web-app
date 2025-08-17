const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center gap-2 justify-center mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 py-1">
        {page} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
