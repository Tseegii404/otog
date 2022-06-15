import React from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import cover from "../public/cover.svg";
import font from "@styles/font.module.sass";
import hearth from "../public/hearth.svg";

function NewProducts({ buyClick, like, name, price }) {
  return (
    <div className={css.NewProductsMain}>
      <div style={{ backgroundColor: "pink" }}>
        <div className={css.new}>
          <span className={font.font18white}>NEW</span>
        </div>
        {/* <Image
          src={cover}
          alt="asd"
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          quality={100}
          style={{ borderRadius: "10px", position: "absolute" }}
        /> */}
      </div>
      <div className={css.price}>
        <div className={css.column}>
          <span className={font.font24}>{name ? name : "бараа"}</span>
          <div>
            <Image src={hearth} alt="hearth" width="21" height="17.7" />
            <span className={font.font18} style={{ marginLeft: "10px" }}>
              Таалагдсан
            </span>
            <span className={font.font18}> ({like ? like : 0}) </span>
          </div>
        </div>
        <div className={`${css.column} ${css.col}`}>
          <span className={font.font24orange}>{price ? price : 0} ₮</span>
          <button className={css.productBtn} onClick={buyClick}>
            <span className={font.font18white}>Худалдаж авах</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
