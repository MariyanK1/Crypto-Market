import React from "react";

function TotalVolume({ value }) {
  return <td>${value.toLocaleString()}</td>;
}

export default TotalVolume;
