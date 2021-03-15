import React from "react";

function CirculatingSupply({ value, symbol }) {
  return (
    <td>
      <strong>
        {value.toLocaleString()}
        <small>{symbol.toUpperCase()}</small>
      </strong>
    </td>
  );
}

export default CirculatingSupply;
