import React from "react";
import Image from "./CoinImage";

function Name({ image, name, symbol }) {
  return (
    <td>
      <Image image={image} /> <strong>{name}</strong>({symbol.toUpperCase()})
    </td>
  );
}

export default Name;
