import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dataWeatherService from "../../../service/getWeather";
// import type {RootStae}
// import { AnyAction } from "@reduxjs/toolkit";
import type { AppDispatch, RooteState } from "../../../store/store";
// import type { AppDispatch, RooteState } from "../../../store/store";
import {
  getWeatherDataLoadingStatus,
  loadWeatherData,
} from "../../../store/weatherData";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector;

// type Props = {
//   children: ReactElement | ReactElement[];
// };
interface IChildren {
  children: React.ReactNode;
}
interface IPositon {
  position: {
    latitude?: number | string;
    longitude?: number | string;
  };
}
const DataWeatherLoader = ({ children }: any) => {
  const [position, setPosition] = useState<IPositon[]>([]);
  const dispacth = useAppDispatch();
  //   const useSelec = useAppSelector();
  const weatherDataStatus = useAppSelector(getWeatherDataLoadingStatus());
  // const weatherDataStatus = useSelector(getWeatherDataLoadingStatus());
  // const dispacth = useAppDispatch();
  // const dispacth = useDispatch();

  // console.log(children);
  // console.log(getWeatherDataLoadingStatus);
  // console.log(weatherDataStatus);

  // useCallback(() => {
  // // useMemo(() => {
  // useEffect(() => {
  //   if (weatherDataStatus) {
  //     // dispacth(loadWeatherData());
  //     // console.log(weatherDataStatus);

  //     // if (Object.keys(position).length > 0) {
  //     //   const { latitude, longitude }: any = position;

  //     //   console.log("dada");
  //     //   const lat = latitude;
  //     //   const lon = longitude;
  //     //   console.log(position);
  //     //   const content = dataWeatherService.getCurrentPosition(lat, lon);
  //     //   content.then((res) => {
  //     //     // const dispacth = useDispatch();
  //     //     dispacth(loadWeatherData(res.content));
  //     //     console.log(res.content);
  //     //   });
  //     // }
  //     // useEffect(() => {
  //     //   if (localStorage.getItem("positionUser")) {
  //     //     // const currentposition = JSON.parse(localStorage.getItem("positionUser"));
  //     //     const currentposition = localStorage.getItem("positionUser");
  //     //     if (typeof currentposition === "string") {
  //     //       const parse = JSON.parse(currentposition);
  //     //       setPosition(parse);
  //     //     }
  //     //   }
  //     // }, []);
  //     // useEffect(() => {
  //     //   console.log(position);
  //     // }, [position]);
  //     // }, [position]);
  //   }
  // }, [weatherDataStatus]);
  // if (!weatherDataStatus) {
  //   return "maybe this loader";
  // }
  // useEffect(() => {
  //   console.log(weatherDataStatus);
  // }, [weatherDataStatus]);
  return children;
};

export default DataWeatherLoader;
