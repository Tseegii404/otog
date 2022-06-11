import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Image from "next/image";
import logoWith from "../public/logowithbg.svg";
import css from "@styles/example.module.sass";
import MyButton from "@components/MyButton";
import dynamic from "next/dynamic";
import bg from "../public/cover.svg";
import burger from "../public/Shape.svg";
import hearth from "../public/hearth.svg";
import tumbnail from "../public/tumbnail.svg";
import Tumbnail from "@components/Tumbnail";

const BgImage = dynamic(() => import("@components/BGImage"), {
  ssr: false,
});

export default function Home() {
  const [increase, setIncrease] = useState(0);
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  function handleClick() {
    setIncrease(increase + 1);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>OTOG</title>
      </Head>
      <div className={css.contain}>
        <div className={css.grid1}>
          <div className={css.main}>
            <Image src={logoWith} alt="Picture of the author" />
            <h1 className={css.table} layout="responsive" objectFit="cover">
              The Best Outdoor Accessories
            </h1>
            <p className={css.table} layout="responsive" objectFit="cover">
              Discover the most unique places, experiencesand azaming homes
              around the world
            </p>
            <MyButton
              label={"hahah"}
              onClick={() => {
                console.log("sdaas");
              }}
            />
          </div>
          <div className={css.con}>
            <Image
              alt="Mountains"
              src={bg}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={css.grid2}>
          <div className={css.centerl}>
            <div className={css.tab}>
              <div>
                <Image src={burger} alt="burger" width="31.94" height="10.81" />
              </div>
              <div>
                <a
                  className={css.font}
                  onClick={() => {
                    console.log("adsadadasdasda");
                  }}
                >
                  Нэвтрэх
                </a>
              </div>
              <div>
                <a
                  className={css.font}
                  onClick={() => {
                    console.log("adsadadasdasda");
                  }}
                >
                  Бүртгүүлэх
                </a>
              </div>
              <div>
                <div className={css.hearth}>99</div>
                <Image src={hearth} alt="burger" width="23" height="19.7" />
              </div>
            </div>
            <div className={css.searchCenter}>
              <div className={css.search}>
                <input
                  type="text"
                  placeholder="Бүтээгдхүүн хайх"
                  className={css.input}
                />
              </div>
            </div>
            <div className={css.searchCenter}>
              <h1>Discover Virtual shop</h1>
            </div>
            <Tumbnail />
          </div>
        </div>
      </div>
    </div>
  );
}
