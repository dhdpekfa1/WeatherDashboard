import { ReactNode } from "react";
import { Weather } from "@/types/data";

export type HourlyCardItemProp = {
  time: string;
  temperature: number;
};

export interface TodayCardProps {
  data: Weather;
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
