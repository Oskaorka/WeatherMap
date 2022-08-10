import React, { useEffect, useState } from "react";
import dataWeatherService from "../../service/getWeather";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options, everyN } from "./setting.chart";

interface IName {
  cityName: string;
  temp: number | any;
  show: string;
}
const LineChart: any = Line;
const WeatherChart: React.FC<IName> | any = ({
  cityName,
  temp,
  show,
}: IName) => {
  const [dataForcast, setDataForcast] = useState([]);
  const [arrTempC, setArrTempC] = useState([]);
  const [arrTempF, setArrTempF] = useState([]);
  const [dt, setDt] = useState([]);
  const e = show === "show" ? arrTempF : arrTempC;
  const { list }: any = dataForcast;
  const copyC: any = Object.assign([], arrTempC);
  const copyF: any = Object.assign([], arrTempF);
  const bg = temp < 273 ? " #171bf71f" : "rgba(235, 131, 45, 0.124)";

  useEffect(() => {
    dataWeatherService
      .getForecast(cityName)
      .then((res) => setDataForcast(res.content));
  }, []);

  useEffect(() => {
    if (list !== undefined) {
      const arrEvery8 = everyN(list, 8);
      arrEvery8.map((el: any) => {
        copyC.push(Math.round(el.main.temp - 273));
        setArrTempC(copyC);
      });
      if (show === "show") {
        arrEvery8.map((el: any) => {
          copyF.push(Math.round(el.main.temp));
          setArrTempF(copyF);
        });
      }
    }
  }, [list, show]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  useEffect(() => {
    if (list !== undefined) {
      const arrEvery8 = everyN(list, 8);
      const dta = arrEvery8.map((e: any) => {
        const transformDate = Number(e.dt.toString() + "000");
        const dateCall = moment(transformDate).format("DD.MM");
        return dateCall;
      });
      setDt(dta);
    }
  }, [list]);

  const data = {
    labels: dt,
    datasets: [
      {
        fill: true,
        label: "",
        data: e,
        borderColor: bg,
        backgroundColor: bg,
      },
    ],
  };
  return (
    <div className="weather__body">
      {list && (
        <LineChart
          className="weather__body-canvas"
          options={options}
          data={data}
        />
      )}
    </div>
  );
};
export default WeatherChart;
