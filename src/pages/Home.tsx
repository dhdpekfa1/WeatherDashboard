import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { cityNameAtom } from "@/store";
import axios from "axios";
import defaultWeatherData from "@/data/defaultWeatherData.json";
import defaultTideData from "@/data/defaultTideData.json";
import {
  Header,
  TodayCard,
  HourlyCard,
  KakaoMapCard,
  HighlightCard,
  DaysCard,
} from "@/components";
import { ForecastTideDay, Weather, ForecastDay } from "@/types/data";

const Home = () => {
  const [cityName, setCityName] = useAtom(cityNameAtom);
  const [weatherData, setWeatherData] = useState<Weather>(
    defaultWeatherData as Weather
  );
  const [tideData, setTideData] = useState<ForecastTideDay>(
    defaultTideData as unknown as ForecastTideDay // TODO: 타입 확인
  );
  const [oneWeekData, setOneWeekData] = useState([]);

  useEffect(() => {
    fetchData("weather", cityName);
    fetchData("tide", cityName);
    fetchData("weekWeather", cityName);
  }, []);

  const fetchData = async (
    type: "weather" | "tide" | "weekWeather",
    cityName: string
  ) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const BASE_URL = " http://api.weatherapi.com/v1";
    try {
      let endpoint = "";
      // type에 따라 endpoint 설정
      switch (type) {
        case "weather":
          endpoint = `/forecast.json?q=${cityName}&days=7&key=${API_KEY}`;
          break;
        case "tide":
          endpoint = `/marine.json?q=${cityName}&days=1&key=${API_KEY}`;
          break;
        case "weekWeather":
          endpoint = `/forecast.json?q=${cityName}&days=7&key=${API_KEY}`;
          break;
        default:
          throw new Error("Invalid type specified");
      }

      const res = await axios.get(`${BASE_URL}${endpoint}`);
      if (res.status === 200 && res.data) {
        // type에 따라 상태 업데이트 처리
        switch (type) {
          case "weather":
            setWeatherData(res.data);
            break;
          case "tide":
            setTideData(res.data.forecast.forecastday[0]);
            break;
          case "weekWeather": {
            const newData = res.data.forecast.forecastday.map(
              (item: ForecastDay) => ({
                maxTemp: Math.round(item.day.maxtemp_c),
                minTemp: Math.round(item.day.mintemp_c),
                date: item.date_epoch,
                iconCode: item.day.condition.code,
                isDay: item.day.condition.icon.includes("day"),
              })
            );
            setOneWeekData(newData);
            break;
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header setCityName={setCityName} />
        <div className="w-full h-full flex flex-col items-flex justify-start gap-6 py-6 px-6">
          {/* 상단 3개 위젯 1:2:1 */}
          <div className="w-full flex items-center gap-6">
            <TodayCard data={weatherData} />
            <HourlyCard data={weatherData.forecast.forecastday[0]} />
            <KakaoMapCard />
          </div>
          {/* 하단 2개 위젯 3:1 */}
          <div className="w-full flex items-center gap-6">
            <HighlightCard currentData={weatherData} tideData={tideData} />
            <DaysCard data={oneWeekData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
