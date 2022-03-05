import React, { useState, useEffect } from "react";

import FS from "../Footer/Footer.module.css";

export default function Footer(props) {
  const [item, setItem] = useState();
  const [linkList, setLinkList] = useState([]);
  useEffect(() => {
    fetch("./goods.json")
      .then((response) => {
        if (!response.ok) {
          throw Error();
        }
        return response.json();
      })
      .then((footerData) => {
        console.log(footerData);
        setItem(footerData);
        setLinkList(footerData.Footer);
      })
      .catch(() => {
        props.sumErrorFooter(0);
      });
  }, []);

  let list = linkList.map((footer) => {
    return (
      <div>
        <div className={FS.listStyle}>
          <div>{footer.contact}</div>
          <div>{footer.about}</div>
          <div>{footer.policy}</div>
          <div>{footer.terms}</div>
          <div>{footer.catalog}</div>
          <div>{footer.year}</div>
        </div>
      </div>
    );
  });
  return (
    <div className={FS.footer}>
      <div className={` ${FS.container} ${FS.mainFooter}`}>
        <div className={FS.logo}>LOGO</div>
        <div>{list}</div>
      </div>
    </div>
  );
}
