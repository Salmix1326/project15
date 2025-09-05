import {
  useGetDreamByIdQuery,
  useUpdateDreamMutation,
} from "../../../../entities/dream/model/dreamsApi";
import { useNavigate } from "react-router";
import { useDreamForm } from "@/features/dream/dream-form/model/useDreamForm";

export const useEditDream = (dreamId) => {
  const navigate = useNavigate();
  const {
    data: dreamData,
    isLoading: isLoadingProduct,
    error: loadError,
  } = useGetDreamByIdQuery(dreamId);
  const [updateDreamMutation, { isLoading: isUpdating, error: updateError }] =
    useUpdateDreamMutation();

  const { title, setTitle, year, setYear, friend, setFriend } = useDreamForm(
    dreamData?.title || "",
    dreamData?.year || "",
    dreamData?.friend || ""
  );

  const editDream = async () => {
    try {
      await updateDreamMutation({
        id: dreamId,
        data: { title, year, friend },
      }).unwrap();
      navigate("/dreams");
      return true;
    } catch (e) {
      console.error("Failed to update dream:", e);
      return false;
    }
  };

  return {
    title,
    setTitle,
    year,
    setYear,
    friend,
    setFriend,
    isLoadingProduct,
    loadError,
    isUpdating,
    updateError,
    editDream,
  };
};
