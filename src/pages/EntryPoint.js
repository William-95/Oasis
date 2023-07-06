import React, { useContext, useEffect } from "react";
import FormRegister from "../components/FormRegister";
import FormLogin from "../components/FormLogin";
import { StateContext } from "../SetContext";
import "../css/header.css";
import headerBg from "../img/04.jpg";
import Feature from "../components/Feature";
import { useTranslation } from "react-i18next";


export default function EntryPoint() {
  const { t } = useTranslation(["entrypoint"]);

  const { entryNavBtn, setIsLog } = useContext(StateContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLog(false);
    }, 10);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <header
        className="headerBg"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      >
        <h1 className="entryTitle">{t('OASIS')}</h1>
        {entryNavBtn ? <FormLogin /> : <FormRegister />}
      </header>

      <Feature />
    </>
  );
}
