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
          objectFit="cover"
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
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={playbtn} alt="tumbnail" width="33px" height="33px" />
          <p>Дэлгэрэнгүй үзэх</p>
        </div>
      </div>
    </div>
  );
}

export default Tumbnail;
