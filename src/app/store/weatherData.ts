import { createSlice, Dispatch, createAction } from "@reduxjs/toolkit";
import dataWeatherService from "../service/getWeather";
import { AnyAction } from "@reduxjs/toolkit";
import IWeatherData from "../component/common/inteface/iDataWeather";

type WeatherState = {
  entities: IWeatherData[];
  isLoading?: boolean;
  error?: null;
  arrCity?: [];
};

const initialState: WeatherState = {
  entities: [],
  isLoading: true,
  error: null,
  arrCity: [],
};

const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {
    weatherRequested: (state) => {
      state.isLoading = true;
    },
    // weatherReceved: (state, action: PayloadAction<[]>) => {
    weatherReceved: (state, action) => {
      state.entities.push(action.payload);
      state.isLoading = false;
    },
    weatherRequestField: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    addCityCard: (state, action) => {
      state.entities.push(action.payload);
    },
    cityCardRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (item: any) => item.id !== action.payload
      );
    },
  },
});
const addWeatherRequested = createAction("addWeatherRequested");
const removeCardRequested = createAction("removeCardRequested");
const { reducer: weatherReducer, actions } = weatherSlice;
const {
  weatherRequested,
  weatherReceved,
  weatherRequestField,
  addCityCard,
  cityCardRemoved,
} = actions;
export const loadWeatherData =
  (lat: any, lon: any) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(weatherRequested());
    try {
      const { content } = await dataWeatherService.getCurrentPosition(lat, lon);
      dispatch(weatherReceved(content));
    } catch (error: any) {
      dispatch(weatherRequestField(error.message));
    }
  };

export const AddWeatherCity =
  (payload: string) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addWeatherRequested());
    // console.log(payload);

    try {
      const { content } = await dataWeatherService.get(payload);
      dispatch(addCityCard(content));
    } catch (error: any | void) {
      console.log(error.message);
    }
  };

export const removeCard =
  (cardId: number) => async (dispacth: Dispatch<AnyAction>) => {
    dispacth(removeCardRequested());
    try {
      dispacth(cityCardRemoved(cardId));
    } catch (error) {
      console.log(error);
    }
  };
export const getWeather = () => (state: any) => state.weather.entities;
export const getWeatherDataLoadingStatus = () => (state: any) =>
  state.weather.isLoading;
export default weatherReducer;
