import React from "react";

function Error({error}) {
  return (
    <div className="w-1/2 space-y-2">
      <div
        className="px-4 py-4 text-purple-800 bg-purple-300 rounded shadow-lg shadow-purple-500/50"
        role="alert"
      >
        {error}
      </div>
    </div>
  );
}

export default Error;
