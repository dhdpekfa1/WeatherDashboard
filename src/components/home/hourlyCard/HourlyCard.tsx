import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  HourlyCardItem,
} from "@/components";
import { HourlyData } from "@/types/data";
import { HourlyCardProps } from "@/types/home";

const HourlyCard = ({ data }: HourlyCardProps) => {
  return (
    <Card className="flex-1 max-w-[calc(50%-48px)] h-full">
      <CardHeader>
        <CardTitle className="text-xl">Hourly</CardTitle>
        <CardDescription>
          오늘의 시간대별 날씨를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center gap-4 overflow-x-scroll">
        {data && data.hour ? (
          data.hour.map((hourData: HourlyData) => (
            <HourlyCardItem data={hourData} key={hourData.time} />
          ))
        ) : (
          <span>데이터를 불러오는 중...</span>
        )}
      </CardContent>
    </Card>
  );
};

export { HourlyCard };
