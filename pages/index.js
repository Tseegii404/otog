import Head from 'next/head';
import Link from 'next/link';
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import Header from './Header'
import Image from 'next/image';
import logoWith from '../public/logowithbg.svg'
import css from '@styles/example.module.sass'
import MyButton from '@components/MyButton';


export default function Home() {
  const [increase, setIncrease] = useState(0);
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  function handleClick() {
    setIncrease(increase + 1)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>OTOG</title>
      </Head>
     <div className={styles.contain}>
      <div
        className={styles.cover}
      >
        <Image
          style={{backGroundColor: '#000'}}
          src={logoWith}
          alt="Picture of the author"
          width={207}
          height={183}
        />
        <h1 className={css.table}>The Best Outdoor Accessories</h1>
        <p>Discover the most unique places, experiencesand azaming homes around the world</p>
        <MyButton label={"hahah"}/>
      </div>
     </div>
    </div>
  )
}
