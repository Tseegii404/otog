import React from "react";

function HButton({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ border: 0 }}>
      {children}
    </button>
  );
}

export default HButton;
