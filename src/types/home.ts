import { ReactNode } from "react";
import { ForecastDay, HourlyData, Weather } from "@/types/data";

export interface TodayCardProps {
  data: Weather;
}

export interface HourlyCardProps {
  data: ForecastDay;
}
export interface HourlyCardItemProps {
  data: HourlyData;
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
