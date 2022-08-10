import React, { useState } from "react";
import moment from "moment";
import IWeatherData from "../common/inteface/iDataWeather";
import { useAppDispatch } from "../common/body";
import { removeCard } from "../../store/weatherData";
import WeatherChart from "./weatherChart";
import { useTranslation } from "react-i18next";

interface IlistData {
  dataWeather?: IWeatherData[];
}

const WeatherCard: React.FC<IlistData | any> = ({ dataWeather }) => {
  const { name, sys, dt, weather, main, wind, id } = dataWeather;
  const { country } = sys;
  const { icon, description } = weather[0];
  const { temp, feels_like, humidity, pressure } = main;
  const tempC = Math.round(temp - 273);
  const tempF = Math.round(temp);
  const feels_likeC = Math.round(feels_like - 273);
  if (tempC < 0 || tempF < 273) {
  }
  const transformDate = Number(dt.toString() + "000");
  const dateCall = moment(transformDate).format("dddd, D MMM, h:mm:ss ");
  const dispacth = useAppDispatch();
  const [hide, setHide] = useState("hide");
  const [show, setShow] = useState("show");
  const [activeF] = useState("tempF-deg");
  const [activeC] = useState("tempC-deg");
  const { t }: any = useTranslation();
  const handleDeleteCard = (e: any) => {
    const idForRemove = +e.target.parentElement.parentNode.dataset.id;
    dispacth(removeCard(idForRemove));
  };
  const handleSelectTemperature = (e: any) => {
    const nameClass = e.target.className;
    if (nameClass === "tempF-deg") {
      e.target.nextSibling.classList.remove("active");
      setHide("show");
      setShow("hide");
      e.target.classList.add("active");
    }
    if (nameClass === "tempC-deg") {
      e.target.previousSibling.classList.remove("active");
      setHide("hide");
      setShow("show");
      e.target.classList.add("active");
    }
  };

  return (
    <div
      data-id={id}
      className={`weather__card ${
        tempC < 0 || tempF < 273 ? "bg-warm" : "bg-cold"
      }`}
    >
      <div className="weather__card-delete-icon">
        <div onClick={handleDeleteCard} className="weather__card-delete"></div>
      </div>
      <div className="weather__locations">
        <div className="weather__locations-card">
          <div className="weather__locations-wrapper">
            <p className="weather__locations-city">{name},</p>
            <p className="weather__locations-country">{country}</p>
          </div>
          <div className="">
            <p className="weather__body-date">{dateCall}</p>
          </div>
        </div>
        <div className="weather__wrapper">
          <div className="weather__wrapper-img">
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="icon"
            />
          </div>
          <p className="weather__body-descr">{description}</p>
        </div>
      </div>
      <WeatherChart cityName={name} temp={tempF} show={show} />
      <div className="weather__footer">
        <div className="weather__footer__block-left">
          <p onClick={handleSelectTemperature} className="weather__footer-temp">
            <span className={`view-tempF ${show}`}>
              {temp > 273 ? `+${tempF}` : `+${tempF}`}
            </span>

            <span className={`view-tempC ${hide}`}>
              {tempC > 0 ? `+${tempC}` : `${tempC}`}
            </span>
            <span className={hide ? activeF : activeC}>C&deg;</span>
            <span className={!hide ? activeF : activeC}>F&deg;</span>
          </p>
          <p className="weather__footer-feels-like">
            {t("Feels-like")}: <span className={hide}>{feels_likeC}</span>{" "}
            <span className={show}>{feels_like}</span>
            <span className={hide}>C&deg;</span>
            <span className={show}>F&deg;</span>
          </p>
        </div>
        <div className="weather__footer__block-right">
          <p className="weather__footer-wind">
            {t("Wind")}:<span className="blue">{wind.speed}м/с</span>
          </p>
          <p className="weather__footer-humidity">
            {t("Humidity")}: <span className="blue">{humidity}</span>
          </p>
          <p className="weather__footer-pressure">
            {t("Pressure")}: <span className="blue">{pressure}Pa</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
