import React from "react";

function CurrentPrice({ price }) {
  return (
    <td>
      <strong>${price.toLocaleString()}</strong>
    </td>
  );
}

export default CurrentPrice;
