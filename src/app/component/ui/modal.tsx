import React, { useState } from "react";
import { loadWeatherData } from "../../store/weatherData";
import { useAppDispatch } from "../common/hook/dataWeatherLoader";

const ModalBlock: React.FC = () => {
  const [hide, setHide] = useState(true);
  const dispacth = useAppDispatch();
  const handleClickHideModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as typeof e.target & {
      dataset: { click: string };
    };
    const clikcAnswer = target.dataset.click;
    if (clikcAnswer === "allow") {
      navigator.geolocation.getCurrentPosition(function (position) {
        const addLatitude: any = position.coords.latitude;
        const addllongitude: any = position.coords.longitude;

        dispacth(loadWeatherData(addLatitude, addllongitude));
      });
    }

    setHide(false);
  };

  return (
    <div className={!hide ? `modal hide` : `modal`}>
      <div className="modal__wrapper">
        <div className="modal-text">Разрешить найти ваше местоположение</div>
        <div>
          <button
            data-click="allow"
            onClick={handleClickHideModal}
            className="modal__btn"
          >
            найти
          </button>
          <button
            data-click="ban"
            onClick={handleClickHideModal}
            className="modal__btn"
          >
            отмена
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalBlock;
