import React from "react";
import dataArray from "./datas";
import Section from "./Section";

export default function HomePage() {
  return (
    <>
      <div>
        {dataArray.map((item, index) => (
          <Section item={item} key={index} />
        ))}
      </div>
    </>
  );
}
