import React from "react";
import css from "@styles/example.module.sass";
import Image from "next/image";

function LogoBaigullaga({}) {
  // const [login, setLogin] = useState(false);
  return (
    <div className={css.logo}>
      <div style={{ width: "224.4px", height: "71.27px" }}>
        <Image
          src={"/logo1.svg"}
          alt=""
          layout="responsive"
          width={224.4}
          height={71.27}
        />
      </div>
      <div style={{ width: "224.4px", height: "71.27px" }}>
        <Image
          src={"/logo2.svg"}
          alt=""
          layout="responsive"
          width={224.4}
          height={71.27}
        />
      </div>
      <div style={{ width: "224.4px", height: "71.27px" }}>
        <Image
          src={"/logo3.svg"}
          alt=""
          layout="responsive"
          width={224.4}
          height={71.27}
        />
      </div>
      <div style={{ width: "224.4px", height: "71.27px" }}>
        <Image
          src={"/logo1.svg"}
          alt=""
          layout="responsive"
          width={224.4}
          height={71.27}
        />
      </div>
      <div style={{ width: "224.4px", height: "71.27px" }}>
        <Image
          src={"/logo2.svg"}
          alt=""
          layout="responsive"
          width={224.4}
          height={71.27}
        />
      </div>
    </div>
  );
}

export default LogoBaigullaga;
