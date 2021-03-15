import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import React from "react";

function SparkLinez({ spark }) {
  return (
    <td>
      <Sparklines data={spark} limit={100} width={100} height={60}>
        <SparklinesLine color="green" />
        <SparklinesSpots />
      </Sparklines>
    </td>
  );
}

export default SparkLinez;
