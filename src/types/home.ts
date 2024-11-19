import { ReactNode } from "react";
import {
  ForecastDay,
  ForecastTideDay,
  HourlyData,
  Weather,
} from "@/types/data";

export interface HeaderProps {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

export interface TodayCardProps {
  data: Weather;
}

export interface HourlyCardProps {
  data: ForecastDay;
}
export interface HourlyCardItemProps {
  data: HourlyData;
}

export interface HighlightCardProps {
  currentData: Weather;
  tideData: ForecastTideDay;
}

export interface HighlighBigDataCardProps {
  labelKo: string;
  labelEn: string;
  imgUrl?: string;
  children: ReactNode;
}

export interface HighlightSmallDataCardProps {
  labelKo: string;
  labelEn: string;
  imgUrl: string;
  value: number;
  unit: string;
}

export interface SunriseAndSunsetProps {
  imgUrl: string;
  label: string;
  time: string;
}

export interface DaysCardProps {
  data: WeatherInfo[];
}

export interface WeatherInfo {
  maxTemp: number;
  minTemp: number;
  date: string;
  iconCode: string;
  isDay: boolean;
}
