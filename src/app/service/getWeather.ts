import httpService from "../utils/http-service";
const APIKYE = "appid=404cbfbbd894d2d47b4f3eb99b98bf71";
// const country = "id=524305";
// const country = "Boston";
// const country = "Murmansk";
// const lon = "68.9589141";
// const lat = "33.0970243";

const dataWeatherService = {
  get: async (country: string) => {
    const { data } = await httpService.get(`/weather?q=${country}&${APIKYE}`);
    // const { data } = await httpService.get();
    return data;
  },
  getForecast: async (country: string) => {
    // const { data } = await httpService.get(`/forecast?q=${country}&${APIKYE}`);
    const { data } = await httpService.get(`/forecast?q=${country}&${APIKYE}`);
    // const { data } = await httpService.get();
    return data;
  },
  // addWeatherCity: async (country: string) => {
  //   const { data } = await httpService.get(`?q=${country}&${APIKYE}`);
  //   // const { data } = await httpService.get();
  //   return data;
  // },
  getCurrentPosition: async (lat: string, lon: string) => {
    // const { data } = await httpService.get(`?q=${country}&${APIKYE}`);
    const { data } = await httpService.get(
      `/weather?lat=${lat}&lon=${lon}&${APIKYE}`
    );
    // console.log(data);

    return data;
  },
};

export default dataWeatherService;
