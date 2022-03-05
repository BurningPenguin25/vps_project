import React, { useEffect, useState } from "react";
// import axios from 'axios
import Proposals from "../Proposal/proposal.module.css";

export default function Proposal(props) {
  const [items, setItems] = useState([]); //общее изменение для всего запроса/всей страницы || у нас не используется items

  const [header, setHeader] = useState(""); //изменение верхней строки
  const [content, setContent] = useState([]); // изменение объекта с данными  content
  const [promo, setPromo] = useState({ price: 0 }); // изменение объекта с ценой|| Почему тут {price: 0}

  useEffect(() => {
    // хук use effect  внутри компонента
    const apiData = "http://steelpages.info/header.json";// запрос данных на адрес сервера
    // Всегда соблюдай отступы. Поправил. Отступов не было
    fetch(apiData) // стандартная схема загрузки данных.
      .then((response) => {
        if (!response.ok) {
          throw Error();
        }
        return response.json();
      })
      .then((result) => {
        setItems(result);
        setHeader(result.header);
        setContent(result.content);
        setPromo(result.promo);
      })
      .catch(() => {
        props.sumErrorProposal(0);
      });
  }, []);

  var contentJsx = content.map((item) => {
    // если мы что то перебираем(например через метод map) то сначала задаем переменную, используем метод перебора и затем выводим это через return. В дальнейшем это
    return (
      <div>
        <p className={Proposals.subHeading}>
          <span className={Proposals.tag}>#</span> {item.caption}
        </p>
        <p className={Proposals.secSubHead}>
          <span className={Proposals.tag}>#</span> {item.subcaption}
        </p>
      </div>
    );
  });

  return (
    <div className={Proposals.proposal}>
      <div className={Proposals.proposalLayer}>
        <div className={` ${Proposals.center} ${Proposals.ProposalBlock}`}>
          <div>
            <h3 className={Proposals.proposalHeading}>
              <span className={Proposals.tag}>#</span> {header}
            </h3>
            {contentJsx}
          </div>
          <div>
            <div className={Proposals.yellowBlock}>
              <p className={Proposals.priceInfo}>Стоимость от </p>
              <h3>{promo.price}</h3>
              <p className={Proposals.priceInfo}>руб в месяц</p>
            </div>
            <button className={Proposals.linkButton}>ЗАКАЗАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
