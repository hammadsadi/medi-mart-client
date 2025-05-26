import React from "react";

export const SkeletonItem = () => {
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white animate-pulse">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <div className="bg-gray-300 rounded-lg w-24 h-24 sm:w-32 sm:h-32 shrink-0"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="flex items-center gap-2 pt-2">
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-4 w-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-3">
        <div className="h-6 w-20 bg-gray-300 rounded"></div>
      </div>
    </article>
  );
};
