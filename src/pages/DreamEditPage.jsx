import { useParams } from "react-router";
import { DreamEditFormWidget } from "../widgets/DreamEditFormWidget/ui";

export default function DreamEditPage() {
  const { id } = useParams(); // Отримуємо ID з URL

  return (
    <div className="max-w-md mx-auto py-8">
      <DreamEditFormWidget dreamId={id} />
    </div>
  );
}
