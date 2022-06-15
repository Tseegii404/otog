import React from "react";
import css from "@styles/example.module.sass";
import footercss from "@styles/footer.module.sass";
import font from "@styles/font.module.sass";
import Image from "next/image";

function Footer({}) {
  return (
    <div className={footercss.footer}>
      <div className={footercss.grid}>
        <div className={footercss.grid1}>
          <Image src={"/logo.svg"} alt="" width={193} height={58} />
          <span
            className={`${font.font18black}`}
          >{`ОТОГ Аяны Дэлгүүр- Иж бүрэн, амар хялбар, тав 
            тухтай аялал. Майхан, аяны болон уулын 
            хэрэгслийн төрөлжсөн дэлгүүр.`}</span>
          <div className={css.row}>
            <div
              onClick={() => {
                alert("instagram");
              }}
            >
              <Image src={"/insta_logo.svg"} width={56} height={56} />
            </div>
            <div
              className={footercss.twitter}
              onClick={() => {
                alert("twitter");
              }}
            >
              <Image src={"/twitter_logo.svg"} width={56} height={56} />
            </div>
            <div
              onClick={() => {
                alert("bacebook");
              }}
            >
              <Image src={"/fb_logo.svg"} width={56} height={56} />
            </div>
          </div>
        </div>
        <div className={`${footercss.row} ${footercss.grid2}`}>
          <div>
            <ul className={footercss.column}>
              <span
                style={{ marginBottom: "20px" }}
                className={font.font24bold}
              >
                Компани
              </span>
              <li>
                <a className={font.font18blackline}>Бидний тухай</a>
              </li>
              <li>
                <a className={font.font18blackline}>Бүтээгдэхүүн</a>
              </li>
              <li>
                <a className={font.font18blackline}>Холбоо барих</a>
              </li>
              <li>
                <a className={font.font18blackline}>Мэдээ мэдээлэл</a>
              </li>
              <li>
                <a className={font.font18blackline}>Хүний нөөц</a>
              </li>
            </ul>
          </div>
          <div style={{ textDecoration: "none" }}>
            <ul className={footercss.column}>
              <span
                style={{ marginBottom: "20px" }}
                className={font.font24bold}
              >
                Мэдээлэл
              </span>
              <li>
                <a className={font.font18blackline}>Онлайн туслах</a>
              </li>
              <li>
                <a className={font.font18blackline}>Төлбөрийн систем</a>
              </li>
              <li>
                <a className={font.font18blackline}>Бараа буцаах</a>
              </li>
              <li>
                <a className={font.font18blackline}>Дүрэм журам</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className={footercss.column}>
              <span
                style={{ marginBottom: "20px" }}
                className={font.font24bold}
              >
                Холбоо барих
              </span>
              <li>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={"/phone.svg"} alt="" width={20} height={16} />
                  <a
                    style={{ marginLeft: "10px" }}
                    className={font.font18blackline}
                  >
                    7014-1400
                  </a>
                </div>
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={"/meil_orange.svg"}
                    alt=""
                    width={20}
                    height={16}
                  />
                  <a
                    style={{ marginLeft: "10px" }}
                    className={font.font18blackline}
                  >
                    info@otogoutdoors.mn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={footercss.line}></div>
      <div className={footercss.last}>
        <span>Copyright © 2022 Otog Outdoors. All Right Reseved</span>
        <Image src={"/paypal.svg"} width={122} height={29} />
      </div>
    </div>
  );
}

export default Footer;
