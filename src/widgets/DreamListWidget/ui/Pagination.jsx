export default function Pagination({ page, setPage, hasMore }) {
  const buttonBase =
    "px-5 py-2 rounded-lg font-semibold text-white shadow transition-shadow duration-200";

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className={`${buttonBase} cursor-pointer bg-gradient-to-r from-blue-400 to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-500 hover:to-blue-600`}
      >
        ◀ Prev
      </button>
      <span className="text-lg font-semibold">{page}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasMore}
        className={`${buttonBase} cursor-pointer bg-gradient-to-r from-blue-400 to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-500 hover:to-blue-600`}
      >
        Next ▶
      </button>
    </div>
  );
}
