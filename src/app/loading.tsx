import React from "react";

const loading = () => {
  return (
    <div className="relative w-screen min-h-screen z-50 overflow-hidden">
      <div className="absolute top-0 start-0 w-full h-full bg-white/[.5] rounded-lg opacity-30 "></div>

      <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-[#027808] rounded-full "
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default loading;
