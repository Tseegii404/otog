import React from "react";
import css from "@styles/example.module.sass";
import font from "@styles/font.module.sass";
import Image from "next/image";
import dis from "../public/mask.svg";
import hearth from "../public/hearth.svg";

function DiscountProducts({ name, like, price, buyClick }) {
  return (
    <div className={`${css.card} ${css.discountCard}`}>
      <div>
        <div className={css.off}>
          <span className={font.font18white}>25% OFF</span>
        </div>
        {/* <Image src={dis} alt="asd" style={{ position: "absolute" }} /> */}
      </div>
      <div className={`${css.center}`}>
        <span className={font.font24}>Аялалын гал тогоо</span>
        <div className={` ${css.row} `}>
          <span className={font.font24gray}>150'000 ₮</span>
          <span className={font.font24orange}> - </span>
          <span className={font.font24orange}>150'000 ₮</span>
        </div>
        <div className={`${css.row} ${css.mgver}`}>
          <div className={css.hearthbg}>
            <Image src={hearth} />
          </div>
          <button className={css.productBtn} onClick={buyClick}>
            <span className={font.font18white}>Худалдаж авах</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscountProducts;
