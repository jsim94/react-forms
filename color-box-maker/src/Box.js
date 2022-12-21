import { useState } from "react";
import "./Box.css";

function Box({ color, height, width, id, delBox }) {
  const style = { background: color, height: +height, width: +width };

  return (
    <div className="Box" id={id}>
      <div style={style}></div>
      <button onClick={delBox} data-target={id}>
        X
      </button>
    </div>
  );
}

export default Box;
