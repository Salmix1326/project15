import { useState, useEffect } from "react";

export const useDreamForm = (
  initialTitle = "",
  initialYear = "",
  initialFriend = ""
) => {
  const [title, setTitle] = useState(initialTitle);
  const [year, setYear] = useState(initialYear);
  const [friend, setFriend] = useState(initialFriend);

  useEffect(() => {
    setTitle(initialTitle);
    setYear(initialYear);
    setFriend(initialFriend);
  }, [initialTitle, initialYear, initialFriend]); // Залежності: реагуємо на зміну початкових значень

  return {
    title,
    setTitle,
    year,
    setYear,
    friend,
    setFriend,
  };
};
