import { useDeleteDreamMutation } from "../../../../entities/dream/model/dreamsApi";

export const useDeleteButton = () => {
  const [deleteDreamMutation, { isLoading, error }] = useDeleteDreamMutation();

  const handleDeleteDream = async (dreamId) => {
    if (window.confirm("Are you sure you want to delete this dream?")) {
      try {
        await deleteDreamMutation(dreamId).unwrap();
        console.log(`Dream ${dreamId} deleted successfully.`);
        return true;
      } catch (e) {
        console.error("Failed to delete dream:", e);
        return false;
      }
    }
    return false;
  };

  return { handleDeleteDream, isLoading, error };
};
