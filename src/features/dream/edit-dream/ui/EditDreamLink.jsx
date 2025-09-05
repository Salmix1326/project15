import { Link } from "react-router";

export const EditDreamLink = ({ dreamId }) => (
  <Link
    to={`/dreams/edit/${dreamId}`}
    className="pl-5 pr-5 pt-2 pb-1 rounded-lg bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors duration-150 cursor-pointer"
  >
    Edit
  </Link>
);
