import React from "react";
import cate from "../public/cate.svg";
import Image from "next/image";
import css from "@styles/example.module.sass";

function CategoryComponent({}) {
  return (
    <div className={css.catCon}>
      <div className={css.mainCategory}>
        <Image src={cate} alt="" height={100} width={100} />
      </div>
      <p className={css.categorytxt}>гал тогоо</p>
    </div>
  );
}

export default CategoryComponent;
