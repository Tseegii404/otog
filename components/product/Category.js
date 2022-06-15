import React from "react";
import styles from "@styles/ProductCategory.module.sass";
import cn from "classnames";

const ProductCategory = () => {
  const category = ['Бүтээгдэхүүн', 'Аялалын Майхан']
  return (
    <div className={cn(styles.category)}>
      {category.map((el, idx) => (
        <p className={cn({[styles.lst]: idx === category.length - 1})} key={el}>{el} {idx !== category.length - 1 && '>'}</p>
      ))}
    </div>
  );
};

export default ProductCategory;
