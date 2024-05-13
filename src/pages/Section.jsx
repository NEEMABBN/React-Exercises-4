import React from "react";
import { Link } from "react-router-dom";

export default function Section({ item, index }) {
  return (
    <div key={index} className="border-2 border-blue-900 rounded-lg my-2">
      <h2 className="text-blue-900 font-medium text-lg">{item.title}</h2>
      <p className="text-white font-medium">{item.description}</p>
      <Link
        to={`/mainPage/${item.title}`}
        className="text-red-700 font-semibold hover:text-red-950"
      >
        Open
      </Link>
    </div>
  );
}
