import Head from 'next/head';
import Link from 'next/link';
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import Header from './Header'
import Img from '../public/cover.jpg'


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
      <div
        style={{
          backgroundImage: "url(" + `${require("../public/cover.jpg")}` + ")",
          width: "100%",
          height:"100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >XXX</div>
    </div>
  )
}
