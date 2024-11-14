import { useEffect, useState } from "react";
import axios from "axios";

import {
  Header,
  TodayCard,
  HourlyCard,
  KakaoMapCard,
  HighlightCard,
  DaysCard,
} from "@/components";
import { Weather } from "@/types/data";

const defaultWeatherData: Weather = {
  current: {
    cloud: 0,
    condition: { text: "", icon: "", code: 0 },
    dewpoint_c: 0,
    dewpoint_f: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    gust_kph: 0,
    gust_mph: 0,
    heatindex_c: 0,
    heatindex_f: 0,
    humidity: 0,
    is_day: 1,
    last_updated: "",
    last_updated_epoch: 0,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 0,
    pressure_mb: 0,
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    vis_km: 0,
    vis_miles: 0,
    wind_degree: 0,
    wind_dir: "",
    wind_kph: 0,
    wind_mph: 0,
    windchill_c: 0,
    windchill_f: 0,
  },
  location: {
    country: "",
    lat: 0,
    localtime: "",
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  },
  forecast: { forecastday: [] },
};

const Home = () => {
  const [weatherData, setWeatherData] = useState(defaultWeatherData);

  useEffect(() => {
    getWeatherData("seoul");
  }, []);

  const getWeatherData = async (local: string) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const BASE_URL = " http://api.weatherapi.com/v1";

    try {
      const res = await axios.get(
        `${BASE_URL}/.forecast.json?q=${local}&days=7&key=${API_KEY}`
      );
      if (res.status === 200) {
        setWeatherData(res.data);
      }
    } catch (err) {
      console.error(err);
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
            <HourlyCard />
            <KakaoMapCard />
          </div>
          {/* 하단 2개 위젯 3:1 */}
          <div className="w-full flex items-center gap-6">
            <HighlightCard />
            <DaysCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
