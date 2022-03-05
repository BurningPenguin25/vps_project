import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";
import CPU from "../../Images/CPU.svg";

export default function Slider(props) {
  const [sliderCPU, setSliderCPU] = useState(0);

  useEffect(() => {
    console.log("3st Slider CPU: ", sliderCPU);
  }, [sliderCPU]);

  return (
    <div className={ConfigCss.sliderBlock}>
      <div className={ConfigCss.leftSliderBlocK}>
        <div className={ConfigCss.leftSliderBlockSingle}>
          <img src={CPU} alt="альтернативный текст" />
        </div>
      </div>

      <div>
        <input
          className={ConfigCss.slide}
          type="range"
          min={0}
          max={32}
          step={4}
          value={sliderCPU}
          onChange={(event) => {
            props.propsSliderCPU(event);
            setSliderCPU(event.target.value);
          }}
        />
      </div>

      <div className={ConfigCss.RightTextBlock}>
        <span>{sliderCPU}</span> CPU
      </div>
    </div>
  );
}
