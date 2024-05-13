import React from "react";

export default function Result({ blog }) {
  return (
    <div>
      <h1 className="text-xl font-bold text-blue-400">{blog?.title}</h1>
      <span className="text-white font-medium">{blog?.description}</span>
    </div>
  );
}
