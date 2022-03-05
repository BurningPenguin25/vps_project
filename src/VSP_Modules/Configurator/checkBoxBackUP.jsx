import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";

export default function CheckBoxBackUp(props) {
  const [backUp, setBackUp] = useState(0);

  useEffect(() => {
    console.log("BackUp twice a hour: ", backUp);
  }, [backUp]);

  return (
    <div className={ConfigCss.checkParag}>
      <input
        checked={backUp}
        htmlFor="BackUp"
        name="BackUp"
        type="checkbox"
        onChange={(event) => {
          props.backUpProps(event.target.checked ? 100 : 0);
          setBackUp(event.target.checked);
        }}
      />
      <label>Бекапы раз в 2 часа</label>
    </div>
  );
}
