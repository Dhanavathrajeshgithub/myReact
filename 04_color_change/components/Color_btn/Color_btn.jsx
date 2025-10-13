import "./Color_btn.css";
import React from "react";
function Color_btn({ name, onClick }) {
  return (
    <>
      <button
        className={` ${name}   text-white font-semibold rounded-lg w-40 h-12  transition-colors`}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
}

export default Color_btn;
