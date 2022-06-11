import React, { useState, useEffect } from "react";
import Image from "next/image";
import css from "@styles/example.module.sass";
import bg from "../public/cover.svg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage({ src }) {
  const [width, setWidth] = useState(1900);
  const [height, setHeight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);
    setHeight(height);
  }, []);
  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);
      setHeight(height);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={css.backgroundImage}>
      <Image
        className={css.image}
        src={bg}
        alt="cover"
        width={width}
        height={height}
      />
    </div>
  );
}

export default BGImage;
