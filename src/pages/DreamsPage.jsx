import { useState, useEffect, useMemo } from "react";
import { useGetDreamsQuery } from "../entities/dream/model/dreamsApi";
import DreamList from "../widgets/DreamListWidget/DreamList";

function DreamsPage() {
  const [page, setPage] = useState(1);
  const [cursors, setCursors] = useState([]);
  const perPage = 6;

  const queryParams = useMemo(() => {
    const cursorsForQuery = cursors.slice(0, page - 1);
    return { page, perPage, cursors: cursorsForQuery };
  }, [page, perPage, cursors]);

  const { data, isLoading } = useGetDreamsQuery(queryParams);

  const dreams = data?.data || [];
  const hasMore = data?.hasMore;

  // Логіка для курсорів та зменшення сторінки при порожньому результаті
  useEffect(() => {
    if (data?.cursor) {
      const cursorId = data.cursor.id;
      if (!cursors.some((c) => c.id === cursorId)) {
        setCursors((prev) => [...prev, data.cursor]);
      }
    }
  }, [data?.cursor, cursors]);

  useEffect(() => {
    if (!isLoading && dreams.length === 0 && page > 1) {
      setPage((p) => p - 1);
    }
  }, [dreams.length, isLoading, page]);

  return (
    <div className="p-4 flex justify-start">
      <DreamList
        dreams={dreams}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
        hasMore={hasMore}
      />
    </div>
  );
}
export default DreamsPage;
