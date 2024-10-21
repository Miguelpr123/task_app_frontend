import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4 ">Tasks App</h1>
      </Link>
      <Link to="/tasks/create">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
          + Create Task
        </button>
      </Link>
    </div>
  );
};
