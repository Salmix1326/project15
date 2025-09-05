export const DreamForm = ({
  title,
  onTitleChange,
  year,
  onYearChange,
  friend,
  onFriendChange,
  onSubmit,
  isNew,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
        {isNew ? "Add New Dream" : "Edit Dream"}
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Dream Title
        </label>
        <input
          value={title}
          onChange={onTitleChange}
          placeholder="Enter dream title"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
          minLength={10}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Target Year
        </label>
        <input
          value={year}
          onChange={onYearChange}
          placeholder="2025"
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
          required
          min={2025}
          max={9999}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Friend Name
        </label>
        <input
          value={friend}
          onChange={onFriendChange}
          placeholder="Enter friend name"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Saving..." : "Save Dream"}
      </button>
    </form>
  );
};
