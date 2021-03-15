import React from "react";

function MarketCap({ value }) {
  return (
    <td>
      <strong>${value.toLocaleString()}</strong>
    </td>
  );
}

export default MarketCap;
