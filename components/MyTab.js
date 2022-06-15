import React, { useEffect, useState } from "react";
import styles from "@styles/MyTab.module.sass";
import cn from "classnames";

const MyTab = () => {
  const tabs = [
    {
      title: "Хүргэлт",
      body: "1Sit esse exercitation aliqua id irure reprehenderit. Sit nostrud occaecat ut nisi commodo enim laborum fugiat et anim. Officia pariatur nisi dolor non sint id adipisicing ex magna exercitation et exercitation. Sint occaecat pariatur velit magna id nostrud veniam.",
    },
    {
      title: "Хөнгөлөлт",
      body: "2Sit esse exercitation aliqua id irure reprehenderit. Sit nostrud occaecat ut nisi commodo enim laborum fugiat et anim. Officia pariatur nisi dolor non sint id adipisicing ex magna exercitation et exercitation. Sint occaecat pariatur velit magna id nostrud veniam.",
    },
    {
      title: "Дэлгүүрээс авах",
      body: "3Sit esse exercitation aliqua id irure reprehenderit. Sit nostrud occaecat ut nisi commodo enim laborum fugiat et anim. Officia pariatur nisi dolor non sint id adipisicing ex magna exercitation et exercitation. Sint occaecat pariatur velit magna id nostrud veniam.",
    },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    console.log(activeIdx);
  }, [activeIdx]);

  return (
    <>
      <div className={cn(styles.tabContainer)}>
        {tabs.map((el, idx) => {
          return (
            <div
              className={cn(styles.tabItem, {
                [styles.activeTab]: idx === activeIdx,
              })}
              onClick={() => setActiveIdx(idx)}
              key={idx}
            >
              {el.title}
            </div>
          );
        })}
      </div>
      <div className={styles.bottomLine} />
      <div>{tabs[activeIdx]?.body}</div>
    </>
  );
};

export default MyTab;
