import React from "react";
import HC from "./ErrorPage.module.css";

import VK from "../../Images/VK.png";
import INT from "../../Images/INT.png";
import TG from "../../Images/TG.png";
import WA from "../../Images/WA.png";
import CAB from "../../Images/CAB.svg";
import ERRPIC from "../../Images/error_page.png";

export default function Header() {
  return (
    <div>
      <div className={`${HC.header}`}>
        <div className={`${HC.leftDiv}`}>
          <a href="/#">
            {" "}
            <p className={`${HC.leftDiv_logo}`}> LOGO </p>{" "}
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

        <div className={`${HC.centerDiv}`}>
          <a href="/#1">
            <p>VSP</p>
          </a>
          <a href="/#2">
            <p>Облачные Решения</p>
          </a>
          <a href="/#3">
            <p>О нас</p>
          </a>
          <a href="/#4">
            <p>Все тарифы</p>
          </a>
        </div>

        <div className={`${HC.rightDiv}`}>
          <a href="/#">
            <img src={CAB} alt="Cab" />
          </a>
        </div>
      </div>

      <div className={` ${HC.errorBlock} ${HC.container}`}>
        <div className={HC.errorMessage}>
          <img
            className={HC.imageError}
            src={ERRPIC}
            alt="something went wrong"
          />
          <h3>Ой, кажется, что то пошло не так...</h3>
          <h3>Мы уже работаем над проблемой</h3>
        </div>
      </div>

      <div className={HC.footer}>
        <div className={` ${HC.container} ${HC.mainFooter}`}>
          <div className={HC.logo}>LOGO</div>
          <div>
            <div className={HC.listStyle}>
              <div>Контакты</div>
              <div>О нас</div>
              <div>политика конфиденциальности</div>
              <div>Условия использования сайта</div>
              <div>Каталог</div>
              <div>c 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
