import React from "react";

const LanguageContext = React.createContext({
  languageData: "",
  changeLanguage: () => {},
});

export default LanguageContext;
