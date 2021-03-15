import React from "react";

function ChangePercent7(props) {
  return (
    <td className={Number(props.price7) >= 0 ? "positive" : "negative"}>
      {Number(props.price7).toFixed(1)}%
    </td>
  );
}

export default ChangePercent7;
