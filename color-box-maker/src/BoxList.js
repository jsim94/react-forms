import { useState } from "react";
import NewBoxform from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css";

function BoxList() {
  const [boxList, setBoxList] = useState([]);

  const submit = ({ color, height, width }) => {
    setBoxList((boxList) => [...boxList, { color, height, width }]);
  };

  const delBox = (evt) => {
    const idx = evt.currentTarget.dataset.target;
    const listCopy = [...boxList];
    listCopy.splice(idx, 1);
    setBoxList(listCopy);
  };

  return (
    <div className="BoxList">
      <NewBoxform submit={submit} />
      <div className="BoxList-container">
        {boxList.map((box, idx) => (
          <Box
            color={box.color}
            height={box.height}
            width={box.width}
            id={idx}
            delBox={delBox}
          ></Box>
        ))}
      </div>
    </div>
  );
}

export default BoxList;
