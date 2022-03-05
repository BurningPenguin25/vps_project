import React, { useState } from "react";
import Header from "./VSP_Modules/Header/header.jsx"; //html header
import Proposal from "./VSP_Modules/Proposal/proposal.jsx"; //html proposal
import "./VSP_Modules/Proposal/proposal.module.css";
import Cards from "./VSP_Modules/cards/card.jsx";
import Footer from "./VSP_Modules/Footer/Footer.jsx";
import Configurator2 from "./VSP_Modules/Configurator/config.jsx";
import "../src/app.css";
import ErrorPage from "./VSP_Modules/ErrorPage/ErrorPage.jsx";

export default function App() {
  const [sumErrorProposal, setSumErrorProposal] = useState(0);
  const [sumErrorCards, setSumErrorCards] = useState(0);
  const [sumErrorFooter, setSumErrorFooter] = useState(0);

  if (sumErrorProposal || sumErrorCards || sumErrorFooter > 0) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Proposal sumErrorProposal={setSumErrorProposal} />
        <Cards sumErrorCards={setSumErrorCards} />
        <Configurator2 />
        <Footer sumErrorFooter={setSumErrorFooter} />
      </div>
    );
  }
}
