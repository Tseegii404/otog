import React from 'react'
import Header from '@components/Header'
import cn from 'classnames'
import styles from '@styles/Product.module.sass'
import Image from 'next/image'
import MyTab from '@components/MyTab'
import ProductCategory from '@components/product/Category'

const Product = () => {
  const sale = true
  return (
    <div>
      <Header />
      <section className={cn(styles.product)}>
        <div className={cn(styles.images)}>a</div>
        <div className={cn(styles.info)}>
          <ProductCategory />
          <div className={cn(styles.likes)}>
            <Image src="/svg/Like-filled.svg" height={20} width={22} alt="liked" />
            <p>Таалагдсан (12)</p>
          </div>
          <div className={cn(styles.productTitle)}>
            <div>
              <h1>НӨӨЛӨГ майхан</h1>
              <h1>2,290,000₮</h1>
              {sale && (
                <p><s>2’500’000₮</s><span> хямдрал 20%</span></p>
              )}
            </div>
            <div>Logo end baina xD</div>
          </div>
          <MyTab />
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