import React, { useState } from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import dynamic from "next/dynamic";
import bg from "../public/cover.svg";
import hearth from "../public/hearth.svg";
import Tumbnail from "@components/Tumbnail";
import UnderBG from "@components/UnderBG";
import Tab from "@components/Tab";
import CategoryComponent from "@components/CategoryComponent";
import NewProducts from "@components/NewProducts";
import DiscountProducts from "@components/DiscountProducts";
import HighRatingProducts from "@components/HighRatingProducts";
import Footer from "@components/Footer";
import LogoBaigullaga from "@components/LogoBaigullaga";

const BgImage = dynamic(() => import("@components/BGImage"), {
  ssr: false,
});

export default function Home() {
  const [increase, setIncrease] = useState(0);
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  function handleClick() {
    setIncrease(increase + 1);
  }
  const arr = [1, 2];
  const arr1 = [1];
  const arr2 = [1];
  return (
    <div>
      {/*ХИЙДЭРИЙГ 2 ХЭСЭГТ ХУВААСНЫ ЭХНИЙ ХЭСЭГ НЬ **/}
      <div className={css.contain}>
        <div className={css.grid1}>
          <UnderBG
            label={"See more"}
            onClick={() => {
              console.log("smda");
            }}
          />
          <div className={css.con}>
            <Image
              alt="Mountains"
              src={bg}
              // layout="responsive"
              // objectFit="cover"
            />
          </div>
        </div>
        {/*ХИЙДЭРИЙГ 2 ХЭСЭГТ ХУВААСНЫ ХОЁР ДАХЬ ХЭСЭГ НЬ **/}
        <div className={css.grid2}>
          <div className={css.centerl}>
            <Tab />
            <div className={css.forSearch}>
              <input
                placeholder="Бүтээгдхүүн хайх"
                className={css.search}
                onChange={(e) => console.log(e.target.value)}
              />
              <Image
                src={"/search.svg"}
                alt=""
                width={28}
                height={28}
                style={{ margin: 20 }}
              />
            </div>
            <div className={css.searchCenter}>
              <p className={css.discover}>Discover Virtual shop</p>
            </div>
            <Tumbnail
              onClick={() => {
                alert("alert");
              }}
            />
            <Tumbnail
              onClick={() => {
                alert("alert");
              }}
            />
            <Tumbnail
              onClick={() => {
                alert("alert");
              }}
            />
          </div>
        </div>
      </div>
      <div className={css.category}>
        <p className={css.boldtext}>БҮТЭЭГДЭХҮҮНЫ КАТАГОРИ</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {arr.map((item, index) => {
            return <CategoryComponent />;
          })}
        </div>
        {/*ШИНЭ БҮТЭЭГДХҮҮНҮҮД**/}
        <div className={css.newProduct}>
          <p className={css.boldtext}>ШИНЭ БҮТЭЭГДЭХҮҮН</p>
          <Image src={hearth} alt="" />
        </div>
        <div className={css.row}>
          {arr2.map((item, index) => {
            return (
              <NewProducts
                price={"1'500'000"}
                name={"Майхан 500"}
                like={12}
                buyClick={() => {
                  console.log("dsfs");
                }}
              />
            );
          })}
          {/* Hyamdraltai buteegdhuunuud**/}
        </div>
        <div className={css.newProduct}>
          <p className={css.boldtext}>ХЯМДРАЛТТАЙ БҮТЭЭГДЭХҮҮН</p>
          <Image src={hearth} alt="" />
        </div>
        <div className={css.row}>
          {arr1.map((item, index) => {
            return <DiscountProducts />;
          })}
        </div>
        {/* Unelgee undur buteegdehuunuud**/}
        <div className={css.newProduct}>
          <p className={css.boldtext}>ҮНЭЛГЭЭ ӨНДӨР БҮТЭЭГДЭХҮҮН</p>
          <Image src={hearth} alt="" />
        </div>
        <div className={css.row}>
          {arr1.map((item, index) => {
            return <HighRatingProducts />;
          })}
        </div>

        {/* Hamtran ajillah baiguullaguudiin logonuud**/}
        <LogoBaigullaga />
      </div>
      {/* Footer**/}
      <Footer />
    </div>
  );
}
