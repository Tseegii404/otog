import React from 'react'
import styles from '@styles/Header.module.sass'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className={cn(styles.container)}>
      <div className={cn(styles.row1)}>
        <div>
          <span className={cn(styles.imageWrapper)}><Image src="/svg/instagram.svg" height={20} width={20} alt="instagram" /></span>
          <span className={cn(styles.imageWrapper)}><Image src="/svg/facebook.svg" height={20} width={20} alt="facebook" /></span>
          <span className={cn(styles.imageWrapper)}><Image src="/svg/twitter.svg" height={20} width={20} alt="twitter" /></span>
          <span className={cn(styles.imageWrapper)}><Image src="/svg/linkedin.svg" height={20} width={20} alt="linkedin" /></span>
        </div>
        <div className={cn(styles.rigth)}>
          <span className={cn(styles.iconWrapper)}><Image src="/svg/Call.svg" height={20} width={20} alt="call" /></span>
          <span className={cn('mh-20')}>7014-1400</span>
          <span className={cn(styles.iconWrapper)}><Image src="/svg/Email.svg" height={20} width={20} alt="email" /></span>
          <span className={cn('mh-20')}>info@otogoutdoors.mn</span>
          <span className={cn(styles.iconWrapper)}><Image src="/svg/User.svg" height={20} width={20} alt="user" /></span>
          <span className={cn('ml-20')}>Нэвтрэх</span>
        </div>
      </div>
      <div className='separator' />
      <div className={cn('pv-36', styles.row2)}>
        <span><Image src="/svg/Logo.svg" layout='fixed' height={46.75} width={155} alt="logo" /></span>
        <div className={cn(styles.menuContainer)}>
          <ul>
            <li>
              <Link href="/home">
                <a>Нүүр</a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a>Бидний тухай</a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a>Бүтээгдэхүүн</a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a>Зөвөлгөө, мэдээлэл</a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a>Холбоо барих</a>
              </Link>
            </li>
          </ul>
        </div>
        <SearchBar />
        <div className={cn(styles.user)}>
          <span><Image src="/svg/User-dark.svg" height={20} width={20} alt="instagram" /></span>
          <span><Image src="/svg/Like-dark.svg" height={20} width={20} alt="instagram" /></span>
        </div>
      </div>
    </header>
  )
}

export default Header