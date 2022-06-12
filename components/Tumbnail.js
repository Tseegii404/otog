import React from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import tumbnail from "../public/tumbnail.svg";
import playbtn from "../public/play_orange.svg";

function Tumbnail() {
  return (
    <div>
      <div>
        <Image
          style={{ borderRadius: 10 }}
          src={tumbnail}
          alt="tumbnail"
          height="117px"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>Отор 300 майхан</p>
        </div>
        <div className={css.more}>
          <div>
            <Image src={playbtn} alt="tumbnail" width="33px" height="33px" />
          </div>
          <div>
            <p>Дэлгэрэнгүй үзэх</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tumbnail;
