import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataArray from "./datas";
import Section from "./Section";
import Result from "./Result";

export default function MainPage() {
  const { name } = useParams();

  const navigator = useNavigate();

  const [blog, setBlog] = useState({ title: "", description: "" });
  useEffect(() => {
    setBlog(dataArray.find((p) => p.title === name));
  }, [name]);

  return (
    <>
      <Result blog={blog} />
      <button
        onClick={() => navigator(-1)}
        className="text-2xl font-semibold text-green-700 hover:text-green-950"
      >
        Back Page
      </button>
      {dataArray.map((item, index) => (
        <Section item={item} key={index} />
      ))}
    </>
  );
}
