import React from 'react'
import Header from '@components/Header'
import cn from 'classnames'
import styles from '@styles/Product.module.sass'

const Product = () => {
  return (
    <div>
        <Header />
        <section className={cn(styles.product)}>
          <div className={cn(styles.images)}>a</div>
          <div className={cn(styles.info)}>
            <div></div>
            <span>Бүтээгдэхүүн </span>
            <span>Аялалын Майхан</span>
          </div>
        </section>
        <section className={cn(styles.comment)}>
          <div className={cn(styles.comments)}></div>
          <div className={cn(styles.form)}></div>
        </section>
    </div>
  )
}

export default Product