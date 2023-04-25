import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const MovieList = ({ movieList }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movieList);
  }, [movieList]);
  console.log(display);
  return (
    <div>
      {display.map((item, index) => (
        <CustomCard key={index} movie={item} />
      ))}
    </div>
  );
};
