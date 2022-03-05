import React, { useState, useEffect } from "react";

import ConfigCss from "../Configurator/configStyles.module.css";

export default function CheckBoxAdmin(props) {
  const [amdmin, setAdmin] = useState();

  useEffect(() => {
    console.log("Administrated: ", amdmin);
  }, [amdmin]);
  return (
    <div className={ConfigCss.checkParag}>
      <input
        checked={amdmin}
        name="Admin"
        type="checkbox"
        onChange={(event) => {
          props.amdminProps(event.target.checked ? 100 : 0);
          setAdmin(event.target.checked);
        }}
      />
      <label htmlFor="Admin">Администрирование</label>
      <p>
        По индивидуальным условиям администрирования просьба связаться с нами
        любым удобным способом
      </p>
    </div>
  );
}
