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
  const [d, setD] = useState([]);
  const [dt, setDt] = useState([]);
  // console.log(cityName);
  useEffect(() => {
    dataWeatherService
      .getForecast(cityName)
      .then((res) => setDataForcast(res.content));
  }, []);
  // console.log(dataForcast);
  const { city, list }: any = dataForcast;
  // if (list !== undefined) {
  //   const arr: any = [];
  //   list.map((e: any) => arr.push(e.main.temp));
  //   console.log(arr);
  // }
  const copyC: any = Object.assign([], arrTempC);
  const copyF: any = Object.assign([], arrTempF);
  // const copyDt: any = Object.assign([], dt);
  function everyN(array: any, n: any) {
    return array.filter((item: any, index: any) => !((index + 1) % n));
  }
  useEffect(() => {
    if (list !== undefined) {
      const arrEvery8 = everyN(list, 8);
      // const listSlice = list.slice(0, 30);
      // console.log();

      // arrEvery8.map((e: any) => {
      //   const transformDate = Number(e.dt.toString() + "000");
      //   const dateCall = moment(transformDate).format("DD.MM");
      //   copyDt.push(dateCall);
      //   // console.log(e.dt_txt.split(" ").filter((e: any) => e === "00:00:00"));
      //   // console.log(e.dt);
      // });
      // setDt(copyDt);
      arrEvery8.map((el: any) => {
        //   // const p = el.main.temp - 273;
        //   const tempC = Math.round(temp - 273);
        //   console.log(tempC);

        //   copyC.push(tempC);
        //   setArrTempC(copyC);
        copyC.push(Math.round(el.main.temp - 273));
        // console.log(tempC);
        setArrTempC(copyC);
      });
      if (show === "show") {
        // list.map((el: any) => {
        //   //   // const p = el.main.temp - 273;
        //   //   const tempC = Math.round(temp - 273);
        //   //   console.log(tempC);

        //   //   copyC.push(tempC);
        //   //   setArrTempC(copyC);
        //   copyC.push(Math.round(el.main.temp - 273));
        //   copyDt.push(dateCall);
        //   // console.log(tempC);
        //   setArrTempC(copyC);
        //   setDt(copyDt);
        //   console.log(copyDt);
        // });

        arrEvery8.map((el: any) => {
          //   // const p = el.main.temp - 273;
          //   const tempC = Math.round(temp - 273);
          //   console.log(tempC);

          //   copyC.push(tempC);
          //   setArrTempC(copyC);
          copyF.push(Math.round(el.main.temp));
          // console.log(tempC);
          setArrTempC(copyF);
        });
      }
    }
  }, [show]);
  const e = show === "show" ? arrTempC : arrTempF;
  console.log(e);
  // console.log(arrTempC);
  // console.log(dt);
  // useEffect(() => {
  //   const dtNew =
  //     dt !== undefined
  //       ? dt
  //       : ["08.08", "09.08", "10.08", "11.08", "12.08", "13.08", "14.08"];
  // }, []);
  // console.log(dt);

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

  const options: any = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: false,
      title: {
        display: false,
      },
    },
  };
  const bg = temp < 273 ? " #171bf71f" : "rgba(235, 131, 45, 0.124)";
  // tempC < 0 || temp < 273 ? " #171bf71f" : "rgba(235, 131, 45, 0.124)";

  useEffect(() => {
    if (list !== undefined) {
      const arrEvery8 = everyN(list, 8);
      const dta = arrEvery8.map((e: any) => {
        const transformDate = Number(e.dt.toString() + "000");
        const dateCall = moment(transformDate).format("DD.MM");
        // copyDt.push(dateCall);
        return dateCall;
        // console.log(e.dt_txt.split(" ").filter((e: any) => e === "00:00:00"));
        // console.log(e.dt);
      });
      setD(dta);
    }
  }, []);

  // setDt(copyDt);
  // dt;
  // ["08.08", "February", "March", "April", "May", "June", "July"];
  console.log(arrTempC);
  console.log(arrTempF);
  useEffect(() => {
    const date: any = d
      ? d
      : ["08.08", "09.08", "10.08", "11.08", "12.08", "13.08", "14.08"];
    setDt(date);
    console.log(d);
    console.log(date);
  }, [d, dt]);
  const labels = dt;
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        // data: [15, 22, 32, 22, 16, 22, 31, 23, 55],
        data: arrTempC,
        borderColor: bg,
        backgroundColor: bg,
      },
    ],
  };

  return (
    <div className="weather__body">
      {list !== undefined ? (
        <LineChart
          className="weather__body-canvas"
          options={options}
          data={data}
        />
      ) : (
        "load"
      )}
    </div>
  );
};
export default WeatherChart;
