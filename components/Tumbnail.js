import React from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import tumbnail from "../public/tumbnail.svg";
import playbtn from "../public/play_orange.svg";

function Tumbnail({ onClick }) {
  return (
    <div>
      <div className={css.centerm} onClick={onClick}>
        <div className={css.float}>
          <Image src={"/play.svg"} alt="" width={91} height={91} />
        </div>
        <div style={{ width: "100%" }}>
          <Image
            style={{ borderRadius: 10 }}
            src={tumbnail}
            alt="tumbnail"
            height={180}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={css.tum_desc}>
        <div>
          <p className={css.font}>Отор 300 майхан</p>
        </div>
        <div className={css.more}>
          <Image src={playbtn} alt="tumbnail" width={33} height={33} />
          <p className={css.font_orange_bold}>Дэлгэрэнгүй үзэх</p>
        </div>
      </div>
    </div>
  );
}

export default Tumbnail;
