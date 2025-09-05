import { useDeleteButton } from "../model/useDeleteButton";

export const DeleteDreamButton = ({ dreamId, className, onDeleted }) => {
  const { handleDeleteDream, isLoading } = useDeleteButton();

  const handleClick = async () => {
    const success = await handleDeleteDream(dreamId);
    if (success && onDeleted) {
      onDeleted(dreamId);
    }
  };

  const buttonBase =
    "px-5 py-2 rounded-lg font-semibold text-white shadow transition-shadow duration-200";

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`${buttonBase} cursor-pointer bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed ${
        className || ""
      }`}
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
};
