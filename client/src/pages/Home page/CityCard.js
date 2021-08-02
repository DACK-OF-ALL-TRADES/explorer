import React from "react";

const CityCard = (element) => {
  console.log(element);
  return (
    <div>
      <h1>{element.city}</h1>
    </div>
  );
};

export default CityCard;
