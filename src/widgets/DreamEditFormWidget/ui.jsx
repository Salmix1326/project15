import { useDreamForm } from "../../features/dream/dream-form/model/useDreamForm";
import { useAddDream } from "../../features/dream/add-dream/model/useAddDream";
import { DreamForm } from "../../features/dream/dream-form/ui/DreamForm";
import { useEditDream } from "../../features/dream/edit-dream/model/useEditDream";

export const DreamEditFormWidget = ({ dreamId }) => {
  const isNew = !dreamId;

  // Логіка для випадку "Редагування"
  const {
    title: editTitle,
    setTitle: setEditTitle,
    year: editYear,
    setYear: setEditYear,
    friend: editFriend,
    setFriend: setEditFriend,
    isLoadingDream,
    isUpdating,
    editDream,
  } = useEditDream(dreamId);

  // Логіка для випадку "Додавання" (ініціалізуємо порожню форму через useProductForm)
  const {
    title: addTitle,
    setTitle: setAddTitle,
    year: addYear,
    setYear: setAddYear,
    friend: addFriend,
    setFriend: setAddFriend,
  } = useDreamForm(); // Порожня форма для додавання

  const { addDream, isLoading: isAdding } = useAddDream();

  // Вибір, які дані та обробники використовувати
  const currentTitle = isNew ? addTitle : editTitle;
  const currentSetTitle = isNew ? setAddTitle : setEditTitle;
  const currentYear = isNew ? addYear : editYear;
  const currentSetYear = isNew ? setAddYear : setEditYear;
  const currentFriend = isNew ? addFriend : editFriend;
  const currentSetFriend = isNew ? setAddFriend : setEditFriend;
  const currentIsLoading = isNew ? isAdding : isUpdating || isLoadingDream;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNew) {
      await addDream({
        title: currentTitle,
        year: currentYear,
        friend: currentFriend? currentFriend : "None",
      });
    } else {
      await editDream(); // useEditProduct вже містить всю логіку оновлення
    }
  };

  // Індикація завантаження для режиму редагування
  if (!isNew && isLoadingDream) {
    return <div className="text-center">Loading dream data...</div>;
  }

  return (
    <DreamForm
      isNew={isNew}
      title={currentTitle}
      onTitleChange={(e) => currentSetTitle(e.target.value)}
      year={currentYear}
      onYearChange={(e) => currentSetYear(e.target.value)}
      friend={currentFriend}
      onFriendChange={(e) => currentSetFriend(e.target.value)}
      onSubmit={handleSubmit}
      isSubmitting={currentIsLoading}
    />
  );
};
