import React, { useState } from "react";
import Worldwide from "../../images/worldwide.svg";
import { useAppDispatch } from "./body";
import { AddWeatherCity } from "../../store/weatherData";
import { useTranslation } from "react-i18next";
import FieldSelectLanguage from "../ui/fielSelectLanguage";
import FieldForm from "./headerFeld/headerForm";
import GetImgBtn from "./headerFeld/GetImgBtn";

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const selectLang = ["UA", "RU", "EN"];
  const [showSelectLang, setShowSelectLang] = useState(false);
  const [currentLang, setCurrnetLang] = useState(
    localStorage.getItem("lang") || "en"
  );
  const [value, setValue] = useState("");
  const dispacth = useAppDispatch();
  const handleClcik = (e: any) => {
    showSelectLang ? setShowSelectLang(false) : setShowSelectLang(true);
    const selectLang = e.target.dataset.lang;
    if (selectLang !== undefined) {
      localStorage.setItem("lang", selectLang);
      i18n.changeLanguage(selectLang.toLowerCase());
    }
  };

  const handleSelectLang = (e: any) => {
    const language = e.target.dataset.lang;
    setCurrnetLang(language);
  };
  const HandleClickaddCity = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispacth(AddWeatherCity(value));
  };
  const OnChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  };

  return (
    <div className="header">
      <div className="header__container">
        <FieldForm onChange={OnChangeValue} onClick={HandleClickaddCity} />
        <div onClick={handleClcik} className="header__language">
          <GetImgBtn pathImg={Worldwide} title={currentLang.toUpperCase()} />
          <div
            className={
              showSelectLang
                ? "header__language-select"
                : "header__language-select hide"
            }
          >
            {selectLang.map((item, index) => {
              return (
                <FieldSelectLanguage
                  onClick={handleSelectLang}
                  dataSet={item.toLowerCase()}
                  addClass="header__language-select_it"
                  title={item}
                  key={item + index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
