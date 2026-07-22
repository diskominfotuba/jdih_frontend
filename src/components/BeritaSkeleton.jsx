import React from "react";

const BeritaSkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-28 bg-gray-200 rounded"></div>
        </div>
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded mb-4"></div>
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default BeritaSkeleton;
