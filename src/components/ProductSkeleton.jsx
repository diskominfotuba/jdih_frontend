import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-5 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
          </div>
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto flex gap-2">
          <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
          <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
