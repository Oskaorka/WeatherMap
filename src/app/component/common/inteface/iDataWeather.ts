interface ICloud {
  all?: string;
}

interface ICoord {
  lat?: number;
  lon?: number;
  dt?: number;
  id?: number;
}
interface IMain {
  feels_like?: number;
  humidity?: number;
  pressure?: number;
  temp?: number;
  temp_max?: number;
  temp_min?: number;
}

interface ISys {
  country?: string;
  id?: number;
  sunrise?: number;
  sunset?: number;
  type?: number;
}

interface IWeather {
  description?: string;
  icon?: string;
  id?: number;
  main?: string;
}

interface IWind {
  deg?: number;
  speed?: number;
}
export default interface IWeatherData {
  base?: string;
  clouds?: ICloud;
  coord?: ICoord;
  main: IMain;
  name?: string;
  sys: ISys;
  timezone?: string;
  visibility?: number;
  weather?: IWeather[];
  wind?: IWind;
}
