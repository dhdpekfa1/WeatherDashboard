import { SunriseAndSunsetProps } from "@/types/home";
import { useEffect } from "react";

const SunriseAndSunset = ({ imgUrl, label, time }: SunriseAndSunsetProps) => {
  useEffect(() => {
    console.log(time);
  }, []);
  return (
    <div className="w-full flex items-center gap-2">
      <img src={imgUrl} alt="weather-icon" className="h-14" />
      <div className="flex flex-col">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="roboto-medium scroll-m-20 text-2xl font-semibold tracking-tight">
          {time}
        </p>
      </div>
    </div>
  );
};

export { SunriseAndSunset };
