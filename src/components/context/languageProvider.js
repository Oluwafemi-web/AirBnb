import { useState } from "react";
import React from "react";
import LanguageContext from "./language-context";
function LanguageProvider(props) {
  const [languageData, setLanguage] = useState("it");

  function changeLanguage(val) {
    setLanguage(val);
  }

  const StateContext = {
    languageData: languageData,
    changeLanguage: changeLanguage,
  };

  return (
    <LanguageContext.Provider value={StateContext}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
