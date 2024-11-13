import { TemperatureItem } from "./TemperatureItem";

interface DayCardProps {
  highTemp: number;
  lowTemp: number;
  date: string;
  day: string;
  imgUrl: string;
}

const DayCardItem = ({
  highTemp,
  lowTemp,
  date,
  day,
  imgUrl,
}: DayCardProps) => {
  return (
    <div className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm">
      <div className="w-fit h-10 flex items-center gap-2">
        <img src={imgUrl} alt="" className="h-7 w-7" />
        <div className="flex items-center gap-1 w-20">
          <TemperatureItem color={"red"} temperature={highTemp} />
          <TemperatureItem color={"sky"} temperature={lowTemp} />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end gap-5 mb-1">
        <small className="text-sm leading-none">{date}</small>
        <small className="text-sm leading-none">{day}요일</small>
      </div>
    </div>
  );
};

export { DayCardItem };
