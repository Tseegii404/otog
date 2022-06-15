import React from "react";
import css from "@styles/example.module.sass";

const MyButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      <p className={css.buttonText}>{label}</p>
    </button>
  );
};

export default MyButton;
