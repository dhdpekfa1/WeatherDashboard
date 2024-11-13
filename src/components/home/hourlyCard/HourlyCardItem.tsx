import { Card } from "@/components";
import { HourlyCardItemProp } from "@/types/home";

const HourlyCardItem = ({ time, temperature }: HourlyCardItemProp) => {
  return (
    <Card className="w-24 min-w-24 h-fit flex flex-col items-center py-[6px] gap-1 bg-neutral-50">
      <span className="text-sm">{time}</span>
      <img
        src="src/assets/icons/1030n.svg"
        alt="weather-icon"
        className="w-14 h-14"
      />
      <div className="w-full flex items-start justify-center">
        <span className="roboto-medium scroll-m-20 text-xl font-medium tracking-tighter">
          {temperature}
        </span>
        <span className="text=[13px] ml-[1px] me-[1px] font-medium">
          &#8451;
        </span>
      </div>
    </Card>
  );
};

export { HourlyCardItem };
