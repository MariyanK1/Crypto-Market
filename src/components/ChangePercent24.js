import React from "react";

function ChangePercent24h({ price24 }) {
  return (
    <td className={Number(price24) >= 0 ? "positive" : "negative"}>
      {Number(price24).toFixed(1)}%
    </td>
  );
}

export default ChangePercent24h;
