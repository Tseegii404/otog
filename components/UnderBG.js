import React from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import MyButton from "./MyButton";
import logoWith from "../public/logowithbg.svg";

function UnderBG({ onClick, label }) {
  return (
    <div className={css.main}>
      <div
        style={{
          width: "207px",
          height: "183px",
          marginLeft: "50px",
        }}
      >
        <Image
          src={"/logo-bg.png"}
          alt="Picture of the author"
          layout="responsive"
          width={207}
          height={183}
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        />
      </div>
      <div className={css.bg}>
        <h1 className={css.table} layout="responsive" objectFit="cover">
          The Best Outdoor Accessories
        </h1>
        <p className={css.table} layout="responsive" objectFit="cover">
          Discover the most unique places, experiencesand azaming homes around
          the world
        </p>
        <button onClick={onClick} className={css.btn}>
          <p className={css.buttonText}>{label}</p>
        </button>
      </div>
    </div>
  );
}

export default UnderBG;
