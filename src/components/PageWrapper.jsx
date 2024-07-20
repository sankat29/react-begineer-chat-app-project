// eslint-disable-next-line no-unused-vars
import React from "react";

function PageWrapper({ children, heading }) {
  return (
   <div className="p-12">
     <div
      className="bg-gradient-to-r from-blue-900 via-pink-400 to-indigo-700
        text-white 
        p-6
        rounded-3xl
        flex
        flex-col
        justify-center
        items-center
        gap-6
        shadow-xl"
    >
      {heading}
      <div
        className="
        flex
        flex-row
        justify-evenly
        items-center
        gap-10
        p-6"
      >
        {children}
      </div>
    </div>
   </div>
  );
}

export default PageWrapper;
