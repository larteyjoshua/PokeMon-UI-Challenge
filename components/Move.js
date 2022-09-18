import React from "react";

function Move({ moves }) {
  return (
    <div className="flex flex-col h-full w-full sm:grid ">
      <div className="w-20 text-[#00302E]">Moves</div>
      <div className="w-full flex flex-wrap items-center justify-start ">
        {moves?.map((x) => (
          <span
            className="flex items-center  bg-[#5bb0ca] capitalize mb-2 mr-2 justify-center text-white rounded px-1"
            key={x.move.name}
          >
            {x.move.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Move;
