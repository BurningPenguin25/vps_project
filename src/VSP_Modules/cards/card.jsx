import React, { useEffect, useState } from "react";

import SSD from "../../Images/Block_mem.svg";
import CS from "../cards/card.module.css";

export default function Card(props) {
  const [tarif, setTarif] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("./goods.json")
      .then((response) => {
        if (!response.ok) {
          throw Error();
        }
        return response.json();
      })
      .then((tarifData) => {
        console.log(tarifData);
        setTarif(tarifData);
        setCard(tarifData.cardsVPS);
      })
      .catch(() => {
        props.sumErrorCards(0);
      });
  }, []);

  let renderData = card.map((strings) => {
    return (
      <div className={CS.card}>
        <div className={CS.headBlock}>
          <div className={CS.cardHeadColor}></div>
          <p className={CS.cardHeadText}>VPS1</p>
        </div>
        <div className={CS.cardStringBlock}>
          <div className={CS.imgBlock}>
            <img src={SSD} alt="" />
            <img src={SSD} alt="" />
            <img src={SSD} alt="" />
            <img src={SSD} alt="" />
            <img src={SSD} alt="" />
          </div>

          <div className={CS.stringBlock}>
            <p>{strings.Name}</p>
            <p>{strings.storageType}</p>
            <p>{strings.RAM}</p>
            <p>{strings.Processor}</p>
            <p>{strings.Speed}</p>
          </div>
        </div>

        <div className={CS.checkBoxButton}>
          <button type="submit">купить</button>
          <p>{strings.Price}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h2 className={CS.lineBlock}>
          <span class={CS.lineStyle}>Топ тарифов</span>
        </h2>
      </div>

      <div className={CS.container}>
        <div className={CS.goodsCards}>{renderData}</div>
      </div>
    </div>
  );
}
