import React, { useState } from "react";
import Color_btn from "../Color_btn/Color_btn";
import { useEffect } from "react";
function Color_bar({ myColorArr }) {
  const [currcolor, setColor] = useState("black");
  useEffect(() => {
    let body = document.querySelector("body");
    body.style.backgroundColor = currcolor;
  }, [currcolor]);

  return (
    <>
      <div>
        {myColorArr.map((color) => {
          return (
            <Color_btn
              name={color}
              key={color}
              onClick={() => {
                setColor(color);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default Color_bar;
