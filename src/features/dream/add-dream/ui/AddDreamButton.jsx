import React from "react";
import { Link } from "react-router";

export const AddDreamButton = ({ className }) => {
  return (
    <div>
      <Link
        to="/dreams/add"
        className={`
           inline-block
           px-6 py-3
           rounded-2xl
           bg-gradient-to-r from-blue-500 to-blue-700
           text-white font-bold
           shadow-md hover:shadow-xl
           transition-shadow duration-300
           hover:from-blue-600 hover:to-blue-800
           ${className || ""}
         `}
      >
        + Add New Dream
      </Link>
    </div>
  );
};
