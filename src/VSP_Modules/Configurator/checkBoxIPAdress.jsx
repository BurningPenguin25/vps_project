import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";

export default function APIAdress(props) {
  const [APIAdress, setAPIAdress] = useState(0);

  useEffect(() => {
    console.log("Personal IP adress: ", APIAdress);
  }, [APIAdress]);

  return (
    <div className={ConfigCss.checkParag}>
      <input
        checked={APIAdress}
        name="IP"
        type="checkbox"
        onChange={(event) => {
          props.APIAdressProps(event.target.checked ? 100 : 0);
          setAPIAdress(event.target.checked);
        }}
      />
      <label htmlFor="IP">Выделенный IP адрес</label>
    </div>
  );
}
