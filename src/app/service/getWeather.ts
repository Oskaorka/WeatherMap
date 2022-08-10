import httpService from "../utils/http-service";
const APIKYE = "appid=404cbfbbd894d2d47b4f3eb99b98bf71";

const dataWeatherService = {
  get: async (country: string) => {
    const { data } = await httpService.get(`/weather?q=${country}&${APIKYE}`);
    return data;
  },
  getForecast: async (country: string) => {
    const { data } = await httpService.get(`/forecast?q=${country}&${APIKYE}`);
    return data;
  },
  getCurrentPosition: async (lat: string, lon: string) => {
    const { data } = await httpService.get(
      `/weather?lat=${lat}&lon=${lon}&${APIKYE}`
    );
    return data;
  },
};

export default dataWeatherService;
