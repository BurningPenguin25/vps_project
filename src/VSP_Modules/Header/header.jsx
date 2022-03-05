import React, { useState } from "react";
import HeadClass from "./header.module.css";

import VK from "../../Images/VK.png";
import INT from "../../Images/INT.png";
import TG from "../../Images/TG.png";
import WA from "../../Images/WA.png";
import CAB from "../../Images/CAB.svg";

export default function Header() {
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");

  return (
    <div className={`${HeadClass.header}`}>
      <div className={`${HeadClass.leftDiv}`}>
        <a href="/#">
          {" "}
          <p className={`${HeadClass.leftDiv_logo}`}> LOGO </p>{" "}
        </a>
        <a href="/#">
          <img src={VK} alt="VK" />
        </a>
        <a href="/#">
          <img src={INT} alt="INT" />
        </a>
        <a href="/#">
          <img src={TG} alt="TG" />
        </a>
        <a href="/#">
          <img src={WA} alt="WA" />
        </a>
      </div>

      <div className={`${HeadClass.centerDiv}`}>
        <a href="/#1" onClick={() => setLink1("VSP")}>
          <p>VSP</p>
        </a>
        <a href="/#2" onClick={() => setLink2("Облачные решения")}>
          <p>Облачные Решения</p>
        </a>
        <a href="/#3">
          <p>О нас</p>
        </a>
        <a href="/#4">
          <p>Все тарифы</p>
        </a>

        <p onClick={() => setLink1("")}>{link1}</p>
        <p onClick={() => setLink2("")}>{link2}</p>
      </div>

      <div className={`${HeadClass.rightDiv}`}>
        <a href="/#">
          {" "}
          <img src={CAB} alt="Cab" />{" "}
        </a>
      </div>
    </div>
  );
}
