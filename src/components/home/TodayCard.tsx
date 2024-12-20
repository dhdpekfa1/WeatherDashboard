import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from "@/components";
import { CalendarDays, MapPinned } from "lucide-react";
import { TodayCardProps } from "@/types/home";

const TodayCard = ({ data }: TodayCardProps) => {
  return (
    <Card className="w-1/4 min-w-[25%]">
      <CardHeader>
        <CardTitle className="text-xl">Today</CardTitle>
        <CardDescription>오늘의 현재 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-4">
            <img
              src={`src/assets/icons/${data.current.condition.code}${
                data.current.condition.icon.includes("day") ? "d" : "n"
              }.svg`}
              alt="weather-icon"
              className="w-16 h-16"
            />
            <div className="w-full flex items-start gap-1">
              <span className="roboto-bold scroll-m-20 text-6xl font-extrabold tracking-tight">
                {data.current.temp_c}
              </span>
              <span className="text-4xl font-extrabold">&#8451;</span>
            </div>
          </div>

          <Separator className="mt-2 mb-3" />

          <div className="w-full flex flex-col ">
            <div className="flex items-center justify-start gap-2">
              <CalendarDays className="w-4 h-4" />
              <p className="leading-6">
                {data.location.localtime.split(" ")[0]}
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <MapPinned className="w-4 h-4" />
              <p className="leading-6">
                {data.location.name}&middot;{data.location.country}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { TodayCard };
