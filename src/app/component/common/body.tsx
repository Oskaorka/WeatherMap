import WeatherCard from "../ui/weatherCard";
import { getWeather } from "../../store/weatherData";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RooteState } from "../../store/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector;

interface IObj {
  item: [];
  id: string;
}
const Body: React.FC = () => {
  const getWeatherGeolocation = useAppSelector(getWeather());

  return (
    <div className="body">
      <div className="container">
        {getWeatherGeolocation.map((item: IObj) => {
          return <WeatherCard key={item.id} dataWeather={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
