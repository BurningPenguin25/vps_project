import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";
import GLOBUS from "../../Images/GLOBUS.svg";

export default function Slider(props) {
  const [sliderMB, setSliderMB] = useState(0);

  useEffect(() => {
    console.log("4st Slider MB: ", sliderMB);
  }, [sliderMB]);

  return (
    <div className={ConfigCss.sliderBlock}>
      <div className={ConfigCss.leftSliderBlocK}>
        <div className={ConfigCss.leftSliderBlockSingle}>
          <img src={GLOBUS} alt="альтернативный текст" />
        </div>
      </div>

      <div>
        <input
          className={ConfigCss.slide}
          type="range"
          min={0}
          max={100}
          step={10}
          value={sliderMB}
          onChange={(event) => {
            props.propsSliderMB(event);
            setSliderMB(event.target.value);
          }}
        />
      </div>

      <div className={ConfigCss.RightTextBlock}>
        <span>{sliderMB}</span> MB
      </div>
    </div>
  );
}
