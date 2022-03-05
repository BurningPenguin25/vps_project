import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";
import MEM from "../../Images/BlockMEM.svg";

export default function CheckBoxHHD() {
  const [checkHhd, setCheckHhd] = useState(false);

  useEffect(() => {
    console.log("CheckBox Type HHD: ", checkHhd);
  }, [checkHhd]);
  return (
    <div className={ConfigCss.leftSliderBlockC}>
      <img src={MEM} alt="альтернативный текст" />
      <div className={ConfigCss.leftSliderBlockCB}>
        <input
          name="SSDCheck"
          type="checkbox"
          checked={checkHhd}
          onChange={(event) => setCheckHhd(event.target.checked)}
        />
        <label htmlFor="SSDCheck">HHD</label>
      </div>
    </div>
  );
}
