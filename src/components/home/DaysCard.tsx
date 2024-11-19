import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components";
import { DaysCardProps } from "@/types/home";
import { formatDate, formatDay } from "@/utils/helper";

const DaysCard = ({ data }: DaysCardProps) => {
  return (
    <Card className="w-1/4 h-full">
      <CardHeader>
        <CardTitle className="text-xl">7 Days</CardTitle>
        <CardDescription>이번 주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-1">
        {data.map((item) => (
          <div
            key={item.date}
            className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm"
          >
            <div className="w-fit h-10 flex items-center gap-2">
              <img
                src={`src/assets/icons/${item.iconCode}${
                  item.isDay ? "d" : "n"
                }.svg`}
                alt="weather-icon"
                className="h-7 w-7"
              />
              <div className="flex items-center gap-1 w-20">
                <div className="w-full h-full flex items-start gap-[2px]">
                  <span
                    className={`roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600`}
                  >
                    {item.maxTemp}
                  </span>
                  <span className="text-xs font-normal mt-1">&#8451;</span>
                </div>
                <div className="w-full h-full flex items-start gap-[2px]">
                  <span
                    className={`roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600`}
                  >
                    {item.minTemp}
                  </span>
                  <span className="text-xs font-normal mt-1">&#8451;</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-end gap-5 mb-1">
              <small className="text-sm leading-none">
                {formatDate(Number(item.date))}
              </small>
              <small className="text-sm leading-none">
                {formatDay(Number(item.date))}
              </small>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export { DaysCard };
