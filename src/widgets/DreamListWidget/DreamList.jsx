import { DreamCard } from "../../entities/dream";
import { AddDreamButton } from "../../features/dream/add-dream/ui/AddDreamButton";
import { DeleteDreamButton } from "../../features/dream/delete-product/ui/DeleteDreamButton";
import { EditDreamLink } from "../../features/dream/edit-dream/ui/EditDreamLink";
import Pagination from "./ui/Pagination";

function DreamList({ dreams, page, setPage, hasMore, isLoading }) {
  return (
    <div className="p-4 bg-blue-50 border-2 border-blue-300 border-solid rounded-lg flex-shrink basis-1/2">
      <div className="flex justify-between">
        <div className="pl-4 font-bold text-2xl text-blue-600">
          Active Dreams
        </div>
        <AddDreamButton />
      </div>
      {isLoading && (
        <div className="pl-4 font-semibold text-2xl text-blue-400">
          Loading List...
        </div>
      )}
      <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {dreams.map((dream) => (
          <DreamCard
            key={dream.id}
            dream={dream}
            actions={[
              <EditDreamLink dreamId={dream.id} key={`edit-${dream.id}`} />,
              <DeleteDreamButton dreamId={dream.id} key={`edit-${dream.id}`} />,
            ]}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination page={page} setPage={setPage} hasMore={hasMore} />
      </div>
    </div>
  );
}

export default DreamList;
