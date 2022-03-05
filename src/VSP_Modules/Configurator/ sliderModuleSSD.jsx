import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";

import SSD from "../../Images/BlockSSD.svg";
import MEM from "../../Images/BlockMEM.svg";

// import SSD from "../../Images/BlockSSD.svg";
// import MEM from "../../Images/BlockMEM.svg";

export default function Slider(props) {
  const [sliderSsd, setSliderSsd] = useState(0);
  useEffect(() => {
    console.log("1st Slider SSD: ", sliderSsd);
  }, [sliderSsd]);

  const [checkHhd, setCheckHhd] = useState(false);
  useEffect(() => {
    console.log("CheckBox Type HHD: ", checkHhd);
  }, [checkHhd]);

  const [checkSsd, setCheckSsd] = useState(false);

  useEffect(() => {
    console.log("CheckBox Type SSD: ", checkSsd);
  }, [checkSsd]);

  return (
    <div className={ConfigCss.sliderBlock}>
      <div className={ConfigCss.leftSliderBlock}>
        <div className={ConfigCss.leftSliderBlockC}>
          <img src={MEM} alt="альтернативный текст" />
          <div className={ConfigCss.leftSliderBlockCB}>
            <input
              name="SSDCheck"
              type="checkbox"
              checked={checkSsd}
              onChange={(event) => {
                props.checkSsdProps(event.target.checked ? 100 : 0);
                setCheckSsd(event.target.checked);
                props.checkHhdProps(event.target.checked === 0);
                setCheckHhd(event.target.unchecked);
              }}
            />
            <label htmlFor="SSDCheck">SSD</label>
          </div>
        </div>

        <div className={ConfigCss.leftSliderBlockC}>
          <img src={SSD} alt="альтернативный текст" />
          <div className={ConfigCss.leftSliderBlockCB}>
            <input
              name="SSDCheck"
              type="checkbox"
              checked={checkHhd}
              onChange={(event) => {
                props.checkHhdProps(event.target.checked ? 100 : 0);
                setCheckHhd(event.target.checked);
                props.checkSsdProps(event.target.checked === 0);
                setCheckSsd(event.target.unchecked);
              }}
            />
            <label htmlFor="SSDCheck">HHD</label>
          </div>
        </div>
      </div>

      <div>
        <input
          className={ConfigCss.slide}
          type="range"
          min={0}
          max={32}
          step={4}
          value={sliderSsd}
          // onChange={(event) => setSliderSsd(event.target.value)}
          onChange={(event) => {
            props.propsSliderSsd(event);
            setSliderSsd(event.target.value);
          }}
        />
      </div>

      <div className={ConfigCss.RightTextBlock}>
        <span> {sliderSsd} </span> GB SSD
      </div>
    </div>
  );
}
