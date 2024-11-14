import { useEffect, useState } from "react";
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
  const [weatherData, setWeatherData] = useState<Weather>(
    defaultWeatherData as Weather
  );
  const [tideData, setTideData] = useState<ForecastTideDay>(
    defaultTideData as unknown as ForecastTideDay // TODO: 타입 확인
  );
  const [oneWeekData, setOneWeekData] = useState([]);

  useEffect(() => {
    getWeatherData("seoul");
    getTideData("seoul");
    getWeekWeatherData("seoul");
  }, []);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = " http://api.weatherapi.com/v1";

  const getWeatherData = async (cityName: string) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/.forecast.json?q=${cityName}&days=7&key=${API_KEY}`
      );
      if (res.status === 200) {
        setWeatherData(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getTideData = async (cityName: string) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/marine.json?q=${cityName}&days=1&key=${API_KEY}`
      );
      console.log(res);

      if (res.status === 200 && res.data) {
        setTideData(res.data.forecast.forecastday[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getWeekWeatherData = async (cityName: string) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/forecast.json?q=${cityName}&days=7&key=${API_KEY}`
      );

      if (res.status === 200 && res.data) {
        const newData = res.data.forecast.forecastday.map(
          (item: ForecastDay) => {
            return {
              maxTemp: Math.round(item.day.maxtemp_c),
              minTemp: Math.round(item.day.mintemp_c),
              date: item.date_epoch,
              iconCode: item.day.condition.code,
              isDay: item.day.condition.icon.includes("day"),
            };
          }
        );
        setOneWeekData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header />
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
