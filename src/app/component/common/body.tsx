import WeatherCard from "../ui/weatherCard";
import { getWeather } from "../../store/weatherData";
import { useAppSelector } from "./hook/dataWeatherLoader";

const Body: React.FC = () => {
  const getWeatherGeolocation = useAppSelector(getWeather());

  return (
    <div className="body">
      <div className="container">
        {getWeatherGeolocation.map((item: any) => {
          return <WeatherCard key={item.id} dataWeather={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
