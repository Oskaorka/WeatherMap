import React, { useState } from "react";
import Worldwide from "../../images/worldwide.svg";
import { useAppDispatch } from "./hook/dataWeatherLoader";
import { AddWeatherCity } from "../../store/weatherData";

const Header = () => {
  const [showSelectLang, setShowSelectLang] = useState(false);
  const [currentLang, setCurrnetLang] = useState("EN");
  const [value, setValue] = useState("");
  const dispacth = useAppDispatch();
  const handleClcik = () => {
    showSelectLang ? setShowSelectLang(false) : setShowSelectLang(true);
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
        <form className="header__form" action="submit">
          <input
            onChange={OnChangeValue}
            className="header__form-search"
            type="text"
          />
          <button
            onClick={HandleClickaddCity}
            className="header__form-button"
            type="submit"
          >
            Add
          </button>
        </form>
        <div onClick={handleClcik} className="header__language">
          <div className="header__language-wrapper">
            <img
              className="header__language-icon"
              src={Worldwide}
              alt="Worldwide"
            />
            <p className="header__language-current">{currentLang}</p>
          </div>
          <div
            className={
              showSelectLang
                ? "header__language-select"
                : "header__language-select hide"
            }
          >
            <p
              onClick={handleSelectLang}
              data-lang="UA"
              className="header__language-select_it"
            >
              UA
            </p>
            <p
              onClick={handleSelectLang}
              data-lang="RU"
              className="header__language-select_it"
            >
              RU
            </p>
            <p
              onClick={handleSelectLang}
              data-lang="EN"
              className="header__language-select_it"
            >
              EN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
