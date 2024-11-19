import { Card } from "@/components";
import { HourlyCardItemProps } from "@/types/home";
import { useFormattedTime } from "@/hooks/useFormattedTime";

const HourlyCardItem = ({ data }: HourlyCardItemProps) => {
  const formatTime = useFormattedTime(data.time);

  return (
    <Card className="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50">
      <span className="text-sm">{formatTime}</span>
      <img
        src={`src/assets/icons/${data.condition.code}${
          data.condition.icon.includes("day") ? "d" : "n"
        }.svg`}
        alt="weather-icon"
        className="w-14 h-14"
      />
      <div className="w-full flex items-start justify-center">
        <span className="roboto-medium scroll-m-20 text-xl font-medium tracking-tighter">
          {data.temp_c}
        </span>
        <span className="text=[13px] ml-[1px] me-[1px] font-medium">
          &#8451;
        </span>
      </div>
    </Card>
  );
};

export { HourlyCardItem };
