import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";
import PLATA from "../../Images/PLATA.svg";

export default function SliderRam(props) {
  const [sliderRam, setSliderRam] = useState(0);

  useEffect(() => {
    console.log("2st Slider RAM: ", sliderRam);
  }, [sliderRam]);

  return (
    <div className={ConfigCss.sliderBlock}>
      <div className={ConfigCss.leftSliderBlocK}>
        <div className={ConfigCss.leftSliderBlockSingle}>
          <img src={PLATA} alt="альтернативный текст" />
        </div>
      </div>

      <div>
        <input
          className={ConfigCss.slide}
          type="range"
          min={0}
          max={32}
          step={4}
          value={sliderRam}
          onChange={(event) => {
            props.propsSliderRam(event);
            setSliderRam(event.target.value);
          }}
        />
      </div>

      <div className={ConfigCss.RightTextBlock}>
        <span>{sliderRam}</span> GB RAM
      </div>
    </div>
  );
}
