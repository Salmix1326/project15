import { Fragment } from "react";

export function DreamCard({ dream, actions }) {
  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-2xl p-6 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-bold text-2xl text-blue-800 mb-3 truncate">
        {dream.title}
      </h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold text-blue-600">Friend:</span>{" "}
        {dream.friend}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold text-blue-600">Target Year:</span>{" "}
        {dream.year}
      </p>
      <div className="mt-auto flex flex-wrap gap-2">
        {actions &&
          actions.map((action, index) => (
            <Fragment key={index}>{action}</Fragment>
          ))}
      </div>
    </div>
  );
}
