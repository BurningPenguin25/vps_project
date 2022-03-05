import React, { useState } from "react";
import ConfigCss from "../Configurator/configStyles.module.css";

import SliderSSD from "./ sliderModuleSSD.jsx";
import SliderRAM from "./sliderModuleRAM.jsx";
import SliderCPU from "./sliderModuleCPU.jsx";
import SliderMB from "./sliderModuleMB.jsx";

import BackUp from "./checkBoxBackUP.jsx";
import Admin from "./checkBoxAdmin.jsx";
import IPadress from "./checkBoxIPAdress.jsx";

export default function Configurator() {
  const [sliderSsdProps, setSliderSsdProps] = useState(0);
  const [sliderRamProps, setSliderRamProps] = useState(0);
  const [sliderCPUProps, setSliderCPUProps] = useState(0);
  const [sliderMBProps, setSliderMBProps] = useState(0);
  const [backUpProps, setBackUpProps] = useState(0);
  const [amdminProps, setAdminProps] = useState(0);
  const [APIAdressProps, setAPIAdressProps] = useState(0);
  const [checkSsdProps, setCheckSsdProps] = useState(false);
  const [checkHhdProps, setCheckHhdProps] = useState(false); 

  return (
    <div className={ConfigCss.configPart}>
      <div>
        <div>
          <h2 className={ConfigCss.lineBlock}>
            <span class={ConfigCss.lineStyle}>Топ тарифов</span>
          </h2>
        </div>
      </div>

      <div className={ConfigCss.configCenter}>
        <form>
          <div>
            <SliderSSD
              checkSsdProps={setCheckSsdProps}
              checkHhdProps={setCheckHhdProps}
              propsSliderSsd={(event) => {
                setSliderSsdProps(event.target.value);
              }}
            />
            <SliderRAM
              propsSliderRam={(event) => {
                setSliderRamProps(event.target.value);
              }}
            />
            <SliderCPU
              propsSliderCPU={(event) => {
                setSliderCPUProps(event.target.value);
              }}
            />
            <SliderMB
              propsSliderMB={(event) => {
                setSliderMBProps(event.target.value);
              }}
            />
          </div>

          <div className={ConfigCss.checkBoxBottom}>
            <div className={ConfigCss.checkBoxBox}>
              <BackUp backUpProps={setBackUpProps} />
              <Admin amdminProps={setAdminProps} />
              <IPadress APIAdressProps={setAPIAdressProps} />
            </div>
          </div>

          <div className={ConfigCss.checkBoxButton}>
            <button type="submit">купить</button>
            <p>
              {Number(sliderSsdProps) +
                Number(sliderRamProps) +
                Number(sliderCPUProps) +
                Number(sliderMBProps) +
                Number(backUpProps) +
                Number(amdminProps) +
                Number(APIAdressProps) +
                Number(checkSsdProps) +
                Number(checkHhdProps)}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
