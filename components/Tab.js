import React from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import burger from "../public/Shape.svg";
import hearth from "../public/hearth.svg";

function Tab({ loginClick, signupClick }) {
  return (
    <div className={css.tab}>
      <div>
        <Image src={burger} alt="burger" width="31.94" height="10.81" />
      </div>
      <div>
        <a className={css.font} onClick={loginClick}>
          Нэвтрэх
        </a>
      </div>
      <div>
        <a className={css.font} onClick={signupClick}>
          Бүртгүүлэх
        </a>
      </div>
      <div>
        <div className={css.hearth}>99</div>
        <Image src={hearth} alt="burger" width="23" height="19.7" />
      </div>
    </div>
  );
}

export default Tab;
